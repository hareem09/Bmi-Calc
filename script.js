let heightElement=document.querySelector("#height");
let weightElement=document.querySelector("#weight");
let button=document.querySelector("#btn");
let result=document.querySelector("#result");
let message=document.querySelector("#message");

button.addEventListener("click",(e)=>{
  let height = parseFloat(heightElement.value);
let weight = parseFloat(weightElement.value);

   if(height==""||height<0||isNaN(height))
   {
     result.innerHTML=`Your input is invalid`
   }
   else if(weight==""||weight<0||isNaN(weight)){
       result.innerHTML=`Your input is invalid`
   }
  else{
        let res;
        res=(weight/((height*height)/10000)).toFixed(2);
        result.innerHTML=`<h3>Your bmi is ${res}</h3>`;
      if(res< 18.6){
        message.innerHTML=`<span>You are underweight</span>`
        
      }
      else if(res >= 18.6 && res<24.9)
      {
        message.innerHTML=`<span>You are okay</span>`
      }
      else{
      message.innerHTML=`<span>You are overweight</span>`
      }
    } 
})
