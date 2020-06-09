
// setup listeners for nav bar
//for (var i = 0; i < pages.length; i++)
//    pages[i].element.on('click', function() { toggleDisplay($(this).attr("id")); });

$('.nav-link').on('click', function() 
{ 
    loadPage( $(this).attr("id") ); 
});