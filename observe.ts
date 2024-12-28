import { Observable } from 'rxjs';

const myObservable = new Observable((observer) => {
  observer.next('Hello');
  observer.complete(); // This will mark the observable as complete
});

myObservable.subscribe({
  next: (data) => console.log(data),  // Data emitted
  complete: () => console.log('Done!')  // Completion handler
});
