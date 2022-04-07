import { Subject, ReplaySubject } from 'rxjs';

// Subject
// document.addEventListener('click', () => {
//     const stream$ = new Subject()

//     stream$.subscribe(v => console.log('Value: ', v))

//     stream$.next('Hello')
//     stream$.next('Rx')
//     stream$.next('JS')
// })


// BehaviorSubject
// document.addEventListener('click', () => {
//     const stream$ = new BehaviorSubject('First!')

//     stream$.next('Hello')
//     stream$.next('Rx')
//     stream$.next('JS')

//     stream$.subscribe(v => console.log('Value: ', v))
// })


// ReplaySubject
document.addEventListener('click', () => {
    const stream$ = new ReplaySubject(2)

    stream$.next('Hello')
    stream$.next('Rx')
    stream$.next('JS')

    stream$.subscribe(v => console.log('Value: ', v))
})