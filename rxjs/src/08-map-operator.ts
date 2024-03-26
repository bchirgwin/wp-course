import { map, range } from 'rxjs';

const nums = range(1, 10).pipe(map((x) => x * 2));

nums.subscribe((x) => addItem(x));

function addItem(val: any, clear = false) {
  const node = document.createElement('li');
  const title = document.createTextNode(val);

  node.appendChild(title);
  if (clear) {
    document.getElementById('output').innerHTML = '';
  }
  document.getElementById('output').appendChild(node);
}
