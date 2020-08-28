"use strict";


let a,
    b,
    c,
    d;


function quest1() {
    let x = +prompt("Введите число", " ");
    a = x;
}


function quest2() {
    let x = prompt("Что сделать", " ");
    do {
        if (x == "*" || x == "/" || x == "+" || x == "-") {
            b = x;
            break;
        }  else{
            x = prompt("Что сделать", " ");
        }
    } while (x != "*" || x != "/" || x != "+" || x != "-");

}

function quest3() {
    let x = +prompt("Введите второе число", "");
    c = x;
}


function check(t) {
    if (t == 0 || isNaN(t)) {
        alert("ошибка!");
    }
}

function quest4(u, o, p) {
    switch (o) {
        case "+":
            d = u + p;
            break;

        case "-":
            d = u - p;
            break;

        case "*":
            d = u * p;
            break;

        case "/":
            d = u / p;
            break;
        default:
            d = 0;
            break;
    }
}

function finish() {
    let x = confirm(`${a}${b}${c}=${d} Начать сначала?`);
    if (x) {
        start();
    }
}


function start() {
    quest1();
    check(a);
    quest2();
    quest3();
    check(c);
    quest4(a, b, c);
    finish();
}

start();