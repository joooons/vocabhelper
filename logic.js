

console.log('logic.js at your service.');




//  MM      MM    MMMM    MMMMMM    MMMMMM    MMMM    MMMMMM    MM      MMMMMMMM    MMMM    
//  MM      MM  MM    MM  MM    MM    MM    MM    MM  MM    MM  MM      MM        MM    MM  
//  MM      MM  MMMMMMMM  MMMMMM      MM    MMMMMMMM  MMMMMM    MM      MMMMMMMM    MM      
//  MM      MM  MM    MM  MM    MM    MM    MM    MM  MM    MM  MM      MM            MM    
//    MM  MM    MM    MM  MM    MM    MM    MM    MM  MM    MM  MM      MM        MM    MM  
//      MM      MM    MM  MM    MM  MMMMMM  MM    MM  MMMMMM    MMMMMM  MMMMMMMM    MMMM    

var result = {};
    result.word = '';
    result.category = '';
    result.frequency = 0;
    result.arr = [];

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
    
const editBox = {
    getIndex : (el, str) => {
        for ( i=0 ; i<$(str).length ; i++ ) { if ( el == $(str).get(i)) return i; }
    },
    addLine : () => {
        let index = $('.no-submit').length;
        let str = '<form class="no-submit">';
        str += '<div class="form-row form-group">';
        str += '<div class="col-3 col-md-3"></div>';
        str += '<div class="input-group col-9 col-md-9">';
        str += '<input type="text" class="form-control edit-tab" placeholder="">';
        str += '<div class="input-group-append">';
        str += '<button type="button" class="btn btn-primary" tabindex="-1" onclick="editBox.removeLine(this)">';
        str += '<b>&#x2715;</b></button></div></div></div></form>';
        $(str).insertAfter( $('.no-submit').get(index-2) );
    },
    removeLine : (el) => {
        $(el).parents().eq(2).remove();
        editBox.fillResult();
        editBox.display();
        console.table(result);
    },
    display : () => {        
        let str = JSON.stringify(result);
        $('#total').html(str);
    },
    fillResult : () => {
        let $elem = $('.edit-tab');
        let len = $elem.length;
        result.category = $elem.eq(1).val();
        result.frequency = $elem.eq(2).val();
        result.arr = [];
        for ( i=3 ; i<len-2 ; i++ ) {
            result.arr.push( editBox.parse($elem.eq(i).val()) );
        }
    },
    parse : str => {
        let newStr = str.replace( /[,;.]/g, "/");
        newStr = newStr.replace( /[\W][\W]+/g, "/");
        let arr = newStr.split('/');
        arr.forEach( (val,i) => {
            if (val == '') arr.splice(i,1);
        });
        return arr;
    },
    clear : () => {
        let len = $('.edit-tab').length;
        for ( i=0 ; i<len ; i++ ) { $('.edit-tab').eq(i).val(''); }
        for ( i=4 ; i< len-1 ; i++ ) {
            let elem = $('.edit-tab').eq(4).parents().eq(2);
            elem.remove();
        }
    }
};










//  MMMMMMMM  MM      MM  MMMMMMMM  MM    MM  MMMMMM        MM    MM    MMMM    MM    MM  MMMMMM    MM      MMMMMMMM  MMMMMM      MMMM    
//  MM        MM      MM  MM        MMMM  MM    MM          MM    MM  MM    MM  MMMM  MM  MM    MM  MM      MM        MM    MM  MM    MM  
//  MMMMMMMM  MM      MM  MMMMMMMM  MM  MMMM    MM          MMMMMMMM  MMMMMMMM  MM  MMMM  MM    MM  MM      MMMMMMMM  MMMMMM      MM      
//  MM        MM      MM  MM        MM    MM    MM          MM    MM  MM    MM  MM    MM  MM    MM  MM      MM        MM    MM      MM    
//  MM          MM  MM    MM        MM    MM    MM          MM    MM  MM    MM  MM    MM  MM    MM  MM      MM        MM    MM  MM    MM  
//  MMMMMMMM      MM      MMMMMMMM  MM    MM    MM          MM    MM  MM    MM  MM    MM  MMMMMM    MMMMMM  MMMMMMMM  MM    MM    MMMM    

$(document).on('submit', '.no-submit', function(ev) {
    ev.preventDefault();
});

