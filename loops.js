var arr = ["Washington", "Adams", "Jefferson", "Madison", "Monroe"];
function presidentsArray (presidents){
	for (var i=0; i < presidents. length; i++){
		console.log ("Thw value of i is:" + i); 
		console.log ("The value at index is:" + arr[i]);
	}
}
presidentsArr(arr);


//____________________________________________________// 

function makeStringOfNumbers (){
  var stringOfNumbers= '';

 
  for(var i=10; i < 21; i++){
    stringOfNumbers = stringOfNumbers + i;
  }
  return stringOfNumbers; 
}

var result =makeStringOfNumbers();
console.log("Value is:" + result);


//____________________________________________________// 

function makeEvenNumberArray (){
  var evenNumberArray='';
for(var i=2; i < 51 ;i++);{
	evenNumberArray= evenNumberArray + i;
}
return evenNumberArray; 
  }
var result = makeEvenNumberArray(); 
console.log("Value is" + result);

//____________________________________________________//
function makeOopsArray(){
	var  oopsArray=[ 'turn' , , 'down' , , 'for' , , 'what' ];
  for (var i =1; i<6; i+=2 ){
    oopsArray.splice(i,1,"nope"); 
  }
  console.log (oopsArray); 
    return oopsArray; 
} 
var oopsArray = makeOopsArray();




