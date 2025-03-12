import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: 'modules',
    children: [
        {
            path: 'cadaster',
            loadChildren: () => import('./modules/cadaster/cadaster.routes').then(x => x.default)
        }
    ]
}];
