var xhr = new XMLHttpRequest();
			xhr.open('GET', 'https://www.homly-you.com/');
			xhr.send();
			xhr.onload = function() {
			if(xhr.status >= 200 && xhr.status < 400) {
			var answer = xhr.responseText;
			var parsed= new DOMParser().parseFromString(answer, "text/html");
			var elem= parsed.querySelector('div.class');
			}
		}