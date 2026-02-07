// المنتجات
let products=JSON.parse(localStorage.getItem("products"))||[];


function addProduct(){
products.push({
name:name.value,
price:price.value,
img:img.value
});
localStorage.setItem("products",JSON.stringify(products));
alert("تم إضافة المنتج");
loadProducts();
}


function loadProducts(){
const list=document.getElementById("productList");
if(!list) return;
list.innerHTML="";
products.forEach((p,i)=>{
list.innerHTML+=`<div>${p.name} - ${p.price} ريال <button onclick=delProduct(${i})>حذف</button></div>`;
});
}


function delProduct(i){
products.splice(i,1);
localStorage.setItem("products",JSON.stringify(products));
loadProducts();
}


// Dashboard Stats
if(document.getElementById("pCount")){
document.getElementById("pCount").innerText=products.length;
}


// Settings
function saveSettings(){
localStorage.setItem("mainColor",mainColor.value);
alert("تم حفظ اللون");
}


loadProducts();
