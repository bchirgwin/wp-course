import { ReplaySubject } from 'rxjs';

const subject = new ReplaySubject(2);

subject.subscribe({
  next: (data) => addItem(`Observer 1: ${data}`),
  error: (err) => addItem(err),
  complete: () => addItem('Observer 1 Completed'),
});

subject.next('One');
subject.next('Two');
subject.next('Three');

const observer2 = subject.subscribe({
  next: (data) => addItem(`Observer 2: ${data}`),
  error: (err) => addItem(err),
  complete: () => addItem('Observer 2 Completed'),
});

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
