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

export type Application = express.Application;

export { Router , Request , Response , NextFunction };
export class _routerMiddlewareFactory{

  static create( endpoint:string , options:IRouterOptions ){

    let router = express.Router({mergeParams: true});

    if(options.index){
      let [ param , callback ] = options.index;
      let compose_endpoint = ( param ? path.join( endpoint , `:${param}` ) : endpoint);
      router.get( compose_endpoint , callback );
    }

    if(options.find){
      let [ param , callback ] = options.find;
      let compose_endpoint = ( param ? path.join( endpoint , `:${param}` ) : endpoint);
      router.get( compose_endpoint , callback );
    }

    if(options.create){
      let [ param , callback ] = options.create;
      let compose_endpoint = ( param ? path.join( endpoint , `:${param}` ) : endpoint);
      router.put( compose_endpoint , callback );
    }

    if(options.update){
      let [ param , callback ] = options.update;
      let compose_endpoint = ( param ? path.join( endpoint , `:${param}` ) : endpoint);
      router.patch( compose_endpoint , callback );
    }

    if(options.delete){
      let [ param , callback ] = options.delete;
      let compose_endpoint = ( param ? path.join( endpoint , `:${param}` ) : endpoint);
      router.delete( compose_endpoint , callback );
    }

    if(options.use)for(const use of options.use){
      let [ chanel , routerMiddleware ] = use;
      router.use( ( chanel ? path.join( endpoint , chanel ) : endpoint ) , routerMiddleware );
    }

    return router;

  }

}