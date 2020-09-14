

console.log('logic.js at your service.');






var result = {};
    result.word = '';
    result.category = '';
    result.frequency = 0;
    result.arr = [];






$(document).on('submit', '.no-submit', function(ev) {
    ev.preventDefault();
});

$(document).on('change', '.edit-tab', function(ev) {
    let num = editBox.getIndex(ev.target, '.edit-tab');
    console.log('num is', num);
    if ( num == 0 ) {
        let str = $('#edit-word').val();

        let arr = strToSyllableArr(str).reverse();
        str = arr.join('');
        arr = str.split('');
    
        Object.keys(En_to_He).forEach( key => {
            arr.forEach( (char,i) => {
                if ( char == key ) arr[i] = En_to_He[key];
            });
        });
        str = arr.join('');
        result.word = str;
        $('#output').html( str );
        // $('#experiment').val('');
    }
    if ( num > 0 ) { if (result.word == '') { return ev.target.value = ''; } }
    // let len = $('.edit-tab').length;
    if ( num == $('.edit-tab').length - 2 ) editBox.addLine();
    $('.edit-tab').get(num+1).focus();
    editBox.fillResult();
    editBox.display();
    console.table(result);
});


$('#total').on('click', (ev) => {
	ev.target.select();
	document.execCommand('copy');
    // alert('text copied to clipboard!');
    console.log('text copied to clipboard');
});






const editBox = {};

    editBox.getIndex = (el, str) => {
        for ( i=0 ; i<$(str).length ; i++ ) { if ( el == $(str).get(i)) return i; }
    }
    editBox.addLine = () => {
        let index = $('.no-submit').length;
        let str = '<form class="no-submit">';
        str += '<div class="form-row form-group">';
        str += '<div class="col-3 col-md-3"></div>';
        str += '<div class="input-group col-9 col-md-9">';
        str += '<input type="text" class="form-control edit-tab" placeholder="">';
        str += '<div class="input-group-append">';
        str += '<button type="button" class="btn btn-primary" tabindex="-1" onclick="editBox.removeLine(this)">';
        str += '<b>&#x2715;</b></button></div></div></div></form>';
        $(str).insertAfter( $('.no-submit').get(index-1) );
    }
    editBox.removeLine = (el) => {
        $(el).parents().eq(2).remove();
        editBox.fillResult();
        editBox.display();
        console.table(result);
    }
    editBox.display = () => {        
        let str = '';
        str = JSON.stringify(result);
        $('#total').html(str);
    }
    editBox.fillResult = () => {
        let $elem = $('.edit-tab');
        let len = $elem.length;
        result.category = $elem.eq(1).val();
        result.frequency = $elem.eq(2).val();
        result.arr = [];
        for ( i=3 ; i<len-2 ; i++ ) {
            result.arr.push( editBox.parse($elem.eq(i).val()) );
        }
    }
    editBox.parse = str => {
        let newStr = str.replace( /[,;.]/g, "/");
        newStr = newStr.replace( /[\W][\W]+/g, "/");
        let arr = newStr.split('/');
        arr.forEach( (val,i) => {
            if (val == '') arr.splice(i,1);
        });
        console.log(arr);
        return arr;
    }

    

const En_to_He = {
    'a' : '&#1488;',
    'A' : '&#1470;',

    'b' : '&#1489;',
    'B' : '&#64305;',
    
    'c' : '&#64299;',
    'C' : '&#64301;',

    'd' : '&#1491;',
    'D' : '&#64307;',

    'e' : '&#1461;',
    'E' : '&#1461;',

    'f' : '&#1496;',
    'F' : '&#64312;',

    'g' : '&#1490;',
    'G' : '&#64306;',

    'h' : '&#1492;',
    'H' : '&#64308;',

    'i' : '&#1460;',
    'I' : '&#1460;',

    'j' : '&#1495;',
    'J' : '&#1498;&#1456;',

    'k' : '&#1499;',
    'K' : '&#64315;',

    'l' : '&#1500;',
    'L' : '&#64316;',

    'm' : '&#1502;',
    'M' : '&#64318;',

    'n' : '&#1504;',
    'N' : '&#64320;',
    
    'o' : '&#1465;',
    'O' : '&#1465;',
    'ø' : '&#1465;',

    'p' : '&#1508;',
    'P' : '&#64324;',

    'q' : '&#1511;',
    'Q' : '&#64327;',

    'r' : '&#1512;',

    't' : '&#1514;',
    'T' : '&#64330;',

    's' : '&#1505;',
    'S' : '&#64321;',

    'u' : '&#1467;',

    'v' : '&#64298;',
    'V' : '&#64300;',

    'w' : '&#1493;',
    'W' : '&#64309;',

    'x' : '&#1510;',
    'X' : '&#64326;',

    'y' : '&#1497;',
    'Y' : '&#64313;',
    // 'y' : 'י',

    'z' : '&#1494;',
    'Z' : '&#64310;',


    '°' : '&#1498;',
    '$' : '&#1498;',

    'π' : '&#1507;',

    'μ' : '&#1501;',

    '#' : '&#1509;',
    "≈" : '&#1509;',

    '!' : '&#1503;',
    '˜' : '&#1503;',
    
    '&' : '&#1451;',
    '‡' : '&#1451;',
    ',' : '&#1462;', 
    "\<" : '&#1462;',

    "\–" : '&#1425;',

    ';' : '&#1464;',
    "\:" : '&#1464;',

    '∂' : '&#1468;',
    '{' : '&nbsp;',
    '}' : '&#1458;',    
    
    "\‘" : '&#1457;',

    "\'" : '&#1463;',
    "\"" : '&#1463;',

    "\[" : '&#1506;',

    "\]" : '&#1456;',
    "\“" : '&#1456;',

    "\/" : '&#64331;',

    "÷" : '/'
    
};

const vowels = [
    'e', 'E', 'i', 'I', 'o', 'O', 'ø', 'u', '&', ',', '\<',
    '\–', ';', '\:', '}', '\‘', "\'", '\"', '\]', '\“', '‡'
]


// function reverseStr(str) { return str.split('').reverse().join(''); }
    // Not used at the moment

function strToSyllableArr(str) {
    let arr = str.split('');
    let newArr = [];
    arr.forEach( (char, i) => {
        if ( !vowels.includes(char) ) {
            let temp = char;
            doThis(i+1);
            newArr.push(temp);
            function doThis(num) {
                if ( num >= arr.length ) return;
                if ( vowels.includes(arr[num]) ) {
                    temp += arr[num];
                    doThis(num+1);
                }
            }
        }
    });
    console.log(newArr);
    ScootTheDagh(newArr);
    function ScootTheDagh(arr) {
        if ( arr[0] == '∂' ) {
            arr.push(arr.shift());
            arr.push(arr.shift());
        }
    }
    return newArr;
}





function showHE(a,b) {
    let str = '';
    if (!b) { str += `${a} &nbsp;&nbsp;&nbsp;&#${a};&#10;`; } 
    else if ( a < b ) {
        for ( i=a ; i<=b ; i++ ) { str += `${i} &nbsp;&nbsp;&nbsp;&#${i};&#10;`; }
    }
    $('#total').html(str);
    // showHE(1488, 1522);
    // showHE(64285, 64334);
}



