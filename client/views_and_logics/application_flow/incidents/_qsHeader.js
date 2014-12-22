//ↂωↂ is an incident, meow meow meow~
var ↂωↂ = qsHeader;
ↂωↂ.addCBforDefault(function() {
    //defines doms and variables used for other incidents
    ↂωↂ._0a = {
        object: $(".archyhead .central"),
        position: "center",
        current_article: null,
        timeForSetTimeout: function() {
            if (ↂωↂ._0a.position === "center") {
                return 400;
            } else {
                return 0;
            }
        }
    }
});

ↂωↂ.addCBforMobile(function() {

});

//so that other incidents can retrieve and change the value of ._0a
__0a = function(key, value) {
    if (value === undefined) {
        //simply return the value
        return ↂωↂ._0a[key]
    } else {
        //modify the value
        return ↂωↂ._0a[key] = value
    }
}