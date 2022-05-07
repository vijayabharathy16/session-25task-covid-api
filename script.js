async function foo(){
    try{
        var val=document.getElementById('textbox').value;
        //console.log(val);
        var res=await fetch(`https://api.covid19api.com/total/country/${val}`);
        var res1=await res.json();
        console.log(res1);
                   
        var result1=document.getElementById('ans1').innerHTML=`${res1[0].Country}`;
        var result2=document.getElementById('ans2').innerHTML=`${res1.map(item => item.Confirmed).reduce((prev, next) => prev + next)}`;
        var result3=document.getElementById('ans3').innerHTML=`${res1.map(item=>item.Active).reduce((prev, next)=>prev+next)}`;
        var result4=document.getElementById('ans4').innerHTML=`${res1.map(item=>item.Recovered).reduce((prev,next)=>prev+next)}`;
        var result5=document.getElementById('ans5').innerHTML=`${res1.map(item => item.Deaths).reduce((prev, next) => prev + next)}`;
        
             
        console.log(result1);
        console.log(result2);
        console.log(result3);
        console.log(result4);
        console.log(result5);
        
        }catch(error){
        console.log(error);
        }
    }