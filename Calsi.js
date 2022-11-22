var dt=new Date();
function renderDate(){
   
dt.setDate(1);
var day=dt.getDay();
console.log(dt.getDate());
var endDate=new Date(
    dt.getFullYear(),dt.getMonth()+1,0
).getDate();

var prevDate=new Date(
    dt.getFullYear(),dt.getMonth(),0
).getDate();

var today=new Date();

var months=["January","Feb","Mar","April","May","June","july","Aug","Sep","Oct","Nov","Dec"];
document.getElementById("date_str").innerHTML=dt.toDateString();
document.getElementById("month").innerHTML=months[dt.getMonth()];
var cells="";
for(x=day;x>0;x--){
    cells+="<div class='pre_date'>"+(prevDate-x+1)+"</div>"
}
for(i=1;i<=endDate;i++){
    if(i==today.getDate() && dt.getMonth()==today.getMonth()){
        cells+="<div class='today'>"+i+"</div>";
    }
    else{
        cells+="<div>"+i+"</div>";

    }
   
}
document.getElementsByClassName("days")[0].innerHTML=cells;
}

function moveDate(para){
    if(para=='pre'){
        dt.setMonth(dt.getMonth()-1);
    }
    else if(para=='next'){
        dt.setMonth(dt.getMonth()+1);
    }
    renderDate();

}