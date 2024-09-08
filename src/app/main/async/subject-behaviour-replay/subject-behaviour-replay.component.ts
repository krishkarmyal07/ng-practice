import { Component } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subject-behaviour-replay',
  templateUrl: './subject-behaviour-replay.component.html',
  styleUrls: ['./subject-behaviour-replay.component.scss']
})
export class SubjectBehaviourReplayComponent {

  subject = new Subject();
  behaviourSubject = new BehaviorSubject("Default value");
  replaySubject = new ReplaySubject();
  displaySubject: any = [];
  displayReplaySubject: any = [];
  displayBehaviourSubject: any = [];

  emit(){

    this.displayBehaviourSubject = []
    this.displayReplaySubject = []
    this.displaySubject = []
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


    this.replaySubject.next(1);
    console.log(1,  "replaySubject emmitted")
    setTimeout(() => {
      this.replaySubject.next(2);
      console.log(2, "replaySubject emmitted")
    }, 1000);
    setTimeout(() => {
      this.replaySubject.next(3);
      console.log(3, "replaySubject emmitted")
    }, 2000);
    setTimeout(() => {
      this.replaySubject.next(4);
      console.log(4, "replaySubject emmitted")
    }, 3000);
    setTimeout(() => {
      this.replaySubject.next(5);
      console.log(5, "replaySubject emmitted")
    }, 4000);

    //////////////////////////////////////////////////////////////////

    // this.behaviourSubject.next();
    console.log(1,  "behaviourSubject emmitted")
    setTimeout(() => {
      this.behaviourSubject.next('2');
      console.log(2, "behaviourSubject emmitted")
    }, 1000);
    setTimeout(() => {
      this.behaviourSubject.next("3");
      console.log(3, "behaviourSubject emmitted")
    }, 2000);
    setTimeout(() => {
      this.behaviourSubject.next('4');
      console.log(4, "behaviourSubject emmitted")
    }, 3000);
    setTimeout(() => {
      this.behaviourSubject.next('5');
      console.log(5, "behaviourSubject emmitted")
    }, 4000);
  }

  subscribe(){
    this.subject.subscribe((data:any)=>{
      this.displaySubject.push(data)
    })
    this.replaySubject.subscribe((data:any)=>{
      this.displayReplaySubject.push(data)
    })
    this.behaviourSubject.subscribe((data:any)=>{
      this.displayBehaviourSubject.push(data)
    })
  }

}
