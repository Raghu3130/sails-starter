var path = require('path');
var bunyan = require('bunyan');
var bformat = require('bunyan-format');

var LOG_DIR = './logs';
var LOG_NAME = 'sails-starter';
/**
   * Intialize the logger
   *
   * @public
   *
   * @memberof   titan-auth.Logger
   *
   * @author     manoj
   *
   * @return     {Object|Boolean}  logger if success or false
   */

function Logger() {

  var log;

  var formatStream = bformat({
    outputMode: 'short'
  });

  return {
    init: init
  };
  /**
     * { function_description }
     *
     * @public
     *
     * @memberof   (parent_name_path)
     *
     * @author     manoj
     *
     * @return     {object}  { description_of_the_return_value }
     */
  function init() {
    log = bunyan.createLogger({
      name: 'sails-starter',
      streams: [
        {
          type: 'rotating-file',
          level: 'trace',
          path: path.join(LOG_DIR, LOG_NAME + '-trace.log'),
          period: '1d',
          count: 3
        }, {
          stream: formatStream,
          level: 'info'
        }
      ]
    });

    return log;
  }
}

module.exports = Logger().init();
