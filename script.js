var carousel = ["img/1.jpg", "img/2.jpg", "img/3.jpg"];

var index = 0;
var click = 0;

$('.carousel').css("background-image", "url(" + carousel[0] + ")");

$('.D').click(function () {

    if (index < carousel.length-1) {

        index++;
        $('.carousel').css("background-image", "url(" + carousel[index] + ")");
    } else {
        index = 0;
        $('.carousel').css("background-image", "url(" + carousel[0] + ")");

    }
    console.log(index);
});

$('.G').click(function () {

    if (index > 0) {

        index--;
        $('.carousel').css("background-image", "url(" + carousel[index] + ")");
    } else {
        index = carousel.length - 1;
        $('.carousel').css("background-image", "url(" + carousel[carousel.length-1] + ")");
    }
    console.log(index);
});


function suivant() {


    if (index < carousel.length-1) {

        index++;
        $('.carousel').css("background-image", "url(" + carousel[index] + ")");

    } else {
        index = 0;
        $('.carousel').css("background-image", "url(" + carousel[0] + ")");

    }
    setTimeout(suivant, 4000);
}

suivant();

$('#name').click(function () {

    if (click == 0) {
        click++;
        $(this).animate({
            width: '600px',
            height: '600px',
        });
        $(".categorie").hide();
    } else {
        click = 0;
        $(this).animate({
            width: '400px',
            height: '200px',
        });
        $(".categorie").show();
    }

});


$('.experience').click(function () {

    if (click == 0) {
        click++;
        $(this).animate({
            width: '600px',
            height: '600px',
        });
        $("#name").hide();
        $(".categorie").hide();
        $(this).html('2018: apprenant Developpeur Web Grande ecole du numerique Fourmies<br>' +
            '2016-2018: Ouvrier du batiment polivalent (chantier d\'insertion) CCAS Fourmies<br>' +
            '2017: Technicien de maintenance Informatique stagiaire TEMIR IRFORMATIQUE Fourmies<br>' +
            '2016: Ouvrirer du batiment polivalent Stagiaire Bruyere Imobilier Fourmies<br>' +
            '2014: Manutensuinnaire Materne Boué2018: apprenant Developpeur Web Grande ecole du numerique Fourmies<br>' +
            '2016-2018: Ouvrier du batiment polivalent (chantier d\'insertion) CCAS Fourmies<br>' +
            '2017: Technicien de maintenance Informatique stagiaire TEMIR IRFORMATIQUE Fourmies<br>' +
            '2016: Ouvrirer du batiment polivalent Stagiaire Bruyere Imobilier Fourmies<br>' +
            '2014: Manutensuinnaire Materne Boué');
        $(this).show();

    } else {
        click = 0;
        $(this).animate({
            width: '200px',
            height: '200px',
        });
        $(this).html('<div class="categorie experience blue"><span class="fas fa-tools"></span>Experience</div>');
        $(".categorie").show();
        $("#name").show();

    }
});

$('.education').click(function () {

    if (click == 0) {
        click++;
        $(this).animate({
            width: '600px',
            height: '600px',
        });
        $("#name").hide();
        $(".categorie").hide();
        $(this).html('2012: BTS Assistant Technique de l\'Ingenieur<br>2010: Bac STI Genie Electrotechnique<br>' +
            '2007: BEP metier de l\'electricite\n')
        $(this).show();

    } else {
        click = 0;
        $(this).animate({
            width: '200px',
            height: '200px',
        });
        $(this).html('<div class="categorie education rouge"><span class="fas fa-book"></span>Education</div>');
        $(".categorie").show();
        $("#name").show();

    }
});


$('.blog').click(function () {

    if (click == 0) {
        click++;
        $(this).animate({
            width: '600px',
            height: '600px',
        });
        $("#name").hide();
        $(".categorie").hide();
        $(this).show();
        $(this).css({justifyContent:"space_around",flexWrap:"wrap"});
        $(this).html("<a href='https://fr.wikipedia.org/wiki/HTML5' target='_blank'><img src='img/HTML5.png'></a>" +
            "<a href='https://fr.wikipedia.org/wiki/Feuilles_de_style_en_cascade' target='_blank'><img src='img/css3.png'></a>" +
            "<a href='https://fr.wikipedia.org/wiki/JavaScript' target='_blank'><img src='img/js.png'></a>" +
            "<a href='https://fr.wikipedia.org/wiki/JQuery' target='_blank'><img src='img/jquery.png'></a>" +
            "<a href='https://fr.wikipedia.org/wiki/Bootstrap_(framework)' target='_blank'><img src='img/bootstrap.png'></a>")
    } else {
        click = 0;
        $(this).animate({
            width: '200px',
            height: '200px',
        });
        $(this).html('<div class="categorie blog vert"> <span class="fas fa-comments"></span>Languages informatiques</div>');
        $(".categorie").show();
        $("#name").show();

    }
});

$('.social').click(function () {

    if (click == 0) {
        click++;
        $(this).animate({
            width: '600px',
            height: '600px',
        });
        $("#name").hide();
        $(".categorie").hide();
        $(this).show();
        $(this).html('<a href="https://github.com/spilmont" target="_blank"><img src="img/github.png"></a>' +
            '<a href="https://www.linkedin.com/in/andr%C3%A9-spilmont-54055a175/" target="_blank"><img src="img/logo-linkedin.png"></a>')

    } else {
        click = 0;
        $(this).animate({
            width: '200px',
            height: '200px',
        });
        $(this).html('<div class="categorie social Orange"><span class="far fa-handshake"></span>Social Menu</div>');
        $(".categorie").show();
        $("#name").show();

    }
});

$('.profil').click(function () {

    if (click == 0) {
        click++;
        $(this).animate({
            width: '600px',
            height: '600px',
        });
        $("#name").hide();
        $(".categorie").hide();
        $(this).show();
        $(this).html('Developpeur Web Junior');
    } else {
        click = 0;
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

    if (click == 0) {
        click++;
        $(this).animate({
            width: '600px',
            height: '600px',
        });
        $("#name").hide();
        $(".categorie").hide();
        $(this).show();

    } else {
        click = 0;
        $(this).animate({
            width: '200px',
            height: '200px',
        });
        $(".categorie").show();
        $("#name").show();
    }
});

$('.portfolio').click(function () {

    if (click == 0) {
        click++;
        $(this).animate({
            width: '600px',
            height: '600px',
        });
        $("#name").hide();
        $(".categorie").hide();
        $(this).show();
        $(this).html('<a href="https://spilmont.github.io/Memory-js-ameliore/index.html"><img src="#" alt="memory"></a>' +
            '<a href="https://spilmont-andre.000webhostapp.com/countdown/index.html"><img src="#" alt="countdown"></a>')

    } else {
        click = 0;
        $(this).animate({
            width: '200px',
            height: '200px',
        });
        $(this).html('<div class="categorie portfolio Orange"><span class="fab fa-dropbox"></span>Portfolio</div>');
        $(".categorie").show();
        $("#name").show();

    }
});




