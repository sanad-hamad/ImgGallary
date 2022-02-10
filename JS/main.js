$(document).ready(function(){


    console.log("test jquer is work ")
    // when hover on imge show it on superImge container 
     $("#ImgeContainer img").hover(function(){
        let imgUrl =$(this).attr('src');

        $("#SuperImge").attr("src",imgUrl);


    })



})