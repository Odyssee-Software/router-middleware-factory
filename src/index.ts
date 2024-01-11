import { default as express , Request , Response , NextFunction, Router } from 'express';
import * as path from 'path';

export type RequestCallback = ( req:Request , res:Response , next:NextFunction ) => void;
/** tuple */
export type RequestOptions = [ string , RequestCallback ];
export type UseOption = [ string , Router ];
export type UseOptions = UseOption[];

/** This interface is used to define the configuration options for a router. It has several properties that allow you to
specify the callback functions for different endpoints of the router. */
export interface IRouterOptions{

  /** The `index?:RequestOptions;` property in the `IRouterConfiguration` interface is used to define
  the configuration options for the index endpoint of a router. It allows you to specify the
  callback function that will be executed when a request is made to the index endpoint. */
  index?:RequestOptions;

  /** The `find?:RequestOptions;` property in the `IRouterOptions` interface is used to define the
  configuration options for the "find" endpoint of a router. It allows you to specify the callback
  function that will be executed when a request is made to the "find" endpoint. The `RequestOptions`
  type represents an array with two elements: a string representing the parameter in the URL path of
  the endpoint, and a callback function that handles the logic of the endpoint. */
  find?:RequestOptions;

  /** The `create?:RequestOptions;` property in the `IRouterOptions` interface is used to define the
  configuration options for the "create" endpoint of a router. It allows you to specify the callback
  function that will be executed when a request is made to the "create" endpoint. The
  `RequestOptions` type represents an array with two elements: a string representing the parameter
  in the URL path of the endpoint, and a callback function that handles the logic of the endpoint. */
  create?:RequestOptions;

  /** The `update?:RequestOptions;` property in the `IRouterOptions` interface is used to define the
  configuration options for the "update" endpoint of a router. It allows you to specify the callback
  function that will be executed when a request is made to the "update" endpoint. The
  `RequestOptions` type represents an array with two elements: a string representing the parameter
  in the URL path of the endpoint, and a callback function that handles the logic of the endpoint. */
  update?:RequestOptions;

  /** The `delete?:RequestOptions;` property in the `IRouterOptions` interface is used to define the
  configuration options for the "delete" endpoint of a router. It allows you to specify the callback
  function that will be executed when a request is made to the "delete" endpoint. The
  `RequestOptions` type represents an array with two elements: a string representing the parameter
  in the URL path of the endpoint, and a callback function that handles the logic of the endpoint.
  This parameter allows you to create dynamic routes where the parameter value can vary. */
  delete?:RequestOptions;

  /** The `use?:UseOptions;` property in the `IRouterConfiguration` interface is used to define
  additional routers that should be mounted under the specified endpoint. It allows you to include
  other routers as middleware within the main router. */
  use?:UseOptions;

}

/** Interface used to configure an endpoint in a router */
export interface IEndpointConfuguration{

  /** The `callback:RequestCallback` property in the `IEndpointConfuguration` interface is used to
  define the function that will be executed when a request is made to the corresponding endpoint.
  The `RequestCallback` type represents a function that takes three parameters: `req` (the request
  object), `res` (the response object), and `next` (a function to pass control to the next
  middleware function). This callback function is responsible for handling the logic of the
  endpoint, such as retrieving data, performing operations, and sending a response back to the
  client. */
  callback:RequestCallback,

  /** The `options` property in the `IEndpointConfuguration` interface is used to specify additional
  configuration options for an endpoint in a router. It includes a `param` property that is used to
  specify a parameter in the URL path of the endpoint. This allows you to define dynamic routes
  where the parameter value can vary. For example, if you have an endpoint `/users/:id`, you can
  specify the `param` property as `id` to indicate that the endpoint expects a dynamic value for the
  `id` parameter. */
  options? : {
    /** This property is used to specify a parameter in the URL path of the endpoint. */
    param? : string
  }

}

/** The `IRouterConfiguration` interface defines the configuration options for creating a router middleware. */
export interface IRouterConfiguration{

  /** The `endpoint` property in the `IRouterConfiguration` interface is a string that represents the
  base URL path for the router. It is used to define the starting point for all the routes defined
  in the router. When creating a router middleware using the `_routerMiddlewareFactory` class, the
  `endpoint` parameter is passed to specify the base URL path for the router. */
  endpoint:string;

  /** The `index` property in the `IRouterConfiguration` interface is used to define the configuration options for the index endpoint of a router. */
  index?:IEndpointConfuguration;

