const detailsOf = JSON.parse(localStorage.getItem("products"));
for (let i of detailsOf) {
console.log(i)
let bor = document.createElement('div');


  let para1 = document.createElement("h1");
  para1.innerText = i.productsName;

  let price = document.createElement('h2');
  price.innerText = i.productsprice;


  let details = document.createElement('p');
  details.innerHTML = i.productsdeatil;

document.body.appendChild(bor)
  bor.appendChild(para1);
  bor.appendChild(price);
  bor.appendChild(details);

}
