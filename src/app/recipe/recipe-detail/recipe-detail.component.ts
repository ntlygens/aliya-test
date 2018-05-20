import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'amm-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  rcpDetail: any[];
  slctdRcpID;
  constructor(
    private route: ActivatedRoute,
    private rte: Router,
    private rcpeSrvc: RecipeService
  ) {
      this.route.paramMap.subscribe( params => {
        // console.log('prms: ' + params['params']['id']);
        this.slctdRcpID = params['params']['id'];
        console.log('ingrd ' + this.slctdRcpID);

      });


  }

  ngOnInit() {
    // console.log('id-- ' + this.slctdRcpID);
    this.rcpeSrvc.getAllRecipes().subscribe( res => {
      const rcpDtl = res.filter( dtl => dtl.id === this.slctdRcpID )[0];
      // console.log('id: ' + JSON.stringify(rcpDtl));
      this.rcpDetail = rcpDtl;
      // console.log('ddd: ' + this.rcpDetail['id']);

    });
  }

}
