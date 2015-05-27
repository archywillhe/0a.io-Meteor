Template.singleArticle.helpers({
  articleReady :function(){
    return Session.get("articleReadyToRender");
  },
  readingTime :function(minTime, maxTime){
    if(minTime>0){
      return minTime + " to " + maxTime + " mins ";
    }else{
      return "1 min ";
    }
  },
afterRender : function(content, code){
 //if(code){ eval(code); }
  Tracker.afterFlush(function() {
      if(code){ eval(code); }
  });
 console.log("code");
},
	renderContent :function(content){
    if(content){
      //make lines into <p/>
  		content = content.replace(/(.+\n)/g, function(match, contents, offset, s)
      {
        //only do it when the line doesn't already start with a tag
      	if(contents.substring(0,1) !== "<"){
          return "<p>"+contents+"</p>\n";
      	}
      	return contents;
      });
      //make double \n into <br>
  		content = content.replace(/(\n\n)/g, "<br>");
  	 	return content;
    }
	}
});
Template.articleLists.helpers({
  //align all articles into a 2d array [[...],[...],[...]]
  //so that they can be nicely aligned into 3 rows when rendering
	allArticles: function(){
		var newArray = [[],[],[]];
		for(key in this.articles){
			newArray[key%3].push(this.articles[key]);
		}
		return newArray;
	}
});

