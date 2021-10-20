const title = document.querySelector("title");
title.innerHTML = "my to do";

function myFunction() {
  document.body.style.background =
    "#f3f3f3 url('image1.jpg') no-repeat right top";
}
function myFunction1() {
  document.body.style.background =
    "#f3f3f3 url('image2.jpg') no-repeat right top";
}
function myFunction2() {
  document.body.style.background =
    "#f3f3f3 url('143756.jpg') no-repeat right top";
}
function myFunction3() {
  document.body.style.background = "#f3f3f3 ";
}

const body = document.querySelector("body");

const h1 = document.createElement("h1");
h1.innerHTML = "practic";
body.append(h1);

const h4 = document.createElement("h4");
h4.innerHTML = "Ali alyahya";
body.append(h4);

const list = document.createElement("ul");

list.id = "form";
body.append(list);

const toDos = ["to do", "wake up", "eat breakfast"];

const inpu = document.createElement("input");

inpu.id = "inpu12";
inpu.placeholder = "اكتب هنا";

const add = (e) => {
  toDos.splice(e.target.id, 1, inpu.value);

  renderList();
};

const remova = (e) => {
  toDos.splice(e.target.id, 1);

  renderList();
};

const replesa = () => {
  toDos.push(document.querySelector("#inpu12").value);

  renderList();
};
const buton3 = document.createElement("button");
body.append(buton3);
buton3.innerHTML = "{{اضافة}}";
buton3.className = "btn-info";
buton3.addEventListener("click", replesa);

const renderList = () => {
  const tolist = document.querySelector("#form");
  tolist.innerHTML = "";
  list.append(inpu);

  for (let index = 0; index < toDos.length; index++) {
    const dolist = document.createElement("li");
    dolist.innerHTML = toDos[index];

    const buton1 = document.createElement("button");

    const buton2 = document.createElement("button");

    buton1.id = index;
    buton2.id = index;

    buton1.innerText = "حذف";
    buton1.className = "btn-danger";
    buton2.innerText = "تعديل";
    buton2.className = "btn-warning";
    buton1.addEventListener("click", remova);
    buton2.addEventListener("click", add);

    list.append(dolist);
    list.append(buton1);
    list.append(buton2);
  }
};

renderList();

const inpute = document.createElementNS("p");
inpute.id = "ulper";

const inputlist = () => {
  const int = document.getElementById("inp1").value;
  document.getElementById("ulper").innerHTML = int;
};
