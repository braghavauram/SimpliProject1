function showinput(){
    document.getElementById('inputvalue').value="";
    document.getElementById('bloginput').style.display="block";
    document.getElementById('addpost').style.display="none";
    document.getElementById('postbtn').style.display="block";
 }
 
 function showadd(){
    var prevdata = document.getElementById('blogcontentid').innerHTML;
    document.getElementById('saveprevdiv').innerHTML=prevdata;
    document.getElementById('addpost').style.display="block";
    document.getElementById('postbtn').style.display="none";
    document.getElementById('bloginput').style.display="none";
    document.getElementById('blogcontentid').innerHTML=
    document.getElementById('inputvalue').value  + "</br>" + "<hr/>" + prevdata;
 }