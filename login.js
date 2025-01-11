const userss = JSON.parse(localStorage.getItem("userOne"));

logIn.addEventListener("click", (e) => {
  e.preventDefault();
  

  for (let i of userss) {
    if (username.value === i.userId && password.value === i.userPassword) {
      document.getElementsByTagName('p')[0].innerText = "logged in";
      if(i.userAccountType==="Admin"){
        window.location.href = "/prodect.html"
      }
      else if(i.userAccountType ==="User"){
        window.location.href = "/user.html"

      }
      break;
    }
    else if(username.value !== i.userId && password.value !== i.userPassword){
      document.getElementsByTagName('p')[0].innerText = "wrong id password";

    }
  }

  
});
