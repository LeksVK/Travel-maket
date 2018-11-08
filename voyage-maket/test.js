function login() {
var logForm = document.querySelector('.login_form');
logForm.classList.add('login_form_active');
};

function logout() {
var logForm2 = document.querySelector('.login_form');
logForm2.classList.remove('login_form_active');
};

function addmenu() {
var list = document.querySelector('.sub_list');
list.classList.remove('hidden_item');
};

function dellmenu() {
var list = document.querySelector('.sub_list');
list.classList.add('hidden_item');
};

function addmenu2() {
var list = document.querySelector('.sub2_list');
list.classList.remove('hidden2_item');
};

function dellmenu2() {
var list = document.querySelector('.sub2_list');
list.classList.add('hidden2_item');
};

function addmenu3() {
var list = document.querySelector('.sub3_list');
list.classList.remove('hidden3_item');
};

function dellmenu3() {
var list = document.querySelector('.sub3_list');
list.classList.add('hidden3_item');
};

function addmenu4() {
var list = document.querySelector('.sub4_list');
list.classList.remove('hidden4_item');
};

function dellmenu4() {
var list = document.querySelector('.sub4_list');
list.classList.add('hidden4_item');
};

function addmenu5() {
var list = document.querySelector('.sub5_list');
list.classList.remove('hidden5_item');
};

function dellmenu5() {
var list = document.querySelector('.sub5_list');
list.classList.add('hidden5_item');
};

function addmenu6() {
var list = document.querySelector('.sub6_list');
list.classList.remove('hidden6_item');
};

function dellmenu6() {
var list = document.querySelector('.sub6_list');
list.classList.add('hidden6_item');
};
/*
var subMenu = document.querySelector('.sub-menu');
console.log(subMenu.children);

for (var i = 2; i<subMenu.length; i++) {
		var item = subMenu[i];
		item.classList.remove('hidden_item');
	}*/