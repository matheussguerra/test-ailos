import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { createMask } from '@ngneat/input-mask';
import { ValidateCPF } from 'src/app/shared/validators/cpf-validator';
import { FormBuilder } from '@angular/forms';
import { HomeService } from 'src/app/services/home.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  user: User | undefined;

  inputClass: string = 'container-input';

  searchByCpfForm = new FormGroup({
    cpf: new FormControl('', [
      Validators.minLength(14),
      Validators.maxLength(14),
      ValidateCPF,
    ]),
  });

  get cpf() {
    return this.searchByCpfForm.get('cpf');
  }

  constructor(private homeService: HomeService) {}
  cpfInputMask = createMask('999.999.999-99');

  onSubmit(): void {
    this.homeService
      .getData(this.searchByCpfForm.value.cpf)
      .subscribe((user) => {
        this.user = user;
      });
  }

  ngOnInit(): void {}
}
