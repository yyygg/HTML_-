$(function(){

    // $("#title").load("Message.html")
    // $("#color").load(".html")



    //切换
    $(".lattice").click(function() {

        $("#color").load($(this).data("page"))
        $("#title").load($(this).data("title"))
        // $("#menu").load($(this).data("menu"))

    })


});