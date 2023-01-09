 

type details = {
    city: string,
    country: string,
    population: number
}
let dtl: any
let dtlArr: any[] = []
export const addDetails = (CT: string, CTRY: string, PP: number) => {
    if (CT != "" && CT != null && CTRY != "" && CTRY != null && PP != 0 && PP != null) {

        let as: details = {
            city: CT,
            country: CTRY,
            population: PP
        }
        dtl = as
        if (localStorage.getItem('Details') === null) {
            dtlArr.push(dtl.city + ", " + dtl.country + ", " + dtl.population)
            localStorage.setItem('Details', JSON.stringify(dtlArr))
        }
        else {
            dtlArr = JSON.parse(localStorage.getItem('Details') || "{}")
            dtlArr.push(dtl.city + ", " + dtl.country + ", " + dtl.population)
            localStorage.setItem('Details', JSON.stringify(dtlArr))
        }
    }
    displayNames()
}
export const displayNames = () => {
    var list = document.getElementById('myList');
    let li = document.createElement('li')
    li.innerText = dtl.city
    if (list) {
        list.appendChild(li)
        li.append(", " + dtl.country)
        li.append(", " + dtl.population)
    }

}
export const displayNamesOnKeyUp = (input: string) => {


    if (localStorage.getItem('Details') != null) {
        var arr = JSON.parse(localStorage.getItem('Details') || "{}")

        var list = document.getElementById('myList')
        if (list) {
            while (list.hasChildNodes() && list.firstChild) {
                list.removeChild(list.firstChild)

            }
        }
        arr.forEach(function (ff: string) {
            let lis = document.createElement('li')
            if (ff.match(input)) {
                lis.innerText = ff
                if (list) {
                    list.appendChild(lis)
                }

            }

        });
    }
    else {
        alert("NO DATA FOUND")
    }

}
export const tenValidation = (input: any) => {

    var list = document.getElementById('myList2')
    let divv = document.createElement('div')
    const arr: any[] = []
    if (list) {
        while (list.hasChildNodes() && list.firstChild) {
            list.removeChild(list.firstChild)

        }
    }
    if (input.length == 10) {
        var num: any
        var ans = 0
        for (let i = 1; i <= input.length; i++) {
            num = input.charAt(i - 1) * i
            arr.push(num)
        }
        if (input.charAt(input.length - 1).match('X')) {
            arr[input.length - 1] = 100
        }
        for (let j = 0; j < arr.length; j++) {
            ans += arr[j]
        }
        if ((ans % 11) == 0) {
            divv.innerText = "TRUE"
            if (list) {
                list.appendChild(divv)
            }
        } else {
            divv.innerText = "FALSE"
            if (list) {
                list.appendChild(divv)
            }
        }
    } else {
        divv.innerText = "FALSE"
        if (list) {
            list.appendChild(divv)
        }
    }
}
export const changeItUp = (param: string) => {


    var list = document.getElementById('myList3')
    var divv = document.createElement('div')
    divv.innerText = replaceAlphabets(param.split(''))
    if (list) {
        while (list.hasChildNodes() && list.firstChild) {
            list.removeChild(list.firstChild)

        }
    }
    if (list) {
        list.appendChild(divv)
    }

}
function vowelLetter(ch: string) {
    if (ch != 'a' && ch != 'e' && ch != 'i'
        && ch != 'o' && ch != 'u' && ch != 'A' && ch != 'E' && ch != 'I'
        && ch != 'O' && ch != 'U') {
        return false;
    }
    return true;
}

function replaceAlphabets(s: string[]) {
    var newArray: string[] = [];
    for (var i = 0; i < s.length; i++) {
        let nextLetter = String.fromCharCode(s[i].charCodeAt(0) + 1);
        if (s[i] == 'z' || s[i] == 'Z') {
            newArray.push("A");
        } else if (vowelLetter(s[i]) == false) {
            if (vowelLetter(nextLetter) == true) {
                newArray.push(nextLetter.toUpperCase());
            } else if (vowelLetter(nextLetter) == false) {
                if (/^[a-zA-Z]+$/.test(s[i])) {
                    newArray.push(nextLetter.toLowerCase())
                } else {
                    newArray.push(s[i]);
                }
            }
        } else if (vowelLetter(s[i]) == true) {
            newArray.push(nextLetter)
        }
    }
    return newArray.join('');
}

export const movingZero = function (arr: any[]) {

    var zero = [];
    var other = [];
    var res: any[];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            zero.push(arr[i]);
        } else {
            other.push(arr[i]);
        }
    }
    var res = other.concat(zero);
    return res

}

console.log(movingZero([false, 1, 0, 1, 2, 0, 1, 3, "a"]))