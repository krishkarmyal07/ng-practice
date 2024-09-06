import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable-promise',
  templateUrl: './observable-promise.component.html',
  styleUrls: ['./observable-promise.component.scss']
})
export class ObservablePromiseComponent {

  observable: any;
  promise: any;
  observable2: any;
  promise2: any;
  subscription2: any;
  time: any;

  constructor(){
    
  }

  create() {
    this.observable = new Observable<string>( observer =>{
      console.log('Observable created');
      observer.next("Observable Emmited")
    })

    this.promise = new Promise( resolve=> {
       console.log('Promise created')
       resolve("Promise Emitted")
    })
  }

  execute() {
     this.observable.subscribe((res: any) =>{
      console.log(res)
     });
     
     this.promise.then((res: any) =>{
      console.log(res)
     })
  }
  create1() {
    this.observable = new Observable<any>( observer =>{
      console.log('Observable created');
      observer.next("Observable Emmited1")
      observer.next("Observable Emmited2")
      observer.next("Observable Emmited3")

    })

    this.promise = new Promise( resolve=> {
       console.log('Promise created')
       resolve("Promise Emitted1")
       resolve("Promise Emitted2")
       resolve("Promise Emitted3")
    })

  }

  execute1() {
     this.observable.subscribe((res: any) =>{
      console.log(res)
     });
     
     this.promise.then((res: any) =>{
      console.log(res)
     })
  }
    create2() {
      this.observable2 = new Observable<any>( observer =>{
      let i = 1
        setInterval(() => {
          observer.next(i++)
        }, 1000);
      })

      this.promise2 = new Promise( resolve=> {
        setInterval(() => {
        resolve('resolve emmitted')
        }, 1000);
      })

    }

    execute2() {
      this.subscription2 = this.observable2.subscribe((res: any) =>{
        this.time = res
      });
      
      this.promise2.then((res: any) =>{
        console.log(res)
      })
    }

    cancel(){
      this.subscription2.unsubscribe();
      console.log('subscription cancelled')
    }


    
}
