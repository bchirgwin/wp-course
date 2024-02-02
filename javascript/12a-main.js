window.addEventListener('DOMContentLoaded', (event) => {
  console.log(event);
  console.log('DOM fully loaded and parsed');

  const results = document.getElementById('results');
  const p = document.createElement('p');
  const t = document.createTextNode('Hello World');
  p.appendChild(t);
  results.appendChild(p);

  const btn = document.createElement('button');
  btn.appendChild(document.createTextNode('Click Me'));
  btn.addEventListener('click', (e) => {
    // By default Events bubble up the DOM tree
    e.stopPropagation(); // stop Event Bubbling
    console.log('button clicked');
  });
  document.body.addEventListener('click', () => console.log('body clicked'));
  results.appendChild(btn);

  results.addEventListener('click', () => console.log('div clicked'));
});
