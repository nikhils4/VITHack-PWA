window.onload = () => {
	document.getElementById("one").addEventListener("click", () => {
		document.getElementById("dayone").style.display = "block";
		document.getElementById("daytwo").style.display = "none";
		document.getElementById("daythree").style.display = "none";
	})
	document.getElementById("two").addEventListener("click", () => {
		document.getElementById("dayone").style.display = "none";
		document.getElementById("daytwo").style.display = "block";
		document.getElementById("daythree").style.display = "none";
	})
	document.getElementById("three").addEventListener("click", () => {
		document.getElementById("dayone").style.display = "none";
		document.getElementById("daytwo").style.display = "none";
		document.getElementById("daythree").style.display = "block";
	})
	let id = ["one", "two", "three"];
	id.forEach(e => {
		document.getElementById(e).addEventListener("click", () => {
			color(e);
		})
	})
	function color(ele) {
		id.forEach(e => {
			if (e == ele) {
				document.getElementById(e).style.color = "#0186f4";
			} else {
				document.getElementById(e).style.color = "black";
			}
		})
	}
	document.getElementById("logout").addEventListener("click", () => {
		// logout functionality
	})

}