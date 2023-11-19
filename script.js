//your JS code here. If required.
function mapLetters(str) {
	let ans={};
	for(let i=0;i<str.length;i++){
		if(ans[str.charAt(i)]===undefined){
			ans[str.charAt(i)]=[i];
		}
		else{
			ans[str.charAt(i)].push(i);
		}
	}
	return ans;
}
//
let str=prompt("Enter text:");
alert(JSON.stringify(mapLetters(str)));
