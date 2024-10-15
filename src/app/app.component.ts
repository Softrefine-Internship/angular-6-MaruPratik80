import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-6';

  form!: FormGroup;
  submited = false;
  countries = ['India', 'US', 'England'];

  ngOnInit(): void {
    this.form = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      lastName: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(50)]),
      gender: new FormControl(null, Validators.required),
      married: new FormControl(null, Validators.required),
      country: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    this.submited = true;
    console.log(this.form.value);
    // if (this.form.valid) console.log(this.form.value);
  }

  onReset() {
    this.submited = false;
    this.form.reset();
  }
}
