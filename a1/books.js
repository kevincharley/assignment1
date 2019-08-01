$(document).ready(function(){
    
        
    $.ajax({
        type:"GET",
        url:"books.json",
        
        success:function(book){
            console.log(book);
           
           
            var output=" "
        
           for(i in book)
           {
         // console.log(book)
                output+="<div class='col col-12  col-md-3'>"
        
              output+="<div class='card' style='width:'12rem' height='100''>";
              output+="<img class='card-img-top' src='"+book[i].cover+"'width:'40px' height:'20px'>";
                output+="<div class='card-body'>";
                output+="<h4 class='card-title'>"+ book[i].name+"</h4>";
                output+="<p class='card-text'>"+book[i].description+"</p>";
                output+="<p class='card-text'>"+book[i].price+"</p>";
                output+="<a href="+book[i].price+" class='btn btn-primary'>buy now</a>  </div></div>";
              output+="<div></div></div>";
             
            
           }
           $("#d1").html(output);
        }
    });
});

$("#category").click(function(){
    //console.log(click)
   if($("#category").val() == "fantasy")
   var n_url = "fantasy.json";
   else if($("#category").val() == "biography")
   var n_url = "biography.json";
   else if($("#category").val() == "si-fi")
   var n_url = "sc-fi.json";
   
  
 $.ajax({
    type:"GET",
    url: n_url,
        success:function(bok){
           // console.log(bok);
           
           
            var output=" "
        
           for(i in bok)
           {
          //console.log(bok)
                output+="<div class='col col-12  col-md-3'>"
        
              output+="<div class='card' style='width:'12rem' height='100''>";
              output+="<img class='card-img-top' src='"+book[i].cover+"'width:'40px' height:'20px'>";
                output+="<div class='card-body'>";
                output+="<h4 class='card-title'>"+ book[i].name+"</h4>";
                output+="<p class='card-text'>"+book[i].description+"</p>";
                output+="<p class='card-text'>"+book[i].price+"</p>";
                output+="<a href="+book[i].price+" class='btn btn-primary'>buy now</a>  </div></div>";
              output+="<div></div></div>";
             
           }
      
           $("#d1").html(output);
        }
           });
        });
 