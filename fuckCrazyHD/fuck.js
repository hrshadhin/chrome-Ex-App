$(document).ready(function() {
    //hide ratio alert box
    $('.xdr').hide();
    //add form for post request. when click on a torrent it will open newtab with post request
    $("<form id='fuckForm' target='_blank' action='https://www.crazyhd.com/index.php?page=newtopic' method='POST' style='display:none;'><input id='fuckId' type='hidden' value='' name='id' /> </form>").appendTo(document.body);
    
    //page script string
    var actualCode = '(' + function() {

        //modify a tag link
        window.changeLink = function(){
            //loop through each movie 
            $('.tbox').each(function() {
                var link = $(this).find('a');
                //if a tag have # link then change it
                if (link.attr('href') == '#') {
                    link.attr('href', '#0');
                }
            });
        }

        //function for modify a tag href behavior
        window.fuckyouCrazyHD = function(){
            //check if have movie list length
            if ($('.tbox').length) {
               window.changeLink();
            } 
            else {
                //if no movie then wait 1s and change the link           
               setTimeout(function() {
                   window.changeLink();
               },1000);
            }
        };

        //bind a event and check for movie container change      
        $('#results').bind("DOMNodeInserted",function(){
             window.fuckyouCrazyHD();
            console.log('fuck you crazyhd.....');
        });
       
        //override defualt function for movile link click
        window.runtopic = function(hash) {
            //set hidden id for wanted movie
            $('#fuckId').val(hash);
            //submit the form
            $('#fuckForm').submit();
            return false;
        };
    } + ')();';
    //create the script tag on the site
    var script = document.createElement('script');
    //set wanted scripts to the context
    script.textContent = actualCode;
    //add the script end of the body 
    (document.body).appendChild(script);
    //remove the script from extention container
    script.remove();

});
