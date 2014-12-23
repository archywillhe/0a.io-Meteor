//ಠωಠ is an incident, meow meow meow~
var ಠωಠ = homeLoaded;
ಠωಠ.addCBforUniversal(function() {
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