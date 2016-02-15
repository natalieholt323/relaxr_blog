$(document).ready(function () {

    // $('.readmore').click(function (event) {
    //     event.preventDefault();
    // });
    //   $('.readless').click(function (event) {
    //     event.preventDefault();
    // });
    // $(".readless").click(function(){
    //     $(".show-this-on-click").hide();
    // });
    //   $(".readmore").click(function(){
    //     $(".show-this-on-click").show();
    // });


    $('.readmore').click(function (event) {
        event.preventDefault();
    });
    $('.readless').click(function (event) {
        event.preventDefault();
    });

    $(".readmore").click(function(){
        $(".hide").slideDown();
        $(".readmore").hide();
    });
    $(".readless").click(function(){
        $(".hide").slideUp();
        $(".readmore").show();
    });

   $('.learnmore').click(function (event) {
        event.preventDefault();
   });
   $('.learnless').click(function (event) {
        event.preventDefault();
   });

    $(".learnmore").click(function(){
        $(".hidden").slideDown();
        $(".learnmore").hide();
    });
    $(".learnless").click(function(){
        $(".hidden").slideUp();
        $(".learnmore").show();
    });

});
