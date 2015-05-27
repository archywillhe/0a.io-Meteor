//ಠωಠ is an incident, meow meow meow~
var ಠωಠ = articleRendered;
ಠωಠ.addCBforDefault(function() {
    var data = articleLoaded.data,
        comment = $(".archycomment"),
        forward_to_post = $(".forward_to_post");
    $(".social_button").each(function() {
        $(this).on("click", function() {
            window.open(this.href, 'share',
                'left=20,top=20,width=500,height=400,toolbar=1,resizable=0');
            return false;
        });
    });

    forward_to_post.on("click", function() {
        $("body").animate({
            "scrollTop": $(".archysub").offset().top + "px"
        }, {
            duration: 400
        });
    });

    function clickloop(huh, huh2, txt, txt2) {
        comment.children("a").html(txt);
        comment.one("click", function() {
            $(".archycommentsection").css("display", huh);
            clickloop(huh2, huh, txt2, txt);
        });
    }

    comment.one("click", function() {
        $(window).off("scroll.comments");
        clickloop("none", "block", "Hide Comments", "Show Comments");
        disqusComment.default();
    });
     
    comments_offset = comment.offset().top - $(window).height() + 132;

    $(window).on("scroll.comments", function() {
        if ($(this).scrollTop() > comments_offset) {
            comment.trigger("click");
        }
    });
});
