let btn1 = document.getElementById("myButton1");
let btn2 = document.getElementById("myButton2");
let code = document.getElementById("copycode");

let color1 = "#A21CAF";
let color2 = "#44dc1b";

const updateBackground = () => {
  document.body.style.background = `linear-gradient(to right,${color1},${color2})`;
  code.innerHTML = `background:linear-gradient(to right,${color1},${color2})`;
};

const handlebutton1 = () => {
  let myhexvalues = "0123456789abcdef";
  color1 = "#";
  for (let i = 0; i < 6; i++) {
    color1 = color1 + myhexvalues[Math.floor(Math.random() * 16)];
  }
  console.log(color1);
  updateBackground();
  btn1.style.backgroundColor = color1;
  btn1.innerHTML = color1;
};

const handlebutton2 = () => {
  let myhexvalues = "0123456789abcdef";
  color2 = "#";
  for (let i = 0; i < 6; i++) {
    color2 = color2 + myhexvalues[Math.floor(Math.random() * 16)];
  }
  console.log(color2);
  updateBackground();
  btn2.style.backgroundColor = color2;
  btn2.innerHTML = color2;
};

btn1.addEventListener("click", handlebutton1);
btn2.addEventListener("click", handlebutton2);

updateBackground();  // Initialize the background gradient
