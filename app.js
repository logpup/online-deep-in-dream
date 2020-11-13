// 💛 highlighter effect

var t = '';

function gText(e) {
    t = (document.all) ? document.getSelection.createRange().text : document.getSelection();
    alert(t);
}

document.onmouseup = gText;
if(!document.all) document.captureEvents(Event.MOUSEUP); 
// now i need to make gtext to work
function gText() {
    var str = document.getElementById('paragraph').innerHTML;
    var rng = window.getSelection().toString();
    // var res = str.replace(range, "XXXX");
    // document.getElementById("paragraph").innerHTML = res;
    var regex = new RegExp(rng, "g");
    var res = str.replace(regex, "<mark>" + rng + "</mark>");
    document.getElementById("paragraph").innerHTML = res;
}

function test() {
    alert("sigh");
}

document.addEventListener('mouseup', gText);

// log if jQuery loaded
if(typeof jQuery!=='undefined'){
    console.log('jQuery Loaded');
}
else{
    console.log('not loaded yet');
}

// 🤣 pop up image on mouse hover

$(document).ready(function(){

    $(".imgText").hover(function(){
        $(this).toggleClass("linear-wipe");
    });

    $('.imgText').on(
        'mouseenter',
        function(){
            $('<img class="pop" src="img/hand.jpg"/>')
                .appendTo($(this));
        });
    
    $('.imgText').on(
        'mouseleave',
        function(){
            $('.pop').remove();
        });
});