$(document).on('change', '.edit-tab', function(ev) {
    let num = editBox.getIndex(ev.target, '.edit-tab');
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
    }
    if ( num > 0 ) { if (result.word == '') { return ev.target.value = ''; } }
    if ( num == $('.edit-tab').length - 2 ) editBox.addLine();
    $('.edit-tab').get(num+1).focus();
    editBox.fillResult();
    editBox.display();
    // console.table(result);
});

$('#edit-push').on('click', ev => {
    showTextArea(result);
    result = {};
    editBox.clear();
    $('#total').select();
    document.execCommand('copy');
    console.log('text copied to clipboard');
});

$('#total').on('click', (ev) => {
	ev.target.select();
	document.execCommand('copy');
    console.log('text copied to clipboard');
});







    




//  MMMMMMMM  MMMMMM    MMMMMM  MMMMMM        MMMMMMMM  MM    MM    MMMM    
//  MM        MM    MM    MM      MM          MM        MMMM  MM  MM    MM  
//  MMMMMMMM  MM    MM    MM      MM          MMMMMMMM  MM  MMMM    MM      
//  MM        MM    MM    MM      MM          MM        MM    MM      MM    
//  MM        MM    MM    MM      MM          MM        MM    MM  MM    MM  
//  MMMMMMMM  MMMMMM    MMMMMM    MM          MM        MM    MM    MMMM    


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
    ScootTheDagh(newArr);
    function ScootTheDagh(arr) {
        if ( arr[0] == '∂' ) {
            arr.push(arr.shift());
            arr.push(arr.shift());
        }
    }
    return newArr;
}



// hideThings();
function hideThings() {
    $('#edit-page').toggle();
}

tempShowView();
function tempShowView() {
    $('#view-page').show();
}




function showHE(a,b) {
    // Temporarily useful function that shows all html entities between the
    // specified range.
    let str = '';
    if (!b) { str += `${a} &nbsp;&nbsp;&nbsp;&#${a};&#10;`; } 
    else if ( a < b ) {
        for ( i=a ; i<=b ; i++ ) { str += `${i} &nbsp;&nbsp;&nbsp;&#${i};&#10;`; }
    }
    $('#total').html(str);
    // showHE(1488, 1522);
    // showHE(64285, 64334);
}

function showTextArea(obj) {
    let str = `bank[x] = ${JSON.stringify(obj)};`;
    $('#total').html(str);
    $('#output').html(obj.word);
}






//  MM      MM  MMMMMM  MMMMMMMM  MM      MM        MMMMMMMM  MM    MM    MMMM    
//  MM      MM    MM    MM        MM      MM        MM        MMMM  MM  MM    MM  
//  MM      MM    MM    MMMMMMMM  MM      MM        MMMMMMMM  MM  MMMM    MM      
//  MM      MM    MM    MM        MM  MM  MM        MM        MM    MM      MM    
//    MM  MM      MM    MM        MM  MM  MM        MM        MM    MM  MM    MM  
//      MM      MMMMMM  MMMMMMMM    MM  MM          MM        MM    MM    MMMM    

function loadTable() {
    $('.vocab-id').eq(0).text( 0 );
    $('.vocab-word').eq(0).text( bank[0].word );
    $('.vocab-category').eq(0).text( bank[0].category );
    $('.vocab-frequency').eq(0).text( bank[0].frequency );
    $('.vocab-definitions').eq(0).html( bank[2].arr );
}

fillTable();
function fillTable() {
    let num = $('.vocab-row').length;
    for ( i=0 ; i<num ; i++ ) { $('.vocab-row').eq(0).remove(); }
    num = bank.length;
    for ( i=0 ; i<num ; i++ ) { 
        let arrText = splitArrToLines(bank[i].arr);
        let str = '<tr class="vocab-row">';
        str += `<th class="vocab-id" scope="row">${i+1}</th>`;
        str += `<td class="vocab-word hebrew text-right" >${bank[i].word}</td>`;
        str += `<td class="vocab-category" >${bank[i].category}</td>`;
        str += `<td class="vocab-frequency" >${bank[i].frequency}</td>`;
        str += `<td class="vocab-definitions" >${arrText}</td>`;
        str += '</tr>';
        $('.vocab-table').append(str);
    }
}

function splitArrToLines(arrGroup) {
    let str = '';
    arrGroup.forEach( (arr,i) => {
        str += `${i+1}. ${arr.join(', ')}<br>`;
    });
    return str;
}