  /** The `find?:IEndpointConfuguration;` property in the `IRouterConfiguration` interface is used to
  define the configuration options for the "find" endpoint of a router. It allows you to specify the
  callback function that will be executed when a request is made to the "find" endpoint. The
  callback function takes three parameters: `req` (the request object), `res` (the response object),
  and `next` (a function to pass control to the next middleware function). Additionally, you can
  specify the `param` property in the `options` object to define a parameter in the URL path of the
  "find" endpoint. This parameter allows you to create dynamic routes where the parameter value can
  vary. */
  find?:IEndpointConfuguration;

  /** The `create?:IEndpointConfuguration;` property in the `IRouterConfiguration` interface is used to
  define the configuration options for the "create" endpoint of a router. It allows you to specify
  the callback function that will be executed when a request is made to the "create" endpoint. The
  callback function takes three parameters: `req` (the request object), `res` (the response object),
  and `next` (a function to pass control to the next middleware function). Additionally, you can
  specify the `param` property in the `options` object to define a parameter in the URL path of the
  "create" endpoint. This parameter allows you to create dynamic routes where the parameter value
  can vary. */
  create?:IEndpointConfuguration;

  /** The `update?:IEndpointConfuguration;` property in the `IRouterConfiguration` interface is used to
  define the configuration options for the "update" endpoint of a router. It allows you to specify
  the callback function that will be executed when a request is made to the "update" endpoint. The
  callback function takes three parameters: `req` (the request object), `res` (the response object),
  and `next` (a function to pass control to the next middleware function). Additionally, you can
  specify the `param` property in the `options` object to define a parameter in the URL path of the
  "update" endpoint. This parameter allows you to create dynamic routes where the parameter value
  can vary. */
  update?:IEndpointConfuguration;

  /** The `delete?:IEndpointConfuguration;` property in the `IRouterConfiguration` interface is used to
  define the configuration options for the "delete" endpoint of a router. It allows you to specify
  the callback function that will be executed when a request is made to the "delete" endpoint. The
  callback function takes three parameters: `req` (the request object), `res` (the response object),
  and `next` (a function to pass control to the next middleware function). Additionally, you can
  specify the `param` property in the `options` object to define a parameter in the URL path of the
  "delete" endpoint. This parameter allows you to create dynamic routes where the parameter value
  can vary. */
  delete?:IEndpointConfuguration;

  /** The `use?:UseOptions;` property in the `IRouterConfiguration` interface is used to define
  additional routers that should be mounted under the specified endpoint. It allows you to include
  other routers as middleware within the main router. */
  use?:UseOptions;
}

export type Application = express.Application;

export { Router , Request , Response , NextFunction };

export interface IRouterMiddlewareFactoryConstructor{

  /**
   * This function creates an Express router with various HTTP methods and middleware based on the
   * provided options.
   * @param {string} endpoint - The `endpoint` parameter is a string that represents the base URL path
   * for the router. It is used to define the starting point for all the routes defined in the router.
   * @param {IRouterOptions} options - The `options` parameter is an object that contains various
   * properties for configuring the router. Each property represents a different route operation that
   * can be performed on the specified endpoint.
   * @returns an instance of the Express Router.
  */
  create:( endpoint:string , options:IRouterOptions )=>Router;

}

/** The `_routerMiddlewareFactory` class is a factory that creates a router middleware for handling different HTTP methods and routes. */
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

export const routerMiddlewareFactory:IRouterMiddlewareFactoryConstructor = _routerMiddlewareFactory as ( typeof _routerMiddlewareFactory & IRouterMiddlewareFactoryConstructor );

export default {

  /** The above code is defining a getter function called `createCRUD` that returns the `create` method of the `routerMiddlewareFactory` object. */
  get createCRUD(){ return routerMiddlewareFactory.create },

  /**
   * The function creates CRUD routes based on a given configuration object.
   * @param {IRouterConfiguration} config - The `config` parameter is an object that represents the
   * router configuration. It contains various properties that define the behavior of the CRUD
   * operations.
   * @returns the result of calling the `_routerMiddlewareFactory.create` method with the
   * `config.endpoint` and `options` as arguments.
   */
  createCRUDFromConfiguration( config:IRouterConfiguration ){

    let options = Object.fromEntries(
      new Map(
        ['index' , 'find' , 'create' , 'update' , 'delete' , 'use'].reduce(( result , key ) => {
          if( config[key] && key != 'use' ){
            let endpointConfig:IEndpointConfuguration = config[key];
            let callback = endpointConfig.callback;
            let param = ( endpointConfig.options && endpointConfig.options.param ? endpointConfig.options.param : null );
            result.push( [ key , [ param , callback ] ] );
          }
          else if(config[key] && key == 'use'){
            result.push( [ key , config[key] ] )
          }
          return result;
        } , [])
      )
    );

    return _routerMiddlewareFactory.create( config.endpoint , options );
  }
}