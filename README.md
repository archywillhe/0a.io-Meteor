#Behold! This is the source code of 0a.io

<a href="http://0a.io"><img width="100px" src="http://0a.io/assets/img/0a.png" align="left" hspace="10" style="margin-top:13px"></a>
**0a.io** is known as <a href="http://0a.io/about">*an N dimensional object created by commingling 0s and 1s with unicorn potions that taste nothing like unbrewed wine*</a>. It is basically the place whereon I write and publish explanatory articles. It is handcrafted with Meteor.


Feel free to experiment with it, customize it and launch it as your very own Meteor application. Attribution in any form is appreciated.

#Installing Meteor
For OS X or Linux:
```bash
curl https://install.meteor.com/ | sh
```
You can read more about it on <a href="https://www.meteor.com/install">Meteor's official website</a>.

#Running 0a
Cd to the app's direcotry, and just do
```bash
Meteor
```

#Registering/Logging in

To register as a new user or login in, go to /twitterlogin. At the current moment there is only twitter login. To implement more logins, you can read it up in <a href="http://docs.meteor.com/#/basic/accounts"> Meteor's doc here</a>.

#Adding a user as admin

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
To add a user as admin, do this:
```bash
db.users.update({ "_id" : USERID},{$set:{"profile.admin":1}});
```
Replace USERID with the _id of the user whom you want to make as admin.

#Writing or publishing an article
Right now the admin panel is located at /archy
<br>It is a simple one. It allows you to publish, unpublish, create, edit, or delete article.

#Adding/editing changelog
Currently you would have to do it in the MongoDB shell.

#About the future
I'm currently writing the code into a CMS for building social network website.<br> It will be nothing like the others. (Or at least that is what I'm trying to build it into.) <br>I'm planning to call it <i>Quasar</i>. Of source, it will be open-source.
