import routerFactory from '../';

const configuration = {
  endpoint : '',
  index : {
    callback : () => {},
    options : {
      param : 'userId'
    }
  }
}

routerFactory.createCRUD( './' , {
  index: [ '' , () => {} ]
} )

routerFactory.createCRUDFromConfiguration( configuration )