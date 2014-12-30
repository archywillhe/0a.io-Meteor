//for the reative table to display a list of articles
Template.ArchySanctuary.helpers({
  table: function() {
    return {
      rowsPerPage: 20,
      showFilter: false,
      showNavigation: 'false',
      useFontAwesome: true,
      fields: [
        {
          key: 'title',
          label: 'Title'
        }, {
          key: 'updatedAt',
          label: 'Updated At',
          tmpl: Template.ArchySanctuaryUpdatedColumn,
          sort: 'descending',
          sortByValue: true
        }, {
          key: 'publishedAt',
          label: 'Published At',
          tmpl: Template.ArchySanctuaryPublishedColumn,
        }, {
          key: 'published',
          label: 'Status',
          tmpl: Template.ArchySanctuaryStatusColumn
        }, {
          key: 'id',
          label: 'Edit',
          tmpl: Template.ArchySanctuaryEditColumn
        }, {
          key: 'id',
          label: 'Delete',
          tmpl: Template.ArchySanctuaryDeleteColumn
        }
      ]
    };
  }
});

//random id for new article
Template.ArchySanctuary.events({
  'click .admin-new': function(e, tpl) {
    e.preventDefault();
    Router.go('editorOfArchy', {
      id: Random.id()
    });
  },
  'click .admin-sign-out': function (e, tpl) {
    e.preventDefault();
    Meteor.logout();
  }
});

//publish or unpublish article
Template.ArchySanctuaryStatusColumn.events({
  'click .makePublished': function(e, tpl) {
    e.preventDefault();
    this.update({
      published: true,
      publishedAt: new Date()
    });
  },
  'click .makeDraft': function(e, tpl) {
    e.preventDefault();
    this.update({
      published: false,
      publishedAt: null
    });
  }
});

//delete article
Template.ArchySanctuaryDeleteColumn.events({
  'click .delete': function(e, tpl) {
    e.preventDefault();
    if (confirm('Are you certain of your decision?')) {
      $(e.currentTarget).parents('tr').css("display","none");
      this.destroy();
    }
  }
});

//return the currently-being-edited article, or a new one
Template.editorOfArchy.helpers({
  articleToBeEdited:function(){
    var data = Router.current().data();
    return data.article || {};
  }
});
//obtain the value for an attribute of the article
var inputRetrival = function(name,$form){
  return $('[name='+name+']', $form).val();
}
//obtain the attributes of the article using an array
var  inputsObject = function(array,$form){
  var object = {};
  for(key in array){
    var item = array[key];
    object[item] = inputRetrival(item,$form);

  }
  return object;
}

Template.editorOfArchy.events({
  //auto-generate slug for article
  'blur [name=title2]': function(e, tpl) {
    var slug, title;
    slug = tpl.$('[name=slug]');
    title = $(e.currentTarget).val();
    if (!slug.val()) {
      slug.val(Article.slugify(title));
    }
  },
  //save the article entry into our mongoDB
  'submit form': function(e, tpl) {
    e.preventDefault();
  var $form = tpl.$('form');
  var attrs = inputsObject(
    ["title","title2","slug","minTime","maxTime","category","content","head","foot","subtitle","subtitle2","coverImg","metaDescription","metaKeywords"],
    $form
  );
  attrs.updatedAt = new Date();
  var data = Router.current().data();
  if (data.article!==undefined) {
    //update old article
    this.update(attrs);
  } else {
    Meteor.call('doesArticleExist', attrs.slug, function(err, exists) {
      if (!exists) {
        //create new article!
        attrs.published = false;
        attrs.userId = Meteor.userId();
        article = Article.create(attrs);
      } else {
        //data.article is defined but article doesn't exist in database  
        //handle error
      }
    });
  }
  Router.go('ArchySanctuary');
  }
});





