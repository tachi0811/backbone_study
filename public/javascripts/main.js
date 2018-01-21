'use strict'

requirejs.config({

  shim: {
    jquery: {
      exports: "$"
    },
    underscore: {
      exports: "_"
    },
    backbone: {
      deps: ["jquery", "underscore"],
      exports: "Backbone"
    },
    relational: {
      deps: ["backbone"]
    },
    stickit: {
      deps: ["backbone"]
    },
    hbs: {
      exports: 'hbs'
    },
  },

  paths: {
    jquery: './libs/jquery.min',
    underscore:'./libs/underscore-min',
    backbone: './libs/backbone-min',
    relational: './libs/backbone-relational',
    stickit: './libs/backbone.stickit',
    hbs: './libs/hbs',
  }
});
/**
 * ココからメイン処理
 */
require(["models/BookModel", 
  "collections/BookCollection", 
  "views/BookView",
  "hbs!templates/BookTemplate",
  "backbone",
  "stickit"
], 
function(model, collection, view, hbs, backbone) {
  // // Model操作のサンプル
  // let bookModel = new model.BookModel({id: 6, title: "本のタイトル"});

  // console.log("modelから値の取得 -> " + bookModel.get('title'));
  // console.log("modelの属性を全てJSON -> " + JSON.stringify(bookModel.attributes));
  
  // // model へ値の設定
  // bookModel.set("year", 2018);
  
  // // 属性の存在確認
  // bookModel.has('title');
  
  // // 属性の削除
  // bookModel.unset('title');
  
  // // 属性の存在確認
  // bookModel.has('title');

  // // server access
  // bookModel.fetch({
  //   success: function(model, response, option) {
  //     console.log('** book server access model id:' + model.get('id'));
  //     console.log(JSON.stringify(model));
  //   },
  //   error: function(model, xhr, option) {
  //     console.log('** book server access error');
  //   }
  // });

  // // id を変更して再度サーバーにアクセスする
  // bookModel.set('id', 2);
  // bookModel.fetch({
  //   success: function(model, response, option) {
  //     console.log('** book server access model id:' + model.get('id'));
  //     console.log(JSON.stringify(model));
  //   }
  // });

  // // Collection操作のサンプル
  // let bookCollection = new collection.BookCollection({ model: bookModel});

  // // server access をした後にモデルをツメツメする
  // bookCollection.fetch({
  //   success: function(collection, response, option) {
  //     console.log('** book server access collection');
  //     // データを取得してcollectionに詰まっている状態で戻る
  //     collection.forEach(function(model) {
  //       console.log(JSON.stringify(model));
  //     });
  //   },
  //   error: function(collection, xhr, option) {
  //     console.log('** book server access error');
  //   }
  // });

  // View操作のサンプル
  let bookhView = new view.BookView({ 
    el: '#main',  
  });

});