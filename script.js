console.log("fbbbb");
const box1 = document.querySelector(".content1a");
const box2 = document.querySelector(".content1b");
const box3 = document.querySelector(".content1c");
const box4 = document.querySelector(".content1d");
const box5 = document.querySelector(".content1e");
const stepcounter1 = document.querySelector("#step1");
const stepcounter2 = document.querySelector("#step2");
const stepcounter3 = document.querySelector("#step3");
const stepcounter4 = document.querySelector("#step4");
const stepcounter5 = document.querySelector("#step5");

let count = "a";
let get = false;
box1.addEventListener("click", () => {
  stepcounter1.style.background = "green";
  // window.location.replace("https://www.amazon.in/")
  if (count != "a") {
    alert("attempt level 1 first");
  }
  count = "b";
  localStorage.setItem("b", true);
  localStorage.clear()
});

box2.addEventListener("click", () => {
  if (count != "b") {
    alert("attempt level 1 first");
  } else {
    stepcounter2.style.background = "green";
    count = "c";
    localStorage.setItem("c", true);
     localStorage.clear()
  }
});

box3.addEventListener("click", () => {
  if (count != "c") {
    alert("attempt level 2 first");
  } else {
    stepcounter3.style.background = "green";
    count = "d";
    localStorage.setItem("d", true);
    localStorage.clear()
  }
});
box4.addEventListener("click", () => {
  if (count != "d") {
    alert("attempt level 3 first");
  } else {
    stepcounter4.style.background = "green";
    count = "e";
    localStorage.setItem("e", true);
    localStorage.clear();
  }
});
box5.addEventListener("click", () => {
  if (count != "e") {
    alert("attempt level 4 first");
  } else {
    stepcounter5.style.background = "green";
    count = "f";
    localStorage.setItem("f", true);
    get = true;
    localStorage.clear()
   alert("Successfully Completed all the courses.Download Your Certificate");
  window.document.querySelector('.cert').disabled=false;
  window.document.querySelector('.cert').style.cursor='pointer';
  window.document.querySelector('.con').style.cursor='pointer';


  }
});

const b = localStorage.getItem("b");

if (b) {
  stepcounter1.style.background = "green";
}

const c = localStorage.getItem("c");

if (c) {
  stepcounter2.style.background = "green";
}

const d = localStorage.getItem("d");

if (d) {
  stepcounter3.style.background = "green";
}

const e = localStorage.getItem("e");

if (e) {
  stepcounter4.style.background = "green";
}

const f = localStorage.getItem("f");

if (f) {
  stepcounter5.style.background = "green";
 
}

// console.log("the values of", a)//
