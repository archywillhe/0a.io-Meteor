//ↂωↂ is an incident, meow meow meow~
var ↂωↂ = aboutButton;
ↂωↂ.addCBforDefault(function() {
    ↂωↂ.isClosed = true;
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
                    about: ↂωↂ.isClosed
                },
                "0a: Archy here.",
                "/" + this.link
            );
        }
    }

    //0 -> close, 1 -> open
    ↂωↂ.close_open = [
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
        if (ↂωↂ.disabled) {
            return true;
        }
        //~~true -> 1, ~~false -> 0
        ↂωↂ.close_open[(~~ↂωↂ.isClosed)].trigger();
        ↂωↂ.isClosed = !ↂωↂ.isClosed;
        return false;
    });
    _window.on('popstate', function(event) {
        var state = !!event.originalEvent.state;
        if (ↂωↂ.isClosed === state) {
            show_about(state);
            ↂωↂ.isClosed = !state;
        }
    });
});

//close but do not animate (do not collapse)
ↂωↂ.closeExtension = function() {
    if (!ↂωↂ.isClosed) {
        $(".archyhead .about_me").css("display", "none");
        //console.log(__0a);
        __0a("object").removeAttr("style");
        __0a("object").removeAttr("style");
        ↂωↂ.isClosed = true;
    }

    if (ivExpected(aboutExtension, "currentAbout", "archy")) {
        aboutExtension.buttons[0].trigger("click");
    }
}

ↂωↂ.closeAndCollapseExtension = function() {
    if (!ↂωↂ.isClosed) {
        ↂωↂ.close_open[(~~ↂωↂ.isClosed)].trigger();
        aboutButton.isClosed = true;
    }
}

ↂωↂ.openExtension = function() {
    ↂωↂ.close_open[1].trigger();
    ↂωↂ.isClosed = false;
    ↂωↂ.disabled = true;
}