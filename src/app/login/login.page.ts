import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ObjetosService } from '../services/objetos.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private  router:  Router, private objetos: ObjetosService) { }

  ngOnInit() {
  }

  login(form) {
    this.router.navigateByUrl('/menu/tabs/tab1');

  }

}
