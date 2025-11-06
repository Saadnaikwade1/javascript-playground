let conr = document.querySelector(".con");
axios.get("https://dummyjson.com/products").then((res) => {
  let prod = res.data.products;
console.log(prod);
  for (let obj of prod) {
    console.log(obj);
    
    let card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<img src=${obj.images[0]} loading="lazy" alt="img"> 
    <div class="content">
    <h1>${obj.title}</h1>
    <p>${obj.description}</p>
    <span>$.${obj.price}</span>
    <button>Add to card</button>
    <button>Know More..</button>
    </div>`
    conr.appendChild(card)
  }
}).catch((err)=>{
    console.log("Error:",err);
})
