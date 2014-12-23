//ಠωಠ is an incident, meow meow meow~
var ಠωಠ = aboutButton;
ಠωಠ.addCBforDefault(function() {
    ಠωಠ.isClosed = true;
    //define DOM
    var _window = $(window),
        _about_me = $(".about_me"),
        _about_trigger = $(".about_trigger");

    //behavior for $(".about_me")
    function behavior(link, fn) {
        this.link = link;
        this.fn = fn;
    }
    behavior.prototype.trigger = function() {
        this.fn();
        if (window.history.pushState) {
            window.history.pushState({
                    about: ಠωಠ.isClosed
                },
                "0a: Archy here.",
                "/" + this.link
            );
        }
    }

    //0 -> close, 1 -> open
    ಠωಠ.close_open = [
        new behavior("",
            function() {
                _about_me.css({
                    "opacity": "0"
                });
                setTimeout(function() {
                    _about_me.css({
                        "display": "none"
                    });
                    __0a("object").removeClass("open_to_the_left");
                    __0a("position", "center");
                }, 300);
            }
        ),
        new behavior("about",
            function() {
                __0a("object").addClass("open_to_the_left");
                setTimeout(function() {
                    _about_me.css({
                        "display": "block"
                    });
                    //setTimeout 10ms for strange css-transition behavoir in chrome
                    setTimeout(function() {
                        _about_me.css({
                            "opacity": "1"
                        });
                    }, 10);
                    __0a("position", "left");
                }, __0a("timeForSetTimeout")());
            }
        )
    ];

    //open if isClosed, close if 
    _about_trigger.click(function() {
        if (ಠωಠ.disabled) {
            return true;
        }
        //~~true -> 1, ~~false -> 0
        ಠωಠ.close_open[(~~ಠωಠ.isClosed)].trigger();
        ಠωಠ.isClosed = !ಠωಠ.isClosed;
        return false;
    });
    _window.on('popstate', function(event) {
        var state = !!event.originalEvent.state;
        if (ಠωಠ.isClosed === state) {
            show_about(state);
            ಠωಠ.isClosed = !state;
        }
    });
});

//close but do not animate (do not collapse)
ಠωಠ.closeExtension = function() {
    if (!ಠωಠ.isClosed) {
        $(".archyhead .about_me").css("display", "none");
        //console.log(__0a);
        __0a("object").removeAttr("style");
        __0a("object").removeAttr("style");
        ಠωಠ.isClosed = true;
    }

    if (ivExpected(aboutExtension, "currentAbout", "archy")) {
        aboutExtension.buttons[0].trigger("click");
    }
}

ಠωಠ.closeAndCollapseExtension = function() {
    if (!ಠωಠ.isClosed) {
        ಠωಠ.close_open[(~~ಠωಠ.isClosed)].trigger();
        aboutButton.isClosed = true;
    }
}

ಠωಠ.openExtension = function() {
    ಠωಠ.close_open[1].trigger();
    ಠωಠ.isClosed = false;
    ಠωಠ.disabled = true;
}