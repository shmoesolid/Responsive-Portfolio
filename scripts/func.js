
/**
 * 
 * @param {string} pageToShow 
 */
function toggleDisplay(pageToShow)
{
    // load from the page but only from main tag within
    ELM_LOADER.load(pageToShow +".html main", function( response, status, xhr )
    {
        // handle if error
        if ( status == "error" ) 
            ELM_LOADER.html(
                "<h1 class='text-center'>" +
                    "ERROR LOADING: " + xhr.status + " " + xhr.statusText + 
                "</h1>"
            );
    });

    // handle active class of nav bar with each item
    for(var i = 0; i < pages.length; i++)
    {
        // readability
        var cur = pages[i];

        // not active, remove active class
        if ( cur.id != pageToShow) 
        {
            cur.element.removeClass('active');
            console.log("removing active from: " + cur.id);
        }
            
        // active, only add if doesn't have it
        else if ( !cur.element.hasClass('active') ) 
        {
            cur.element.addClass('active');
            console.log("adding active on: " + cur.id);
        }

        else
        console.log("not doing anything on: " + cur.id);
    }
}
