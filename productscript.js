
const details = JSON.parse(localStorage.getItem("products")) || [];

addThis.addEventListener('click',(e)=>{
e.preventDefault();
saceProduct()
});
function saceProduct(){

    let productsName = productName.value;
    let productsprice = productPrice.value;
    let productsdeatil = productDescription.value;

    // insert input value in object;
    let obj = {
      
        productsName,
        productsprice,
        productsdeatil

    }
      // push the object into array ;
  details.push(obj);
  // convert the array values to string by JSOM.strigfy;
  let objToString = JSON.stringify(details);
  // save the converted array to local storage;
  localStorage.setItem("products", objToString);
}


remove.addEventListener('click',(e)=>{
  e.preventDefault();

  localStorage.remove(productsName.value)

})
