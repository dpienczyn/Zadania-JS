function print(){
	window.print();
}
var data = new Date();
var dd = data.getDate();

var mm = data.getMonth();
var yyyy = data.getFullYear();

if(dd<10){
	dd='0'+dd;
}
if(mm<10){
	mm='0'+mm;
}
today = mm + '-'+dd+'-'+yyyy;
console.log(today); 
today = mm+'/'+dd+'/'+yyyy;
console.log(today)
today = dd+'-'+mm+'-'+yyyy
console.log(today)
today = dd+'/'+mm+'/'+yyyy
console.log(today)

var side1 = 5; 
var side2 = 6; 
var side3 = 7; 
var s = (side1 + side2 + side3)/2;
var area =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
console.log(area);

function animate_string(id){
	var element = document.getElementById(id);
	var textNode = element.childNodes[0]
	var text = textNode.data

	setInterval(function (){
		text = text[text.length - 1] +text.substring(0, text.length-1)
		textNode.data = text
	}, 200);
}
//sprawdza rok przestepny
function leapyear(year){
	return (year%100===0)?(year%400===0):(year%4===0)
}

console.log(leapyear(2016))
console.log(leapyear(2000))
console.log(leapyear(2050))
console.log(leapyear(2400))

//od roku 2014 do 2050 1 styczen czy to niedziela

for(var year = 2014; year<=2050; year++)
{
var d = new Date(year, 0, 1);
console.log(d);
if(d.getDay()===0)
console.log("Niedziela 1 stycznia wypada w latach: "+year)
}

//pierwszy sposob
const num = Math.ceil(Math.random()*10);
console.log(num)

//drugi sposob
  const min = Math.ceil(1);
  const max = Math.floor(10);
  const math = Math.floor(Math.random() * (max - min)) + min;

console.log(math);

const gnum  = prompt("Wprowadz dana");
if(gnum==math){
	console.log("Brawo")
}else
console.log("nie " )

//ile dni zostalo do swiat bozego narodzenia

function multiplyBy()
{
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy() 
{ 
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
document.getElementById("result").innerHTML = num1 / num2;
}