var list1 =[];
var list2 =[];
var list3 =[];
var list4 =[];
var list5 =[];
var list6 =[];
var list7 =[];
var list8 =[];
let arr =[];
var n = -1;
var x = 1;
var checkedValue=0;

button = document.querySelector("#submit");
button.addEventListener("click",function(){
    var tableBody = document.querySelector("#table-body");
    var newRow= tableBody.insertRow(n);
    list1[x] = document.getElementById("first-name").value;
    list2[x] = document.querySelector("#last-name").value;
    list3[x] = document.querySelector("#address").value;
    list4[x] = document.querySelector("#State").value;
    list5[x] = document.querySelector("#Country").value;
    list6[x] = document.querySelector("#pincode").value;
    list7[x] = document.querySelector("input[name='gender']:checked").value;
 
    let list = document.querySelectorAll("li");
    for(let i=0; i<list.length; i++){
        let selectedValue= list[i].firstChild;
        if(selectedValue.checked){
            checkedValue++;
           list8 = selectedValue.value;
           arr.push(list8);
        }
    }

    if(checkedValue<2){
        alert("Please select atleast Two choice of food");
        arr=[];
        !important;
     }
   
   var cell1 = newRow.insertCell(n);
   cell1.innerText = list1[x];
   var cell2 = newRow.insertCell(n);
   cell2.innerText = list2[x];
   var cell3 = newRow.insertCell(n);
   cell3.innerText = list3[x];
   var cell4 = newRow.insertCell(n);
   cell4.innerText = list4[x];
   var cell5 = newRow.insertCell(n);
   cell5.innerText = list5[x];
   var cell6 = newRow.insertCell(n);
   cell6.innerText = list6[x];
   var cell7 = newRow.insertCell(n);
   cell7.innerText = list7[x];
   var cell8 = newRow.insertCell(n);
   cell8.innerText= arr;
   let form = document.getElementById("form")
   form.reset();
   arr=[];
   checkedValue=0;
   list7[x]=[];
  
});

