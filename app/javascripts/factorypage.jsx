import React from "react";
import {TXComponent} from "reflux-tx";
import TxForm from "./txform.jsx";
import LocalizedStrings from 'react-localization';

let __t = new LocalizedStrings({
  en:{
    create_token:"Create Token",
    create_token_contract_with_the_:"Create Token Contract with the following parameters",
    button_action:"Create Token",
    button_processing:"Creating Token",
    pf_1:"totaly supply: eg. 10",
    pf_2:"name: eg Simon Bucks",
    pf_3:"decimal places: eg 4",
    pf_4:"symbol: eg SBX"
  },
  ja: {
    create_token:"トークンの作成",
    create_token_contract_with_the_:"トークンのパラメータを設定してください。",
    button_action:"このパラメータでデプロイ",
    button_processing:"トークンをデプロイ中...",
    pf_1:"発行数量: 例 10",
    pf_2:"トークン名: 例 NEKONIUM",
    pf_3:"小数点桁数: 例 4",
    pf_4:"シンボル: NUKO"
  }
 });
if(Intl.NumberFormat().resolvedOptions().locale.indexOf('ja') === 0){
  __t.setLanguage("ja");
}else{
  __t.setLanguage("en");
}
console.log(__t.getLanguage()); 
/*
Page to create/issue a token.
Upon success/mined, forward to token wallet page.
*/

var FactoryPage = React.createClass({
  getInitialState: function() {
    return {
      value: ''
    }
  },
  successOnCreation: function(args, receipt) {
    this.props.history.pushState(null, '/token/' + receipt.contractAddress);
  },
  render: function() {
    return (
      <div>
        <TXComponent filter={{txType: "token_creation"}}>
          <TxForm txType = "token_creation"
                  header = {__t.create_token}
                  msg = {__t.create_token_contract_with_the_}
                  buttonAction = {__t.button_action}
                  buttonProcessing = {__t.button_processing}
                  successful = {this.successOnCreation}
                  inputs = {[{placeholder: __t.pf_1, key: "amount", ref: "amount"},
                             {placeholder: __t.pf_2, key: "name", ref: "name"},
                             {placeholder: __t.pf_3, key: "decimals", ref: "decimals"},
                             {placeholder: __t.pf_4, key: "symbol", ref: "symbol"},

                  ]}
            />
        </TXComponent> <br />
      </div>
    );
  }
});

module.exports = FactoryPage;
