Article = (function() {
    ಠ_ಠextends(Article, Minimongoid);
    function Article() {
        //__proto__ of A's prototype is Minimongo
        return Article.prototype.__proto__.constructor.apply(this, arguments);
    }
    Article._collection = new Mongo.Collection('articles');

    //function for Article itself(duh):
    Article.slugify = function(str) {
        return str.toLowerCase().replace(/[^\w ]+/g, "").replace(RegExp(" +", "g"), "-");
    };

    //function for new Article()
    Article.prototype.validate = function() {
        if (!this.title) {
            this.error('title', "Blog title is required");
        }
        if (!this.slug) {
            return this.error('slug', "Blog slug is required");
        }
    };

    return Article;

})();