var carousel= ["img/1.jpg","img/2.jpg","img/3.jpg"];

var index=0;
var click =0;

$('.carousel').css("background-image", "url("+carousel[0]+")");

$('.D').click(function () {

    if(index <2){

       index++;
        $('.carousel').css("background-image", "url("+carousel[index]+")");
    }else{
        index=0;
        $('.carousel').css("background-image", "url("+carousel[0]+")");

    }
    console.log(index);
});

$('.G').click(function () {

    if(index >0){

        index--;
        $('.carousel').css("background-image", "url("+carousel[index]+")");
    }else{
        index=carousel.length-1;
        $('.carousel').css("background-image", "url("+carousel[2]+")");
    }
    console.log(index);
});


function suivant(){


    if(index <2){

        index++;
        $('.carousel').css("background-image", "url("+carousel[index]+")");

    }else{
        index=0;
        $('.carousel').css("background-image", "url("+carousel[0]+")");

    }
    setTimeout(suivant,2000);
}
suivant();

$('#name').click(function () {

    if(click==0){
        click++;
    $(this).animate({
        width:'600px',
        height: '600px',
    });
    $(".categorie").hide();
}else {
        click=0;
        $(this).animate({
            width: '400px',
            height: '200px',
        });
        $(".categorie").show();
    }

});




$('.experience').click(function () {

    if(click==0){
        click++;
        $(this).animate({
            width:'600px',
            height: '600px',
        });
        $("#name").hide();
        $(".categorie").hide();
        $(this).show();

    }else {
        click=0;
        $(this).animate({
            width: '200px',
            height: '200px',
        });
        $(".categorie").show();
        $("#name").show();

    }
});

$('.education').click(function () {

    if(click==0){
        click++;
        $(this).animate({
            width:'600px',
            height: '600px',
        });
        $("#name").hide();
        $(".categorie").hide();
        $(this).show();

    }else {
        click=0;
        $(this).animate({
            width: '200px',
            height: '200px',
        });
        $(".categorie").show();
        $("#name").show();

    }
});


$('.blog').click(function () {

    if(click==0){
        click++;
        $(this).animate({
            width:'600px',
            height: '600px',
        });
        $("#name").hide();
        $(".categorie").hide();
        $(this).show();

    }else {
        click=0;
        $(this).animate({
            width: '200px',
            height: '200px',
        });
        $(".categorie").show();
        $("#name").show();

    }
});

$('.social').click(function () {

    if(click==0){
        click++;
        $(this).animate({
            width:'600px',
            height: '600px',
        });
        $("#name").hide();
        $(".categorie").hide();
        $(this).show();

    }else {
        click=0;
        $(this).animate({
            width: '200px',
            height: '200px',
        });
        $(".categorie").show();
        $("#name").show();

    }
});

$('.profil').click(function () {

    if(click==0){
        click++;
        $(this).animate({
            width:'600px',
            height: '600px',
        });
        $("#name").hide();
        $(".categorie").hide();
        $(this).show();
        $(this).html('Developpeur Web Junior');
    }else {
        click=0;
        $(this).animate({
            width: '200px',
            height: '200px',
        });
        $(this).html('<div class="categorie profil orange"> <span class="far fa-address-card"></span>Profil </div>');
        $(".categorie").show(200);
        $("#name").show(200);

    }
});

$('.contact').click(function () {

    if(click==0){
        click++;
        $(this).animate({
            width:'600px',
            height: '600px',
        });
        $("#name").hide();
        $(".categorie").hide();
        $(this).show();

    }else {
        click=0;
        $(this).animate({
            width: '200px',
            height: '200px',
        });
        $(".categorie").show();
        $  ("#name").show();
    }
});

$('.portfolio').click(function () {

    if(click==0){
        click++;
        $(this).animate({
            width:'600px',
            height: '600px',
        });
        $("#name").hide();
        $(".categorie").hide();
        $(this).show();

    }else {
        click=0;
        $(this).animate({
            width: '200px',
            height: '200px',
        });
        $(".categorie").show();
        $("#name").show();

    }
});




