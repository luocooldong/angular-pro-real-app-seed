import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/observable';
import { Subscription } from 'rxjs/Subscription';

import 'rxjs/add/operator/switchMap';

import { Meal, MealsService } from '../../../shared/services/meals/meals.service';

@Component({
    selector: 'meal',
    styleUrls: ['meal.component.scss'],
    template: `
        <div class="meal">
          <div class="meal__title">
             <h1>
               <img src="/img/food.svg">
               <span *ngIf="meal$ | async as meal; else title;">
               {{ meal.name ? 'Edit' : 'Create' }} meal 
               </span>
               <ng-template #title>
                Loading...
               </ng-template>
             </h1>
          </div>
          <div>
             <meal-form 
               (create)="addMeal($event)">
             </meal-form>
          </div>
        </div>
    `
})
export class MealComponent implements OnInit, OnDestroy {

    meal$ : Observable<Meal>;
    subscription: Subscription

    constructor(
        private mealsService: MealsService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    async addMeal(event: Meal) {
        await this.mealsService.addMeal(event);
        this.backToMeals();
    }

    backToMeals() {
        this.router.navigate(['meals']);
    }

    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.subscription = this.mealsService.meals$.subscribe();

        this.meal$ = this.route.params
           .switchMap(param => this.mealsService.getMeal(param.id))
    }

    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        
    }
}