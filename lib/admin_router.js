ArchyController = RouteController.extend({
    onBeforeAction: function() {
        //check if it is Archy
        Meteor.call("isItArchy", function(V, result) {
            if (result === true) {

            } else {
                //go to 404
                Router.go("/");
            }
        });
        this.next();
    },
    layoutTemplate: "admin"
});

ArchySanctuaryController = ArchyController.extend(listExtension({
    "articlesForArchy": {
        db: Article,
        name: "articles"
    }
}));


EditorOfArchyController = ArchyController.extend(singleExtension({
    "singleArticleById": {
        db: Article,
        name: "article",
        subOption: function(self) {
            //self normally refers to the controller.
            return self.params.id
        }
    }
}));

Router.route('/archy', {
    name: 'ArchySanctuary',
    controller: ArchySanctuaryController
});

Router.route('/archy/:id', {
    name: 'editorOfArchy',
    controller: EditorOfArchyController
});