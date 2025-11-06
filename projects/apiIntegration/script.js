let container=document.querySelector(".con")
axios.get("https://dummyjson.com/products")
.then((res)=>{
    let prod=res.data.products
    for (let item of prod){
        let card=document.createElement("div")
        card.className="card"
        card.innerHTML=`<h3>${item.title}</h3><img src="${item.images[0]}" height=80px width=60px/>
        <p style="color:blue">${item.description}</p>`
        container.appendChild(card)
    }
}).catch((err)=>{
    console.log(err);
})