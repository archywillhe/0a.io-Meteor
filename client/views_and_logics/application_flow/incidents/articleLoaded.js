//ↂωↂ is an incident, meow meow meow~
var ↂωↂ = articleLoaded;
ↂωↂ.addCBforDefault(function() {
    Tracker.autorun(function(e) {
        var data = Router.current().data();
        if (data.article !== undefined) {
            if (data.article.foot !== undefined) {
                Session.set("articleReadyToRender", true);
                e.stop();
                ↂωↂ.data = data;
                Tracker.afterFlush(function() {
                    loadingControl.doneLoading();
                    $(".archywrap").css("background-color", "#f3f3f3");
                    var page_meta_info = $(".page_meta_info");
                    setTimeout(function() {
                        __0a("position", "left");
                        page_meta_info.css({
                            opacity: 1
                        });
                        articleRendered.default();
                    }, __0a("timeForSetTimeout")());

                    //reset position of page_meta_infor when cover image loaded.
                    $(".article_meta_cover_picture").on('load', function() {
                        var margin_top = -(page_meta_info.height() / 2);
                        page_meta_info.css({
                            "margin-top": margin_top
                        });
                    }).each(function() {
                        if (this.complete) {
                            $(this).trigger('load');
                        }
                    });
                });
            }
        }
    });
});
ↂωↂ.mobile = function() {
    Tracker.autorun(function(e) {
        var data = Router.current().data();
        if (data.article !== undefined) {
            if (data.article.foot !== undefined) {
                Session.set("articleReadyToRender", true);
                e.stop();
                ↂωↂ.data = data;
                Tracker.afterFlush(function() {
                    loadingControl.doneLoading();
                    $(".archywrap").css("background-color", "#f3f3f3");
                    articleRendered.default();
                });
            }
        }
    });
}