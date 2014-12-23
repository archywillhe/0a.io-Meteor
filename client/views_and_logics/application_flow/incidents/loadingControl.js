//ಠωಠ is an incident, meow meow meow~
var ಠωಠ = loadingControl;
ಠωಠ.addCBforDefault(function() {
    ಠωಠ.loader = $(".being_loaded");
});
ಠωಠ.loading = function(item) {
    ಠωಠ.loader.css("display", "block");
    Session.set("contentBeingLoaded", item);
};
ಠωಠ.doneLoading = function() {
    ಠωಠ.loader.css("opacity", 0);
    setTimeout(function() {
        ಠωಠ.loader.css({
            "display": "none",
            "opacity": 1
        });
    }, 500);
}