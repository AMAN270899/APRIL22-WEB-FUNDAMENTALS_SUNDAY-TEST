
// question 1

let data=[1,-5,2,10,-30,29,50];
let filteredData= data.filter(function(element){
    return element >0
})

console.log(filteredData);

let l= filteredData.length;
let sum=0;

for(i=0; i<l; i++){
    sum = sum + filteredData[i];
}

console.log(sum);


// question 2

let friends = [{fname: 'Rachal', lname:"Green" ,id: 1, marks : 98 }, {fname: 'Ross',lname:"Geller" , id: 2, marks : 23 },{fname: 'Monica ',lname:"Geller" , id: 3, marks : 75 },{fname: 'Joey',lname:" Tribbiani" , id: 4, marks : 46 }, {fname: 'Chandler  ',lname:"Bing" , id: 5, marks : 78 },{fname: 'Phoebe',lname:"Buffay" , id: 6, marks : 45 }  ]

console.log(friends[0].fname ) + console.log(friends[0].lname ) ;
console.log(friends[1].fname ) + console.log(friends[1].lname ) ;
console.log(friends[2].fname ) + console.log(friends[2].lname ) ;
console.log(friends[3].fname ) + console.log(friends[3].lname ) ;
console.log(friends[4].fname ) + console.log(friends[4].lname ) ;
console.log(friends[5].fname ) + console.log(friends[5].lname ) ;