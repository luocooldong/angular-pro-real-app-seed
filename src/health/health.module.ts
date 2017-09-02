import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ScheduleModule } from './schedule/schedule.module';
import { MealsModule } from './meals/meals.module';
import { WorkoutsModule } from './workouts/workouts.module';

export const ROUTES: Routes = [
    { path: 'schedule', loadChildren: './schedule/schedule.module#ScheduleModule' },
    { path: 'meals', loadChildren: './meals/meals.module#MealsModule' },
    { path: 'workouts', loadChildren: './workouts/workouts.module#WorkoutsModule' }
];

@NgModule({
    imports: [
        RouterModule.forChild(ROUTES),
        MealsModule
    ]
})
export class HealthModule {}