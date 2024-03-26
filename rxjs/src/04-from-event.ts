import { fromEvent } from 'rxjs';

const observable = fromEvent(document, 'mousemove');

setTimeout(() => {
  let subscription = observable.subscribe((x: any) => addItem(`${x.screenX},${x.screenY}`, true));
}, 2000);

function addItem(val: any, clear = false) {
  const node = document.createElement('li');
  const title = document.createTextNode(val);

  node.appendChild(title);
  if (clear) {
    document.getElementById('output').innerHTML = '';
  }
  document.getElementById('output').appendChild(node);
}
