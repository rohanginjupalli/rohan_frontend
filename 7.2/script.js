// inner html is only valid for element nodes for other type nodes we should use the values like node vaue ot data

let div = document.getElementsByClassName("bottomnavbar")[0];

let d = document.createElement("div");
d.innerHTML = '<h1>hello world</h1>'
div.appendChild(d)

