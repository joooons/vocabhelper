

console.log('logic.js at your service.');







// const inputForm = document.getElementById('input-form');
// const word = document.getElementById('word');
// const def = document.getElementById('def');
// const total = document.getElementById('total');

const vocab = {};


$(document).on('submit', '.no-submit', function(ev) {
    ev.preventDefault();
});


function indOfClass(elem, classSelector) {
    for ( i=0 ; i<$(classSelector).length ; i++ ) {
        if ( elem == $(classSelector).get(i)) return i;
    }
}



$(document).on('change', '.tab-group-1', function(ev) {
    let num = indOfClass(ev.target, '.tab-group-1');
    $('.tab-group-1').get(num+1).focus();
});




// word.onchange = () => {
//     findIndex(word);
//     console.log(word);

    // if (!word.value) return;
    // if (!def.value) return;
    // vocab.word = word.value;
    // display();
    // parse();
// }

// def.onchange = () => {
//     if (!word.value) return;
//     if (!def.value) return;
//     vocab.def = def.value;
//     display();
//     parse();
    // addLine();
// }

function display() { total.innerHTML = `${vocab.word}&#10;${vocab.def}`; }

function parse() {
    if (!vocab.def) return;
    vocab.arr = vocab.def.split("/");
}

function addLine() {
    
    let index = $('.no-submit').length;
    // console.log(index);

    let str = '<div class="form-row form-group">';
    str += '<div class="col-3 col-md-2"></div>';
    str += '<div class="input-group col-9 col-md-10">';
    str += '<input type="text" class="form-control" placeholder="dos">';
    str += '<div class="input-group-append">';
    str += '<button type="button" class="btn btn-primary">';
    str += '<b>&#x2715;</b></button></div></div></div>';

    $(str).insertBefore( $('.no-submit').get(index-1) );
}
