// ===== Start Header ===== //
// click on search input
$(".form").click(function(){
    if($(".searchBox").css("display") == "none"){
        $(".searchBox").slideDown(500)
    }else{
        $(".searchBox").slideUp(500)
    }
});

// click on menu button
$(".menuBox").click(function(){
    if($("header .container ul").css("display") == "none"){
        $("header .container ul").slideDown(500)
    }else{
        $("header .container ul").slideUp(500)
    }
});
// ===== End Header ===== //





