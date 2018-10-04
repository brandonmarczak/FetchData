/* global fetch */

const createNode = (element) => {
  return document.createElement(element);
}

const append = (parent, el) => {
  return parent.appendChild(el);
}

const ul = document.getElementById('output');
fetch('https://randomuser.me/api/?results=6')
  .then((res) => res.json())
  .then((data) => {
  let users = data.results;
  return users.map(((users) => {
    let li = createNode('li'),
        img = createNode('img'),
        firstName = createNode('p'),
        surName = createNode('p');
    img.src = users.picture.medium;
    firstName.innerHTML = `${users.name.first}`;
    surName.innerHTML = `${users.name.last}`;
    append(li, img);
    append(li, firstName);
    append(li, surName);
    append(ul, li);
  }));
})
  .catch(function(error) {
  console.log(JSON.stringify(error));
});   
