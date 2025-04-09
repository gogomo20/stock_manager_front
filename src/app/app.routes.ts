import { Routes } from '@angular/router';
import { STKLoginComponent } from './shared/pages/login/login.component';

export const routes: Routes = [{
        path: 'modules',
        children: [
            {
                path: 'cadaster',
                loadChildren: () => import('./modules/cadaster/cadaster.routes').then(x => x.default)
            }
        ]
    },
    {
        path: '',
        component: STKLoginComponent
    }
];
