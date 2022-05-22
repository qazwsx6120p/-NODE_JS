
//模塊化
//  -在Node中，一個js就是一個模塊
//  -在Node中，每一個js文件中的js代碼都是獨立運行在一個函數中
//   而不是全局作用域，所以一個模塊中的變數和函數在其他模塊中無法訪問

console.log("我是一個模塊");

//我們可以透過exports 來向外部暴露變數和方法
//只需要將需要暴露給外部的變數或方法設置為exports的屬性即可

//向外部報路屬性或方法
exports.x = "我是1.moduie.js中的x";
exports.y = "我是y";
exports.fn = function () { };