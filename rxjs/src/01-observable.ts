import { Observable, share } from 'rxjs';

const observable = new Observable((subscriber) => {
  try {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    // throw new Error('Errr...');
    setTimeout(() => {
      subscriber.next(4);
    }, 1000);

    // subscriber.complete();
    subscriber.next(5);
  } catch (err) {
    subscriber.error(err);
  }
});

const observer = observable.subscribe({
  next: (x) => addItem(`observable 1: ${x}`),
  error: (err) => addItem(err),
  complete: () => addItem('complete'),
});

function addItem(val: any) {
  const node = document.createElement('li');
  const title = document.createTextNode(val);
  node.appendChild(title);
  document.getElementById('output').appendChild(node);
}
