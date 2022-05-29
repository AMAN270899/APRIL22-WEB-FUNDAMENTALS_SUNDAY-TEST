//Question -3

//Initialization- When we declare a variable, it is automatically initialized, which means memory is allocated to the variable by the java-script engine.
//Declaration- You declare a JavaScript variable with the var or the let keyword: var carName; or: let carName; After the declaration, the variable has no value (technically it is undefined ).

let length=10
let breadth =20

if (length===breadth) {
    console.log('it is a sqaure');
    
}
else {
    console.log('it is a rectangle');
}


//Question-4



let num =10

if (num%2===0) {
    console.log('Even');
    
}
else{
    console.log('odd');
}

//Question-5

let day=3

switch (day) {
    case 1:
        console.log('SUNDAY');
        break;
    case 2:
        console.log('MONDAY');
        break;
    case 3:
        console.log('TUESDAY');
        break;
    case 4:
        console.log('WEDNESDAY');
        break;

    case 5:
        console.log('THRUSDAY');
        break;
    case 6:
        console.log('FRIDAY');
        break;
    case 7:
        console.log('SATURDAY');
        break;

    default:
        console.log('ENTER VALUE BETWEEN 1 TO 7');
        break;
}

