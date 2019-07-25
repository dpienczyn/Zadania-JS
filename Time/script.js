var today = new Date();
var day = today.getDay();
var dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log("Dzisiaj mamy: "+dayList[day]+".");
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
if(hour<12){
	console.log("It is: "+hour+":"+minute+":"+second+" PM");
}else if(hour>=12){
	console.log("It is: "+hour+":"+minute+":"+second+" PM");
}




