function showinput(){

    document.getElementById('bloginput').style.display="block";
 
    document.getElementById('addpost').style.display="none";
 
    blogcontent = document.getElementById('bloginput').innerHTML;   
 
 }
 
 function showadd(){
 
     document.getElementById('addpost').style.display="block";
 
     document.getElementById('postbtn').style.display="none";
 
     document.getElementById('bloginput').style.display="none";
 
 }