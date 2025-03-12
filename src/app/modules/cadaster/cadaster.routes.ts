import { Routes } from "@angular/router";
import { UserComponent } from "./pages/user/user.component";

const cadasterRouter: Routes = [
    {
        path: 'user',
        component: UserComponent
    }
]
export default cadasterRouter;