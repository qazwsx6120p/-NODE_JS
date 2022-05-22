
//引入其他的模塊

//在node中，通過require()函數引入外部模塊
//  require()可以傳遞一個文件路徑作為參數，node將會自動根據路徑來引入外部模塊
//  這裡路徑，如果使用相對路徑，必須以.或..開頭

//使用require()引入模塊以後，該函數會返回一個物件，該物件代表引入的模塊

//我們使用require()引入外部模塊時，使用的就是模塊標示，我們可以通過模塊標示來找到指定的模塊
//-模塊分為兩大類
//  核心模塊
//      -由node引擎提供的模塊
//      -核心模塊的標示就是，模塊的名子
//  文件模塊
//      -由用戶自己創建的模塊
//      -文件模塊的標示就是文件的路徑(絕對路徑，相對路徑)
//       相對路徑使用.或..開頭


let md = require("./1.moduie.js");
let math = require("./3.math");
let fs = require("fs");

console.log(md);

//引入3.math.js的 add函數、mul函數
console.log(math.add(123,456));
console.log(math.mul(2,5));

console.log(fs);
