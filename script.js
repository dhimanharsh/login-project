let input1 = document.querySelector("#name");
let input2 = document.querySelector("#email");
let input3 = document.querySelector("#userid");
let input4 = document.querySelector("#password");
let dropDown = document.querySelector("#user");
let btn1 = document.querySelector("#submit");

// save the old regisration details in local storage and if the information is already exist in local storage save the info as it is and if new user enter the deatils make a new array
const user_Arr = JSON.parse(localStorage.getItem("userOne")) || [];
btn1.addEventListener("click", (e) => {
  // prevent the deafult behaviour of our document
  e.preventDefault();
  // call the function
  saveRegister();
});

function saveRegister() {
  // getting the values from input
  let userName = input1.value;
  let userEmail = input2.value;
  let userId = input3.value;
  let userPassword = input4.value;
  let userAccountType = dropDown.value;
  // insert input value in object;
  let obj = {
    userName,
    userEmail,
    userId,
    userPassword,
    userAccountType,
  };
  console.log(obj);
  // push the object into array ;
  user_Arr.push(obj);
  // convert the array values to string by JSOM.strigfy;
  let objToString = JSON.stringify(user_Arr);
  // save the converted array to local storage;
  localStorage.setItem("userOne", objToString);

}
