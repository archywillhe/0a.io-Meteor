Meteor.publish('articles', function(l) {
    var limit = l || 0;
    return Article.find({
        published: true
    }, {
        fields: {
            title: 1,
            slug: 1,
            coverImg: 1,
            publishedAt: 1
        },
        sort: {
            publishedAt: -1
        },
        limit: limit
    });
});

Meteor.publish('articlesForArchy', function() {
    return Article.find({});
});

Meteor.publish('singleArticleById', function(id) {
    check(id, String);
    if (!this.userid) {
        this.ready();
    }
    return Article.find({
        _id: id
    }, {
        fields: {
            archySecret: 0
        }
    });
});

Meteor.publish('singleArticleBySlug', function(slug) {
    check(slug, String);
    return Article.find({
        slug: slug
    }, {
        fields: {
            archySecret: 0
        }
    });
});

Meteor.publish('changelog', function() {
    return Changelog.find({});
});

Meteor.publish('usersCount', function () {
  Counts.publish(this, 'usersCount', Meteor.users.find({},{fields: {archySecret: 0}}));
});

