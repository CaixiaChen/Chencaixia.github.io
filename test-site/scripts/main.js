let myImage = document.querySelector('img');

myImage.onclick = function(){
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/firefox-icon.png'){
		myImage.setAttribute('src','images/firefox2.png');
	}else{
		myImage.setAttribute('src','images/firefox-icon.png');
	}
}


function setHeading(name){
	let myHeading = document.querySelector('h1');
	myHeading.textContent = 'Mozilla 酷毙了，' + name + '！';
}
/*setHeading函数将根据name参数将页面标题设置为个性化的欢迎信息。
比如传入的name参数为“李雷”，那么调用该函数后,
页面标题将变成“Mozilla酷毙了， 李雷！”。
函数的实现首先将h1元素的引用保存在myHeading变量中，
然后设置myHeading的textCotent属性。*/

function setUserName(){
	let myName = prompt('请输入你的名字');
	localStorage.setItem('name', myName);
	setHeading(myName);
}
/*setUserName函数将为页面设置用户名信息。该函数首先调用了prompt()函数，
与alert类似，会弹出一个对话框，但这里需要用户输入数据，并在确定后，
将数据存储在myName变量里。
接下来，将调用localStorage API，它可以将数据存储在浏览器中，供后续获取。
这里用localStorage的setItem()来创建一个‘name’数据项，并把myName变量复制给它。
最后调用上述的setHeading函数来个性化欢迎信息。*/

let storedName = localStorage.getItem('name');//这行：尝试取得浏览器中保存的‘name’数据项。
if(!storedName){
	setUserName();
}else{
	setHeading(storedName);
}
/*if...else块是初始化代码，因为它在页面初次读取时进行构造工作。
条件!storeName在storeName不存在时值为真，将调用setUserName函数，
若条件为假时以 storedName 为参数调用 setHeading 函数。
此条件语句块可描述为：若 'name' 数据项不存在，则由用户输入用户名，
若存在则直接将 'name' 中保存的用户名显示到个性化欢迎信息中。*/


let myButton = document.querySelector('button');
myButton.onclick = setUserName;
/*将页面中 button 元素的引用保存在 myButton 中，
再将这个按钮的 onclick 事件处理器设为 setUserName 函数。*/

/*注：debug：不要用中文分号！！！！*/