var hour=0,sec=0,min=0;
var dispHour=0,dispMin=0,dispSec=0;
var timeoutId=null;
var check="stop";
var uri="hola";
var injection_time;

   timeoutId=window.setInterval(timer,1000);
//hoy=dateFormat(new Date(), 'm-d-Y h:i:s'); 
hoy=new Date(); 
document.getElementById("hoyy").innerHTML =  hoy.toLocaleDateString() ;


let camera_button = document.querySelector("#start-camera");
let video = document.querySelector("#video");
let click_button = document.querySelector("#click-photo");
let canvas = document.querySelector("#canvas");

camera_button.addEventListener('click', async function() {
    let stream = await navigator.mediaDevices.getUserMedia({ video: {facingMode: {
      exact: 'environment'}}, audio: false });
    video.srcObject = stream;
});

click_button.addEventListener('click', function() {
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    let image_data_url = canvas.toDataURL('image/jpeg');
  

var d = new Date(); // for now
  document.getElementById("HRRT").innerHTML="Time picture:<BR>"+addZero(d.getHours())+":"+addZero(d.getMinutes())+":"+addZero(d.getSeconds()) ;

    // data url of the image
    console.log(image_data_url);
});


function manualTimes() {
    
    var myselect = document.getElementById("radiotracer");
     if (((myselect.options[myselect.selectedIndex].value)=="TRACK")||((myselect.options[myselect.selectedIndex].value)=="SL25"))
     {
         document.getElementById("hora1").innerHTML="3";
         document.getElementById("hora2").innerHTML="7";
         document.getElementById("hora3").innerHTML="13";
         document.getElementById("hora4").innerHTML="20";
         document.getElementById("hora5").innerHTML="30";
         document.getElementById("hora6").innerHTML="45";
         document.getElementById("hora7").innerHTML="60";
         document.getElementById("hora8").innerHTML="90";
     }
    else if ((myselect.options[myselect.selectedIndex].value)=="CURB")
    {
        document.getElementById("hora1").innerHTML="3";
        document.getElementById("hora2").innerHTML="7";
        document.getElementById("hora3").innerHTML="12";
        document.getElementById("hora4").innerHTML="15";
        document.getElementById("hora5").innerHTML="20";
        document.getElementById("hora6").innerHTML="30";
        document.getElementById("hora7").innerHTML="45";
        document.getElementById("hora8").innerHTML="60";

    }
}



function addZero(i) {
  if (i < 10) {i = "0" + i}
  return i;
}

function timer(){

    var d = new Date(); // for now
    
    if(check=="start"){
 // sec++;
 // if(sec/60==1){
 //   min++;
 //   sec=0;
//  if(min/60==1){
//    hour++;
//    min=0;
//  }}

        var diff = d.getTime() - injection_time.getTime();
        
        
        var msec = diff;
        var hh = Math.floor(msec / 1000 / 60 / 60);
        msec -= hh * 1000 * 60 * 60;
        var mm = Math.floor(msec / 1000 / 60);
        msec -= mm * 1000 * 60;
        var ss = Math.floor(msec / 1000);
        msec -= ss * 1000;
        
//  document.getElementById("timer").innerHTML="Since injection:<BR>"+addZero(hour)+":"+addZero(min)+":"+addZero(sec);
        document.getElementById("timer").innerHTML="Since injection:<BR>"+addZero(hh)+":"+addZero(mm)+":"+addZero(ss);

}

//var d = new Date(); // for now
  document.getElementById("hora").innerHTML="Time:<BR>"+addZero(d.getHours())+":"+addZero(d.getMinutes())+":"+addZero(d.getSeconds()) ;



}



function store_time(sample,evento,hora){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML = this.responseText;
        }
    };
   // let encoded = encodeURIComponent(addZero(d.getHours())+":"+addZero(d.getMinutes())+":"+addZero(d.getSeconds()));
    var kk=encodeURIComponent(document.getElementById("SubjectID").value);
    uri = "http://127.0.0.1/insert.php  ?sample="+sample.toString()+"&start="+evento.toString()+"&hora="+hora+"&ID="+kk;
    xhttp.open("GET", uri , true);
    xhttp.send();
}



function confirma(){
return "Write something clever here...";
}

function arranca(){
        timeoutId=window.setInterval(timer,1000);
hoy=dateFormat(new Date(), 'm-d-Y h:i:s'); 
document.getElementsById("hoy").innerHTML = "hoy" ;

}

function start(){
    if(check==="stop"){
//        timeoutId=window.setInterval(timer,1000);
//        document.getElementById("start").innerHTML="Stop"; 
        document.getElementById("start").disabled = true;  
var d = new Date(); // for now
        injection_time=d;
        let hora = addZero(d.getHours())+":"+addZero(d.getMinutes())+":"+addZero(d.getSeconds());
  document.getElementById("injection").innerHTML="Injection time:<BR>"+hora ;

let hora1 = d.getFullYear() + '/' + (d.getMonth()+1) + '/' + d.getDate() + ' '+addZero(d.getHours())+":"+addZero(d.getMinutes())+":"+addZero(d.getSeconds());
        store_time(999,1,encodeURIComponent(hora1));

        check="start";
document.title=document.getElementById("radiotracer").value+document.getElementById("fnameID").value;

    }else{
//    window.clearInterval(timeoutId);
    document.getElementById("start").innerHTML="Start";
    
    check="stop";
}}

function startHRRT(){
var d = new Date(); // for now


var months = ['Jan', 'Feb', 'Mar', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];



    let hora = d.getFullYear() + '/' + (d.getMonth()+1) + '/' + d.getDate() + ' '+addZero(d.getHours())+":"+addZero(d.getMinutes())+":"+addZero(d.getSeconds());

    let hora1 = addZero(d.getHours())+":"+addZero(d.getMinutes())+":"+addZero(d.getSeconds());
  document.getElementById("HRRTtime").innerHTML=hora1  ;
    store_time(999,2,encodeURIComponent(hora));
}



function starts(i){
var d = new Date(); // for now

var months = ['Jan', 'Feb', 'Mar', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];



    let hora = d.getFullYear() + '/' + (d.getMonth()+1) + '/' + d.getDate() + ' '+addZero(d.getHours())+":"+addZero(d.getMinutes())+":"+addZero(d.getSeconds());

 let hora1 = addZero(d.getHours())+":"+addZero(d.getMinutes())+":"+addZero(d.getSeconds());

    document.getElementById("samples"+i.toString()).innerHTML=hora1 ;
    store_time(i,2,encodeURIComponent(hora));
}




function ends(i){
var d = new Date(); // for now

   let hora = d.getFullYear() + '/' + (d.getMonth()+1) + '/' + d.getDate() + ' '+addZero(d.getHours())+":"+addZero(d.getMinutes())+":"+addZero(d.getSeconds());

    let hora1 = addZero(d.getHours())+":"+addZero(d.getMinutes())+":"+addZero(d.getSeconds());
   document.getElementById("samplee"+i.toString()).innerHTML=hora1 ;
    store_time(i,3,encodeURIComponent(hora));
}



function reset(){
    window.clearInterval(timeoutId);
    sec=0,min=0,hour=0;
    document.getElementById("timer").innerHTML="00:00:00";
    document.getElementById("start").innerHTML="Start";
}
