requirejs.config({
  shim: {
    "libs/jquery.min": {
      export: "jQuery"
    },
    "libs/underscore-min": {
      export: "_"
    },
    "libs/backbone-min": {
      deps: ["libs/jquery.min", "libs/underscore-min"],
      export: "Backbone"
    }
  }
});
/**
 * ココからメイン処理
 */
require(["models/BookModel", "collections/BookCollection"], function(model, collection) {

  // モデル操作のサンプル
  var bookModel = new model.BookModel({id: 6, title: "本のタイトル"});

  console.log("modelから値の取得 -> " + bookModel.get('title'));
  console.log("modelの属性を全てJSON -> " + JSON.stringify(bookModel.attributes));
  
  // model へ値の設定
  bookModel.set("year", 2018);
  
  // 属性の存在確認
  bookModel.has('title');
  
  // 属性の削除
  bookModel.unset('title');
  
  // 属性の存在確認
  bookModel.has('title');

  // server access
  bookModel.fetch({
    success: function(model, response, option) {
      console.log('** book server access model id:' + model.get('id'));
      console.log(JSON.stringify(model));
    },
    error: function(model, xhr, option) {
      console.log('** book server access error');
    }
  });

  // id を変更して再度サーバーにアクセスする
  bookModel.set('id', 2);
  bookModel.fetch({
    success: function(model, response, option) {
      console.log('** book server access model id:' + model.get('id'));
      console.log(JSON.stringify(model));
    }
  });

  // コレクションのサンプル
  var bookCollection = new collection.BookCollection({ model: bookModel});

  // server access をした後にモデルをツメツメする
  bookCollection.fetch({
    success: function(collection, response, option) {
      console.log('** book server access collection');
      // データを取得してcollectionに詰まっている状態で戻る
      collection.forEach(function(model) {
        console.log(JSON.stringify(model));
      });
    },
    error: function(collection, xhr, option) {
      console.log('** book server access error');
    }
  });

});