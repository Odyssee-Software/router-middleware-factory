import { default as express , Request , Response , NextFunction, Router } from 'express';
import * as path from 'path';

export type RequestCallback = ( req:Request , res:Response , next:NextFunction ) => void;
export type RequestOptions = [ string , RequestCallback ];
export type UseOption = [ string , Router ];
export type UseOptions = UseOption[];

export interface IRouterOptions{
  index?:RequestOptions;
  find?:RequestOptions;
  create?:RequestOptions;
  update?:RequestOptions;
  delete?:RequestOptions;
  use?:UseOptions;
}

export { Router , Request , Response , NextFunction };
export class _routerMiddlewareFactory{

  static create( endpoint:string , options:IRouterOptions ){

    let router = express.Router({mergeParams: true});

    if(options.index){
      let [ param , callback ] = options.index;
      endpoint = ( param ? path.join( endpoint , `:${param}` ) : endpoint);
      router.get( endpoint , callback );
    }

    if(options.find){
      let [ param , callback ] = options.find;
      endpoint = ( param ? path.join( endpoint , `:${param}` ) : endpoint);
      router.get( endpoint , callback );
    }

    if(options.create){
      let [ param , callback ] = options.create;
      endpoint = ( param ? path.join( endpoint , `:${param}` ) : endpoint);
      router.put( endpoint , callback );
    }

    if(options.update){
      let [ param , callback ] = options.update;
      endpoint = ( param ? path.join( endpoint , `:${param}` ) : endpoint);
      router.patch( endpoint , callback );
    }

    if(options.delete){
      let [ param , callback ] = options.delete;
      endpoint = ( param ? path.join( endpoint , `:${param}` ) : endpoint);
      router.delete( endpoint , callback );
    }

    if(options.use)for(const use of options.use){
      let [ chanel , routerMiddleware ] = use;
      router.use( chanel , routerMiddleware );
    }

    return router;

  }

}