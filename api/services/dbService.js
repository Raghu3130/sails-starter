var Logger = require('./Logger');
var q = require('q');
var logger = Logger.child({service: 'dbService'});

/**
 * { function_description }
 *
 * @public
 *
 * @memberof   (parent_name_path)
 *
 * @author     Raghu Mudaliar
 *
 * @return     {Object}  { description_of_the_return_value }
 */
function dbService() {

  return {
      add: _add,
      search: _search,
      searchOutlets: _searchOutlets,
      removeOutlets: _removeOutlets,
      searchVendors: _searchVendors,
      removeVendors:_removeVendors,
      update:_update

    };
  /**
   * { function_description }
   *
   * @public
   *
   * @memberof   (parent_name_path)
   *
   * @author     Raghu Mudaliar
   *
   * @param      {object}  model   The model
   * @param      {object}  obj     The object
   * @return     {promise}  return a promise
   */
  function _add(model, obj) {
    var log = logger.child({action: 'add'});
    var deferred = q.defer();
    var Model = global[model];
    Model.create(obj)
       .then(function(response) {
          log.info(response);
          return deferred.resolve(response);
        })
       .catch(function(err) {
          return deferred.reject({code: 'CREATE_FAILED', error: err});
        });

    return deferred.promise;
  }


  /**
   * { function_description }
   *
   * @public
   *
   * @memberof   (parent_name_path)
   *
   * @author     Raghu Mudaliar
   *
   * @param      {object}  model   The model
   * @param      {object}  data    The data
   * @return     {Promise}  Return a promise
   */
  function _search(model, data) {
    var deffered = q.defer();
    var log = logger.child({action: 'search'});
    var Model = global[model];
    log.info(model, data);
    log.info(data);
    Model.find().where({'name': {startsWith: data}}).limit(10).exec(function callBack(err, results) {
      if (!err) {
        return deffered.resolve(results);
      } else {

        return deffered.reject(err);
      }

    });

    return deffered.promise;
  }
  /**
   * { function_description }
   *
   * @public
   *
   * @memberof   (parent_name_path)
   *
   * @author     Raghu Mudaliar
   *
   * @param      {object}  model   The model
   * @param      {object}  data    The data
   * @return     {Promise}  Return a promise
   */
  function _searchOutlets(model, data) {
    var deffered = q.defer();
    var log = logger.child({action: 'searchOutlets'});
    var Model = global[model];
    log.info('tttttttttt' + data);
    if (!data) {
      log.info('::::ifff');
      Model.find({}).populate('cityId').populate('vendorId').exec(function callBack(err, results) {
        if (!err) {
          log.info('t' + results);
          return deffered.resolve(results);
        } else {

          return deffered.reject(err);
        }

      });
    } 
    else {

      Model.find().where({'cityId': data}).populate('cityId').populate('vendorId').exec(function callBack(err, results) {

        if (!err) {
          log.info('t' + results);
          return deffered.resolve(results);
        } else {

          return deffered.reject(err);
        }

      });}

    return deffered.promise;
  }

  function _removeOutlets(model, data) {
    var deffered = q.defer();
    var log = logger.child({action: 'removeOutlets'});
    var Model = global[model];
    log.info('id', data);

    Model.update({id: data}, {isDeleted: true}).exec(function callBack(err, results) {
      if (!err) {
        return deffered.resolve(results);
      } else {

        return deffered.reject(err);
      }

    });

    return deffered.promise;
  }
/**
 * { function_description }
 *
 * @public
 *
 * @memberof   (parent_name_path)
 *
 * @author     Raghu Mudaliar
 *
 * @param      {Name of the Model}  model   The model
 * @param      {Object}  data     Vendor name
 * @return     {Object}  fetching data of vendors
 */
  function _searchVendors(model, data) {
    var deffered = q.defer();
    var log = logger.child({action: 'searchVendors'});
    var Model = global[model];
    log.info('vendor ',model);
    if (!data) {
      log.info();
      Model.find({}).exec(function callBack(err, results) {
        if (!err) {
          log.info('t' + results);
          return deffered.resolve(results);
        } else {

          return deffered.reject(err);
        }

      });
    } else {

      Model.find().where({'name': {startsWith: data}}).limit(10).exec(function callBack(err, results) {

        if (!err) {
          log.info('t1' + results,err);
          return deffered.resolve(results);
        } else {

          return deffered.reject(err);
        }

      });}

    return deffered.promise;
  }
   function _removeVendors(model, data) {
    var deffered = q.defer();
    var log = logger.child({action: 'removeVendors'});
    var Model = global[model];
    log.info('Vendor remove',data);
    Model.update({id: data}, {isDeleted: true}).exec(function callBack(err, results) {
      if (!err) {
        return deffered.resolve(results);
      } else {

        return deffered.reject(err);
      }

    });

    return deffered.promise;
  }
  function _update(model, obj) {
    var log = logger.child({action: 'update'});
    log.info(obj);
    var deferred = q.defer();
    var Model = global[model];
    Model.update({id:obj.id},obj)
       .then(function(response) {
          log.info(response);
          return deferred.resolve(response);
        })
       .catch(function(err) {
          return deferred.reject({code: 'CREATE_FAILED', error: err});
        });

    return deferred.promise;
  }



}

module.exports = dbService();
