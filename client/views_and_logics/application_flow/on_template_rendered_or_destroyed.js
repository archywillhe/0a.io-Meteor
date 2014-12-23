function mobileView() {
    return ($(window).width() < 768);
}

var isMobile = mobileView();

Template.qsHeader.rendered = function() {
    loadingControl.default();
    if (!isMobile) {
        qsHeader.default();
        aboutButton.default();
        aboutExtension.default();
    } else {
        qsHeader.mobile();
    }
}

Template.about.created = function(){
    window.content = "about";
    qsHeader.addCBforUniversal(function() {
        loadingControl.loading("about page");
    });
}

Template.about.rendered = function() {
    qsHeader.addCBforUniversal(function() {
        loadingControl.doneLoading();
    });
    if (!isMobile) {
        aboutButton.addCBforDefault(function() {
            aboutButton.openExtension();
        });
    } else {

    }
}

Template.singleArticle.rendered = function() {
    //window.content is for codes in eval(data.article.head);
    //line 8 of articleRendered.js
    window.content = "article";
    aboutButton.disabled = true;
    if (!isMobile) {
        qsHeader.addCBforDefault(function() {
            loadingControl.loading("an article");
            aboutButton.closeExtension();
            articleLoaded.default();
        });
    } else {
        qsHeader.addCBforMobile(function() {
            articleLoaded.mobile();
        });
    }
}

Template.singleArticle.destroyed = function() {
    $(".archywrap").removeAttr("style");
    $(".page_meta_info").css("opacity", 0);
    Session.set("articleReadyToRender", false);
    if (!isMobile) {
        var image = document.getElementsByClassName('article_meta_cover_picture')[0];
        image.parentNode.removeChild(image);
    }
}

Template.homeLists.created = function() {
    window.content = "home";
    aboutButton.disabled = false;
    qsHeader.addCBforUniversal(function() {
        loadingControl.loading("home page");
    });
}

Template.homeLists.rendered = function() {
    qsHeader.addCBforUniversal(function() {
        homeLoaded.universal();
    });
    if (!isMobile) {
        aboutButton.addCBforDefault(function() {
            aboutButton.closeAndCollapseExtension();
        });
    }
}

Template.changelog.created = function() {
    qsHeader.addCBforUniversal(function() {
        loadingControl.loading("changelog");
    });
}

Template.changelog.rendered = function() {
    qsHeader.addCBforUniversal(function() {
        loadingControl.doneLoading();
    });
}

Template.ArchySanctuary.rendered = function() {
    qsHeader.addCBforUniversal(function() {
        loadingControl.doneLoading();
    });
}