ArchyController = RouteController.extend({
  onBeforeAction: function() {
    this.autorun = Tracker.autorun(function () {
      // if user is logged in and they are an admin, redirect to sanctury
      if (Meteor.user() && Meteor.user().admin) {
        // already logged in? redirect to sanctury
        if (! Router.current().requiresLogin)
          Router.go("/archy");
      } else {
        // not admin or not logged in
        if (Router.current().requiresLogin) {
          // and current route requires admin bits
          // prompt to login
          Router.go("/admin");
        }
      }
    });
    this.next();
  },
  onStop: function () {
    // clean up the autoruns
    this.autorun.stop();
  },
  layoutTemplate: "admin",
  requiresLogin: true
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

AdminLoginController = ArchyController.extend({
  layoutTemplate: "admin",
  waitOn: function () {
    return Meteor.subscribe("usersCount");
  },
  requiresLogin: false
});

Router.route('/archy', {
    name: 'ArchySanctuary',
    controller: ArchySanctuaryController
});

Router.route('/archy/:id', {
    name: 'editorOfArchy',
    controller: EditorOfArchyController
});

Router.route('/admin', {
    name: 'adminLoginForm',
    controller: AdminLoginController
});

