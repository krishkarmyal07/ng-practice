import { Component } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-observable-subject',
  templateUrl: './observable-subject.component.html',
  styleUrls: ['./observable-subject.component.scss']
})
export class ObservableSubjectComponent {

  subject: any;
  observable: any;
  displaySubject: any = [];
  displayObservable: any = [];

  subject1: any;
  observable1: any;
  displayObservable1: any;
  displaySubject1: any;
  displayObservable2: any;
  displaySubject2: any;

  emit(){
    this.subject = new Subject()
    this.subject.next(1);
    console.log(1,  "subject emmitted")
    setTimeout(() => {
      this.subject.next(2);
      console.log(2, "subject emmitted")
    }, 1000);
    setTimeout(() => {
      this.subject.next(3);
      console.log(3, "subject emmitted")
    }, 2000);
    setTimeout(() => {
      this.subject.next(4);
      console.log(4, "subject emmitted")
    }, 3000);
    setTimeout(() => {
      this.subject.next(5);
      console.log(5, "subject emmitted")
    }, 4000);

    // ///////////////////////////////////////////////////////////////

    this.observable =  new Observable((observe: any)=>{
      observe.next(1);
    console.log(1,  "observe emmitted")
    setTimeout(() => {
      observe.next(2);
      console.log(2, "observe emmitted")
    }, 1000);
    setTimeout(() => {
      observe.next(3);
      console.log(3, "observe emmitted")
    }, 2000);
    setTimeout(() => {
      observe.next(4);
      console.log(4, "observe emmitted")
    }, 3000);
    setTimeout(() => {
      observe.next(5);
      console.log(5, "observe emmitted")
    }, 4000);

    //////////////////////////////////////////////////////////////




    })


  }

  subscribe(){
    this.subject.subscribe((data:any)=>{
      this.displaySubject.push(data)
    })
    this.observable.subscribe((data:any)=>{
      this.displayObservable.push(data)
    })



  }

  emitObservable(){
    this.observable1 = new Observable((observer:any)=>{
      observer.next(Math.floor(Math.random() * 99) + 1)
    })

    
    this.observable1.subscribe((data:any)=>{
      this.displayObservable1 = data
    })
    this.observable1.subscribe((data:any)=>{
      this.displayObservable2 = data
    })
  }

  emitSubject(){
    
    
    this.subject1 = new Subject()
    
    this.subject1.subscribe((data:any)=>{
      this.displaySubject1 = data
    })
    this.subject1.subscribe((data:any)=>{
      this.displaySubject2 = data
    })

    this.subject1.next(Math.floor(Math.random() * 99) + 1)
    
  }
}
