const data = "q=English%20is%20hard%2C%20but%20detectably%20so";

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open("POST", "https://google-translate1.p.rapidapi.com/language/translate/v2/detect");
xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
xhr.setRequestHeader("accept-encoding", "application/gzip");
xhr.setRequestHeader("x-rapidapi-host", "google-translate1.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "SIGN-UP-FOR-KEY");

xhr.send(data);
