import { Observable, share } from 'rxjs';

const observable = new Observable((subscriber) => {
  let count = 0;
  try {
    setInterval(() => {
      subscriber.next(count++);
    }, 500);
  } catch (err) {
    subscriber.error(err);
  }
}).pipe(share());

const observer = observable.subscribe({
  next: (x) => addItem(`o1: ${x}`),
});

setTimeout(() => {
  const observer2 = observable.subscribe({
    next: (x) => addItem(`o2: ${x}`),
  });
}, 1000);

setTimeout(() => {
  observer.unsubscribe();
}, 4000);

function addItem(val: any) {
  const node = document.createElement('li');
  const title = document.createTextNode(val);
  node.appendChild(title);
  document.getElementById('output').appendChild(node);
}
