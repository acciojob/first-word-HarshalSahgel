function firstWord(s) {
  // your code here
	const first1 = s.trim();
	if(s.length === 0){
		return "";
	}
  let first = first1.split(" ");
	return first[0];
}

// Do not change the code below

const s = prompt("Enter String:"); 
alert(firstWord(s)); 
