import { CanActivateFn, Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const service = inject(UserServiceService);
  if(service.isloggedin()){
    if(router.url.length > 0){
      let menu = route.url[0].path;
      if(menu === 'dashboard'){
          return true;
        } else {
          router.navigate(['']);
          return false;
        }
      }else{
        return true;
      }
    } else {
      router.navigate(['login']);
      return false;
      }
}
