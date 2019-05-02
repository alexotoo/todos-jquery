// for all the documentation about this code see js-documentation.text
$("ul").on("click", "li", function(){
   $(this).toggleClass("completed");
});
//the 500 is the miliseconds of the fadeout speed
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    })
    // stopPropagation prevents the event from flowing over into other elements
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    //.which is to tell the exact key that was pressed (13 = Enter key)
    if(event.which === 13){
        //.val method is use to grabe new todo text from the input
        var todoText = $(this).val();
        $(this).val("");
        //create a new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    
    }
});

$(".fa-edit").on("click", function(){
    $("input[type='text']").fadeToggle();
});
