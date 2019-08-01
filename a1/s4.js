function printsum(sum){
    $("#result").text("sum:"+sum);
}
   function getsum(n,callback){
       for(var dg=0,sum=0;n>0;n=Math.floor(n/10)){
dg++;
sum+=n%10;
       }
       if(dg!=4){
           return false;
       }
       callback(sum);
       return true;
   }
   $(document).ready(function(){
       $("#check").click(function(){
           var num=$("#frno").val();
           if(!getsum(num,printsum)){
               alert("enter four digit no");
               return false;
           }
       })
   })