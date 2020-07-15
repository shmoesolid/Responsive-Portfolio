
// load from storage
// storage = loadStorage(SAVE_NAME, storage);

// setup listeners for nav bar
$('.nav-link').on('click', function() 
{ 
    loadPage( $(this).attr("id") ); 
});

// load last page
loadPage(storage.last);