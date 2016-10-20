/**
 * Created by user on 26/09/2016.
 */
    jQuery(document).ready(function ($) {

        //MODALS
        // $('#toc-link').on('click', function(event){
        //     event.preventDefault();
        //     $('#tocModal').modal('show');
        // });

        //POPOVERS
        $('a[data-toggle="popover"]').click(function(event){
            event.preventDefault();
            $(this).popover({
                'placement' : 'bottom',
                'html' : true,
                content: function () {
                    return $('#expertise-popover-content').html();
                },
                'template': expertisePopover('my-popover')
            });
            function expertisePopover(className){
                return '<div class="popover ' + className + '" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>';
            }
        });
        $('.upload-file-tab-image').on('click',function(){
            $(this).popover({
                'placement' : 'left',
                'left': '50px;',
                'top': '2540px',
                'html' : true,
                'title' : 'incorrect word count',
                content: function () {
                    return $('#upload-error-popover').html();
                },
                'template': errorPopover('upload-error-popover')
                });
                function errorPopover(className){
                    return '<div class="popover ' + className + '" role="tooltip"><button type="button" class="close" data-dismiss="alert" aria-label="Close">'+
                            '<span aria-hidden="true"><img src="assets/images/x.svg" alt="" class="close-img"></span></button><h3 class="popover-title"></h3>'+
                            '<div class="popover-content"></div></div>';
                }
        });
        $('.lang-tab-img').on('click',function(){
            $(this).popover({
                'placement' : 'right',
                // 'left': '50px;',
                // 'top': '2540px',
                'html' : true,
                'title' : 'total word count: <span class="blue-text">300</span>',
                content: function () {
                    return $('#total-word-count').html();
                },
                'template': twcPopover('total-word-count')
            });
            function twcPopover(className){
                return '<div class="popover ' + className + '" role="tooltip"><span class="close-text">CLOSE</span><button type="button" class="close" data-dismiss="alert" aria-label="Close">'+
                    '<span aria-hidden="true"><img src="assets/images/x.svg" alt="" class="close-img"></span></button><h3 class="popover-title"></h3>'+
                    '<div class="popover-content"></div></div>';
            }
            });

       // $('.lang-wrap input').on('click', function () {
       //    $(this).next('span.checked').toggle();
       // });
        // MY PROJECTS TABLES


            $('.table .fa-chevron-down').on('click',function(){

                $(this).parent().parent().next().fadeIn();

            });
            $('.table .fa-chevron-up').on('click',function(){

            $(this).closest('tr.more-info').fadeOut();
                console.log($(this).closest('tr'));
        });

        //survey tab color change

            var input = '.survey-box .service-content .form-group input';
            $(input).on('click',function(){
            //console.log($(input).parent());
            var closest = $(input).parents().find('.service-tab').addClass('completed');
            console.log(closest);
            });

        });