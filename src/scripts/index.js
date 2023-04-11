const response = await fetch("../src/data.json");
const dataJson = await response.json();
let dataString = JSON.stringify(dataJson)
let dataArray = JSON.parse(dataString)
const templateSource = document.getElementById('my-template').innerHTML;
const template = Handlebars.compile(templateSource);
const html = template(dataArray);
const root = document.getElementById('root');
root.innerHTML = html;
