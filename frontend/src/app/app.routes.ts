import { Routes } from '@angular/router';
import { RouteGuard } from './services/route-guard';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'login',
        pathMatch:'full'
    },
     {
        path:'login',
        loadComponent: () => import('./login/login').then(n =>n.Login)
    },
    {
        path:'',
        loadComponent: () => import('./layout/layout').then(n =>n.Layout),
       children:[
        {
            path:'dashboard',
            loadComponent: ()=> import('./dashboard/dashboard').then(n => n.Dashboard),
            canActivate:[RouteGuard],
            data:{
                expectedRole:['admin','user']
            }
        }
    ]
    },
     {
        path:'**',
        loadComponent: () => import('./login/login').then(n =>n.Login)
    },
];
