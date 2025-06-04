$("input").keypress(function(event){
    $("h1").text(event.key);
    $("h1").css("color",random());
});

function random(){
    var r=ratioGenerate();
    var b=ratioGenerate();
    var g=ratioGenerate();
    return `rgb(${r},${g},${b})`;
}
function ratioGenerate(){
    return Math.floor(Math.random()*256);
}