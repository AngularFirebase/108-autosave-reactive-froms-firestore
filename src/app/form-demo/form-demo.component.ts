import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms'
import { AngularFirestore } from 'angularfire2/firestore'
import { BehaviorSubject } from 'rxjs'

@Component({
  selector: 'form-demo',
  templateUrl: './form-demo.component.html',
  styleUrls: ['./form-demo.component.scss']
})
export class FormDemoComponent implements OnInit {

  myForm: FormGroup;
  myDoc;

  state: string;

  constructor(private fb: FormBuilder, private afs: AngularFirestore) { }

  ngOnInit() {

    this.myForm = this.fb.group({
      email: ['', Validators.required],
      career: ['', Validators.required],
      bio: ['']
    })

    this.myDoc = this.afs.doc('contacts/test').valueChanges();
  }


  changeHandler(e) {
    // console.log(e)
    this.state = e;

  }
}
