let randomeOTP = Math.floor(1000 + Math.random() * 9000);
let input = document.getElementById("number");
let error_msg = document.getElementById("show-error");
let generateOtpBtn = document.getElementById("generateotp");
let goBtn = document.getElementById("go");

function checkOtp(){
   let userinput = input.value;

   if(userinput == ""){
      error_msg.innerHTML = "Please Enter OTP"
      error_msg.style.color = "red";
   }
   else if(userinput.length > 4){
      error_msg.innerHTML = "OTP is 4 Digits Only"
   }
   else if(userinput.length >= 4){
      error_msg.innerHTML = "";
   }
}

function verifyOTP(){

   let userinput = input.value;

   if(userinput == ""){
      error_msg.innerHTML = "Please Enter OTP"
   }
   else if(userinput != randomeOTP){
      error_msg.innerHTML = "Incorrect OTP"
   }
   else{
      error_msg.style.color = "green"
      error_msg.innerHTML = "OTP Verify Successfully";
      goBtn.style.display = "block";
   }
}

goBtn.addEventListener("click",function(){
   location.href = "https://codervv.netlify.app"
})


input.addEventListener("keyup",checkOtp)
generateOtpBtn.addEventListener("click",() => {
   alert("Your Verification Code is " + randomeOTP)
})





