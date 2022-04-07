import { interval } from 'rxjs';
import {map} from 'rxjs/operators'

const stream$ = interval(1000)
    .pipe(
        
    )

stream$.subscribe({
    next: v => console.log('Next: ', v),
    complete: () => console.log('Compleate')
})