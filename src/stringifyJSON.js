// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
	// Just return values of basic variables
	if(obj == null){
		return String(obj);
	}else if(typeof(obj) === "string"){
		return '"' + obj + '"'
	}else if(typeof(obj) != "object"){
		return obj.toString()
	}
};
