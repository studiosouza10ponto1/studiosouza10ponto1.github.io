var updateScheme;
$(function () {
    updateScheme = function (color) {
        // var r = Math.round(color.rgb[0]),
        //   g = Math.round(color.rgb[1]),
        //   b = Math.round(color.rgb[2]),
        // var styles = 'body{background: #' + color + '}';
        var themeColor = '.theme-color {color: #' + color + ' !important;}';
        var themeBorderColor = '.theme-border-color {border-color: #' + color + ' !important;}';
        var themeBgColor = '.theme-bg-color {background-color: #' + color + ' !important;}';
        var themeElBorStyles = '.button, .bord:hover, .swiper-slide .gallery:before, .eye_hv:hover,' +
            ' .SumoSelect:focus > .CaptionCont, .SumoSelect:hover > .CaptionCont, .SumoSelect.open > .CaptionCont,' +
            ' .simple-input:focus, .simple-textarea:focus, .simple-textarea:hover, .simple-input:hover,' +
            '.blogIteams:hover .blogIteams_img, .servicesHair:hover, .gallery_Iteams a:before,' +
            '.filter_btn .spusok.active i, .filter_btn .list.active i, .pagination_shop li.active a,' +
            '.checkbox-entry.radio input:checked+span:before, .button.type_3,' +
            '.button.type_5, .discount-banners-desc.type-2, .discount-banners .bannerPackage:hover .discount-banners-desc,' +
            '.sidebar, .button.type_4, .pagination_shop li a:hover, .services_iteams.first .servicesIcon:before,' +
            '.portfolioImg.active:before, .services_iteam:hover:before {border-color: #' + color + ';}';
        var themeElBgStyles = '.social li a, .swiper-button-prev.type-1, .swiper-button-next.type-1, .hidden_, .eye_hv:before,' +
            ' .sl-wrapper .sl-navigation button.sl-prev, .sl-wrapper .sl-navigation button.sl-next,' +
            '.hov2:before, .galleryHome2_Iteams.hov2:hover:before, .bf_af:before, .bf_af:after, .our_pr_iteams img,' +
            '.service:hover, .our_product:before, .servicesIcon, ' +
            '.masters:hover .masters_descr, .ourShop_icons i, .social_icon li a, .shop:before,' +
            '.gallery.element-item:after, .swiper-pagination-bullet-active, .skillbar-bar, .skillbar-bar:after,' +
            '.skills_block .social li a, .slider-range .ui-slider .ui-slider-range,' +
            '.slider-range .ui-slider .ui-slider-handle, .my_product .social li a, .my_productDescr ul li:before,' +
            '.whoWe_are_descr .social a, .button.type_2, ' +
            '.gallerySwipper-pagination .swiper-pagination-bullet-active,' +
            '.button.type_4, .discount-banners .bannerPackage:hover .discount-banners-desc:before, .discount-banners .bannerPackage:hover .discount-banners-desc:after,' +
            '.swiper-pagination.type-2 .swiper-pagination-bullet-active, .busket-amount,' +
            '.calendar-highlights-item:before, .button:hover, .button.type_3:hover,' +
            '.button.type_5:hover, .product-view-eye, .checkbox-entry.radio input:checked+span:before,' +
            '.swiper-pagination.type-2 .swiper-pagination-bullet, .swiper-pagination.type-2 .swiper-pagination-bullet:hover,' +
            '.swiper-pagination.type-3 .swiper-pagination-bullet:hover, .swiper-pagination.type-3 .swiper-pagination-bullet-active,' +
            '.gallerySwipper-pagination .swiper-pagination-bullet:hover, .gallerySwipper-pagination .swiper-pagination-bullet-active,' +
            '.button.type_3.filled {background-color: #' + color + ';}';
        var themeElColorStyles = '.button, .hov:hover .h4, .hov:hover .h6, .hov:hover .h5, .hov:hover .h3, .btnGallery.is-checked,' +
            ' .price span b, .tab-menu.active, .ourShop_Iteams:hover .ourShop_Iteams_Descr .h5, .whoWe_are_descr i,' +
            '.founded span, .filter_btn .spusok.active i, .filter_btn .list.active i, .checkbox-entry input:checked + span:after,' +
            '.productsWrapper_price .price span, .pagination_arrows:hover, .content_block em,' +
            '.star_rating li, .cn_title .icon i, .shopping_cart .price span, .total, .total_price span,' +
            '.checkout_header ul li.active, .recept i, .salon_iteams p span,' +
            '.simple-text .section-title, .quotes:before, .quotes:after, .footer-logo .h5,' +
            '.copyright a, .clietns em, .button.type_3, .packageFor .discount, .button.type_5,' +
            '.discount-banners-desc p span, .advertising .simple-text span, .busket-price i,' +
            '.nav-item-link:hover, .nav-item-link.active, .sign-up a:hover,' +
            '.fc-toolbar h2, .our_pr_iteams .price span, .servicesHair:hover .servicesHair-title, ' +
            '.popup-text b, .popup-text em, .ourTeam_3_1 .date, .cattegory i, .product .price span,' +
            '.button.type_4:hover, .banner_content.type-5 .h1, .info span:first-child,' +
            '.blogIteams:hover .blogDescr .h5, .ourTeam_3_1 .slide-count, ' +
            '.header.vertical .busket:hover p, .header.vertical.scrolled .busket:hover p,' +
            '.checkbox-entry.radio input:checked+span, .btnGallery:hover, .tab-menu:hover,' +
            '.busket:hover .busket-price, .header.transparent.scrolled .busket:hover .busket-price,' +
            '.sub-menu li a.active, .info a:hover {color: #' + color + ';}';
        $('#color-scheme-inline').html(themeColor + themeBorderColor + themeBgColor +
            themeElBorStyles + themeElBgStyles + themeElColorStyles);
    };

    var jscolorValue = $(".jscolor").val();
    updateScheme(jscolorValue);

    function replaceClass(selector, classContains, newClass){
        var regExp = new RegExp("\\b\\S*" + classContains + "\\S*\\b", "gi");
        selector.removeClass (function (index, className) {
            if(className.match (regExp)) return (className.match (regExp)).join(' ');
            else return '';
        }).addClass(newClass);
    }

    replaceClass($('body'), 'font-1-', $('#font-title').val().split('@')[1]);
    replaceClass($('body'), 'font-2-', $('#font-text').val().split('@')[1]);

    WebFont.load({
        google: {
            families: [$('#font-title').val().split('@')[0], $('#font-text').val().split('@')[0]]
        }
    });

    $('#font-title').on('change', function () {
        replaceClass($('body'), 'font-1-', $(this).val().split('@')[1]);
        WebFont.load({
            google: {
                families: [$(this).val().split('@')[0]]
            }
        });
    });

    $('#font-text').on('change', function () {
        replaceClass($('body'), 'font-2-', $(this).val().split('@')[1]);
        WebFont.load({
            google: {
                families: [$(this).val().split('@')[0]]
            }
        });
    });

    //theme config
    $('.theme-config .open-config').on('click', function(){
        $('.theme-config').toggleClass('active');
    });

});