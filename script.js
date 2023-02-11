/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  arr.map(printingThroghMap);
  function printingThroghMap(arrayItem){
    if(arrayItem.marks === 50);{
      console.log(arrayItem);
    }
  }
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach(printingThroghForEach);
  function printingThroghForEach(arrayItem){
    if(arrayItem.marks===50){
      console.log(arrayItem);
    }
  }
}

function addData() {
  //Write your code here, just console.log
  let newObj={id:4,name:"susan",age:"20",marks:45}
arr.push(newObj);
console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  let filtered_arr=arr.filter(function (val){
    if(val.marks >50){
      // filtering
      returnval;
    }
  })
  console.log(filtered_arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr2=[
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
]
let concatArray=arr.concat(arr2);
  console.log(concatArray);
}
