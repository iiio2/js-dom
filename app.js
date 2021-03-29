const heading = document.querySelector('#heading');
const btn = document.querySelector('button');
const show = document.querySelector('p');

btn.addEventListener('click', function () {
  show.classList.toggle('show');
  show.classList.add('color');

  if (this.textContent == 'Hide') {
    this.textContent = 'Show';
  } else {
    this.textContent = 'Hide';
  }
});

console.log(btn.parentNode);
console.log(btn.nextSibling);
console.log(btn.childNodes);
console.log(show.firstChild);
console.log(show.lastChild);

// nodeType -> e = 1, a = 2, t = 3 ;
console.log(btn.childNodes[0].nodeType);
console.log(heading.nodeType);
console.log(heading.nextElementSibling);
console.log(heading.nextSibling.nextSibling.innerHTML);
