// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
	// Just return values of basic variables
	if(obj == null){
		return String(obj);
	}else if(typeof(obj) === "string"){
		return '"' + obj + '"'
	}else if(typeof(obj) === "function" || typeof(obj) === "undefined"){ // Don't bother with functions and undefined values
		return
	}else if(typeof(obj) != "object"){
		return obj.toString()
	}

	var objString = ""; // Create a meta-string variable so we can build more complex stringifications

	if(Array.isArray(obj)){
		objString += "[";
		// Create array wrapper, then add stringified version of array items to our meta-string
		_.each(obj, function(item, index){
			objString += stringifyJSON(item);
			// Because we're calling this function, if the item is an object then it will return a string with all of the item's items
			if(index < obj.length - 1){
				objString += ",";
			}
		});
		objString += "]";
	}else{
		objString += "{";
		var itemCount = 0;
		// Same as the array, but this time with an object wrapper and our own means of item indexing
		_.each(obj, function(item, key){
			if(typeof(item) != "function" && typeof(item) != "undefined"){ // Again, don't bother with functions and undefined values, even in objects
				objString += '"' + key + '"' + ":" + stringifyJSON(item);
				itemCount += 1;
				if(itemCount < _.size(obj)){
					objString += ",";
				}
			}
		});
		objString += "}";
	}

	return objString;
};
