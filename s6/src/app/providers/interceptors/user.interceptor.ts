import { HttpInterceptorFn } from '@angular/common/http';

export const userInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem("token")
  if(token){
    req = req.clone({
      headers : req.headers.set("Authorization", token)
    })
  }
  return next(req);
};
