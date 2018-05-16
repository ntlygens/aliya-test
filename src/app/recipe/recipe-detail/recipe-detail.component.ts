import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'amm-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  rcpDetail: any;
  constructor(
    private route: ActivatedRoute,
    private rte: Router
  ) {
      this.route.paramMap.subscribe( params => {
        // console.log('prms: ' + params['params']['id']);
        this.rcpDetail = params['params']['id'];
        console.log('ingrd ' + this.rcpDetail);
      });


  }

  ngOnInit() {
  }

}
