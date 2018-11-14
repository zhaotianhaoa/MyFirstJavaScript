const request = require("request");
const cheerio = require("cheerio");
// 相当于C语言的#include<stdio.h> printf() scanf_s()
request('http://www.27270.com/ent/meinvtupian/', function(error, response, html) {
	// function 函数的意思
	// 第一个参数是一个url 
	// 第二个参数是 回调函数：就是【延迟执行的函数】，延迟到什么时候呢？
	// 等requeset执行完 回调函数 再执行
	//  response 网站的响应
	//  1. HTML + CSS + JQuery  -- JQuery选择器：选择html内容的工具
	//  2. HTTP / DNS 协议
	//  3. javaScript
	//  4. 软件包分析工具
	//  5. 浏览器分析
	if (error) {
		console.log(error);
	}
	const $ = cheerio.load(html);


	let title = $("title").text().trim();
	let wuhan = $(".wuhan > p").text();

	 
	console.log(title); // Show the HTML for the baidu homepage.
})



// function main () {
// 	// body...
// 	console.log('hello word');
// 	return iii;
// }

// function dipaly(){
// 	console.log('我是赵天浩');
// }

// function hi(){
// 	console.log('Hi~~');
// }

// main();
// dipaly();
// hi();