const products=[
 {id:1,name:"أرز بسمتي 10 كجم",price:120,img:"https://via.placeholder.com/300"},
 {id:2,name:"سكر 5 كجم",price:45,img:"https://via.placeholder.com/300"},
 {id:3,name:"زيت نباتي 2 لتر",price:18,img:"https://via.placeholder.com/300"},
 {id:4,name:"دجاج مجمد",price:85,img:"https://via.placeholder.com/300"}
];

const container=document.getElementById("products");

products.forEach(p=>{
 container.innerHTML+=`
 <div class="card">
  <img src="${p.img}">
  <h3>${p.name}</h3>
  <div class="price">${p.price} ريال</div>
  <button onclick="addToCart(${p.id})">انضم للمجموعة</button>
 </div>`;
});
