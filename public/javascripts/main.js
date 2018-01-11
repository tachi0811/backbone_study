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

require(["models/BookModel"], function(model) {

  var bookModel = new model.BookModel({title: "本のタイトル"});
    
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

});