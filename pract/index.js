let a = document.getElementsByTagName('div')[0];

let div = document.createElement("div");
div.innerHTML = '<h1>hello world</h1>';

a.before(div)