Router.configure({
    trackPageView: true,
    layoutTemplate: "basic",
    onAfterAction: function() {
        if (!Meteor.isClient) {
            return;
        }
        SEO.set({
            meta: {
                'author': 'Archy Wilhes'
            },
            og: {
                'website': 'https://0a.io'
            }
        })
    }
});


HomeListsController = RouteController.extend(listExtension({
    "articles": {
        db: Article,
        subOption: 10
    }
}));

ChangelogController = RouteController.extend(listExtension({
    "changelog": {
        db: Changelog
    }
}));

ArticleController = RouteController.extend(singleExtension({
    "singleArticleBySlug": {
        db: Article,
        name: "article",
        subOption: function(self) {
            //self normally refers to the controller.
            return self.params.slug;
        }
    }
}));

Router.route('/', {
    controller: HomeListsController,
    name: "HomeLists",
    onAfterAction: function() {
        if (!Meteor.isClient) {
            return;
        }
        SEO.set({
            title: "0a: Archy here.",
            meta: {
                'description': "0a is a N dimensional object created by commingling 0s and 1s with unicorn potions that taste nothing like unbrewed wine."
            },
            og: {
                'title': "0a: Archy here.",
                'description': "0a is a N dimensional object created by commingling 0s and 1s with unicorn potions that taste nothing like unbrewed wine."
            }
        });
    }
});

Router.route('/changelog', {
    controller: ChangelogController,
    name: "changelog",
    onAfterAction: function() {
        if (!Meteor.isClient) {
            return;
        }
        SEO.set({
            title: "0a: It just keeps undergoing changes.",
            meta: {
                'description': "This is the changelog for 0a.io."
            },
            og: {
                'title': "0a: It just keeps undergoing changes.",
                'description': "This is the changelog for 0a.io."
            }
        });
    }
});

Router.route('/about', {
    name: "about",
    data: function() {
        return {
            subtitle2: 'The painting is <a href="http://www.wikiart.org/en/jacek-yerka/dutch-landscape">Dutch Landscape</a> by <a href="http://en.wikipedia.org/wiki/Jacek_Yerka">Jacek Yerka</a>'
        }
    },
    onAfterAction: function() {
        if (!Meteor.isClient) {
            return;
        }
        SEO.set({
            title: "0a: About 0a & Archy",
            meta: {
                'description': "0a is a N dimensional object and Archy Wilhes is the sole contributor of it."
            },
            og: {
                'title': "0a: About 0a & Archy",
                'description': "0a is a N dimensional object and Archy Wilhes is the sole contributor of it."
            }
        });
    }

});


Router.route('/twitterlogin', {
    name: 'signin'
});

Router.route('/rss.xml', {
    where: 'server',
    name: 'rss',
    action: function() {
        var rss = new RSS();
        Article.find({
            published: true
        }, {
            sort: {
                publishedAt: -1
            }
        }).forEach(function(article) {
            rss.item({
                title: article.title,
                description: article.metaDescription,
                author: "Archy Wilhes",
                date: article.publishedAt,
                url: article.slug
            })
        });
        this.response.write(rss.xml());
        this.reponse.end();
    }
});


Router.route('/:slug', {
    controller: ArticleController,
    name: "singleArticle",
    onAfterAction: function() {
        if (!Meteor.isClient) {
            return;
        }
        var self = this;
        Tracker.autorun(function(e) {
            var article = self.data().article;
            if (article === undefined) {
                //go to 404
                // Router.go("/");
            }else{
                e.stop();
                SEO.set({
                    title: article.title2,
                    meta: {
                        'description': article.metaDescription,
                        'keywords': article.metaKeywords
                    },
                    og: {
                        'type': "article",
                        'title': article.title2,
                        'description': article.metaDescription,
                        'image': "https://0a.io" + article.coverImg,
                        "url": "https://0a.io/" + article.slug
                    }
                });
            }
        })
    }
});

Router.onBeforeAction('dataNotFound', {
    only: 'singleArticle'
});