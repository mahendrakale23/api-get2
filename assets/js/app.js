
let cl=console.log;


const info1=document.getElementById("info1");


const apiUrl="https://jsonplaceholder.typicode.com/photos";


let data1=new XMLHttpRequest();
cl(data1)
data1.open("GET",apiUrl,true);


data1.onload=function(){
cl(data1.response);
let jsData=JSON.parse(data1.response);
cl(jsData)
takeValue(jsData);
}
data1.send();



function takeValue(ar){
    let result="";
    ar.forEach(el => {
    result+=`
         <tr>
         <td>${el.id}</td>
         <td>${el.albumId}</td>
         <td>${el.title}</td>
         <td>${el.url}</td>
         <td>${el.thumbnailUrl}</td>
         </tr>

    
    `
    });
    info1.innerHTML=result;
}

