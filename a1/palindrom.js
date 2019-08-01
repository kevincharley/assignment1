function get(){
    var mypromise=new Promise((resolve,reject)=>{
        var mp=document.getElementById("t").value;
        var y=mp;
        var r=0;
        var e=0;
        while(y!=0){
            e=y%10;
             r=r*10+e;
            y=Math.floor(y/10);
        }
        if(mp==r){
            resolve();
        }
        else{
            reject();
        }
    });
        mypromise.then(()=>{
        document.getElementById("result").innerHTML="palindrome";
        }).catch(()=>{
            document.getElementById("result").innerHTML="not palindrome";
        })
    }