const { celebrate } = require('celebrate');

const bundlesRoute = require('./routes/bundles');
const bundlesValidator = require('./validators/bundles');

module.exports = function (router) {
  // Bundles Routes
  router.get  ( '/read' , celebrate(bundlesValidator.read)  , bundlesRoute.read ); 
  router.post ( '/set'  , celebrate(bundlesValidator.set)   , bundlesRoute.set  ); 
  router.post ( '/bump' , celebrate(bundlesValidator.bump)  , bundlesRoute.bump ); 
};