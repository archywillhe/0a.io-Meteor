#Behold! Here is the source code of 0a.io

<a href="http://0a.io"><img width="100px" src="http://0a.io/assets/img/0a.png" align="left" hspace="10" style="margin-top:13px"></a>
**0a.io** is known as <a href="http://0a.io/about">*an N dimensional object created by commingling 0s and 1s with unicorn potions*</a>. It is basically the place whereon I publish explanatory articles (or just anything I at some moment felt like penning). It is handcrafted with Meteor.


Feel free to experiment with it, customize it and launch it as your very own Meteor application. Attribution in any form is appreciated, but not required :)

#Installing Meteor
For OS X or Linux:
```bash
curl https://install.meteor.com/ | sh
```

For Windows: <br>the Meteor dev team is currently working on the official installation on Windows. Meanwhile, you can check out <a href="http://win.meteor.com/">the unofficial guide for getting Meteor running natively on Windows</a>.

#Running 0a locally
Cd to the app's direcotry, and just do
```bash
Meteor
```

#Deploying your customized version of 0a
arunoda's <a href="https://github.com/arunoda/meteor-up">Meteor Up</a> is an interesting tool for deploying meteor application.

#Registering/Logging in

To register as a new user or login in, go to /twitterlogin . At the current moment 0a.io only uses Twitter login. To add in more logins, you can read it up in <a href="http://docs.meteor.com/#/basic/accounts"> Meteor's doc here</a>.

To use the Twitter login, you would first need to have a Twitter application, which can be created <a href="https://apps.twitter.com/">here</a>. Note: if you want to use it for a meteor app running locally, put "http://127.0.0.1:3000/" (or the IPv4 address you are using) as the website in your Twitter app. (Or else you would receive internal server error when you try to log in). Twitter has got some stupid validation regex that will prevent you from putting "http://localhost:3000/" or "http://localhost/" as the website.

After you have created your twitter app, just configure the twitter login using the API key and API secret by clicking on the config button at /twitterlogin .
<br>


#Making a user an admin

At the current moment you would need to do it yourself in a MongoDB shell.
<br>To run a MongoDB shell, cd into your app directory, and do this:
```bash
Meteor mongo
```

Or if you are in production server, do this instead:
```bash
Mongo 0a //or the name of your app
```

Inside the MonogoDB shell, you can see all the registered users by doing
```bash
db.users.find()
```
To make a user an admin, do this:
```bash
db.users.update({ "_id" : USERID},{$set:{admin:1}});
```
Replace USERID with the _id of the user whom you want to make as admin.

#Writing or publishing an article
Right now the admin panel is located at /archy
<br>It is a simple one. It allows you to publish, unpublish, create, edit, or delete article.

#Adding/editing changelog
Currently you would have to do it in a MongoDB shell. Read <a href="https://github.com/0a-/0a.io#making-a-user-an-admin"><b>Making a user an admin</b> session</a> if you are not sure how to run a MongoDB Shell.

To add an entry, just do a db.changelog.insert:
```bash
db.changelog.insert({ "date" : ISODate(), "description" : "meow meow meow", "version" : "1.0" })
```

To edit an entry, just do a db.changelog.update with <a href="http://docs.mongodb.org/manual/reference/operator/update/set/">$set</a>.
```bash
db.changelog.update({ "version" : "1.0" },{$set:{"description":"nyan nyan"}})
```

To remove an entry, simply do a db.changelog.remove
```bash
db.changelog.remove({ "version" : "1.0" })
```

To learn more about Mongo shell methods, you can read the MongoDB docs <a href="http://docs.mongodb.org/manual/reference/method/">here</a>.

#Known issue in 0a:
For some reasons, <a href="https://github.com/ecohealthalliance/reactive-table">ReactiveTable</a> would throw an exception when it is being re-rendered.
```
Exception in template helper: TypeError: Cannot read property 'get' of undefined
    at Object.Template.reactiveTable.helpers.isVisible
    ......
```

This bug appears to <a href="https://github.com/ecohealthalliance/reactive-table/issues/116">have existed for quite some time</a> in ReactiveTable. I have yet looked into its source code so I'm not exactly sure what is causing it. Although an exception is thrown, it doesn't seem to be causing problem significant enough to be noticed by the users.

#About the future of 0a (this application, not the website 0a.io)
Right now 0a may appear to be merely a simple app for single-person content creating & presenting. 
<br>I'm actually planning to write it into a CMS for building social network website. It will be nothing like the others. (Or at least that is what I would try to make it into.)  <br>I'm thinking of naming it after one of the most fascinating object in the univerise, <a href="http://en.wikipedia.org/wiki/Quasar">Quasar</a>. And of source, it will be open-source :)
