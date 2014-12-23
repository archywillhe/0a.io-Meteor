//ಠωಠ is an incident, meow meow meow~
var ಠωಠ = aboutExtension;
ಠωಠ.addCBforDefault(function() {
    ಠωಠ.buttons = [$(".about_0a"), $(".about_archy")];
    var _same_trigger = $(".same_trigger"),
        _about_archy = $("_about_archy"),
        archyhead = $(".archyhead_wrap"),
        contents = [$(".about_0a_content:eq(0)"), $(".about_archy_content:eq(0)")],
        number = 0,
        head_padding_btm = 200,
        button_init = function(button, fn) {
            button.on("click", function() {
                if ($(this).hasClass("not_selected")) {
                    $(this).removeClass("not_selected");
                    ಠωಠ.buttons[number].addClass("not_selected");
                    fn();
                }
            });
        },
        change = function(fn) {
            contents[number].stop().fadeOut(300, function() {
                number = (number + 1) % 2;
                if (fn !== null) {
                    fn();
                }
                contents[number].stop().fadeIn(300);
            });
        };
    button_init(ಠωಠ.buttons[0], function() {
        ಠωಠ.currentAbout = "0a";
        change(function() {
            archyhead.stop().animate({
                "padding-bottom": head_padding_btm + "px"
            }, {
                duration: 400,
                complete: function() {}
            })
        });
    });
    button_init(ಠωಠ.buttons[1], function() {
        ಠωಠ.currentAbout = "archy";
        //console.log(ಠωಠ.contents[1].height());
        var new_padding_btm = (contents[1].height() - $(".archyhead").height()) + head_padding_btm;
        archyhead.stop().animate({
            "padding-bottom": new_padding_btm + "px"
        }, {
            duration: 400,
            complete: function() {
                change(null);
            }
        });
    });
    _same_trigger.click(function() {
        _about_archy.trigger("click");
    })
});