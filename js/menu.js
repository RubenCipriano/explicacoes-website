$('.navbar-menu-collapse').click(() => {
    $('.navbar-explicacoes')[0].classList.toggle('expand');
    if($('.navbar-explicacoes')[0].classList[1]) {
        $('.navbar-menu-collapse')[0].style.right = -20;
        $('.navbar-menu-collapse')[0].style.transform = "rotate(0deg)";
    }
    else {
        $('.navbar-menu-collapse')[0].style.right = -40;
        $('.navbar-menu-collapse')[0].style.transform = "rotate(180deg)";
    } 
})