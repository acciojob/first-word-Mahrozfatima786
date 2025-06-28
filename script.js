function firstWord(s) {
  // your code here
	var firstWord = s.replace(/ .*/,'');

$('body').append(firstWord);
}

// Do not change the code below

const s = prompt("Enter String: see and stop");
alert(firstWord(s));
