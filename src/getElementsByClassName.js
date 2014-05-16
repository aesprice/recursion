// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
	elementList = []; // Array to hold all matching elements

	var body = document.body;
	// Check body for a class first
	if(body.className === className){
		elementList.push(body);
	}

	// Define function to check childen recursively
	findChildren = function(node){
		_.each(node.childNodes, function(item){
			// Add matching children to the list
			var match = _.contains(item.classList, className);
			if(match){
				elementList.push(item);
			}

			// Recursively check their children
			if(typeof(item) === "object"){
				findChildren(item);
			}
		});
	}

	console.log("About to test");
	// Use body as a starting point to look through children
	findChildren(body);

	console.log(elementList);
	console.log("Tested");
	return elementList;
};
