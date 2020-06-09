
// setup listeners for nav bar
$('.nav-link').on('click', function() 
{ 
    loadPage( $(this).attr("id") ); 
});

// load default page
loadPage(pages[0].id);