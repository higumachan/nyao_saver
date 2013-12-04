document.getElementById("star").onclick = function()  {
	var count = parseInt(document.getElementById("star_count").value);
	for (var i = 0; i < count; i++){
		chrome.tabs.executeScript({"code": "document.getElementsByClassName('hatena-star-add-button')[0].click();"});
	}
};

