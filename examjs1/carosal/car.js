    let imgr = document.querySelector("img");
      let h1r = document.querySelector("h1");
      let ir = document.querySelectorAll(".dot-con i");
      let i = 0;
      let arr = [
        {
          img: "img1.jpeg",
          hd: "heading-1",
        },
        {
          img: "img2.jpeg",
          hd: "heading-2",
        },
        {
          img: "img3.jpeg",
          hd: "heading-3",
        },
        {
          img: "img4.jpeg",
          hd: "heading-4",
        },
      ];

      let fwd = () => {
        ir[i].className = "fa-regular fa-circle";
        i = (i + 1) % 4;
        imgr.src = arr[i].img;
        h1r.innerHTML = arr[i].hd;
        ir[i].className = "fa-solid fa-circle";
      };
      let bkd = () => {
        console.log("bkd clicked");
        
        ir[i].className = "fa-regular fa-circle";
        if (i == 0) {
          i = 3;
        }
        else{
          i--;
        }
        imgr.src = arr[i].img;
        h1r.innerHTML = arr[i].hd;
        ir[i].className = "fa-solid fa-circle";
        
      };

      let setI = (ind) => {
        ir[i].className = "fa-regular fa-circle";
        i = ind;
        imgr.src = arr[i].img;
        h1r.innerHTML = arr[i].hd;
        ir[i].className = "fa-solid fa-circle";
      };
      setInterval(fwd, 2000);