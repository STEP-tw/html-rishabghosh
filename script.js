const removeHeading = function () {
	let element = document.getElementById("cool_crossbows");
	let list = document.getElementById("jump_to");
	element.innerText = "\n";
	list.style.color = "#303030";
}

const addHeading = function () {
	let element = document.getElementById("cool_crossbows");
	let list = document.getElementById("jump_to");
	element.innerText = "COOL CROSSBOWS";
	list.style.color = "#838383";
}

const makeListVisible = function () {
	let element = document.getElementById("drop_down");
	element.style.display = "block";
}

const hideList = function () {
	let element = document.getElementById("drop_down");
	element.style.display = "none";
}
