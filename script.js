'use strict'

var letters = []
var str = 'Backend As A Service'
var strArr = str.split(' ')
for (var i = 0 ; i < strArr.length ; i++) {
    letters.push(strArr[i].slice(0, 1))
}
console.log(letters, letters.join('').toString());

function userInfo () {
    if (this.registered === true) {
        console.log(`дата регистрации: ${this.data}`);
    } else {
        console.log(`незарегестрированный пользователь: ${this.name}`);
    }
}
var obj1 = {
    data: '10.09.2001',
    registered: true,
    name: 'John Doe',
    getInfo: userInfo
};
var obj2 = {
    data: '20/08/2020',
    registered: false,
    name: 'Jane Doe',
    getInfo: userInfo
};
obj1.getInfo();
obj2.getInfo();

