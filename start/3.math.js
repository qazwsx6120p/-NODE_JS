
//定義個模塊math
//  -在該模塊中提供兩個方法

//   add(a,b); //求兩個數的和
//   mul(a,b); //求兩個數的積

//靠exports導出文件
exports.add = (a, b) => {
    return a + b;
};

exports.mul = (a, b) => {
    return a * b;
};

//2.moduie.js 引入