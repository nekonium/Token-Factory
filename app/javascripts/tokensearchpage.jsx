import React from "react";
import LocalizedStrings from 'react-localization';

let __t = new LocalizedStrings({
  en:{
    enter_address:"Enter the address of the token contract you want to interact with",
    go_token:"Go to Token"
  },
  ja: {
    enter_address:"操作するトークンコントラクトのアドレスを入力してください",
    go_token:"コントラクトに接続"
  }
 });
if(Intl.NumberFormat().resolvedOptions().locale.indexOf('ja') === 0){
  __t.setLanguage("ja");
}else{
  __t.setLanguage("en");
}
console.log(__t.getLanguage()); 
/*
Simple forwarding tool to simply forward to a token page when putting in an address so the user don't have to fiddle with the URL.
*/

var TokenSearchPage = React.createClass({
  getInitialState: function() {
    return {
      value: ''
    }
  },
  handleChange: function(event) {
    this.setState({value: event.target.value});
  },
  render: function() {
    return (
      <div>
        {__t.enter_address}: <br />
        <br />
        <input className="form-control" type="text" value={this.state.value} placeholder="0x1ceb00da..." onChange={this.handleChange}/>
        <br />
        <button className="btn btn-default" onClick={this.executeFunction}>{__t.go_token}</button>
      </div>
    );
  },
  executeFunction: function() {
    console.log(this.state.value);
    this.props.history.pushState(null,'/token/'+this.state.value);
  }
});

module.exports = TokenSearchPage;
