var container = document.querySelector("div")
var requestURL = "scripts/photos.json";
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var images = request.response;
  populateContainer(images);
}

function populateContainer(jsonObj) {
	var len = jsonObj.images.length;
	console.log(len);
	for (var i = 0; i < jsonObj.images.length; i++) {
		var image = document.createElement('img');
		image.src = jsonObj.images[i];
		container.appendChild(image); 
	}
}
