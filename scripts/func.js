
/**
 * 
 * @param {string} pageToShow 
 */
function loadPage(pageToShow)
{
    
    // load from the page but only from main tag within
    ELM_LOADER.load(pageToShow +".html main", function( response, status, xhr )
    {
        // handle if error
        if ( status == "error" ) 
            ELM_LOADER.html(
                "<h1 class='text-center'>" +
                    "Error loading:" +
                    "<br />"+ pageToShow +".html" + 
                    "<br />Status: "+ xhr.status + 
                    "<br />Text: "+ xhr.statusText + 
                "</h1>"
            );
    });

    // handle active class of nav bar with each item
    for(var i = 0; i < pages.length; i++)
    {
        // readability
        var cur = pages[i];

        // not active, remove active class
        if ( cur.id != pageToShow) cur.element.removeClass('active');
            
        // active, add active
        else cur.element.addClass('active');
    }
}
