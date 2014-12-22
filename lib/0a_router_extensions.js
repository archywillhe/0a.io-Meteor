itemExtension = function(collections, retriveData) {
    /* the argument "collections" is expected to be in this form:
		{
			articles: {
				db: Article,
				subOption: 10
			}
		}
	*/
    return {
        subscriptions: function() {
            //a for loop in case there are more than 1 subscription
            for (key in collections) {
                var name = collections[key].name || key;
                if (collections[key].subOption) {
                    var option;
                    if (collections[key].subOption instanceof Function) {
                        //if subOption is a function, then pass "this" into subOption(self)
                        //so that we can use self.params.data
                        option = collections[key].subOption(this);
                    } else {
                        option = collections[key].subOption;
                    }
                    this["subscriptionOf" + name] = Meteor.subscribe(key, option);
                } else {
                    this["subscriptionOf" + name] = Meteor.subscribe(key);
                }
            }
        },
        data: function() {
            var data = {};
            //a for loop in case there are more than 1 subscription
            for (key in collections) {
                var name = collections[key].name || key;
                data[name] = retriveData(collections[key].db);
            }
            return data;
        }
    }
}

listExtension = function(collections) {
    //retriveData for itemExtension
    return itemExtension(collections, function(mongo) {
        var list;
        if (mongo._collection.__proto__ === Mongo.Collection.prototype) {
            //this means mongo is a Minimongoid instance
            //Minimongoid has .where() function and it outputs to an array
            list = mongo.where({}, {
                sort: {
                    publishedAt: -1
                }
            }).toArray();
        } else {
            list = mongo.find().fetch();
        }
        return list
    });
}

singleExtension = function(collections) {
    //retriveData for itemExtension
    return itemExtension(collections, function(mongo) {
        var item;
        if (mongo._collection.__proto__ === Mongo.Collection.prototype) {
            //this means mongo is a Minimongoid instance
            //Minimongoid has .first() function but not .findOne()
            item = mongo.first();
        } else {
            item = mongo.findOne();
        }
        return item
    });
}