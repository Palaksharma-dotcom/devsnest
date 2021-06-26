var row="<tr>"
var seats=36;
var book=0;
for(i=0;i<3;i++){
    row+='<td><td>';
}
row+='</tr>';
console.log(row);
content='';
for(i=0;i<6;i++){
    content+=row;
}
document.getElementById('tab').innerHTML=content;
const cell=document.querySelectorAll('td');
cell.forEach((link)=>{
    // for(link in cell){
        link.addEventListener("click",function () {
            link.classList.toggle("white");
            if(link.classList.contains(true)){
                link.classList.remove('td');
            seats++;
            }
            else{
                link.classList.add('td');
            seats--;
            }
console.log(seats);

document.getElementById('c').innerHTML=36-seats;

document.getElementById('total').innerHTML=seats;
})
});




        
