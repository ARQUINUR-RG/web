/*
 * irgScript.js
 * Developed by IRG Studio
 * 
 * It requires jQuery, Bootstrap and Colorbox
 *  
 * This script it's just a class based mini-framework for fast aplication of
 * certain javascripts technologies.
 * The script it's starting, soon I'll include more fast scripts.
 * 
 * =============================================================================
 *  Index
 * =============================================================================
 * 
 * Store variables
 * - Current url location                                      (url)
 * - Current web explorer width                                (width)
 *
 * Document functions
 * - Avoid `console` errors in browsers that lack a console.
 * - Bootstrap active class for nav menu
 *
 * Class based functions
 * - jQUery History Back                                       (.historyBack)
 * - jQuery Confirm Delete                                     (.confirmDelete)
 * - jQuery Fluid Jumps                                        (.fluidJump)
 * - jQuery Colorbox Image                                     (.colorbox)
 * - jQuery Colorbox Image Group                               (.colorboxGroup)
 * - Bootstrap tooltip for hyperlinks with title text          (.tipHover)
 * - Bootstrap popover with html from data-content             (.popoverHTML)
 * - Bootstrap popover with an image from href content         (.popoverImg)
 */

/*
 * =============================================================================
 *  Store useful variables
 * =============================================================================
 */

// Current url location
    var url = window.location.pathname;

// Current web explorer width
    var width = $(document).width();

/*
 * =============================================================================
 *  Document functions
 * =============================================================================
 */

$(function(){

    /*
     * Avoid `console` errors in browsers that lack a console.
     * Thanks to HTML5 Boilerplate for this script
     */
        (function() {
            var method;
            var noop = function () {};
            var methods = [
                'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
                'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 
                'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time',
                'timeEnd', 'timeStamp', 'trace', 'warn'
            ];
            var length = methods.length;
            var console = (window.console = window.console || {});
            while (length--) {
                method = methods[length];
                // Only stub undefined methods.
                if (!console[method]) {
                    console[method] = noop;
                }
            }
        }());

    /*
     * Bootstrap active class for nav menu
     * -------------------------------------------------------------------------
     * Add class "active" to li element from an ul used for page navigation.
     * The ul tag must have the ".nav" class, with "a" tags in "li" elements. 
     * eg:
     * <ul class="nav">
     *     <li><a href="/example"</a></li>
     * </ul>
     */
        urlRegExp = new RegExp(url == 
            '/' ? window.location.origin + '/?$' : url.replace(/\/$/,''));
        // now grab every link from the navigation
        $('.nav a').each(function(){
            // and test its normalized href against the url pathname regexp
            if(urlRegExp.test(this.href.replace(/\/$/,''))){
                $(this).parent().addClass('active');
            }
        });

});

/*
 * =============================================================================
 *  Class based functions
 * =============================================================================
 */

/*
 * jQuery History Back
 * -----------------------------------------------------------------------------  
 * Add "historyBack" class in a clickable element.
 * eg: <a href="# class="historyBack">Back</a> 
 */
    $(".historyBack").click(function(event) {
        event.preventDefault();
        history.back(1);
    });

/*
 * jQuery ConfirmDelete
 * -----------------------------------------------------------------------------  
 * Add "fluidJump" class in a clickable element.
 * eg: <a href="#" class="confirmDelete">Delete</a> 
 */
    $('.confirmDelete').on('click', function(event) {
        event.preventDefault();
        var $dishesPath = $(this).attr('href');
        if(confirm('¿Seguro que quiere borrar este elemento?')) {
            window.location = $dishesPath;
        }
    });

/*
 * jQuery Fluid Jumps
 * -----------------------------------------------------------------------------  
 * Add "fluidJump" class in a clickable element.
 * eg: <a href="#sectionid" class="fluidJump">Go to section</a> 
 */
    $('.fluidJump').on('click', function(event) {
        event.preventDefault();
        var offset = $($(this).attr('href')).offset().top;
        // Number value is the animation time in miliseconds
        $('html, body').animate({scrollTop:offset}, 500);
    });

/*
 * jQuery Colorbox
 * -----------------------------------------------------------------------------  
 * Add "colorbox" or "colorboxGroup" classes in a clickable element.
 * eg: <a href="#sectionid" class="fluidJump">Go to section</a> 
 */

    $(".colorbox").colorbox({
        transition:"elastic",   // options: elastic | fade | none
        speed: 350,             // speed in miliseconds
        maxWidth:"75%",
        maxHeight:"75%"
    });
    
    $(".colorboxGroup").colorbox({
        rel:'group',
        transition:"elastic",   // options: elastic | fade | none
        speed: 350,             // speed in miliseconds
        maxWidth:"75%",
        maxHeight:"75%"
    });

/*
 * Bootstrap tooltip for hyperlinks with title text
 * -----------------------------------------------------------------------------
 * Add "tipHover" class on hyperlink.
 * eg: <a class="tipHover" href="http://example.net" 
 *        title="Hello I'm a tooltip">Tooltip example</a>
 */
    $('.tipHover').tooltip({
        html: false,
        placement: 'top',   // options: top | bottom | left | right
        trigger: 'hover'    // options: click | hover | focus | manual 
    });

/*
 * Bootstrap popover with html from data-content.
 * -----------------------------------------------------------------------------
 * Use data-title="something" if you aren't using an "a" tag with title.
 * Add "popoverImg" class in a clickable element.
 * eg: <a href="#" title="example title" data-content="some html">
 *        Show Popover with html content</a>
 */
    $('.popoverHTML').on('click', function(event) {
        event.preventDefault();
    }).popover({
        html: true,
        placement: 'bottom',    // options: top | bottom | left | right
        trigger: 'click'        // options: click | hover | focus | manual 
    });

/*
 * Bootstrap popover with an image from href content.
 * -----------------------------------------------------------------------------
 * Add "popoverImg" class in a clickable element.
 * eg: <a href="img/example.jpg" title="Image title">
 *        Show Popover with example image</a>
 */
    var img;    
    $('.popoverImg').on('click', function(event) {
        event.preventDefault();
        img = $(this).attr('href');         
    }).popover({
        content: function(){return '<img src="' + img + '" />';},
        html: true,
        placement: 'bottom',    // options: top | bottom | left | right
        trigger: 'click'
    });