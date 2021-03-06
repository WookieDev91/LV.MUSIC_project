function nav() {
    $('.main-nav a').on('click', function(e) {
        e.preventDefault();
        const $a = $(this);
        const href = $a.attr('href');
        const $section = $(href);

        $('html, body').animate({
            scrollTop : $section.offset().top
        }, 1000);
    })

    const $header = $('.page-header');
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 100) {
            $header.addClass('sticky');
        } else {
            $header.removeClass('sticky');
        }
    })
}

export { nav }