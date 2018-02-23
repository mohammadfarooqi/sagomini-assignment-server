const { celebrate } = require('celebrate');

const bundlesRoute = require('./routes/bundles');
const bundlesValidator = require('./validators/bundles');

module.exports = function (router) {
  // Bundles Routes
  router.get  ( '/read' , celebrate(bundlesValidator.create), bundlesRoute.read ); 
  router.post ( '/set'  , celebrate(bundlesValidator.create), bundlesRoute.set  ); 
  router.post ( '/bump' , celebrate(bundlesValidator.create), bundlesRoute.bump ); 
};