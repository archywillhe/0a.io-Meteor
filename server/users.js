// set the first or the only user created as an admin
Meteor.startup(function () {
  Meteor.users.find().observe({
    added: function (id) {
      if (Meteor.users.find().count() === 1)
        Meteor.users.update(id, { $set: { admin: true } });
    }
  });
});

Meteor.publish("additionalUsers", function () {
  return Meteor.users.find(this.userId, {fields: { _id: true, admin: true }});
});

