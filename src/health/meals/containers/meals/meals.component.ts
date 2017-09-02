import { Component, OnDestroy, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable'
import { Subscription } from 'rxjs/Subscription'

import { Store } from '../../../../store';

import { Meal, MealsService } from './../../../shared/services/meals/meals.service';

@Component({
    selector: 'meals',
    styleUrls: ['meals.component.scss'],
    template: `
        <div>
           {{ meals$ | async | json }}
        </div>
    `
})
export class MealsComponent implements OnInit, OnDestroy{

    meals$: Observable<Meal[]>;
    subscription: Subscription;

    constructor(
        private store: Store,
        private mealsService: MealsService
    ) {}

    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.meals$ = this.store.select<Meal[]>('meals');
        this.subscription = this.mealsService.meals$.subscribe();
        
    }

    ngOnDestroy() {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.subscription.unsubscribe();
        
    }


}