import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

export const isloggedGuard: CanActivateFn = (route, state) => {
  const _router :Router = inject(Router)
  const _authSer : AuthService = inject(AuthService)
  // if(true){
  //   _router.navigateByUrl("/profile")
  // }
  alert("ggff")
  _authSer.me().subscribe(
    (res:any)=>{
      _authSer.isLoggedIn=true
      _authSer.userData=res.data
      _router.navigateByUrl("/profile")
    },
    (err)=>{
      _authSer.isLoggedIn=false
      _authSer.userData=null
    }
  )

  return true;
};
