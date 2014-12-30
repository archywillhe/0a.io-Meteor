Meteor.methods({
    doesArticleExist: function(slug) {
        return Article.first({
            slug: slug
        })
    },
    isItArchy: function() {
        if (Meteor.user()) {
            if (Meteor.user().admin == 1) {
                return true;
            }
        }
        return false;
    }
});

Article._collection.allow({
    insert: function() {
        return Meteor.call('isItArchy')
    },
    update: function() {
        return Meteor.call('isItArchy')
    },
    remove: function() {
        return Meteor.call('isItArchy')
    }
});

Changelog.allow({
    insert: function() {
        return Meteor.call('isItArchy')
    },
    update: function() {
        return Meteor.call('isItArchy')
    },
    remove: function() {
        return Meteor.call('isItArchy')
    }
});
