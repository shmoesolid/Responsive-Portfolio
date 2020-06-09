
// setup listeners for nav bar
for (var i = 0; i < pages.length; i++)
    $('#'+pages[i].id).on('click', function() { toggleDisplay(this.id); });