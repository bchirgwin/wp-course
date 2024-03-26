import { Subject } from 'rxjs';

const subject = new Subject();

subject.subscribe({
  next: (data) => addItem(`Observer 1: ${data}`),
  error: (err) => addItem(err),
  complete: () => addItem('Observer 1 Completed'),
});

subject.next('One');

const observer2 = subject.subscribe({
  next: (data) => addItem(`Observer 2: ${data}`),
  error: (err) => addItem(err),
  complete: () => addItem('Observer 2 Completed'),
});

subject.next('Two');
subject.next('Three');
subject.next('Four');

observer2.unsubscribe();

subject.next('Five');

function addItem(val: any, clear = false) {
  const node = document.createElement('li');
  const title = document.createTextNode(val);

  node.appendChild(title);
  if (clear) {
    document.getElementById('output').innerHTML = '';
  }
  document.getElementById('output').appendChild(node);
}
