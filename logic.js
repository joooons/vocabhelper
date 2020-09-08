

console.log('logic.js at your service.');






var result = {};
    result.word = '';
    result.arr = [];






$(document).on('submit', '.no-submit', function(ev) {
    ev.preventDefault();
});

$(document).on('change', '.edit-tab', function(ev) {
    let num = editBox.getIndex(ev.target, '.edit-tab');
    if ( num > 0 ) {
        if (result.word == '') { return ev.target.value = ''; }
    }
    let len = $('.edit-tab').length;
    if ( num == len - 2 ) editBox.addLine();
    $('.edit-tab').get(num+1).focus();
    editBox.fillResult();
    editBox.display();
});







const editBox = {};

    editBox.getIndex = (el, str) => {
        for ( i=0 ; i<$(str).length ; i++ ) { if ( el == $(str).get(i)) return i; }
    }
    editBox.addLine = () => {
        let index = $('.no-submit').length;
        let str = '<div class="form-row form-group">';
        str += '<div class="col-3 col-md-2"></div>';
        str += '<div class="input-group col-9 col-md-10">';
        str += '<input type="text" class="form-control edit-tab" placeholder="">';
        str += '<div class="input-group-append">';
        str += '<button type="button" class="btn btn-primary" tabindex="-1" onclick="editBox.removeLine(this)">';
        str += '<b>&#x2715;</b></button></div></div></div>';
        $(str).insertBefore( $('.no-submit').get(index-1) );
    }
    editBox.removeLine = (el) => {
        $(el).parents().eq(2).remove();
        editBox.fillResult();
        editBox.display();
    }
    editBox.display = () => {        
        let str = '';
        str += "vocab: " + result.word + '&#10;';
        result.arr.forEach( (list,i) => {
            str += `def ${i+1}:  ${list}&#10;`;
        });
        $('#total').html(str);
    }
    editBox.fillResult = () => {
        let $elem = $('.edit-tab');
        let len = $elem.length;
        result.word = $elem.eq(0).val();
        result.arr = [];
        for ( i=1 ; i<len-2 ; i++ ) {
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








