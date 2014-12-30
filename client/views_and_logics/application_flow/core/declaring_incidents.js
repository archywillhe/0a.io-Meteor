//I used the word "incident" because the name "event" is too mainstream.
//I'm a hispter :3

var incident = function(){
	this.settings = {};
	this.loaded = false;
}

incident.prototype.universal = function(){
	this.loaded = true;
}

incident.prototype.default = function(){
	this.universal();
}

incident.prototype.mobile = function(){
	this.universal();
}

incident.prototype.addToFn = function(name,fn){
	var previousFn = _.bind(this[name],this);
	this[name] = function(){
		previousFn(); 
		fn(); 
	}
}

incident.prototype.addCBforFn = function(name,CB){
	//or CB would be called if template is already is loaded
 	if(this.loaded===true){
		CB();
	}else{
		this.addToFn(name,CB);
	}
}

incident.prototype.addCBforUniversal = function(CB){
	this.addCBforFn("universal",CB)
}

incident.prototype.addCBforDefault = function(CB){
	this.addCBforFn("default",CB)
}

incident.prototype.addCBforMobile = function(CB){
	this.addCBforFn("mobile",CB)
}


//incident's key value expected -> (true, false)
ivExpected = function(incident,key,expectation){
	return (incident.key === expectation)
}


//add new incident here
qsHeader 	 		= new incident();
aboutButton 		= new incident();
aboutExtension 		= new incident();
loadingControl 		= new incident();
homeLoaded 			= new incident();
articleLoaded 		= new incident();
articleRendered 	= new incident();
disqusComment 		= new incident();