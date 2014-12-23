//ಠωಠ is an incident, meow meow meow~
var ಠωಠ = qsHeader;
ಠωಠ.addCBforDefault(function() {
    //defines doms and variables used for other incidents
    ಠωಠ._0a = {
        object: $(".archyhead .central"),
        position: "center",
        current_article: null,
        timeForSetTimeout: function() {
            if (ಠωಠ._0a.position === "center") {
                return 400;
            } else {
                return 0;
            }
        }
    }
});

ಠωಠ.addCBforMobile(function() {

});

//so that other incidents can retrieve and change the value of ._0a
__0a = function(key, value) {
    if (value === undefined) {
        //simply return the value
        return ಠωಠ._0a[key]
    } else {
        //modify the value
        return ಠωಠ._0a[key] = value
    }
}