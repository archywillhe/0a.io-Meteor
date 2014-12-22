//ↂωↂ is an incident, meow meow meow~
var ↂωↂ = homeLoaded;
ↂωↂ.addCBforUniversal(function() {
    Tracker.autorun(function(e) {
        var data = Router.current().data();
        if (data.articles.length > 0) {
            Tracker.afterFlush(function() {
                loadingControl.doneLoading();
            });
            e.stop();
        }
    })
});