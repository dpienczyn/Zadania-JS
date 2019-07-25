//fahrenheit i celcius
function C(celcius){
var ct = celcius;
var Fahr = ct * 9/5 + 32;
var message = ct+'\xB0C is ' +Fahr+ ' \xB0F.';
console.log(message)
}

function fToc(fahrenheit){
	var fTenp = fahrenheit;
	var FtoCel = (fTenp-32) * 5/9;
	var message = fTenp+'\xB0F is ' + FtoCel+ '\xB0C.';
    console.log(message);
}
C(60);
fToc(45);

//adres url strony
console.log(document.URL)

//zmienna zdefiniowana przez użytkownika

var name = "abcd"
var n =120
this[name] = n
console.log(this[name])

//bez rozszerzenia nazwy pliku

filename = "dominika.java"
console.log(filename.split('.').pop())
filename = "abc.js"
console.log(filename.split('.').pop())

//Napisz program JavaScript, aby uzyskać różnicę między podaną liczbą a 13, jeśli liczba jest większa niż 13, zwróć podwójną różnicę bezwzględną.

function number(num){
	if(num<13)
		return 13-num;
	else
		return (num-13)*2
}
console.log(number(20))
console.log(number(3))

function sum(num1, num2){
	if(num1==num2){
		var s = (num1+num2)*3
		return s
	}
	else
	s = num1+num2
	return s
}
console.log(sum(2,3))
console.log(sum(5,5))

function roznica(liczba){
	if(liczba>19){
		return (liczba-19)*3
	}
	else
		return 19-liczba
}

console.log(roznica(3))
console.log(roznica(20))

function szukaj(l1, l2){
	var s = l1+l2;
	if(l1==50){
		return true;
	}
	else{
		return false
	}
	if(l2==50){
		return true;
	}
	else{
		return false
	}
	if(s==50){
		return true
	}
	else{
		return false
	}
}

console.log(szukaj(32, 20))
console.log(szukaj(50, 50))

function testhundred(x) {
  return ((Math.abs(100 - x) <= 20) ||
	 (Math.abs(400 - x) <= 20));
}

console.log(testhundred(10));
console.log(testhundred(90));
console.log(testhundred(99));
console.log(testhundred(199));
console.log(testhundred(200));

function t(num1, num2){
	if(num1>0&&num2<0||num1<0&&num2>0){
		return true
	}else
	return false
}

console.log(t(-2, 2))
console.log(t(2, 2))

function ciag(str){
	if(str===null||str===undefined||str.substring(0,2)==='Py'){
		return str
	}else
	return 'Py'+str

}

console.log(ciag('Python'))
console.log(ciag('thon'))

function remove(str, char){
	var r = str.substring(0, char)
	var r1 = str.substring(char+1, str.length)
	return r+r1
}
console.log(remove('dominika', 5))

function zamiana(str2){
	var r3 = str2.substring(0, str2.length-1)
	var r2 = (str2.charAt(str2.length-1))+r3+str2.charAt(0)
	return r2
}
console.log(zamiana('donia'))

function add(str){
	var r1 = str.substring(0,1)
	var r2 = r1 + str + r1
	return r2
}

console.log(add('Donia'))

function podziel(num){
	if(num%3==0){
		return true
	}
	else
		return false
	if(num%7==0){
		return true
	}else
	return false
}

console.log(podziel(3))
console.log(podziel(10))

function add(str){
	var t = str.substring(str.length-3)
	var r = t+str+t
	return r
}

console.log(add('donia'))
console.log(add('tt'))

function Java(str){
	var w = str.substring(0, 4);
	if(w=='Java'){
		return true
	}
	else
		return false
}

console.log(Java('JavaStrt'))

function num(l1, l2){
	if((l1>=50&&l1<=99)||(l2>=50&&l2<=99)){
		return true
	}
	else
		return false
}

console.log(num(2,4))
console.log(num(52, 67))

function wytnij(str){
	if(str<6){
		return str
	}
	var t = str.substring(10, 4)
	if(t=='Script'){
		return t
	}
	else
		return str
}

console.log(wytnij('JavaScript'))
console.log(wytnij('JavaS'))

//najwieksza
function naj(l1, l2, l3){
	max=0;
	if(l1>l2){
		max = l1
	}else
	max = l2
	if(l3>max){
		max = l3
	}
	return max
}

console.log(naj(4,5,9))

function j(num1, num2){
	num1 = Math.abs(100 - num1);
	num2 = Math.abs(100 - num2);
	max = 0;
	if(num1>num2){
		return num2
	}
else
 return num1
}

console.log(j(3, 4))