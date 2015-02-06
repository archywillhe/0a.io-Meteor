Meteor.startup(function() {
     NODE_ENV = process.env.NODE_ENV;
     
     //remove twitter config for login if you have accidentally screwed it up~

     //Accounts.loginServiceConfiguration.remove({
     //  service: "twitter"
     //});
 });

