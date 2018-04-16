import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-booktickets',
  templateUrl: './booktickets.component.html',
  styleUrls: ['./booktickets.component.css']
})
export class BookticketsComponent implements OnInit {

  constructor(private router:Router,) { }

  ngOnInit() {
  }
  payment(){
    this.router.navigate(['/payment']);
  }

}
