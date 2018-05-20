import { Component, OnInit, Input, Output, ElementRef, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RecipeService } from '../recipe/recipe.service';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'amm-add-form',
  template: `
      <!--<button class='btn' [ngClass]='dataSbmtd ? "disabled" : "btn-danger"' (click)='dataSbmtd = !dataSbmtd' >Sign Up Now!!</button>-->
      <form *ngIf='!dataSbmtd' [formGroup]='ffSbmt' (submit)='uploadFFData()' (reset)='cancelUpload()'>
        
        <div formGroupName='header'>
          <label for='title'>Title</label>
          <input type='text' id='title' class='form-control' formControlName='title' placeholder='Mr/VP/Ms ...etc'/>
          <input type='hidden' id='rcpid' class='form-control' formControlName='rcpid' [value]='randNum'/>
        </div>
        <div formGroupName='name'>
          <label for='first'>First</label>
          <input type='text' id='first' class='form-control' formControlName='first' placeholder='first name'>
          <!--<app-form-validation-msgs [control]='this.ffSbmt.get("name.first")'></app-form-validation-msgs>-->
          <label for='last'>Last</label>
          <input type='text' id='last' class='form-control' formControlName='last' placeholder='last name'>
          <!--<app-form-validation-msgs [control]='this.ffSbmt.get("name.last")'></app-form-validation-msgs>-->
        </div>
        <div formGroupName='persondata'>
          <label for='age'>I am over 18</label>
          <input type='checkbox' id='age' class='form-control' formControlName='age'>
          <!--<app-form-validation-msgs [control]='this.ffSbmt.get("persondata.age")'></app-form-validation-msgs>-->
          <!--<label for='email'>Email</label>
          <input type='text' id='email' class='form-control' formControlName='email' placeholder='@e-mail'>
          <app-form-validation-msgs [control]='this.ffSbmt.get("peresondata.email")'></app-form-validation-msgs>-->
        </div>
        <div formGroupName='socialmedia'>
          <label for='instagram'>Whats your IG</label>
          <input type='text' id='instagram' class='form-control' formControlName='instagram' placeholder='instagram.com/myinstagramprofile'>
          <!--<app-form-validation-msgs [control]='this.ffSbmt.get("socialmedia.instagram")'></app-form-validation-msgs>-->
          <label for='facebook'>Whats your FB</label>
          <input type='text' id='facebook' class='form-control' formControlName='facebook' placeholder='facebook.com/myfacebookprofile'>
          <!--<app-form-validation-msgs [control]='this.ffSbmt.get("socialmedia.facebook")'></app-form-validation-msgs>-->
        </div>
        <div formGroupName='product'>
          <!--<label for='category'>Whats your IG</label>-->
          <label for="category">Category</label>
          <select id="category" name="category" class="form-control" formControlName="category">
            <option *ngFor='let cat of categories' [value]="cat">{{cat}}</option>
          </select>

          <label for="image">Imaage</label>
          <input type='text' id='image' class='form-control' formControlName='image' placeholder='path/to/image/file'>
          <!--<app-form-validation-msgs [control]='this.ffSbmt.get("socialmedia.instagram")'></app-form-validation-msgs>-->
          <label for='desc'>Description</label>
          <input type='text' id='desc' class='form-control' formControlName='desc' placeholder='recipe details go here'>
          <!--<app-form-validation-msgs [control]='this.ffSbmt.get("socialmedia.facebook")'></app-form-validation-msgs>-->
        </div>

        <button type="submit" [ngClass]="ffSbmt.valid ? 'btn btn-default' : 'disabled btn btn-basic'">Purchase</button>
        <button type="reset" class="btn btn-default" mat-dialog-close>Cancel</button>
      </form>
      <!--<button type="reset" class="btn btn-default" mat-dialog-close>Cancel</button>-->
    <!--<div>hello!!!</div>-->

  `,
  providers: [HomeService, RecipeService],
  styles: [`
    button:first-child {
      margin-bottom: 2rem;
    }

    input {
      color: #D9D9D9;
    }


  `]
})
export class AddFormComponent implements OnInit {
  dataSbmtd: boolean;
  elem: Element;
  ffSbmt: FormGroup;
  randNum: number;
  categories = [];
  constructor(
    private fBldr: FormBuilder,
    private elRef: ElementRef,
    private rcpSvc: RecipeService,
    private homeSvc: HomeService

  ) {
    this.categories = this.homeSvc.getAllCategories();
    this.elem = this.elRef.nativeElement;
    this.dataSbmtd = false;
  }

  ngOnInit() {
    this.randNum = this.rcpSvc.generateID();
    this.ffSbmt = this.fBldr.group({
      header: this.fBldr.group({
        title: '',
        rcpid: ''
      }),
      name: this.fBldr.group({
        first: ['', Validators.compose([Validators.required, Validators.minLength(2)])],
        last: ['', Validators.compose([Validators.required, Validators.minLength(2)])]
      }),
      persondata: this.fBldr.group( {
        age: ['', Validators.required],


      }),
      socialmedia: this.fBldr.group( {
        instagram: '',
        facebook: ''
      }),
      product: this.fBldr.group({
        category: ['', Validators.required],
        image: '',
        desc: ['', Validators.compose([Validators.required, Validators.minLength(20)] )]
      })
    });
  }

  uploadFFData() {
    if (this.ffSbmt.dirty && this.ffSbmt.valid) {
      console.log('form Submitted');
      console.log('form data: ' + this.ffSbmt);
      const formArray = [];

      // const title =
      const title = this.ffSbmt.value.header.title;
      const rcpid = this.ffSbmt.value.header.rcpid;
      const fname = this.ffSbmt.value.name.first;
      const lname = this.ffSbmt.value.name.last;
      const pdata = this.ffSbmt.value.persondata.age;
      const somed1 = this.ffSbmt.value.socialmedia.instagram;
      const somed2 = this.ffSbmt.value.socialmedia.facebook;
      const rcpCategory = this.ffSbmt.value.product.category;
      const image = this.ffSbmt.value.product.image;
      const desc = this.ffSbmt.value.product.desc;

      formArray.push(
        {
          title: title,
          id: rcpid,
          fname: fname,
          lname: lname,
          pdata: pdata,
          somed1: somed1,
          somed2: somed2,
          rcpCategory: rcpCategory,
          image: image,
          desc: desc
        },
      );

      console.log('sbmtd data: ' + JSON.stringify(formArray));

      this.dataSbmtd = true;

      // console.log('fn: ' + fname + '\n ln: ' + lname);
    }

    /*const keys = Object.keys(this.ffSbmt);
    console.log('dKey_ ' + keys['value']);
    for (let key = 0; key < keys.length; key++) {
      // console.log('keys: ' + keys[key]);
      /!*if (key % 2 === 0) {
        if (this.mainSrvcs.includes(keys[key])) {
          continue;
        }
        this.mainSrvcs.push(keys[key]);

      }*!/
    }*/



  }

  cancelUpload() {
    this.ffSbmt.reset();
    this.dataSbmtd = false;
  }

}
