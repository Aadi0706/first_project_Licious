function openForm() {
    document.getElementById("myForm").style.display = "block";
  }

  function openOtp() {
    event.preventDefault();

    document.getElementById("otpForm").style.display = "block";
    alert("1234 is the OTP to access your Licious Account");
  }

  function closeForm() {
    
    document.getElementById("myForm").style.display = "none";
    alert("Succesfully Log In to your Licious Account");
  }
  

  function closeotp() {
    document.getElementById("otpForm").style.display = "none";
  }