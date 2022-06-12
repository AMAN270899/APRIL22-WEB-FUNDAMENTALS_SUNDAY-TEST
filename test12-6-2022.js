// QUESTION 1


var list=['geek','geekster','geeky']

function checkValue(value , list) {
    var status = 'Not exist';
    let a;

    for(i=0; i<list.length; i++){
        var name = list[i];
        if(name==value);{

        status = 'exist';

         a= list.indexOf('geekster');
         console.log(a);

    
        break;

    }
}
return status;


    
}




console.log('status : ' + checkValue('geekster', list));





// QUESTION2

// while loop

var numArray = new Array(1,4,66,123,240,444,555);
var i = 0;

while (numArray[i] < 100) {
     alert(numArray[i++]);
}


// for loop

var mammals = new Array("cat","dog","human","whale","seal");
var animalString = "";
for (var i = 0; i < mammals. length; i++) {
   animalString += mammals[i] + " ";
}
alert(animalString);



// QUESTION 3 
// A
var arr1 = [,,,];

let a = arr1.length;
console.log(a);

// B

var arr2 = new Array(3)
let b = arr2.length;
console.log(b);

// C
var arr3 = [1,2,3,4,5]
let c = arr3.length;
console.log(c);


// D.
 var array = [ [1,2,3], [4,5,6]]
let d = array.length;
console.log(d);

// // e
// var m=array[0].length = [ [1,2,3], [4,5,6]  ];

// console.log(m);

// QUESTION 4

var arr= ['a','b','c','d']

n= arr.indexOf('b');
console.log(n);




