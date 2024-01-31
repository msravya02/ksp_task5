function fun1(){

    var fnum=document.getElementById("txtf1").value;
    
    var snum=document.getElementById("txtf2").value;
    
    var tot= parseInt(fnum) + parseInt(snum);
    
    document.getElementById("result").innerHTML=tot;
    
    }
    
    