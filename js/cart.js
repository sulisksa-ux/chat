function addToCart(id){
 let cart=JSON.parse(localStorage.getItem("cart"))||[];
 cart.push(id);
 localStorage.setItem("cart",JSON.stringify(cart));
 alert("تم إضافة المنتج للسلة");
}
