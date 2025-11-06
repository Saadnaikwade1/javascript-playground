let imgr = document.querySelectorAll("img");
let pr = document.querySelectorAll("p");

let fun1 = (e) => {
  if (/^[a-z][a-z0-9]{4,}$/i.test(e.value)) {
    imgr[0].style.display = "block";
    imgr[1].style.display = "none";
  } else {
    imgr[1].style.display = "block";
    imgr[0].style.display = "none";
  }
};

let fun2 = (e) => {
  if (/^[a-z]{3,}$/i.test(e.value.trim())) {
    imgr[2].style.display = "block";
    imgr[3].style.display = "none";
  } else {
    imgr[3].style.display = "block";
    imgr[2].style.display = "none";
  }
};
let fun3 = (e) => {
  if (/^[6-9][0-9]{9}$/i.test(e.value.trim())) {
    imgr[4].style.display = "block";
    imgr[5].style.display = "none";
  } else {
    imgr[5].style.display = "block";
    imgr[4].style.display = "none";
  }
};
let fun4 = (e) => {
  if (
    /^[a-z0-9]+[.]?[a-z0-9]+[@][a-z]{3,}[.](in|com|org|edu|asia|co.in)$/i.test(
      e.value.trim()
    )
  ) {
    imgr[6].style.display = "block";
    imgr[7].style.display = "none";
  } else {
    imgr[7].style.display = "block";
    imgr[6].style.display = "none";
  }
};

let valpwd = (e) => {
  let s = e.value;
  let f = true;
  if (s.length >= 6) {
    pr[5].style.color = "green";
  } else {
    pr[5].style.color = "red";
  }
  if (/^[A-Z]/.test(s)) {
    pr[0].style.color = "green";
  } else {
    pr[0].style.color = "red";
    f = false;
  }
  if (/[a-z]+/.test(s)) {
    pr[1].style.color = "green";
  } else {
    pr[1].style.color = "red";
    f = false;
  }
  if (/[0-9]+/.test(s)) {
    pr[2].style.color = "green";
  } else {
    pr[2].style.color = "red";
    f = false;
  }
  if (/[@#$!^]+/.test(s)) {
    pr[3].style.color = "green";
  } else {
    pr[3].style.color = "red";
    f = false;
  }
  if (/^\S+$/.test(s)) {
    pr[4].style.color = "green";
  } else {
    pr[4].style.color = "red";
    f = false;
  }
  if (f) {
    imgr[8].style.display = "block";
    imgr[9].style.display = "none";
  } else {
    imgr[9].style.display = "block";
    imgr[8].style.display = "none";
  }
};
