require(['gitbook'], function (gitbook) {
    gitbook.events.bind('page.change', function () {
        $('img').each(function (index, img) {
            let currentImg = $(img);
            currentImg.viewer({
                navbar: false,
                fullscreen: false,
                loop: false,
                rotatable: false,
            });
            currentImg.addClass('base-img');
        });
    });
});