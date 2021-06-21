var row='<tr>'
for(i=0;i<20;i++){
    row+='<td></td>'
}
row+='</tr>'
console.log(row)
var content='';
for(i=0;i<20;i++)
{
    content+=row;
}
document.getElementById('tab').innerHTML=content
let cell=document.querySelectorAll('td');
cell.forEach((link)=>{
    link.addEventListener("click",function () {
        link.classList.toggle("white");
        
    })
});
