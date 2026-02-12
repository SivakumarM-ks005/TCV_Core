import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },
    {
        path:'login',
        loadComponent:() => import('./login/login/login').then(n => n.Login)
    }
];
