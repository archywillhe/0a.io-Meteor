//animate scrollTop:0 before routing 
var scroll_and_direct = function(e, tpl){
	var scrollTop = $("body").scrollTop();
	if(scrollTop>50 && scrollTop < 2000){
		e.preventDefault();
		$("html, body").animate({ scrollTop: "0px"},{
			complete:function(){
				return Router.go($(e.currentTarget).attr("href"));
			}.bind(this), 
		duration:250});
	}
};

//apply the animation for these routing
Template.qsFooter.events({
	'click a': scroll_and_direct
});
Template.basic.events({
	'click ._0a': scroll_and_direct
});
Template.articleLists.events({
	'click a': scroll_and_direct
});
