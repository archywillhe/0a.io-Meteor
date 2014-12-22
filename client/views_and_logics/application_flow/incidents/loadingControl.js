//ↂωↂ is an incident, meow meow meow~
var ↂωↂ = loadingControl;
ↂωↂ.addCBforDefault(function() {
    ↂωↂ.loader = $(".being_loaded");
});
ↂωↂ.loading = function(item) {
    ↂωↂ.loader.css("display", "block");
    Session.set("contentBeingLoaded", item);
};
ↂωↂ.doneLoading = function() {
    ↂωↂ.loader.css("opacity", 0);
    setTimeout(function() {
        ↂωↂ.loader.css({
            "display": "none",
            "opacity": 1
        });
    }, 500);
}