import { 
    of, 
    from, 
    scan, 
    Observable, 
    fromEvent, 
    map,
    range,
    timer, interval
} from 'rxjs';

// of
// const stream$ = of(1, 2, 3, 4)

// stream$
//     .subscribe(val => {
//         console.log('Value: ', val);
//     })


// from
// const arr$ = from([1, 2, 3, 4, 5]).pipe(
//     scan((acc, v) => acc.concat(v), [])
// )
// arr$.subscribe(val => console.log(val));


// Observable
// const stream$ = new Observable(observer => {
//     observer.next('Hello world')

//     setTimeout(() => observer.next('After 1000 ms'), 1000)
//     setTimeout(() => observer.complete(), 1500)
//     setTimeout(() => observer.next('After 3000 ms'), 3000)
// })

// stream$.subscribe(
//     val => console.log('Val: ', val),
//     (err) => console.log(err),
//     () => console.log('Complete')
// )


// stream$.subscribe({
//     next(val) {
//         console.log(val);
//     },
//     error(err) {
//         console.log(err);
//     },
//     complete() {
//         console.log('Complete');
//     }
// })



// fromEvent
// fromEvent(document.querySelector('canvas'), 'mousemove')
//     .pipe(
//         map(e => ({
//             x: e.offsetX,
//             y: e.offsetY,
//             ctx: e.target.getContext('2d')
//         }))
//     )
//     .subscribe(pos => {
//         pos.ctx.fillRect(pos.x, pos.y, 2, 2)
//     })

// const clear$ = fromEvent(document.getElementById('clear'), 'click')
// clear$.subscribe(() => {
//     const canvas = document.querySelector('canvas')
//     canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
// })


// interval
// const sub = interval(500).subscribe(v => console.log(v))

// setTimeout(() => {
//     sub.unsubscribe()
// }, 4000)


// timer
// timer(2500).subscribe(v => console.log(v))


range(42, 10).subscribe(v => console.log(v))