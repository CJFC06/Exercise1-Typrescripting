"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.movingZero = exports.changeItUp = exports.tenValidation = exports.displayNamesOnKeyUp = exports.displayNames = exports.addDetails = void 0;
let dtl;
let dtlArr = [];
const addDetails = (CT, CTRY, PP) => {
    if (CT != "" && CT != null && CTRY != "" && CTRY != null && PP != 0 && PP != null) {
        let as = {
            city: CT,
            country: CTRY,
            population: PP
        };
        dtl = as;
        if (localStorage.getItem('Details') === null) {
            dtlArr.push(dtl.city + ", " + dtl.country + ", " + dtl.population);
            localStorage.setItem('Details', JSON.stringify(dtlArr));
        }
        else {
            dtlArr = JSON.parse(localStorage.getItem('Details') || "{}");
            dtlArr.push(dtl.city + ", " + dtl.country + ", " + dtl.population);
            localStorage.setItem('Details', JSON.stringify(dtlArr));
        }
    }
    (0, exports.displayNames)();
};
exports.addDetails = addDetails;
const displayNames = () => {
    var list = document.getElementById('myList');
    let li = document.createElement('li');
    li.innerText = dtl.city;
    if (list) {
        list.appendChild(li);
        li.append(", " + dtl.country);
        li.append(", " + dtl.population);
    }
};
exports.displayNames = displayNames;
const displayNamesOnKeyUp = (input) => {
    if (localStorage.getItem('Details') != null) {
        var arr = JSON.parse(localStorage.getItem('Details') || "{}");
        var list = document.getElementById('myList');
        if (list) {
            while (list.hasChildNodes() && list.firstChild) {
                list.removeChild(list.firstChild);
            }
        }
        arr.forEach(function (ff) {
            let lis = document.createElement('li');
            if (ff.match(input)) {
                lis.innerText = ff;
                if (list) {
                    list.appendChild(lis);
                }
            }
        });
    }
    else {
        alert("NO DATA FOUND");
    }
};
exports.displayNamesOnKeyUp = displayNamesOnKeyUp;
const tenValidation = (input) => {
    var list = document.getElementById('myList2');
    let divv = document.createElement('div');
    const arr = [];
    if (list) {
        while (list.hasChildNodes() && list.firstChild) {
            list.removeChild(list.firstChild);
        }
    }
    if (input.length == 10) {
        var num;
        var ans = 0;
        for (let i = 1; i <= input.length; i++) {
            num = input.charAt(i - 1) * i;
            arr.push(num);
        }
        if (input.charAt(input.length - 1).match('X')) {
            arr[input.length - 1] = 100;
        }
        for (let j = 0; j < arr.length; j++) {
            ans += arr[j];
        }
        if ((ans % 11) == 0) {
            divv.innerText = "TRUE";
            if (list) {
                list.appendChild(divv);
            }
        }
        else {
            divv.innerText = "FALSE";
            if (list) {
                list.appendChild(divv);
            }
        }
    }
    else {
        divv.innerText = "FALSE";
        if (list) {
            list.appendChild(divv);
        }
    }
};
exports.tenValidation = tenValidation;
const changeItUp = (param) => {
    var list = document.getElementById('myList3');
    var divv = document.createElement('div');
    divv.innerText = replaceAlphabets(param.split(''));
    if (list) {
        while (list.hasChildNodes() && list.firstChild) {
            list.removeChild(list.firstChild);
        }
    }
    if (list) {
        list.appendChild(divv);
    }
};
exports.changeItUp = changeItUp;
function vowelLetter(ch) {
    if (ch != 'a' && ch != 'e' && ch != 'i'
        && ch != 'o' && ch != 'u' && ch != 'A' && ch != 'E' && ch != 'I'
        && ch != 'O' && ch != 'U') {
        return false;
    }
    return true;
}
function replaceAlphabets(s) {
    var newArray = [];
    for (var i = 0; i < s.length; i++) {
        let nextLetter = String.fromCharCode(s[i].charCodeAt(0) + 1);
        if (s[i] == 'z' || s[i] == 'Z') {
            newArray.push("A");
        }
        else if (vowelLetter(s[i]) == false) {
            if (vowelLetter(nextLetter) == true) {
                newArray.push(nextLetter.toUpperCase());
            }
            else if (vowelLetter(nextLetter) == false) {
                if (/^[a-zA-Z]+$/.test(s[i])) {
                    newArray.push(nextLetter.toLowerCase());
                }
                else {
                    newArray.push(s[i]);
                }
            }
        }
        else if (vowelLetter(s[i]) == true) {
            newArray.push(nextLetter);
        }
    }
    return newArray.join('');
}
const movingZero = function (arr) {
    var zero = [];
    var other = [];
    var res;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zero.push(arr[i]);
        }
        else {
            other.push(arr[i]);
        }
    }
    var res = other.concat(zero);
    return res;
};
exports.movingZero = movingZero;
console.log((0, exports.movingZero)([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
