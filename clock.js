function GetTime()
{
    var now=new Date();
    var hour=now.getHours();
    var minute=now.getMinutes();
    var second=now.getSeconds();


    var day=now.getDate();
    var month=now.getMonth()+1; //js aylari sifirdan baslayir deye +1 yaziriq
    var year=now.getFullYear();
    
    if(hour<10)
    document.getElementById("hour").innerHTML="0"+hour;
    else 
    document.getElementById("hour").innerHTML=hour;

    if(minute<10)
    document.getElementById("minute").innerHTML="0"+minute;
    else 
    document.getElementById("minute").innerHTML=minute;
    
    if(second<10)
    document.getElementById("second").innerHTML="0"+second;
    else 
    document.getElementById("second").innerHTML=second;


    
     document.getElementById("date").innerHTML=day+" / "+month+" / "+year;

}
setInterval(function(){GetTime();},1000);
