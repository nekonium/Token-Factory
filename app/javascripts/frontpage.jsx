import React from 'react';
import { Link } from 'react-router';
import LocalizedStrings from 'react-localization';

let __t = new LocalizedStrings({
  en:{
    title:"Token Factory for Nekonium(Alpha)",
    you_are_offline:"You are currently OFFLINE. ",
    in_order_to:"In order to use the Token Factory for Nekonium, you need to:",
    footer_text:"Issue & Interact with Standard Token Contracts on Nekonium."
  },
  ja: {
    title:"Nekonium ERC20トークンファクトリ(Alpha)",
    you_are_offline:"Nekoniumネットワークはオフラインです。",
    in_order_to:"Nekonium Token Factoryには拡張機能が必要です:",
    footer_text:"Nekonium上のERC20トークンコントラクトの作成と操作ができます。"
  }
 });
if(Intl.NumberFormat().resolvedOptions().locale.indexOf('ja') === 0){
  __t.setLanguage("ja");
}else{
  __t.setLanguage("en");
}
console.log(__t.getLanguage()); 
/*
Home/front page.
Warns if offline and recommends to install Metamask to use it.
*/

var FrontPage = React.createClass({
  getInitialState: function() {
    return {
      offline_msg: ''
    };
  },
  componentDidMount: function() {
  },
  activateUPort: function() {
    console.log("trying to activate");
    localStorage["provider"] = "uport";
    //window.offline = true;
    location.reload(); //refresh
  },
  render: function() {
    if(window.offline) {
      var offline_msg = <p style={{textAlign: "center"}}>{__t.you_are_offline}<br /><br />
      {__t.in_order_to}<br />
    <a style={{textAlign: "center"}} href="https://chrome.google.com/webstore/detail/nukomask/glchbnjfkbkdhhaclogbdbkkkoahcnmf"><img width="200px" className="logo img-responsive center-block" src="./images/NukoMask.png"></img></a>
    </p>

    }
    return (
      <div>
        <h2 style={{textAlign: 'center'}}> {__t.title} </h2>
        <img width="200px" className="logo img-responsive center-block" src="./images/icon.png"></img>
        <br />
        <p style={{textAlign: "center"}}>
        {__t.footer_text}<br />
      <br />
        {offline_msg} <br />
        <br />
        </p>
      </div>
    );
  }

});

module.exports = FrontPage;
