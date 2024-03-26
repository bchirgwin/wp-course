import { fromEvent, map, merge } from 'rxjs';

const keyup = fromEvent<KeyboardEvent>(document, 'keyup').pipe(map((event) => `Up ${event.key}`));

const keydown = fromEvent<KeyboardEvent>(document, 'keydown').pipe(map((event) => `Down ${event.key}`));

const keys = merge(keydown, keyup);

keys.subscribe((x) => addItem(x));

function addItem(val: any, clear = false) {
  const node = document.createElement('li');
  const title = document.createTextNode(val);

  node.appendChild(title);
  if (clear) {
    document.getElementById('output').innerHTML = '';
  }
  document.getElementById('output').appendChild(node);
}
