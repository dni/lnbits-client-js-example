(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// https://github.com/dni/lnbits-client-js/blob/main/docs/CoreApi.md#tinyurlApiV1TinyurlPost
let LnbitsClient = require('@lnbits/client');

let key = "15dbed9c69eb498a8bb7db6d2b527d59";
let api_url = "https://legend.lnbits.com";

let defaultClient = LnbitsClient.ApiClient.instance;
defaultClient.basePath = api_url;

// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = key;

// Configure API key authorization: APIKeyQuery
// let APIKeyQuery = defaultClient.authentications['APIKeyQuery'];
// APIKeyQuery.apiKey = key;

const request_handler = (fn, err_msg) => {
    return (error, data, res) => {
        if (error) {
            console.error(err_msg, error.status, error.message, res.text);
        } else {
            fn(data);
        }
    };
};

let apiInstance = new LnbitsClient.CoreApi();

const handle_tinyurl_create = request_handler((data) => {
    console.log("created tinyurl");
    console.log(data);
    apiInstance.tinyurlApiV1TinyurlTinyurlIdGet(data.id, handle_tinyurl_get);
}, "error creating tinyurl");

const handle_tinyurl_get = request_handler((data) => {
    console.log("get tinyurl");
    console.log(data);
    apiInstance.tinyurlApiV1TinyurlTinyurlIdDelete(data.id, handle_tinyurl_delete);
}, "error getting tinyurl");

const handle_tinyurl_delete = request_handler((data) => {
    console.log("delete tinyurl");
    console.log(data);
}, "error getting tinyurl");


apiInstance.tinyurlApiV1TinyurlPost("https://600.wtf", { endless: false }, handle_tinyurl_create);

},{"@lnbits/client":4}],2:[function(require,module,exports){
(function (Buffer){(function (){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _superagent = _interopRequireDefault(require("superagent"));
var _querystring = _interopRequireDefault(require("querystring"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /**
                                                                                                                                                                                                                                                                                                                                                                                               * @lnbits/client
                                                                                                                                                                                                                                                                                                                                                                                               * API for LNbits, the free and open source bitcoin wallet and accounts system with plugins.
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * The version of the OpenAPI document: 0.10.9
                                                                                                                                                                                                                                                                                                                                                                                               * 
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
                                                                                                                                                                                                                                                                                                                                                                                               * https://openapi-generator.tech
                                                                                                                                                                                                                                                                                                                                                                                               * Do not edit the class manually.
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               */
/**
* @module ApiClient
* @version 0.10.9
*/
/**
* Manages low level client-server communications, parameter marshalling, etc. There should not be any need for an
* application to use this class directly - the *Api and model classes provide the public API for the service. The
* contents of this file should be regarded as internal but are documented for completeness.
* @alias module:ApiClient
* @class
*/
var ApiClient = /*#__PURE__*/function () {
  /**
   * The base URL against which to resolve every API call's (relative) path.
   * Overrides the default value set in spec file if present
   * @param {String} basePath
   */
  function ApiClient() {
    var basePath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'http://localhost';
    _classCallCheck(this, ApiClient);
    /**
     * The base URL against which to resolve every API call's (relative) path.
     * @type {String}
     * @default http://localhost
     */
    this.basePath = basePath.replace(/\/+$/, '');

    /**
     * The authentication methods to be included for all API calls.
     * @type {Array.<String>}
     */
    this.authentications = {
      'APIKeyHeader': {
        type: 'apiKey',
        'in': 'header',
        name: 'X-API-KEY'
      },
      'APIKeyQuery': {
        type: 'apiKey',
        'in': 'query',
        name: 'api-key'
      }
    };

    /**
     * The default HTTP headers to be included for all API calls.
     * @type {Array.<String>}
     * @default {}
     */
    this.defaultHeaders = {
      'User-Agent': 'OpenAPI-Generator/0.10.9/Javascript'
    };

    /**
     * The default HTTP timeout for all API calls.
     * @type {Number}
     * @default 60000
     */
    this.timeout = 60000;

    /**
     * If set to false an additional timestamp parameter is added to all API GET calls to
     * prevent browser caching
     * @type {Boolean}
     * @default true
     */
    this.cache = true;

    /**
     * If set to true, the client will save the cookies from each server
     * response, and return them in the next request.
     * @default false
     */
    this.enableCookies = false;

    /*
     * Used to save and return cookies in a node.js (non-browser) setting,
     * if this.enableCookies is set to true.
     */
    if (typeof window === 'undefined') {
      this.agent = new _superagent["default"].agent();
    }

    /*
     * Allow user to override superagent agent
     */
    this.requestAgent = null;

    /*
     * Allow user to add superagent plugins
     */
    this.plugins = null;
  }

  /**
  * Returns a string representation for an actual parameter.
  * @param param The actual parameter.
  * @returns {String} The string representation of <code>param</code>.
  */
  _createClass(ApiClient, [{
    key: "paramToString",
    value: function paramToString(param) {
      if (param == undefined || param == null) {
        return '';
      }
      if (param instanceof Date) {
        return param.toJSON();
      }
      if (ApiClient.canBeJsonified(param)) {
        return JSON.stringify(param);
      }
      return param.toString();
    }

    /**
    * Returns a boolean indicating if the parameter could be JSON.stringified
    * @param param The actual parameter
    * @returns {Boolean} Flag indicating if <code>param</code> can be JSON.stringified
    */
  }, {
    key: "buildUrl",
    value:
    /**
     * Builds full URL by appending the given path to the base URL and replacing path parameter place-holders with parameter values.
     * NOTE: query parameters are not handled here.
     * @param {String} path The path to append to the base URL.
     * @param {Object} pathParams The parameter values to append.
     * @param {String} apiBasePath Base path defined in the path, operation level to override the default one
     * @returns {String} The encoded path with parameter values substituted.
     */
    function buildUrl(path, pathParams, apiBasePath) {
      var _this = this;
      if (!path.match(/^\//)) {
        path = '/' + path;
      }
      var url = this.basePath + path;

      // use API (operation, path) base path if defined
      if (apiBasePath !== null && apiBasePath !== undefined) {
        url = apiBasePath + path;
      }
      url = url.replace(/\{([\w-\.]+)\}/g, function (fullMatch, key) {
        var value;
        if (pathParams.hasOwnProperty(key)) {
          value = _this.paramToString(pathParams[key]);
        } else {
          value = fullMatch;
        }
        return encodeURIComponent(value);
      });
      return url;
    }

    /**
    * Checks whether the given content type represents JSON.<br>
    * JSON content type examples:<br>
    * <ul>
    * <li>application/json</li>
    * <li>application/json; charset=UTF8</li>
    * <li>APPLICATION/JSON</li>
    * </ul>
    * @param {String} contentType The MIME content type to check.
    * @returns {Boolean} <code>true</code> if <code>contentType</code> represents JSON, otherwise <code>false</code>.
    */
  }, {
    key: "isJsonMime",
    value: function isJsonMime(contentType) {
      return Boolean(contentType != null && contentType.match(/^application\/json(;.*)?$/i));
    }

    /**
    * Chooses a content type from the given array, with JSON preferred; i.e. return JSON if included, otherwise return the first.
    * @param {Array.<String>} contentTypes
    * @returns {String} The chosen content type, preferring JSON.
    */
  }, {
    key: "jsonPreferredMime",
    value: function jsonPreferredMime(contentTypes) {
      for (var i = 0; i < contentTypes.length; i++) {
        if (this.isJsonMime(contentTypes[i])) {
          return contentTypes[i];
        }
      }
      return contentTypes[0];
    }

    /**
    * Checks whether the given parameter value represents file-like content.
    * @param param The parameter to check.
    * @returns {Boolean} <code>true</code> if <code>param</code> represents a file.
    */
  }, {
    key: "isFileParam",
    value: function isFileParam(param) {
      // fs.ReadStream in Node.js and Electron (but not in runtime like browserify)
      if (typeof require === 'function') {
        var fs;
        try {
          fs = require('fs');
        } catch (err) {}
        if (fs && fs.ReadStream && param instanceof fs.ReadStream) {
          return true;
        }
      }

      // Buffer in Node.js
      if (typeof Buffer === 'function' && param instanceof Buffer) {
        return true;
      }

      // Blob in browser
      if (typeof Blob === 'function' && param instanceof Blob) {
        return true;
      }

      // File in browser (it seems File object is also instance of Blob, but keep this for safe)
      if (typeof File === 'function' && param instanceof File) {
        return true;
      }
      return false;
    }

    /**
    * Normalizes parameter values:
    * <ul>
    * <li>remove nils</li>
    * <li>keep files and arrays</li>
    * <li>format to string with `paramToString` for other cases</li>
    * </ul>
    * @param {Object.<String, Object>} params The parameters as object properties.
    * @returns {Object.<String, Object>} normalized parameters.
    */
  }, {
    key: "normalizeParams",
    value: function normalizeParams(params) {
      var newParams = {};
      for (var key in params) {
        if (params.hasOwnProperty(key) && params[key] != undefined && params[key] != null) {
          var value = params[key];
          if (this.isFileParam(value) || Array.isArray(value)) {
            newParams[key] = value;
          } else {
            newParams[key] = this.paramToString(value);
          }
        }
      }
      return newParams;
    }

    /**
    * Builds a string representation of an array-type actual parameter, according to the given collection format.
    * @param {Array} param An array parameter.
    * @param {module:ApiClient.CollectionFormatEnum} collectionFormat The array element separator strategy.
    * @returns {String|Array} A string representation of the supplied collection, using the specified delimiter. Returns
    * <code>param</code> as is if <code>collectionFormat</code> is <code>multi</code>.
    */
  }, {
    key: "buildCollectionParam",
    value: function buildCollectionParam(param, collectionFormat) {
      if (param == null) {
        return null;
      }
      switch (collectionFormat) {
        case 'csv':
          return param.map(this.paramToString, this).join(',');
        case 'ssv':
          return param.map(this.paramToString, this).join(' ');
        case 'tsv':
          return param.map(this.paramToString, this).join('\t');
        case 'pipes':
          return param.map(this.paramToString, this).join('|');
        case 'multi':
          //return the array directly as SuperAgent will handle it as expected
          return param.map(this.paramToString, this);
        case 'passthrough':
          return param;
        default:
          throw new Error('Unknown collection format: ' + collectionFormat);
      }
    }

    /**
    * Applies authentication headers to the request.
    * @param {Object} request The request object created by a <code>superagent()</code> call.
    * @param {Array.<String>} authNames An array of authentication method names.
    */
  }, {
    key: "applyAuthToRequest",
    value: function applyAuthToRequest(request, authNames) {
      var _this2 = this;
      authNames.forEach(function (authName) {
        var auth = _this2.authentications[authName];
        switch (auth.type) {
          case 'basic':
            if (auth.username || auth.password) {
              request.auth(auth.username || '', auth.password || '');
            }
            break;
          case 'bearer':
            if (auth.accessToken) {
              var localVarBearerToken = typeof auth.accessToken === 'function' ? auth.accessToken() : auth.accessToken;
              request.set({
                'Authorization': 'Bearer ' + localVarBearerToken
              });
            }
            break;
          case 'apiKey':
            if (auth.apiKey) {
              var data = {};
              if (auth.apiKeyPrefix) {
                data[auth.name] = auth.apiKeyPrefix + ' ' + auth.apiKey;
              } else {
                data[auth.name] = auth.apiKey;
              }
              if (auth['in'] === 'header') {
                request.set(data);
              } else {
                request.query(data);
              }
            }
            break;
          case 'oauth2':
            if (auth.accessToken) {
              request.set({
                'Authorization': 'Bearer ' + auth.accessToken
              });
            }
            break;
          default:
            throw new Error('Unknown authentication type: ' + auth.type);
        }
      });
    }

    /**
     * Deserializes an HTTP response body into a value of the specified type.
     * @param {Object} response A SuperAgent response object.
     * @param {(String|Array.<String>|Object.<String, Object>|Function)} returnType The type to return. Pass a string for simple types
     * or the constructor function for a complex type. Pass an array containing the type name to return an array of that type. To
     * return an object, pass an object with one property whose name is the key type and whose value is the corresponding value type:
     * all properties on <code>data<code> will be converted to this type.
     * @returns A value of the specified type.
     */
  }, {
    key: "deserialize",
    value: function deserialize(response, returnType) {
      if (response == null || returnType == null || response.status == 204) {
        return null;
      }

      // Rely on SuperAgent for parsing response body.
      // See http://visionmedia.github.io/superagent/#parsing-response-bodies
      var data = response.body;
      if (data == null || _typeof(data) === 'object' && typeof data.length === 'undefined' && !Object.keys(data).length) {
        // SuperAgent does not always produce a body; use the unparsed response as a fallback
        data = response.text;
      }
      return ApiClient.convertToType(data, returnType);
    }

    /**
     * Callback function to receive the result of the operation.
     * @callback module:ApiClient~callApiCallback
     * @param {String} error Error message, if any.
     * @param data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Invokes the REST service using the supplied settings and parameters.
     * @param {String} path The base URL to invoke.
     * @param {String} httpMethod The HTTP method to use.
     * @param {Object.<String, String>} pathParams A map of path parameters and their values.
     * @param {Object.<String, Object>} queryParams A map of query parameters and their values.
     * @param {Object.<String, Object>} headerParams A map of header parameters and their values.
     * @param {Object.<String, Object>} formParams A map of form parameters and their values.
     * @param {Object} bodyParam The value to pass as the request body.
     * @param {Array.<String>} authNames An array of authentication type names.
     * @param {Array.<String>} contentTypes An array of request MIME types.
     * @param {Array.<String>} accepts An array of acceptable response MIME types.
     * @param {(String|Array|ObjectFunction)} returnType The required type to return; can be a string for simple types or the
     * constructor for a complex type.
     * @param {String} apiBasePath base path defined in the operation/path level to override the default one
     * @param {module:ApiClient~callApiCallback} callback The callback function.
     * @returns {Object} The SuperAgent request object.
     */
  }, {
    key: "callApi",
    value: function callApi(path, httpMethod, pathParams, queryParams, headerParams, formParams, bodyParam, authNames, contentTypes, accepts, returnType, apiBasePath, callback) {
      var _this3 = this;
      var url = this.buildUrl(path, pathParams, apiBasePath);
      var request = (0, _superagent["default"])(httpMethod, url);
      if (this.plugins !== null) {
        for (var index in this.plugins) {
          if (this.plugins.hasOwnProperty(index)) {
            request.use(this.plugins[index]);
          }
        }
      }

      // apply authentications
      this.applyAuthToRequest(request, authNames);

      // set query parameters
      if (httpMethod.toUpperCase() === 'GET' && this.cache === false) {
        queryParams['_'] = new Date().getTime();
      }
      request.query(this.normalizeParams(queryParams));

      // set header parameters
      request.set(this.defaultHeaders).set(this.normalizeParams(headerParams));

      // set requestAgent if it is set by user
      if (this.requestAgent) {
        request.agent(this.requestAgent);
      }

      // set request timeout
      request.timeout(this.timeout);
      var contentType = this.jsonPreferredMime(contentTypes);
      if (contentType) {
        // Issue with superagent and multipart/form-data (https://github.com/visionmedia/superagent/issues/746)
        if (contentType != 'multipart/form-data') {
          request.type(contentType);
        }
      }
      if (contentType === 'application/x-www-form-urlencoded') {
        request.send(_querystring["default"].stringify(this.normalizeParams(formParams)));
      } else if (contentType == 'multipart/form-data') {
        var _formParams = this.normalizeParams(formParams);
        for (var key in _formParams) {
          if (_formParams.hasOwnProperty(key)) {
            var _formParamsValue = _formParams[key];
            if (this.isFileParam(_formParamsValue)) {
              // file field
              request.attach(key, _formParamsValue);
            } else if (Array.isArray(_formParamsValue) && _formParamsValue.length && this.isFileParam(_formParamsValue[0])) {
              // multiple files
              _formParamsValue.forEach(function (file) {
                return request.attach(key, file);
              });
            } else {
              request.field(key, _formParamsValue);
            }
          }
        }
      } else if (bodyParam !== null && bodyParam !== undefined) {
        if (!request.header['Content-Type']) {
          request.type('application/json');
        }
        request.send(bodyParam);
      }
      var accept = this.jsonPreferredMime(accepts);
      if (accept) {
        request.accept(accept);
      }
      if (returnType === 'Blob') {
        request.responseType('blob');
      } else if (returnType === 'String') {
        request.responseType('text');
      }

      // Attach previously saved cookies, if enabled
      if (this.enableCookies) {
        if (typeof window === 'undefined') {
          this.agent._attachCookies(request);
        } else {
          request.withCredentials();
        }
      }
      request.end(function (error, response) {
        if (callback) {
          var data = null;
          if (!error) {
            try {
              data = _this3.deserialize(response, returnType);
              if (_this3.enableCookies && typeof window === 'undefined') {
                _this3.agent._saveCookies(response);
              }
            } catch (err) {
              error = err;
            }
          }
          callback(error, data, response);
        }
      });
      return request;
    }

    /**
    * Parses an ISO-8601 string representation or epoch representation of a date value.
    * @param {String} str The date value as a string.
    * @returns {Date} The parsed date object.
    */
  }, {
    key: "hostSettings",
    value:
    /**
      * Gets an array of host settings
      * @returns An array of host settings
      */
    function hostSettings() {
      return [{
        'url': "",
        'description': "No description provided"
      }];
    }
  }, {
    key: "getBasePathFromSettings",
    value: function getBasePathFromSettings(index) {
      var variables = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var servers = this.hostSettings();

      // check array index out of bound
      if (index < 0 || index >= servers.length) {
        throw new Error("Invalid index " + index + " when selecting the host settings. Must be less than " + servers.length);
      }
      var server = servers[index];
      var url = server['url'];

      // go through variable and assign a value
      for (var variable_name in server['variables']) {
        if (variable_name in variables) {
          var variable = server['variables'][variable_name];
          if (!('enum_values' in variable) || variable['enum_values'].includes(variables[variable_name])) {
            url = url.replace("{" + variable_name + "}", variables[variable_name]);
          } else {
            throw new Error("The variable `" + variable_name + "` in the host URL has invalid value " + variables[variable_name] + ". Must be " + server['variables'][variable_name]['enum_values'] + ".");
          }
        } else {
          // use default value
          url = url.replace("{" + variable_name + "}", server['variables'][variable_name]['default_value']);
        }
      }
      return url;
    }

    /**
    * Constructs a new map or array model from REST data.
    * @param data {Object|Array} The REST data.
    * @param obj {Object|Array} The target object or array.
    */
  }], [{
    key: "canBeJsonified",
    value: function canBeJsonified(str) {
      if (typeof str !== 'string' && _typeof(str) !== 'object') return false;
      try {
        var type = str.toString();
        return type === '[object Object]' || type === '[object Array]';
      } catch (err) {
        return false;
      }
    }
  }, {
    key: "parseDate",
    value: function parseDate(str) {
      if (isNaN(str)) {
        return new Date(str.replace(/(\d)(T)(\d)/i, '$1 $3'));
      }
      return new Date(+str);
    }

    /**
    * Converts a value to the specified type.
    * @param {(String|Object)} data The data to convert, as a string or object.
    * @param {(String|Array.<String>|Object.<String, Object>|Function)} type The type to return. Pass a string for simple types
    * or the constructor function for a complex type. Pass an array containing the type name to return an array of that type. To
    * return an object, pass an object with one property whose name is the key type and whose value is the corresponding value type:
    * all properties on <code>data<code> will be converted to this type.
    * @returns An instance of the specified type or null or undefined if data is null or undefined.
    */
  }, {
    key: "convertToType",
    value: function convertToType(data, type) {
      if (data === null || data === undefined) return data;
      switch (type) {
        case 'Boolean':
          return Boolean(data);
        case 'Integer':
          return parseInt(data, 10);
        case 'Number':
          return parseFloat(data);
        case 'String':
          return String(data);
        case 'Date':
          return ApiClient.parseDate(String(data));
        case 'Blob':
          return data;
        default:
          if (type === Object) {
            // generic object, return directly
            return data;
          } else if (typeof type.constructFromObject === 'function') {
            // for model type like User and enum class
            return type.constructFromObject(data);
          } else if (Array.isArray(type)) {
            // for array type like: ['String']
            var itemType = type[0];
            return data.map(function (item) {
              return ApiClient.convertToType(item, itemType);
            });
          } else if (_typeof(type) === 'object') {
            // for plain object type like: {'String': 'Integer'}
            var keyType, valueType;
            for (var k in type) {
              if (type.hasOwnProperty(k)) {
                keyType = k;
                valueType = type[k];
                break;
              }
            }
            var result = {};
            for (var k in data) {
              if (data.hasOwnProperty(k)) {
                var key = ApiClient.convertToType(k, keyType);
                var value = ApiClient.convertToType(data[k], valueType);
                result[key] = value;
              }
            }
            return result;
          } else {
            // for unknown type, return the data directly
            return data;
          }
      }
    }
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj, itemType) {
      if (Array.isArray(data)) {
        for (var i = 0; i < data.length; i++) {
          if (data.hasOwnProperty(i)) obj[i] = ApiClient.convertToType(data[i], itemType);
        }
      } else {
        for (var k in data) {
          if (data.hasOwnProperty(k)) obj[k] = ApiClient.convertToType(data[k], itemType);
        }
      }
    }
  }]);
  return ApiClient;
}();
/**
 * Enumeration of collection format separator strategies.
 * @enum {String}
 * @readonly
 */
ApiClient.CollectionFormatEnum = {
  /**
   * Comma-separated values. Value: <code>csv</code>
   * @const
   */
  CSV: ',',
  /**
   * Space-separated values. Value: <code>ssv</code>
   * @const
   */
  SSV: ' ',
  /**
   * Tab-separated values. Value: <code>tsv</code>
   * @const
   */
  TSV: '\t',
  /**
   * Pipe(|)-separated values. Value: <code>pipes</code>
   * @const
   */
  PIPES: '|',
  /**
   * Native array. Value: <code>multi</code>
   * @const
   */
  MULTI: 'multi'
};

/**
* The default API client implementation.
* @type {module:ApiClient}
*/
ApiClient.instance = new ApiClient();
var _default = ApiClient;
exports["default"] = _default;
}).call(this)}).call(this,require("buffer").Buffer)
},{"buffer":20,"fs":19,"querystring":26,"superagent":28}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _ConversionData = _interopRequireDefault(require("../model/ConversionData"));
var _CreateExtension = _interopRequireDefault(require("../model/CreateExtension"));
var _CreateInvoiceData = _interopRequireDefault(require("../model/CreateInvoiceData"));
var _CreateLNURLData = _interopRequireDefault(require("../model/CreateLNURLData"));
var _CreateLnurlAuth = _interopRequireDefault(require("../model/CreateLnurlAuth"));
var _CreateTopup = _interopRequireDefault(require("../model/CreateTopup"));
var _DecodePayment = _interopRequireDefault(require("../model/DecodePayment"));
var _EditableSettings = _interopRequireDefault(require("../model/EditableSettings"));
var _HTTPValidationError = _interopRequireDefault(require("../model/HTTPValidationError"));
var _Page = _interopRequireDefault(require("../model/Page"));
var _Payment = _interopRequireDefault(require("../model/Payment"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /**
                                                                                                                                                                                                                                                                                                                                                                                               * @lnbits/client
                                                                                                                                                                                                                                                                                                                                                                                               * API for LNbits, the free and open source bitcoin wallet and accounts system with plugins.
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * The version of the OpenAPI document: 0.10.9
                                                                                                                                                                                                                                                                                                                                                                                               * 
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
                                                                                                                                                                                                                                                                                                                                                                                               * https://openapi-generator.tech
                                                                                                                                                                                                                                                                                                                                                                                               * Do not edit the class manually.
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               */
/**
* Core service.
* @module api/CoreApi
* @version 0.10.9
*/
var CoreApi = /*#__PURE__*/function () {
  /**
  * Constructs a new CoreApi. 
  * @alias module:api/CoreApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function CoreApi(apiClient) {
    _classCallCheck(this, CoreApi);
    this.apiClient = apiClient || _ApiClient["default"].instance;
  }

  /**
   * Callback function to receive the result of the apiDeleteSettingsAdminApiV1SettingsDelete operation.
   * @callback module:api/CoreApi~apiDeleteSettingsAdminApiV1SettingsDeleteCallback
   * @param {String} error Error message, if any.
   * @param {Object} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Api Delete Settings
   * @param {String} usr 
   * @param {module:api/CoreApi~apiDeleteSettingsAdminApiV1SettingsDeleteCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link Object}
   */
  _createClass(CoreApi, [{
    key: "apiDeleteSettingsAdminApiV1SettingsDelete",
    value: function apiDeleteSettingsAdminApiV1SettingsDelete(usr, callback) {
      var postBody = null;
      // verify the required parameter 'usr' is set
      if (usr === undefined || usr === null) {
        throw new Error("Missing the required parameter 'usr' when calling apiDeleteSettingsAdminApiV1SettingsDelete");
      }
      var pathParams = {};
      var queryParams = {
        'usr': usr
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/admin/api/v1/settings/', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the apiDownloadBackupAdminApiV1BackupGet operation.
     * @callback module:api/CoreApi~apiDownloadBackupAdminApiV1BackupGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Api Download Backup
     * @param {String} usr 
     * @param {module:api/CoreApi~apiDownloadBackupAdminApiV1BackupGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "apiDownloadBackupAdminApiV1BackupGet",
    value: function apiDownloadBackupAdminApiV1BackupGet(usr, callback) {
      var postBody = null;
      // verify the required parameter 'usr' is set
      if (usr === undefined || usr === null) {
        throw new Error("Missing the required parameter 'usr' when calling apiDownloadBackupAdminApiV1BackupGet");
      }
      var pathParams = {};
      var queryParams = {
        'usr': usr
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/admin/api/v1/backup/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the apiFiatAsSatsApiV1ConversionPost operation.
     * @callback module:api/CoreApi~apiFiatAsSatsApiV1ConversionPostCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Api Fiat As Sats
     * @param {module:model/ConversionData} conversionData 
     * @param {module:api/CoreApi~apiFiatAsSatsApiV1ConversionPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
  }, {
    key: "apiFiatAsSatsApiV1ConversionPost",
    value: function apiFiatAsSatsApiV1ConversionPost(conversionData, callback) {
      var postBody = conversionData;
      // verify the required parameter 'conversionData' is set
      if (conversionData === undefined || conversionData === null) {
        throw new Error("Missing the required parameter 'conversionData' when calling apiFiatAsSatsApiV1ConversionPost");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/api/v1/conversion', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the apiGetSettingsAdminApiV1SettingsGet operation.
     * @callback module:api/CoreApi~apiGetSettingsAdminApiV1SettingsGetCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Api Get Settings
     * @param {String} usr 
     * @param {module:api/CoreApi~apiGetSettingsAdminApiV1SettingsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
  }, {
    key: "apiGetSettingsAdminApiV1SettingsGet",
    value: function apiGetSettingsAdminApiV1SettingsGet(usr, callback) {
      var postBody = null;
      // verify the required parameter 'usr' is set
      if (usr === undefined || usr === null) {
        throw new Error("Missing the required parameter 'usr' when calling apiGetSettingsAdminApiV1SettingsGet");
      }
      var pathParams = {};
      var queryParams = {
        'usr': usr
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/admin/api/v1/settings/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the apiInstallExtensionApiV1ExtensionPost operation.
     * @callback module:api/CoreApi~apiInstallExtensionApiV1ExtensionPostCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Api Install Extension
     * @param {String} usr 
     * @param {module:model/CreateExtension} createExtension 
     * @param {module:api/CoreApi~apiInstallExtensionApiV1ExtensionPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
  }, {
    key: "apiInstallExtensionApiV1ExtensionPost",
    value: function apiInstallExtensionApiV1ExtensionPost(usr, createExtension, callback) {
      var postBody = createExtension;
      // verify the required parameter 'usr' is set
      if (usr === undefined || usr === null) {
        throw new Error("Missing the required parameter 'usr' when calling apiInstallExtensionApiV1ExtensionPost");
      }
      // verify the required parameter 'createExtension' is set
      if (createExtension === undefined || createExtension === null) {
        throw new Error("Missing the required parameter 'createExtension' when calling apiInstallExtensionApiV1ExtensionPost");
      }
      var pathParams = {};
      var queryParams = {
        'usr': usr
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/api/v1/extension', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the apiListCurrenciesAvailableApiV1CurrenciesGet operation.
     * @callback module:api/CoreApi~apiListCurrenciesAvailableApiV1CurrenciesGetCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Api List Currencies Available
     * @param {module:api/CoreApi~apiListCurrenciesAvailableApiV1CurrenciesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
  }, {
    key: "apiListCurrenciesAvailableApiV1CurrenciesGet",
    value: function apiListCurrenciesAvailableApiV1CurrenciesGet(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/api/v1/currencies', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the apiLnurlscanApiV1LnurlscanCodeGet operation.
     * @callback module:api/CoreApi~apiLnurlscanApiV1LnurlscanCodeGetCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Api Lnurlscan
     * @param {String} code 
     * @param {module:api/CoreApi~apiLnurlscanApiV1LnurlscanCodeGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
  }, {
    key: "apiLnurlscanApiV1LnurlscanCodeGet",
    value: function apiLnurlscanApiV1LnurlscanCodeGet(code, callback) {
      var postBody = null;
      // verify the required parameter 'code' is set
      if (code === undefined || code === null) {
        throw new Error("Missing the required parameter 'code' when calling apiLnurlscanApiV1LnurlscanCodeGet");
      }
      var pathParams = {
        'code': code
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyHeader', 'APIKeyQuery'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/api/v1/lnurlscan/{code}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the apiPaymentApiV1PaymentsPaymentHashGet operation.
     * @callback module:api/CoreApi~apiPaymentApiV1PaymentsPaymentHashGetCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Api Payment
     * @param {Object} paymentHash 
     * @param {Object} opts Optional parameters
     * @param {String} [xApiKey] 
     * @param {module:api/CoreApi~apiPaymentApiV1PaymentsPaymentHashGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
  }, {
    key: "apiPaymentApiV1PaymentsPaymentHashGet",
    value: function apiPaymentApiV1PaymentsPaymentHashGet(paymentHash, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'paymentHash' is set
      if (paymentHash === undefined || paymentHash === null) {
        throw new Error("Missing the required parameter 'paymentHash' when calling apiPaymentApiV1PaymentsPaymentHashGet");
      }
      var pathParams = {
        'payment_hash': paymentHash
      };
      var queryParams = {};
      var headerParams = {
        'X-Api-Key': opts['xApiKey']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/api/v1/payments/{payment_hash}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the apiPaymentsCreateApiV1PaymentsPost operation.
     * @callback module:api/CoreApi~apiPaymentsCreateApiV1PaymentsPostCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Api Payments Create
     * @param {module:model/CreateInvoiceData} createInvoiceData 
     * @param {module:api/CoreApi~apiPaymentsCreateApiV1PaymentsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
  }, {
    key: "apiPaymentsCreateApiV1PaymentsPost",
    value: function apiPaymentsCreateApiV1PaymentsPost(createInvoiceData, callback) {
      var postBody = createInvoiceData;
      // verify the required parameter 'createInvoiceData' is set
      if (createInvoiceData === undefined || createInvoiceData === null) {
        throw new Error("Missing the required parameter 'createInvoiceData' when calling apiPaymentsCreateApiV1PaymentsPost");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyHeader', 'APIKeyQuery'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/api/v1/payments', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the apiPaymentsDecodeApiV1PaymentsDecodePost operation.
     * @callback module:api/CoreApi~apiPaymentsDecodeApiV1PaymentsDecodePostCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Api Payments Decode
     * @param {module:model/DecodePayment} decodePayment 
     * @param {module:api/CoreApi~apiPaymentsDecodeApiV1PaymentsDecodePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
  }, {
    key: "apiPaymentsDecodeApiV1PaymentsDecodePost",
    value: function apiPaymentsDecodeApiV1PaymentsDecodePost(decodePayment, callback) {
      var postBody = decodePayment;
      // verify the required parameter 'decodePayment' is set
      if (decodePayment === undefined || decodePayment === null) {
        throw new Error("Missing the required parameter 'decodePayment' when calling apiPaymentsDecodeApiV1PaymentsDecodePost");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/api/v1/payments/decode', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the apiPaymentsPayLnurlApiV1PaymentsLnurlPost operation.
     * @callback module:api/CoreApi~apiPaymentsPayLnurlApiV1PaymentsLnurlPostCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Api Payments Pay Lnurl
     * @param {module:model/CreateLNURLData} createLNURLData 
     * @param {module:api/CoreApi~apiPaymentsPayLnurlApiV1PaymentsLnurlPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
  }, {
    key: "apiPaymentsPayLnurlApiV1PaymentsLnurlPost",
    value: function apiPaymentsPayLnurlApiV1PaymentsLnurlPost(createLNURLData, callback) {
      var postBody = createLNURLData;
      // verify the required parameter 'createLNURLData' is set
      if (createLNURLData === undefined || createLNURLData === null) {
        throw new Error("Missing the required parameter 'createLNURLData' when calling apiPaymentsPayLnurlApiV1PaymentsLnurlPost");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyHeader', 'APIKeyQuery'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/api/v1/payments/lnurl', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the apiPaymentsSseApiV1PaymentsSseGet operation.
     * @callback module:api/CoreApi~apiPaymentsSseApiV1PaymentsSseGetCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Api Payments Sse
     * @param {module:api/CoreApi~apiPaymentsSseApiV1PaymentsSseGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
  }, {
    key: "apiPaymentsSseApiV1PaymentsSseGet",
    value: function apiPaymentsSseApiV1PaymentsSseGet(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyHeader', 'APIKeyQuery'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/api/v1/payments/sse', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the apiPerformLnurlauthApiV1LnurlauthPost operation.
     * @callback module:api/CoreApi~apiPerformLnurlauthApiV1LnurlauthPostCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Api Perform Lnurlauth
     * @param {module:model/CreateLnurlAuth} createLnurlAuth 
     * @param {module:api/CoreApi~apiPerformLnurlauthApiV1LnurlauthPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
  }, {
    key: "apiPerformLnurlauthApiV1LnurlauthPost",
    value: function apiPerformLnurlauthApiV1LnurlauthPost(createLnurlAuth, callback) {
      var postBody = createLnurlAuth;
      // verify the required parameter 'createLnurlAuth' is set
      if (createLnurlAuth === undefined || createLnurlAuth === null) {
        throw new Error("Missing the required parameter 'createLnurlAuth' when calling apiPerformLnurlauthApiV1LnurlauthPost");
      }
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyHeader', 'APIKeyQuery'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/api/v1/lnurlauth', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the apiPublicPaymentLongpollingPublicV1PaymentPaymentHashGet operation.
     * @callback module:api/CoreApi~apiPublicPaymentLongpollingPublicV1PaymentPaymentHashGetCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Api Public Payment Longpolling
     * @param {Object} paymentHash 
     * @param {module:api/CoreApi~apiPublicPaymentLongpollingPublicV1PaymentPaymentHashGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
  }, {
    key: "apiPublicPaymentLongpollingPublicV1PaymentPaymentHashGet",
    value: function apiPublicPaymentLongpollingPublicV1PaymentPaymentHashGet(paymentHash, callback) {
      var postBody = null;
      // verify the required parameter 'paymentHash' is set
      if (paymentHash === undefined || paymentHash === null) {
        throw new Error("Missing the required parameter 'paymentHash' when calling apiPublicPaymentLongpollingPublicV1PaymentPaymentHashGet");
      }
      var pathParams = {
        'payment_hash': paymentHash
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/public/v1/payment/{payment_hash}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the apiRestartServerAdminApiV1RestartGet operation.
     * @callback module:api/CoreApi~apiRestartServerAdminApiV1RestartGetCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Api Restart Server
     * @param {String} usr 
     * @param {module:api/CoreApi~apiRestartServerAdminApiV1RestartGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
  }, {
    key: "apiRestartServerAdminApiV1RestartGet",
    value: function apiRestartServerAdminApiV1RestartGet(usr, callback) {
      var postBody = null;
      // verify the required parameter 'usr' is set
      if (usr === undefined || usr === null) {
        throw new Error("Missing the required parameter 'usr' when calling apiRestartServerAdminApiV1RestartGet");
      }
      var pathParams = {};
      var queryParams = {
        'usr': usr
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/admin/api/v1/restart/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the apiUninstallExtensionApiV1ExtensionExtIdDelete operation.
     * @callback module:api/CoreApi~apiUninstallExtensionApiV1ExtensionExtIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Api Uninstall Extension
     * @param {String} extId 
     * @param {String} usr 
     * @param {module:api/CoreApi~apiUninstallExtensionApiV1ExtensionExtIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
  }, {
    key: "apiUninstallExtensionApiV1ExtensionExtIdDelete",
    value: function apiUninstallExtensionApiV1ExtensionExtIdDelete(extId, usr, callback) {
      var postBody = null;
      // verify the required parameter 'extId' is set
      if (extId === undefined || extId === null) {
        throw new Error("Missing the required parameter 'extId' when calling apiUninstallExtensionApiV1ExtensionExtIdDelete");
      }
      // verify the required parameter 'usr' is set
      if (usr === undefined || usr === null) {
        throw new Error("Missing the required parameter 'usr' when calling apiUninstallExtensionApiV1ExtensionExtIdDelete");
      }
      var pathParams = {
        'ext_id': extId
      };
      var queryParams = {
        'usr': usr
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/api/v1/extension/{ext_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the apiUpdateSettingsAdminApiV1SettingsPut operation.
     * @callback module:api/CoreApi~apiUpdateSettingsAdminApiV1SettingsPutCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Api Update Settings
     * @param {String} usr 
     * @param {module:model/EditableSettings} editableSettings 
     * @param {module:api/CoreApi~apiUpdateSettingsAdminApiV1SettingsPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
  }, {
    key: "apiUpdateSettingsAdminApiV1SettingsPut",
    value: function apiUpdateSettingsAdminApiV1SettingsPut(usr, editableSettings, callback) {
      var postBody = editableSettings;
      // verify the required parameter 'usr' is set
      if (usr === undefined || usr === null) {
        throw new Error("Missing the required parameter 'usr' when calling apiUpdateSettingsAdminApiV1SettingsPut");
      }
      // verify the required parameter 'editableSettings' is set
      if (editableSettings === undefined || editableSettings === null) {
        throw new Error("Missing the required parameter 'editableSettings' when calling apiUpdateSettingsAdminApiV1SettingsPut");
      }
      var pathParams = {};
      var queryParams = {
        'usr': usr
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/admin/api/v1/settings/', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the apiUpdateWalletApiV1WalletNewNamePut operation.
     * @callback module:api/CoreApi~apiUpdateWalletApiV1WalletNewNamePutCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Api Update Wallet
     * @param {String} newName 
     * @param {module:api/CoreApi~apiUpdateWalletApiV1WalletNewNamePutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
  }, {
    key: "apiUpdateWalletApiV1WalletNewNamePut",
    value: function apiUpdateWalletApiV1WalletNewNamePut(newName, callback) {
      var postBody = null;
      // verify the required parameter 'newName' is set
      if (newName === undefined || newName === null) {
        throw new Error("Missing the required parameter 'newName' when calling apiUpdateWalletApiV1WalletNewNamePut");
      }
      var pathParams = {
        'new_name': newName
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyHeader', 'APIKeyQuery'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/api/v1/wallet/{new_name}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the apiWalletApiV1WalletGet operation.
     * @callback module:api/CoreApi~apiWalletApiV1WalletGetCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Api Wallet
     * @param {module:api/CoreApi~apiWalletApiV1WalletGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
  }, {
    key: "apiWalletApiV1WalletGet",
    value: function apiWalletApiV1WalletGet(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyHeader', 'APIKeyQuery'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/api/v1/wallet', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the auditAdminApiV1AuditGet operation.
     * @callback module:api/CoreApi~auditAdminApiV1AuditGetCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Audit
     * show the current balance of the node and the LNbits database
     * @param {String} usr 
     * @param {module:api/CoreApi~auditAdminApiV1AuditGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
  }, {
    key: "auditAdminApiV1AuditGet",
    value: function auditAdminApiV1AuditGet(usr, callback) {
      var postBody = null;
      // verify the required parameter 'usr' is set
      if (usr === undefined || usr === null) {
        throw new Error("Missing the required parameter 'usr' when calling auditAdminApiV1AuditGet");
      }
      var pathParams = {};
      var queryParams = {
        'usr': usr
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/admin/api/v1/audit', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the deleteExtensionDbApiV1ExtensionExtIdDbDelete operation.
     * @callback module:api/CoreApi~deleteExtensionDbApiV1ExtensionExtIdDbDeleteCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Extension Db
     * @param {String} extId 
     * @param {String} usr 
     * @param {module:api/CoreApi~deleteExtensionDbApiV1ExtensionExtIdDbDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
  }, {
    key: "deleteExtensionDbApiV1ExtensionExtIdDbDelete",
    value: function deleteExtensionDbApiV1ExtensionExtIdDbDelete(extId, usr, callback) {
      var postBody = null;
      // verify the required parameter 'extId' is set
      if (extId === undefined || extId === null) {
        throw new Error("Missing the required parameter 'extId' when calling deleteExtensionDbApiV1ExtensionExtIdDbDelete");
      }
      // verify the required parameter 'usr' is set
      if (usr === undefined || usr === null) {
        throw new Error("Missing the required parameter 'usr' when calling deleteExtensionDbApiV1ExtensionExtIdDbDelete");
      }
      var pathParams = {
        'ext_id': extId
      };
      var queryParams = {
        'usr': usr
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/api/v1/extension/{ext_id}/db', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getExtensionReleaseApiV1ExtensionReleaseOrgRepoTagNameGet operation.
     * @callback module:api/CoreApi~getExtensionReleaseApiV1ExtensionReleaseOrgRepoTagNameGetCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Extension Release
     * @param {String} org 
     * @param {String} repo 
     * @param {String} tagName 
     * @param {String} usr 
     * @param {module:api/CoreApi~getExtensionReleaseApiV1ExtensionReleaseOrgRepoTagNameGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
  }, {
    key: "getExtensionReleaseApiV1ExtensionReleaseOrgRepoTagNameGet",
    value: function getExtensionReleaseApiV1ExtensionReleaseOrgRepoTagNameGet(org, repo, tagName, usr, callback) {
      var postBody = null;
      // verify the required parameter 'org' is set
      if (org === undefined || org === null) {
        throw new Error("Missing the required parameter 'org' when calling getExtensionReleaseApiV1ExtensionReleaseOrgRepoTagNameGet");
      }
      // verify the required parameter 'repo' is set
      if (repo === undefined || repo === null) {
        throw new Error("Missing the required parameter 'repo' when calling getExtensionReleaseApiV1ExtensionReleaseOrgRepoTagNameGet");
      }
      // verify the required parameter 'tagName' is set
      if (tagName === undefined || tagName === null) {
        throw new Error("Missing the required parameter 'tagName' when calling getExtensionReleaseApiV1ExtensionReleaseOrgRepoTagNameGet");
      }
      // verify the required parameter 'usr' is set
      if (usr === undefined || usr === null) {
        throw new Error("Missing the required parameter 'usr' when calling getExtensionReleaseApiV1ExtensionReleaseOrgRepoTagNameGet");
      }
      var pathParams = {
        'org': org,
        'repo': repo,
        'tag_name': tagName
      };
      var queryParams = {
        'usr': usr
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/api/v1/extension/release/{org}/{repo}/{tag_name}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the getExtensionReleasesApiV1ExtensionExtIdReleasesGet operation.
     * @callback module:api/CoreApi~getExtensionReleasesApiV1ExtensionExtIdReleasesGetCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Extension Releases
     * @param {String} extId 
     * @param {String} usr 
     * @param {module:api/CoreApi~getExtensionReleasesApiV1ExtensionExtIdReleasesGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
  }, {
    key: "getExtensionReleasesApiV1ExtensionExtIdReleasesGet",
    value: function getExtensionReleasesApiV1ExtensionExtIdReleasesGet(extId, usr, callback) {
      var postBody = null;
      // verify the required parameter 'extId' is set
      if (extId === undefined || extId === null) {
        throw new Error("Missing the required parameter 'extId' when calling getExtensionReleasesApiV1ExtensionExtIdReleasesGet");
      }
      // verify the required parameter 'usr' is set
      if (usr === undefined || usr === null) {
        throw new Error("Missing the required parameter 'usr' when calling getExtensionReleasesApiV1ExtensionExtIdReleasesGet");
      }
      var pathParams = {
        'ext_id': extId
      };
      var queryParams = {
        'usr': usr
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/api/v1/extension/{ext_id}/releases', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the healthApiV1HealthGet operation.
     * @callback module:api/CoreApi~healthApiV1HealthGetCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Health
     * @param {module:api/CoreApi~healthApiV1HealthGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
  }, {
    key: "healthApiV1HealthGet",
    value: function healthApiV1HealthGet(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/api/v1/health', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the imgApiV1QrcodeDataGet operation.
     * @callback module:api/CoreApi~imgApiV1QrcodeDataGetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Img
     * @param {Object} data 
     * @param {module:api/CoreApi~imgApiV1QrcodeDataGetCallback} callback The callback function, accepting three arguments: error, data, response
     */
  }, {
    key: "imgApiV1QrcodeDataGet",
    value: function imgApiV1QrcodeDataGet(data, callback) {
      var postBody = null;
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling imgApiV1QrcodeDataGet");
      }
      var pathParams = {
        'data': data
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/api/v1/qrcode/{data}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the paymentListApiV1PaymentsGet operation.
     * @callback module:api/CoreApi~paymentListApiV1PaymentsGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Payment>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get list of payments
     * @param {Object} opts Optional parameters
     * @param {Number} [limit] 
     * @param {Number} [offset] 
     * @param {String} [sortby] 
     * @param {module:model/String} [direction] 
     * @param {String} [search] Text based search
     * @param {String} [checkingId] Supports Filtering
     * @param {Number} [amount] Supports Filtering. Supports Search
     * @param {Number} [fee] Supports Filtering
     * @param {String} [memo] Supports Filtering. Supports Search
     * @param {Date} [time] Supports Filtering
     * @param {String} [bolt11] Supports Filtering
     * @param {String} [preimage] Supports Filtering
     * @param {String} [paymentHash] Supports Filtering
     * @param {Date} [expiry] Supports Filtering
     * @param {Object.<String, Object>} [extra] Supports Filtering. Nested attributes can be filtered too, e.g. `extra.[additional].[attributes]`
     * @param {String} [walletId] Supports Filtering
     * @param {String} [webhook] Supports Filtering
     * @param {Number} [webhookStatus] Supports Filtering
     * @param {module:api/CoreApi~paymentListApiV1PaymentsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Payment>}
     */
  }, {
    key: "paymentListApiV1PaymentsGet",
    value: function paymentListApiV1PaymentsGet(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'limit': opts['limit'],
        'offset': opts['offset'],
        'sortby': opts['sortby'],
        'direction': opts['direction'],
        'search': opts['search'],
        'checking_id': opts['checkingId'],
        'amount': opts['amount'],
        'fee': opts['fee'],
        'memo': opts['memo'],
        'time': opts['time'],
        'bolt11': opts['bolt11'],
        'preimage': opts['preimage'],
        'payment_hash': opts['paymentHash'],
        'expiry': opts['expiry'],
        'extra': opts['extra'],
        'wallet_id': opts['walletId'],
        'webhook': opts['webhook'],
        'webhook_status': opts['webhookStatus']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyHeader', 'APIKeyQuery'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_Payment["default"]];
      return this.apiClient.callApi('/api/v1/payments', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the paymentListApiV1PaymentsPaginatedGet operation.
     * @callback module:api/CoreApi~paymentListApiV1PaymentsPaginatedGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Page} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * get paginated list of payments
     * @param {Object} opts Optional parameters
     * @param {Number} [limit] 
     * @param {Number} [offset] 
     * @param {String} [sortby] 
     * @param {module:model/String} [direction] 
     * @param {String} [search] Text based search
     * @param {String} [checkingId] Supports Filtering
     * @param {Number} [amount] Supports Filtering. Supports Search
     * @param {Number} [fee] Supports Filtering
     * @param {String} [memo] Supports Filtering. Supports Search
     * @param {Date} [time] Supports Filtering
     * @param {String} [bolt11] Supports Filtering
     * @param {String} [preimage] Supports Filtering
     * @param {String} [paymentHash] Supports Filtering
     * @param {Date} [expiry] Supports Filtering
     * @param {Object.<String, Object>} [extra] Supports Filtering. Nested attributes can be filtered too, e.g. `extra.[additional].[attributes]`
     * @param {String} [walletId] Supports Filtering
     * @param {String} [webhook] Supports Filtering
     * @param {Number} [webhookStatus] Supports Filtering
     * @param {module:api/CoreApi~paymentListApiV1PaymentsPaginatedGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Page}
     */
  }, {
    key: "paymentListApiV1PaymentsPaginatedGet",
    value: function paymentListApiV1PaymentsPaginatedGet(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'limit': opts['limit'],
        'offset': opts['offset'],
        'sortby': opts['sortby'],
        'direction': opts['direction'],
        'search': opts['search'],
        'checking_id': opts['checkingId'],
        'amount': opts['amount'],
        'fee': opts['fee'],
        'memo': opts['memo'],
        'time': opts['time'],
        'bolt11': opts['bolt11'],
        'preimage': opts['preimage'],
        'payment_hash': opts['paymentHash'],
        'expiry': opts['expiry'],
        'extra': opts['extra'],
        'wallet_id': opts['walletId'],
        'webhook': opts['webhook'],
        'webhook_status': opts['webhookStatus']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyHeader', 'APIKeyQuery'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Page["default"];
      return this.apiClient.callApi('/api/v1/payments/paginated', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the tinyurlApiV1TinyurlPost operation.
     * @callback module:api/CoreApi~tinyurlApiV1TinyurlPostCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Tinyurl
     * creates a tinyurl
     * @param {String} url 
     * @param {Object} opts Optional parameters
     * @param {Boolean} [endless = false)] 
     * @param {module:api/CoreApi~tinyurlApiV1TinyurlPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
  }, {
    key: "tinyurlApiV1TinyurlPost",
    value: function tinyurlApiV1TinyurlPost(url, opts, callback) {
      opts = opts || {};
      var postBody = null;
      // verify the required parameter 'url' is set
      if (url === undefined || url === null) {
        throw new Error("Missing the required parameter 'url' when calling tinyurlApiV1TinyurlPost");
      }
      var pathParams = {};
      var queryParams = {
        'url': url,
        'endless': opts['endless']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyHeader', 'APIKeyQuery'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/api/v1/tinyurl', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the tinyurlApiV1TinyurlTinyurlIdDelete operation.
     * @callback module:api/CoreApi~tinyurlApiV1TinyurlTinyurlIdDeleteCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Tinyurl
     * delete a tinyurl by id
     * @param {String} tinyurlId 
     * @param {module:api/CoreApi~tinyurlApiV1TinyurlTinyurlIdDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
  }, {
    key: "tinyurlApiV1TinyurlTinyurlIdDelete",
    value: function tinyurlApiV1TinyurlTinyurlIdDelete(tinyurlId, callback) {
      var postBody = null;
      // verify the required parameter 'tinyurlId' is set
      if (tinyurlId === undefined || tinyurlId === null) {
        throw new Error("Missing the required parameter 'tinyurlId' when calling tinyurlApiV1TinyurlTinyurlIdDelete");
      }
      var pathParams = {
        'tinyurl_id': tinyurlId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyHeader', 'APIKeyQuery'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/api/v1/tinyurl/{tinyurl_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the tinyurlApiV1TinyurlTinyurlIdGet operation.
     * @callback module:api/CoreApi~tinyurlApiV1TinyurlTinyurlIdGetCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Tinyurl
     * get a tinyurl by id
     * @param {String} tinyurlId 
     * @param {module:api/CoreApi~tinyurlApiV1TinyurlTinyurlIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
  }, {
    key: "tinyurlApiV1TinyurlTinyurlIdGet",
    value: function tinyurlApiV1TinyurlTinyurlIdGet(tinyurlId, callback) {
      var postBody = null;
      // verify the required parameter 'tinyurlId' is set
      if (tinyurlId === undefined || tinyurlId === null) {
        throw new Error("Missing the required parameter 'tinyurlId' when calling tinyurlApiV1TinyurlTinyurlIdGet");
      }
      var pathParams = {
        'tinyurl_id': tinyurlId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['APIKeyHeader', 'APIKeyQuery'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/api/v1/tinyurl/{tinyurl_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the tinyurlTTinyurlIdGet operation.
     * @callback module:api/CoreApi~tinyurlTTinyurlIdGetCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Tinyurl
     * redirects a tinyurl by id
     * @param {String} tinyurlId 
     * @param {module:api/CoreApi~tinyurlTTinyurlIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
  }, {
    key: "tinyurlTTinyurlIdGet",
    value: function tinyurlTTinyurlIdGet(tinyurlId, callback) {
      var postBody = null;
      // verify the required parameter 'tinyurlId' is set
      if (tinyurlId === undefined || tinyurlId === null) {
        throw new Error("Missing the required parameter 'tinyurlId' when calling tinyurlTTinyurlIdGet");
      }
      var pathParams = {
        'tinyurl_id': tinyurlId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/t/{tinyurl_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the topupAdminApiV1TopupPut operation.
     * @callback module:api/CoreApi~topupAdminApiV1TopupPutCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Topup
     * @param {String} usr 
     * @param {module:model/CreateTopup} createTopup 
     * @param {module:api/CoreApi~topupAdminApiV1TopupPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
  }, {
    key: "topupAdminApiV1TopupPut",
    value: function topupAdminApiV1TopupPut(usr, createTopup, callback) {
      var postBody = createTopup;
      // verify the required parameter 'usr' is set
      if (usr === undefined || usr === null) {
        throw new Error("Missing the required parameter 'usr' when calling topupAdminApiV1TopupPut");
      }
      // verify the required parameter 'createTopup' is set
      if (createTopup === undefined || createTopup === null) {
        throw new Error("Missing the required parameter 'createTopup' when calling topupAdminApiV1TopupPut");
      }
      var pathParams = {};
      var queryParams = {
        'usr': usr
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/admin/api/v1/topup/', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the websocketUpdateGetApiV1WsItemIdDataGet operation.
     * @callback module:api/CoreApi~websocketUpdateGetApiV1WsItemIdDataGetCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Websocket Update Get
     * @param {String} itemId 
     * @param {String} data 
     * @param {module:api/CoreApi~websocketUpdateGetApiV1WsItemIdDataGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
  }, {
    key: "websocketUpdateGetApiV1WsItemIdDataGet",
    value: function websocketUpdateGetApiV1WsItemIdDataGet(itemId, data, callback) {
      var postBody = null;
      // verify the required parameter 'itemId' is set
      if (itemId === undefined || itemId === null) {
        throw new Error("Missing the required parameter 'itemId' when calling websocketUpdateGetApiV1WsItemIdDataGet");
      }
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling websocketUpdateGetApiV1WsItemIdDataGet");
      }
      var pathParams = {
        'item_id': itemId,
        'data': data
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/api/v1/ws/{item_id}/{data}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }

    /**
     * Callback function to receive the result of the websocketUpdatePostApiV1WsItemIdPost operation.
     * @callback module:api/CoreApi~websocketUpdatePostApiV1WsItemIdPostCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Websocket Update Post
     * @param {String} itemId 
     * @param {String} data 
     * @param {module:api/CoreApi~websocketUpdatePostApiV1WsItemIdPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
  }, {
    key: "websocketUpdatePostApiV1WsItemIdPost",
    value: function websocketUpdatePostApiV1WsItemIdPost(itemId, data, callback) {
      var postBody = null;
      // verify the required parameter 'itemId' is set
      if (itemId === undefined || itemId === null) {
        throw new Error("Missing the required parameter 'itemId' when calling websocketUpdatePostApiV1WsItemIdPost");
      }
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling websocketUpdatePostApiV1WsItemIdPost");
      }
      var pathParams = {
        'item_id': itemId
      };
      var queryParams = {
        'data': data
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/api/v1/ws/{item_id}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);
  return CoreApi;
}();
exports["default"] = CoreApi;
},{"../ApiClient":2,"../model/ConversionData":5,"../model/CreateExtension":6,"../model/CreateInvoiceData":7,"../model/CreateLNURLData":8,"../model/CreateLnurlAuth":9,"../model/CreateTopup":10,"../model/DecodePayment":11,"../model/EditableSettings":12,"../model/HTTPValidationError":13,"../model/Page":15,"../model/Payment":16}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ApiClient", {
  enumerable: true,
  get: function get() {
    return _ApiClient["default"];
  }
});
Object.defineProperty(exports, "ConversionData", {
  enumerable: true,
  get: function get() {
    return _ConversionData["default"];
  }
});
Object.defineProperty(exports, "CoreApi", {
  enumerable: true,
  get: function get() {
    return _CoreApi["default"];
  }
});
Object.defineProperty(exports, "CreateExtension", {
  enumerable: true,
  get: function get() {
    return _CreateExtension["default"];
  }
});
Object.defineProperty(exports, "CreateInvoiceData", {
  enumerable: true,
  get: function get() {
    return _CreateInvoiceData["default"];
  }
});
Object.defineProperty(exports, "CreateLNURLData", {
  enumerable: true,
  get: function get() {
    return _CreateLNURLData["default"];
  }
});
Object.defineProperty(exports, "CreateLnurlAuth", {
  enumerable: true,
  get: function get() {
    return _CreateLnurlAuth["default"];
  }
});
Object.defineProperty(exports, "CreateTopup", {
  enumerable: true,
  get: function get() {
    return _CreateTopup["default"];
  }
});
Object.defineProperty(exports, "DecodePayment", {
  enumerable: true,
  get: function get() {
    return _DecodePayment["default"];
  }
});
Object.defineProperty(exports, "EditableSettings", {
  enumerable: true,
  get: function get() {
    return _EditableSettings["default"];
  }
});
Object.defineProperty(exports, "HTTPValidationError", {
  enumerable: true,
  get: function get() {
    return _HTTPValidationError["default"];
  }
});
Object.defineProperty(exports, "LocationInner", {
  enumerable: true,
  get: function get() {
    return _LocationInner["default"];
  }
});
Object.defineProperty(exports, "Page", {
  enumerable: true,
  get: function get() {
    return _Page["default"];
  }
});
Object.defineProperty(exports, "Payment", {
  enumerable: true,
  get: function get() {
    return _Payment["default"];
  }
});
Object.defineProperty(exports, "ValidationError", {
  enumerable: true,
  get: function get() {
    return _ValidationError["default"];
  }
});
var _ApiClient = _interopRequireDefault(require("./ApiClient"));
var _ConversionData = _interopRequireDefault(require("./model/ConversionData"));
var _CreateExtension = _interopRequireDefault(require("./model/CreateExtension"));
var _CreateInvoiceData = _interopRequireDefault(require("./model/CreateInvoiceData"));
var _CreateLNURLData = _interopRequireDefault(require("./model/CreateLNURLData"));
var _CreateLnurlAuth = _interopRequireDefault(require("./model/CreateLnurlAuth"));
var _CreateTopup = _interopRequireDefault(require("./model/CreateTopup"));
var _DecodePayment = _interopRequireDefault(require("./model/DecodePayment"));
var _EditableSettings = _interopRequireDefault(require("./model/EditableSettings"));
var _HTTPValidationError = _interopRequireDefault(require("./model/HTTPValidationError"));
var _LocationInner = _interopRequireDefault(require("./model/LocationInner"));
var _Page = _interopRequireDefault(require("./model/Page"));
var _Payment = _interopRequireDefault(require("./model/Payment"));
var _ValidationError = _interopRequireDefault(require("./model/ValidationError"));
var _CoreApi = _interopRequireDefault(require("./api/CoreApi"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
},{"./ApiClient":2,"./api/CoreApi":3,"./model/ConversionData":5,"./model/CreateExtension":6,"./model/CreateInvoiceData":7,"./model/CreateLNURLData":8,"./model/CreateLnurlAuth":9,"./model/CreateTopup":10,"./model/DecodePayment":11,"./model/EditableSettings":12,"./model/HTTPValidationError":13,"./model/LocationInner":14,"./model/Page":15,"./model/Payment":16,"./model/ValidationError":17}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /**
                                                                                                                                                                                                                                                                                                                                                                                               * @lnbits/client
                                                                                                                                                                                                                                                                                                                                                                                               * API for LNbits, the free and open source bitcoin wallet and accounts system with plugins.
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * The version of the OpenAPI document: 0.10.9
                                                                                                                                                                                                                                                                                                                                                                                               * 
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
                                                                                                                                                                                                                                                                                                                                                                                               * https://openapi-generator.tech
                                                                                                                                                                                                                                                                                                                                                                                               * Do not edit the class manually.
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               */
/**
 * The ConversionData model module.
 * @module model/ConversionData
 * @version 0.10.9
 */
var ConversionData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ConversionData</code>.
   * @alias module:model/ConversionData
   * @param amount {Number} 
   */
  function ConversionData(amount) {
    _classCallCheck(this, ConversionData);
    ConversionData.initialize(this, amount);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ConversionData, null, [{
    key: "initialize",
    value: function initialize(obj, amount) {
      obj['amount'] = amount;
    }

    /**
     * Constructs a <code>ConversionData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConversionData} obj Optional instance to populate.
     * @return {module:model/ConversionData} The populated <code>ConversionData</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConversionData();
        if (data.hasOwnProperty('from')) {
          obj['from'] = _ApiClient["default"].convertToType(data['from'], 'String');
        }
        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'Number');
        }
        if (data.hasOwnProperty('to')) {
          obj['to'] = _ApiClient["default"].convertToType(data['to'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ConversionData</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ConversionData</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(ConversionData.RequiredProperties),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var property = _step.value;
          if (!data[property]) {
            throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
          }
        }
        // ensure the json data is a string
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (data['from'] && !(typeof data['from'] === 'string' || data['from'] instanceof String)) {
        throw new Error("Expected the field `from` to be a primitive type in the JSON string but got " + data['from']);
      }
      // ensure the json data is a string
      if (data['to'] && !(typeof data['to'] === 'string' || data['to'] instanceof String)) {
        throw new Error("Expected the field `to` to be a primitive type in the JSON string but got " + data['to']);
      }
      return true;
    }
  }]);
  return ConversionData;
}();
ConversionData.RequiredProperties = ["amount"];

/**
 * @member {String} from
 * @default 'sat'
 */
ConversionData.prototype['from'] = 'sat';

/**
 * @member {Number} amount
 */
ConversionData.prototype['amount'] = undefined;

/**
 * @member {String} to
 * @default 'usd'
 */
ConversionData.prototype['to'] = 'usd';
var _default = ConversionData;
exports["default"] = _default;
},{"../ApiClient":2}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /**
                                                                                                                                                                                                                                                                                                                                                                                               * @lnbits/client
                                                                                                                                                                                                                                                                                                                                                                                               * API for LNbits, the free and open source bitcoin wallet and accounts system with plugins.
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * The version of the OpenAPI document: 0.10.9
                                                                                                                                                                                                                                                                                                                                                                                               * 
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
                                                                                                                                                                                                                                                                                                                                                                                               * https://openapi-generator.tech
                                                                                                                                                                                                                                                                                                                                                                                               * Do not edit the class manually.
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               */
/**
 * The CreateExtension model module.
 * @module model/CreateExtension
 * @version 0.10.9
 */
var CreateExtension = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateExtension</code>.
   * @alias module:model/CreateExtension
   * @param extId {String} 
   * @param archive {String} 
   * @param sourceRepo {String} 
   */
  function CreateExtension(extId, archive, sourceRepo) {
    _classCallCheck(this, CreateExtension);
    CreateExtension.initialize(this, extId, archive, sourceRepo);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(CreateExtension, null, [{
    key: "initialize",
    value: function initialize(obj, extId, archive, sourceRepo) {
      obj['ext_id'] = extId;
      obj['archive'] = archive;
      obj['source_repo'] = sourceRepo;
    }

    /**
     * Constructs a <code>CreateExtension</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateExtension} obj Optional instance to populate.
     * @return {module:model/CreateExtension} The populated <code>CreateExtension</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateExtension();
        if (data.hasOwnProperty('ext_id')) {
          obj['ext_id'] = _ApiClient["default"].convertToType(data['ext_id'], 'String');
        }
        if (data.hasOwnProperty('archive')) {
          obj['archive'] = _ApiClient["default"].convertToType(data['archive'], 'String');
        }
        if (data.hasOwnProperty('source_repo')) {
          obj['source_repo'] = _ApiClient["default"].convertToType(data['source_repo'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateExtension</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateExtension</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(CreateExtension.RequiredProperties),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var property = _step.value;
          if (!data[property]) {
            throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
          }
        }
        // ensure the json data is a string
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (data['ext_id'] && !(typeof data['ext_id'] === 'string' || data['ext_id'] instanceof String)) {
        throw new Error("Expected the field `ext_id` to be a primitive type in the JSON string but got " + data['ext_id']);
      }
      // ensure the json data is a string
      if (data['archive'] && !(typeof data['archive'] === 'string' || data['archive'] instanceof String)) {
        throw new Error("Expected the field `archive` to be a primitive type in the JSON string but got " + data['archive']);
      }
      // ensure the json data is a string
      if (data['source_repo'] && !(typeof data['source_repo'] === 'string' || data['source_repo'] instanceof String)) {
        throw new Error("Expected the field `source_repo` to be a primitive type in the JSON string but got " + data['source_repo']);
      }
      return true;
    }
  }]);
  return CreateExtension;
}();
CreateExtension.RequiredProperties = ["ext_id", "archive", "source_repo"];

/**
 * @member {String} ext_id
 */
CreateExtension.prototype['ext_id'] = undefined;

/**
 * @member {String} archive
 */
CreateExtension.prototype['archive'] = undefined;

/**
 * @member {String} source_repo
 */
CreateExtension.prototype['source_repo'] = undefined;
var _default = CreateExtension;
exports["default"] = _default;
},{"../ApiClient":2}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /**
                                                                                                                                                                                                                                                                                                                                                                                               * @lnbits/client
                                                                                                                                                                                                                                                                                                                                                                                               * API for LNbits, the free and open source bitcoin wallet and accounts system with plugins.
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * The version of the OpenAPI document: 0.10.9
                                                                                                                                                                                                                                                                                                                                                                                               * 
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
                                                                                                                                                                                                                                                                                                                                                                                               * https://openapi-generator.tech
                                                                                                                                                                                                                                                                                                                                                                                               * Do not edit the class manually.
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               */
/**
 * The CreateInvoiceData model module.
 * @module model/CreateInvoiceData
 * @version 0.10.9
 */
var CreateInvoiceData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateInvoiceData</code>.
   * @alias module:model/CreateInvoiceData
   */
  function CreateInvoiceData() {
    _classCallCheck(this, CreateInvoiceData);
    CreateInvoiceData.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(CreateInvoiceData, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>CreateInvoiceData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateInvoiceData} obj Optional instance to populate.
     * @return {module:model/CreateInvoiceData} The populated <code>CreateInvoiceData</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateInvoiceData();
        if (data.hasOwnProperty('out')) {
          obj['out'] = _ApiClient["default"].convertToType(data['out'], 'Boolean');
        }
        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'Number');
        }
        if (data.hasOwnProperty('memo')) {
          obj['memo'] = _ApiClient["default"].convertToType(data['memo'], 'String');
        }
        if (data.hasOwnProperty('unit')) {
          obj['unit'] = _ApiClient["default"].convertToType(data['unit'], 'String');
        }
        if (data.hasOwnProperty('description_hash')) {
          obj['description_hash'] = _ApiClient["default"].convertToType(data['description_hash'], 'String');
        }
        if (data.hasOwnProperty('unhashed_description')) {
          obj['unhashed_description'] = _ApiClient["default"].convertToType(data['unhashed_description'], 'String');
        }
        if (data.hasOwnProperty('expiry')) {
          obj['expiry'] = _ApiClient["default"].convertToType(data['expiry'], 'Number');
        }
        if (data.hasOwnProperty('lnurl_callback')) {
          obj['lnurl_callback'] = _ApiClient["default"].convertToType(data['lnurl_callback'], 'String');
        }
        if (data.hasOwnProperty('lnurl_balance_check')) {
          obj['lnurl_balance_check'] = _ApiClient["default"].convertToType(data['lnurl_balance_check'], 'String');
        }
        if (data.hasOwnProperty('extra')) {
          obj['extra'] = _ApiClient["default"].convertToType(data['extra'], Object);
        }
        if (data.hasOwnProperty('webhook')) {
          obj['webhook'] = _ApiClient["default"].convertToType(data['webhook'], 'String');
        }
        if (data.hasOwnProperty('internal')) {
          obj['internal'] = _ApiClient["default"].convertToType(data['internal'], 'Boolean');
        }
        if (data.hasOwnProperty('bolt11')) {
          obj['bolt11'] = _ApiClient["default"].convertToType(data['bolt11'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateInvoiceData</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateInvoiceData</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['memo'] && !(typeof data['memo'] === 'string' || data['memo'] instanceof String)) {
        throw new Error("Expected the field `memo` to be a primitive type in the JSON string but got " + data['memo']);
      }
      // ensure the json data is a string
      if (data['unit'] && !(typeof data['unit'] === 'string' || data['unit'] instanceof String)) {
        throw new Error("Expected the field `unit` to be a primitive type in the JSON string but got " + data['unit']);
      }
      // ensure the json data is a string
      if (data['description_hash'] && !(typeof data['description_hash'] === 'string' || data['description_hash'] instanceof String)) {
        throw new Error("Expected the field `description_hash` to be a primitive type in the JSON string but got " + data['description_hash']);
      }
      // ensure the json data is a string
      if (data['unhashed_description'] && !(typeof data['unhashed_description'] === 'string' || data['unhashed_description'] instanceof String)) {
        throw new Error("Expected the field `unhashed_description` to be a primitive type in the JSON string but got " + data['unhashed_description']);
      }
      // ensure the json data is a string
      if (data['lnurl_callback'] && !(typeof data['lnurl_callback'] === 'string' || data['lnurl_callback'] instanceof String)) {
        throw new Error("Expected the field `lnurl_callback` to be a primitive type in the JSON string but got " + data['lnurl_callback']);
      }
      // ensure the json data is a string
      if (data['lnurl_balance_check'] && !(typeof data['lnurl_balance_check'] === 'string' || data['lnurl_balance_check'] instanceof String)) {
        throw new Error("Expected the field `lnurl_balance_check` to be a primitive type in the JSON string but got " + data['lnurl_balance_check']);
      }
      // ensure the json data is a string
      if (data['webhook'] && !(typeof data['webhook'] === 'string' || data['webhook'] instanceof String)) {
        throw new Error("Expected the field `webhook` to be a primitive type in the JSON string but got " + data['webhook']);
      }
      // ensure the json data is a string
      if (data['bolt11'] && !(typeof data['bolt11'] === 'string' || data['bolt11'] instanceof String)) {
        throw new Error("Expected the field `bolt11` to be a primitive type in the JSON string but got " + data['bolt11']);
      }
      return true;
    }
  }]);
  return CreateInvoiceData;
}();
/**
 * @member {Boolean} out
 * @default true
 */
CreateInvoiceData.prototype['out'] = true;

/**
 * @member {Number} amount
 */
CreateInvoiceData.prototype['amount'] = undefined;

/**
 * @member {String} memo
 */
CreateInvoiceData.prototype['memo'] = undefined;

/**
 * @member {String} unit
 * @default 'sat'
 */
CreateInvoiceData.prototype['unit'] = 'sat';

/**
 * @member {String} description_hash
 */
CreateInvoiceData.prototype['description_hash'] = undefined;

/**
 * @member {String} unhashed_description
 */
CreateInvoiceData.prototype['unhashed_description'] = undefined;

/**
 * @member {Number} expiry
 */
CreateInvoiceData.prototype['expiry'] = undefined;

/**
 * @member {String} lnurl_callback
 */
CreateInvoiceData.prototype['lnurl_callback'] = undefined;

/**
 * @member {String} lnurl_balance_check
 */
CreateInvoiceData.prototype['lnurl_balance_check'] = undefined;

/**
 * @member {Object} extra
 */
CreateInvoiceData.prototype['extra'] = undefined;

/**
 * @member {String} webhook
 */
CreateInvoiceData.prototype['webhook'] = undefined;

/**
 * @member {Boolean} internal
 * @default false
 */
CreateInvoiceData.prototype['internal'] = false;

/**
 * @member {String} bolt11
 */
CreateInvoiceData.prototype['bolt11'] = undefined;
var _default = CreateInvoiceData;
exports["default"] = _default;
},{"../ApiClient":2}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /**
                                                                                                                                                                                                                                                                                                                                                                                               * @lnbits/client
                                                                                                                                                                                                                                                                                                                                                                                               * API for LNbits, the free and open source bitcoin wallet and accounts system with plugins.
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * The version of the OpenAPI document: 0.10.9
                                                                                                                                                                                                                                                                                                                                                                                               * 
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
                                                                                                                                                                                                                                                                                                                                                                                               * https://openapi-generator.tech
                                                                                                                                                                                                                                                                                                                                                                                               * Do not edit the class manually.
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               */
/**
 * The CreateLNURLData model module.
 * @module model/CreateLNURLData
 * @version 0.10.9
 */
var CreateLNURLData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateLNURLData</code>.
   * @alias module:model/CreateLNURLData
   * @param descriptionHash {String} 
   * @param callback {String} 
   * @param amount {Number} 
   */
  function CreateLNURLData(descriptionHash, callback, amount) {
    _classCallCheck(this, CreateLNURLData);
    CreateLNURLData.initialize(this, descriptionHash, callback, amount);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(CreateLNURLData, null, [{
    key: "initialize",
    value: function initialize(obj, descriptionHash, callback, amount) {
      obj['description_hash'] = descriptionHash;
      obj['callback'] = callback;
      obj['amount'] = amount;
    }

    /**
     * Constructs a <code>CreateLNURLData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateLNURLData} obj Optional instance to populate.
     * @return {module:model/CreateLNURLData} The populated <code>CreateLNURLData</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateLNURLData();
        if (data.hasOwnProperty('description_hash')) {
          obj['description_hash'] = _ApiClient["default"].convertToType(data['description_hash'], 'String');
        }
        if (data.hasOwnProperty('callback')) {
          obj['callback'] = _ApiClient["default"].convertToType(data['callback'], 'String');
        }
        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'Number');
        }
        if (data.hasOwnProperty('comment')) {
          obj['comment'] = _ApiClient["default"].convertToType(data['comment'], 'String');
        }
        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateLNURLData</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateLNURLData</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(CreateLNURLData.RequiredProperties),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var property = _step.value;
          if (!data[property]) {
            throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
          }
        }
        // ensure the json data is a string
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (data['description_hash'] && !(typeof data['description_hash'] === 'string' || data['description_hash'] instanceof String)) {
        throw new Error("Expected the field `description_hash` to be a primitive type in the JSON string but got " + data['description_hash']);
      }
      // ensure the json data is a string
      if (data['callback'] && !(typeof data['callback'] === 'string' || data['callback'] instanceof String)) {
        throw new Error("Expected the field `callback` to be a primitive type in the JSON string but got " + data['callback']);
      }
      // ensure the json data is a string
      if (data['comment'] && !(typeof data['comment'] === 'string' || data['comment'] instanceof String)) {
        throw new Error("Expected the field `comment` to be a primitive type in the JSON string but got " + data['comment']);
      }
      // ensure the json data is a string
      if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
        throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
      }
      return true;
    }
  }]);
  return CreateLNURLData;
}();
CreateLNURLData.RequiredProperties = ["description_hash", "callback", "amount"];

/**
 * @member {String} description_hash
 */
CreateLNURLData.prototype['description_hash'] = undefined;

/**
 * @member {String} callback
 */
CreateLNURLData.prototype['callback'] = undefined;

/**
 * @member {Number} amount
 */
CreateLNURLData.prototype['amount'] = undefined;

/**
 * @member {String} comment
 */
CreateLNURLData.prototype['comment'] = undefined;

/**
 * @member {String} description
 */
CreateLNURLData.prototype['description'] = undefined;
var _default = CreateLNURLData;
exports["default"] = _default;
},{"../ApiClient":2}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /**
                                                                                                                                                                                                                                                                                                                                                                                               * @lnbits/client
                                                                                                                                                                                                                                                                                                                                                                                               * API for LNbits, the free and open source bitcoin wallet and accounts system with plugins.
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * The version of the OpenAPI document: 0.10.9
                                                                                                                                                                                                                                                                                                                                                                                               * 
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
                                                                                                                                                                                                                                                                                                                                                                                               * https://openapi-generator.tech
                                                                                                                                                                                                                                                                                                                                                                                               * Do not edit the class manually.
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               */
/**
 * The CreateLnurlAuth model module.
 * @module model/CreateLnurlAuth
 * @version 0.10.9
 */
var CreateLnurlAuth = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateLnurlAuth</code>.
   * @alias module:model/CreateLnurlAuth
   * @param callback {String} 
   */
  function CreateLnurlAuth(callback) {
    _classCallCheck(this, CreateLnurlAuth);
    CreateLnurlAuth.initialize(this, callback);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(CreateLnurlAuth, null, [{
    key: "initialize",
    value: function initialize(obj, callback) {
      obj['callback'] = callback;
    }

    /**
     * Constructs a <code>CreateLnurlAuth</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateLnurlAuth} obj Optional instance to populate.
     * @return {module:model/CreateLnurlAuth} The populated <code>CreateLnurlAuth</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateLnurlAuth();
        if (data.hasOwnProperty('callback')) {
          obj['callback'] = _ApiClient["default"].convertToType(data['callback'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateLnurlAuth</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateLnurlAuth</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(CreateLnurlAuth.RequiredProperties),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var property = _step.value;
          if (!data[property]) {
            throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
          }
        }
        // ensure the json data is a string
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (data['callback'] && !(typeof data['callback'] === 'string' || data['callback'] instanceof String)) {
        throw new Error("Expected the field `callback` to be a primitive type in the JSON string but got " + data['callback']);
      }
      return true;
    }
  }]);
  return CreateLnurlAuth;
}();
CreateLnurlAuth.RequiredProperties = ["callback"];

/**
 * @member {String} callback
 */
CreateLnurlAuth.prototype['callback'] = undefined;
var _default = CreateLnurlAuth;
exports["default"] = _default;
},{"../ApiClient":2}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /**
                                                                                                                                                                                                                                                                                                                                                                                               * @lnbits/client
                                                                                                                                                                                                                                                                                                                                                                                               * API for LNbits, the free and open source bitcoin wallet and accounts system with plugins.
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * The version of the OpenAPI document: 0.10.9
                                                                                                                                                                                                                                                                                                                                                                                               * 
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
                                                                                                                                                                                                                                                                                                                                                                                               * https://openapi-generator.tech
                                                                                                                                                                                                                                                                                                                                                                                               * Do not edit the class manually.
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               */
/**
 * The CreateTopup model module.
 * @module model/CreateTopup
 * @version 0.10.9
 */
var CreateTopup = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateTopup</code>.
   * @alias module:model/CreateTopup
   * @param walletId {String} 
   * @param amount {Number} 
   */
  function CreateTopup(walletId, amount) {
    _classCallCheck(this, CreateTopup);
    CreateTopup.initialize(this, walletId, amount);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(CreateTopup, null, [{
    key: "initialize",
    value: function initialize(obj, walletId, amount) {
      obj['wallet_id'] = walletId;
      obj['amount'] = amount;
    }

    /**
     * Constructs a <code>CreateTopup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateTopup} obj Optional instance to populate.
     * @return {module:model/CreateTopup} The populated <code>CreateTopup</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateTopup();
        if (data.hasOwnProperty('wallet_id')) {
          obj['wallet_id'] = _ApiClient["default"].convertToType(data['wallet_id'], 'String');
        }
        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'Number');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateTopup</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateTopup</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(CreateTopup.RequiredProperties),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var property = _step.value;
          if (!data[property]) {
            throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
          }
        }
        // ensure the json data is a string
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (data['wallet_id'] && !(typeof data['wallet_id'] === 'string' || data['wallet_id'] instanceof String)) {
        throw new Error("Expected the field `wallet_id` to be a primitive type in the JSON string but got " + data['wallet_id']);
      }
      return true;
    }
  }]);
  return CreateTopup;
}();
CreateTopup.RequiredProperties = ["wallet_id", "amount"];

/**
 * @member {String} wallet_id
 */
CreateTopup.prototype['wallet_id'] = undefined;

/**
 * @member {Number} amount
 */
CreateTopup.prototype['amount'] = undefined;
var _default = CreateTopup;
exports["default"] = _default;
},{"../ApiClient":2}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /**
                                                                                                                                                                                                                                                                                                                                                                                               * @lnbits/client
                                                                                                                                                                                                                                                                                                                                                                                               * API for LNbits, the free and open source bitcoin wallet and accounts system with plugins.
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * The version of the OpenAPI document: 0.10.9
                                                                                                                                                                                                                                                                                                                                                                                               * 
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
                                                                                                                                                                                                                                                                                                                                                                                               * https://openapi-generator.tech
                                                                                                                                                                                                                                                                                                                                                                                               * Do not edit the class manually.
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               */
/**
 * The DecodePayment model module.
 * @module model/DecodePayment
 * @version 0.10.9
 */
var DecodePayment = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DecodePayment</code>.
   * @alias module:model/DecodePayment
   * @param data {String} 
   */
  function DecodePayment(data) {
    _classCallCheck(this, DecodePayment);
    DecodePayment.initialize(this, data);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(DecodePayment, null, [{
    key: "initialize",
    value: function initialize(obj, data) {
      obj['data'] = data;
    }

    /**
     * Constructs a <code>DecodePayment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DecodePayment} obj Optional instance to populate.
     * @return {module:model/DecodePayment} The populated <code>DecodePayment</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DecodePayment();
        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>DecodePayment</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DecodePayment</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(DecodePayment.RequiredProperties),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var property = _step.value;
          if (!data[property]) {
            throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
          }
        }
        // ensure the json data is a string
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (data['data'] && !(typeof data['data'] === 'string' || data['data'] instanceof String)) {
        throw new Error("Expected the field `data` to be a primitive type in the JSON string but got " + data['data']);
      }
      return true;
    }
  }]);
  return DecodePayment;
}();
DecodePayment.RequiredProperties = ["data"];

/**
 * @member {String} data
 */
DecodePayment.prototype['data'] = undefined;
var _default = DecodePayment;
exports["default"] = _default;
},{"../ApiClient":2}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /**
                                                                                                                                                                                                                                                                                                                                                                                               * @lnbits/client
                                                                                                                                                                                                                                                                                                                                                                                               * API for LNbits, the free and open source bitcoin wallet and accounts system with plugins.
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * The version of the OpenAPI document: 0.10.9
                                                                                                                                                                                                                                                                                                                                                                                               * 
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
                                                                                                                                                                                                                                                                                                                                                                                               * https://openapi-generator.tech
                                                                                                                                                                                                                                                                                                                                                                                               * Do not edit the class manually.
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               */
/**
 * The EditableSettings model module.
 * @module model/EditableSettings
 * @version 0.10.9
 */
var EditableSettings = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EditableSettings</code>.
   * Base class for settings, allowing values to be overridden by environment variables.  This is useful in production for secrets you do not wish to save in code, it plays nicely with docker(-compose), Heroku and any 12 factor app design.
   * @alias module:model/EditableSettings
   */
  function EditableSettings() {
    _classCallCheck(this, EditableSettings);
    EditableSettings.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(EditableSettings, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>EditableSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EditableSettings} obj Optional instance to populate.
     * @return {module:model/EditableSettings} The populated <code>EditableSettings</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EditableSettings();
        if (data.hasOwnProperty('lightning_invoice_expiry')) {
          obj['lightning_invoice_expiry'] = _ApiClient["default"].convertToType(data['lightning_invoice_expiry'], 'Number');
        }
        if (data.hasOwnProperty('boltz_network')) {
          obj['boltz_network'] = _ApiClient["default"].convertToType(data['boltz_network'], 'String');
        }
        if (data.hasOwnProperty('boltz_url')) {
          obj['boltz_url'] = _ApiClient["default"].convertToType(data['boltz_url'], 'String');
        }
        if (data.hasOwnProperty('boltz_mempool_space_url')) {
          obj['boltz_mempool_space_url'] = _ApiClient["default"].convertToType(data['boltz_mempool_space_url'], 'String');
        }
        if (data.hasOwnProperty('boltz_mempool_space_url_ws')) {
          obj['boltz_mempool_space_url_ws'] = _ApiClient["default"].convertToType(data['boltz_mempool_space_url_ws'], 'String');
        }
        if (data.hasOwnProperty('lntips_api_endpoint')) {
          obj['lntips_api_endpoint'] = _ApiClient["default"].convertToType(data['lntips_api_endpoint'], 'String');
        }
        if (data.hasOwnProperty('lntips_api_key')) {
          obj['lntips_api_key'] = _ApiClient["default"].convertToType(data['lntips_api_key'], 'String');
        }
        if (data.hasOwnProperty('lntips_admin_key')) {
          obj['lntips_admin_key'] = _ApiClient["default"].convertToType(data['lntips_admin_key'], 'String');
        }
        if (data.hasOwnProperty('lntips_invoice_key')) {
          obj['lntips_invoice_key'] = _ApiClient["default"].convertToType(data['lntips_invoice_key'], 'String');
        }
        if (data.hasOwnProperty('spark_url')) {
          obj['spark_url'] = _ApiClient["default"].convertToType(data['spark_url'], 'String');
        }
        if (data.hasOwnProperty('spark_token')) {
          obj['spark_token'] = _ApiClient["default"].convertToType(data['spark_token'], 'String');
        }
        if (data.hasOwnProperty('opennode_api_endpoint')) {
          obj['opennode_api_endpoint'] = _ApiClient["default"].convertToType(data['opennode_api_endpoint'], 'String');
        }
        if (data.hasOwnProperty('opennode_key')) {
          obj['opennode_key'] = _ApiClient["default"].convertToType(data['opennode_key'], 'String');
        }
        if (data.hasOwnProperty('opennode_admin_key')) {
          obj['opennode_admin_key'] = _ApiClient["default"].convertToType(data['opennode_admin_key'], 'String');
        }
        if (data.hasOwnProperty('opennode_invoice_key')) {
          obj['opennode_invoice_key'] = _ApiClient["default"].convertToType(data['opennode_invoice_key'], 'String');
        }
        if (data.hasOwnProperty('lnpay_api_endpoint')) {
          obj['lnpay_api_endpoint'] = _ApiClient["default"].convertToType(data['lnpay_api_endpoint'], 'String');
        }
        if (data.hasOwnProperty('lnpay_api_key')) {
          obj['lnpay_api_key'] = _ApiClient["default"].convertToType(data['lnpay_api_key'], 'String');
        }
        if (data.hasOwnProperty('lnpay_wallet_key')) {
          obj['lnpay_wallet_key'] = _ApiClient["default"].convertToType(data['lnpay_wallet_key'], 'String');
        }
        if (data.hasOwnProperty('lnpay_admin_key')) {
          obj['lnpay_admin_key'] = _ApiClient["default"].convertToType(data['lnpay_admin_key'], 'String');
        }
        if (data.hasOwnProperty('lnd_grpc_endpoint')) {
          obj['lnd_grpc_endpoint'] = _ApiClient["default"].convertToType(data['lnd_grpc_endpoint'], 'String');
        }
        if (data.hasOwnProperty('lnd_grpc_cert')) {
          obj['lnd_grpc_cert'] = _ApiClient["default"].convertToType(data['lnd_grpc_cert'], 'String');
        }
        if (data.hasOwnProperty('lnd_grpc_port')) {
          obj['lnd_grpc_port'] = _ApiClient["default"].convertToType(data['lnd_grpc_port'], 'Number');
        }
        if (data.hasOwnProperty('lnd_grpc_admin_macaroon')) {
          obj['lnd_grpc_admin_macaroon'] = _ApiClient["default"].convertToType(data['lnd_grpc_admin_macaroon'], 'String');
        }
        if (data.hasOwnProperty('lnd_grpc_invoice_macaroon')) {
          obj['lnd_grpc_invoice_macaroon'] = _ApiClient["default"].convertToType(data['lnd_grpc_invoice_macaroon'], 'String');
        }
        if (data.hasOwnProperty('lnd_grpc_macaroon')) {
          obj['lnd_grpc_macaroon'] = _ApiClient["default"].convertToType(data['lnd_grpc_macaroon'], 'String');
        }
        if (data.hasOwnProperty('lnd_grpc_macaroon_encrypted')) {
          obj['lnd_grpc_macaroon_encrypted'] = _ApiClient["default"].convertToType(data['lnd_grpc_macaroon_encrypted'], 'String');
        }
        if (data.hasOwnProperty('lnd_rest_endpoint')) {
          obj['lnd_rest_endpoint'] = _ApiClient["default"].convertToType(data['lnd_rest_endpoint'], 'String');
        }
        if (data.hasOwnProperty('lnd_rest_cert')) {
          obj['lnd_rest_cert'] = _ApiClient["default"].convertToType(data['lnd_rest_cert'], 'String');
        }
        if (data.hasOwnProperty('lnd_rest_macaroon')) {
          obj['lnd_rest_macaroon'] = _ApiClient["default"].convertToType(data['lnd_rest_macaroon'], 'String');
        }
        if (data.hasOwnProperty('lnd_rest_macaroon_encrypted')) {
          obj['lnd_rest_macaroon_encrypted'] = _ApiClient["default"].convertToType(data['lnd_rest_macaroon_encrypted'], 'String');
        }
        if (data.hasOwnProperty('lnd_cert')) {
          obj['lnd_cert'] = _ApiClient["default"].convertToType(data['lnd_cert'], 'String');
        }
        if (data.hasOwnProperty('lnd_admin_macaroon')) {
          obj['lnd_admin_macaroon'] = _ApiClient["default"].convertToType(data['lnd_admin_macaroon'], 'String');
        }
        if (data.hasOwnProperty('lnd_invoice_macaroon')) {
          obj['lnd_invoice_macaroon'] = _ApiClient["default"].convertToType(data['lnd_invoice_macaroon'], 'String');
        }
        if (data.hasOwnProperty('lnd_rest_admin_macaroon')) {
          obj['lnd_rest_admin_macaroon'] = _ApiClient["default"].convertToType(data['lnd_rest_admin_macaroon'], 'String');
        }
        if (data.hasOwnProperty('lnd_rest_invoice_macaroon')) {
          obj['lnd_rest_invoice_macaroon'] = _ApiClient["default"].convertToType(data['lnd_rest_invoice_macaroon'], 'String');
        }
        if (data.hasOwnProperty('eclair_url')) {
          obj['eclair_url'] = _ApiClient["default"].convertToType(data['eclair_url'], 'String');
        }
        if (data.hasOwnProperty('eclair_pass')) {
          obj['eclair_pass'] = _ApiClient["default"].convertToType(data['eclair_pass'], 'String');
        }
        if (data.hasOwnProperty('corelightning_rpc')) {
          obj['corelightning_rpc'] = _ApiClient["default"].convertToType(data['corelightning_rpc'], 'String');
        }
        if (data.hasOwnProperty('clightning_rpc')) {
          obj['clightning_rpc'] = _ApiClient["default"].convertToType(data['clightning_rpc'], 'String');
        }
        if (data.hasOwnProperty('cliche_endpoint')) {
          obj['cliche_endpoint'] = _ApiClient["default"].convertToType(data['cliche_endpoint'], 'String');
        }
        if (data.hasOwnProperty('lnbits_endpoint')) {
          obj['lnbits_endpoint'] = _ApiClient["default"].convertToType(data['lnbits_endpoint'], 'String');
        }
        if (data.hasOwnProperty('lnbits_key')) {
          obj['lnbits_key'] = _ApiClient["default"].convertToType(data['lnbits_key'], 'String');
        }
        if (data.hasOwnProperty('lnbits_admin_key')) {
          obj['lnbits_admin_key'] = _ApiClient["default"].convertToType(data['lnbits_admin_key'], 'String');
        }
        if (data.hasOwnProperty('lnbits_invoice_key')) {
          obj['lnbits_invoice_key'] = _ApiClient["default"].convertToType(data['lnbits_invoice_key'], 'String');
        }
        if (data.hasOwnProperty('fake_wallet_secret')) {
          obj['fake_wallet_secret'] = _ApiClient["default"].convertToType(data['fake_wallet_secret'], 'String');
        }
        if (data.hasOwnProperty('lnbits_backend_wallet_class')) {
          obj['lnbits_backend_wallet_class'] = _ApiClient["default"].convertToType(data['lnbits_backend_wallet_class'], 'String');
        }
        if (data.hasOwnProperty('lnbits_rate_limit_no')) {
          obj['lnbits_rate_limit_no'] = _ApiClient["default"].convertToType(data['lnbits_rate_limit_no'], 'String');
        }
        if (data.hasOwnProperty('lnbits_rate_limit_unit')) {
          obj['lnbits_rate_limit_unit'] = _ApiClient["default"].convertToType(data['lnbits_rate_limit_unit'], 'String');
        }
        if (data.hasOwnProperty('lnbits_allowed_ips')) {
          obj['lnbits_allowed_ips'] = _ApiClient["default"].convertToType(data['lnbits_allowed_ips'], ['String']);
        }
        if (data.hasOwnProperty('lnbits_blocked_ips')) {
          obj['lnbits_blocked_ips'] = _ApiClient["default"].convertToType(data['lnbits_blocked_ips'], ['String']);
        }
        if (data.hasOwnProperty('lnbits_notifications')) {
          obj['lnbits_notifications'] = _ApiClient["default"].convertToType(data['lnbits_notifications'], 'Boolean');
        }
        if (data.hasOwnProperty('lnbits_killswitch')) {
          obj['lnbits_killswitch'] = _ApiClient["default"].convertToType(data['lnbits_killswitch'], 'Boolean');
        }
        if (data.hasOwnProperty('lnbits_killswitch_interval')) {
          obj['lnbits_killswitch_interval'] = _ApiClient["default"].convertToType(data['lnbits_killswitch_interval'], 'Number');
        }
        if (data.hasOwnProperty('lnbits_watchdog')) {
          obj['lnbits_watchdog'] = _ApiClient["default"].convertToType(data['lnbits_watchdog'], 'Boolean');
        }
        if (data.hasOwnProperty('lnbits_watchdog_interval')) {
          obj['lnbits_watchdog_interval'] = _ApiClient["default"].convertToType(data['lnbits_watchdog_interval'], 'Number');
        }
        if (data.hasOwnProperty('lnbits_watchdog_delta')) {
          obj['lnbits_watchdog_delta'] = _ApiClient["default"].convertToType(data['lnbits_watchdog_delta'], 'Number');
        }
        if (data.hasOwnProperty('lnbits_status_manifest')) {
          obj['lnbits_status_manifest'] = _ApiClient["default"].convertToType(data['lnbits_status_manifest'], 'String');
        }
        if (data.hasOwnProperty('lnbits_baseurl')) {
          obj['lnbits_baseurl'] = _ApiClient["default"].convertToType(data['lnbits_baseurl'], 'String');
        }
        if (data.hasOwnProperty('lnbits_reserve_fee_min')) {
          obj['lnbits_reserve_fee_min'] = _ApiClient["default"].convertToType(data['lnbits_reserve_fee_min'], 'Number');
        }
        if (data.hasOwnProperty('lnbits_reserve_fee_percent')) {
          obj['lnbits_reserve_fee_percent'] = _ApiClient["default"].convertToType(data['lnbits_reserve_fee_percent'], 'Number');
        }
        if (data.hasOwnProperty('lnbits_service_fee')) {
          obj['lnbits_service_fee'] = _ApiClient["default"].convertToType(data['lnbits_service_fee'], 'Number');
        }
        if (data.hasOwnProperty('lnbits_hide_api')) {
          obj['lnbits_hide_api'] = _ApiClient["default"].convertToType(data['lnbits_hide_api'], 'Boolean');
        }
        if (data.hasOwnProperty('lnbits_denomination')) {
          obj['lnbits_denomination'] = _ApiClient["default"].convertToType(data['lnbits_denomination'], 'String');
        }
        if (data.hasOwnProperty('lnbits_site_title')) {
          obj['lnbits_site_title'] = _ApiClient["default"].convertToType(data['lnbits_site_title'], 'String');
        }
        if (data.hasOwnProperty('lnbits_site_tagline')) {
          obj['lnbits_site_tagline'] = _ApiClient["default"].convertToType(data['lnbits_site_tagline'], 'String');
        }
        if (data.hasOwnProperty('lnbits_site_description')) {
          obj['lnbits_site_description'] = _ApiClient["default"].convertToType(data['lnbits_site_description'], 'String');
        }
        if (data.hasOwnProperty('lnbits_default_wallet_name')) {
          obj['lnbits_default_wallet_name'] = _ApiClient["default"].convertToType(data['lnbits_default_wallet_name'], 'String');
        }
        if (data.hasOwnProperty('lnbits_theme_options')) {
          obj['lnbits_theme_options'] = _ApiClient["default"].convertToType(data['lnbits_theme_options'], ['String']);
        }
        if (data.hasOwnProperty('lnbits_custom_logo')) {
          obj['lnbits_custom_logo'] = _ApiClient["default"].convertToType(data['lnbits_custom_logo'], 'String');
        }
        if (data.hasOwnProperty('lnbits_ad_space_title')) {
          obj['lnbits_ad_space_title'] = _ApiClient["default"].convertToType(data['lnbits_ad_space_title'], 'String');
        }
        if (data.hasOwnProperty('lnbits_ad_space')) {
          obj['lnbits_ad_space'] = _ApiClient["default"].convertToType(data['lnbits_ad_space'], 'String');
        }
        if (data.hasOwnProperty('lnbits_ad_space_enabled')) {
          obj['lnbits_ad_space_enabled'] = _ApiClient["default"].convertToType(data['lnbits_ad_space_enabled'], 'Boolean');
        }
        if (data.hasOwnProperty('lnbits_allowed_currencies')) {
          obj['lnbits_allowed_currencies'] = _ApiClient["default"].convertToType(data['lnbits_allowed_currencies'], ['String']);
        }
        if (data.hasOwnProperty('lnbits_admin_extensions')) {
          obj['lnbits_admin_extensions'] = _ApiClient["default"].convertToType(data['lnbits_admin_extensions'], ['String']);
        }
        if (data.hasOwnProperty('lnbits_extensions_manifests')) {
          obj['lnbits_extensions_manifests'] = _ApiClient["default"].convertToType(data['lnbits_extensions_manifests'], ['String']);
        }
        if (data.hasOwnProperty('lnbits_admin_users')) {
          obj['lnbits_admin_users'] = _ApiClient["default"].convertToType(data['lnbits_admin_users'], ['String']);
        }
        if (data.hasOwnProperty('lnbits_allowed_users')) {
          obj['lnbits_allowed_users'] = _ApiClient["default"].convertToType(data['lnbits_allowed_users'], ['String']);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EditableSettings</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EditableSettings</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // ensure the json data is a string
      if (data['boltz_network'] && !(typeof data['boltz_network'] === 'string' || data['boltz_network'] instanceof String)) {
        throw new Error("Expected the field `boltz_network` to be a primitive type in the JSON string but got " + data['boltz_network']);
      }
      // ensure the json data is a string
      if (data['boltz_url'] && !(typeof data['boltz_url'] === 'string' || data['boltz_url'] instanceof String)) {
        throw new Error("Expected the field `boltz_url` to be a primitive type in the JSON string but got " + data['boltz_url']);
      }
      // ensure the json data is a string
      if (data['boltz_mempool_space_url'] && !(typeof data['boltz_mempool_space_url'] === 'string' || data['boltz_mempool_space_url'] instanceof String)) {
        throw new Error("Expected the field `boltz_mempool_space_url` to be a primitive type in the JSON string but got " + data['boltz_mempool_space_url']);
      }
      // ensure the json data is a string
      if (data['boltz_mempool_space_url_ws'] && !(typeof data['boltz_mempool_space_url_ws'] === 'string' || data['boltz_mempool_space_url_ws'] instanceof String)) {
        throw new Error("Expected the field `boltz_mempool_space_url_ws` to be a primitive type in the JSON string but got " + data['boltz_mempool_space_url_ws']);
      }
      // ensure the json data is a string
      if (data['lntips_api_endpoint'] && !(typeof data['lntips_api_endpoint'] === 'string' || data['lntips_api_endpoint'] instanceof String)) {
        throw new Error("Expected the field `lntips_api_endpoint` to be a primitive type in the JSON string but got " + data['lntips_api_endpoint']);
      }
      // ensure the json data is a string
      if (data['lntips_api_key'] && !(typeof data['lntips_api_key'] === 'string' || data['lntips_api_key'] instanceof String)) {
        throw new Error("Expected the field `lntips_api_key` to be a primitive type in the JSON string but got " + data['lntips_api_key']);
      }
      // ensure the json data is a string
      if (data['lntips_admin_key'] && !(typeof data['lntips_admin_key'] === 'string' || data['lntips_admin_key'] instanceof String)) {
        throw new Error("Expected the field `lntips_admin_key` to be a primitive type in the JSON string but got " + data['lntips_admin_key']);
      }
      // ensure the json data is a string
      if (data['lntips_invoice_key'] && !(typeof data['lntips_invoice_key'] === 'string' || data['lntips_invoice_key'] instanceof String)) {
        throw new Error("Expected the field `lntips_invoice_key` to be a primitive type in the JSON string but got " + data['lntips_invoice_key']);
      }
      // ensure the json data is a string
      if (data['spark_url'] && !(typeof data['spark_url'] === 'string' || data['spark_url'] instanceof String)) {
        throw new Error("Expected the field `spark_url` to be a primitive type in the JSON string but got " + data['spark_url']);
      }
      // ensure the json data is a string
      if (data['spark_token'] && !(typeof data['spark_token'] === 'string' || data['spark_token'] instanceof String)) {
        throw new Error("Expected the field `spark_token` to be a primitive type in the JSON string but got " + data['spark_token']);
      }
      // ensure the json data is a string
      if (data['opennode_api_endpoint'] && !(typeof data['opennode_api_endpoint'] === 'string' || data['opennode_api_endpoint'] instanceof String)) {
        throw new Error("Expected the field `opennode_api_endpoint` to be a primitive type in the JSON string but got " + data['opennode_api_endpoint']);
      }
      // ensure the json data is a string
      if (data['opennode_key'] && !(typeof data['opennode_key'] === 'string' || data['opennode_key'] instanceof String)) {
        throw new Error("Expected the field `opennode_key` to be a primitive type in the JSON string but got " + data['opennode_key']);
      }
      // ensure the json data is a string
      if (data['opennode_admin_key'] && !(typeof data['opennode_admin_key'] === 'string' || data['opennode_admin_key'] instanceof String)) {
        throw new Error("Expected the field `opennode_admin_key` to be a primitive type in the JSON string but got " + data['opennode_admin_key']);
      }
      // ensure the json data is a string
      if (data['opennode_invoice_key'] && !(typeof data['opennode_invoice_key'] === 'string' || data['opennode_invoice_key'] instanceof String)) {
        throw new Error("Expected the field `opennode_invoice_key` to be a primitive type in the JSON string but got " + data['opennode_invoice_key']);
      }
      // ensure the json data is a string
      if (data['lnpay_api_endpoint'] && !(typeof data['lnpay_api_endpoint'] === 'string' || data['lnpay_api_endpoint'] instanceof String)) {
        throw new Error("Expected the field `lnpay_api_endpoint` to be a primitive type in the JSON string but got " + data['lnpay_api_endpoint']);
      }
      // ensure the json data is a string
      if (data['lnpay_api_key'] && !(typeof data['lnpay_api_key'] === 'string' || data['lnpay_api_key'] instanceof String)) {
        throw new Error("Expected the field `lnpay_api_key` to be a primitive type in the JSON string but got " + data['lnpay_api_key']);
      }
      // ensure the json data is a string
      if (data['lnpay_wallet_key'] && !(typeof data['lnpay_wallet_key'] === 'string' || data['lnpay_wallet_key'] instanceof String)) {
        throw new Error("Expected the field `lnpay_wallet_key` to be a primitive type in the JSON string but got " + data['lnpay_wallet_key']);
      }
      // ensure the json data is a string
      if (data['lnpay_admin_key'] && !(typeof data['lnpay_admin_key'] === 'string' || data['lnpay_admin_key'] instanceof String)) {
        throw new Error("Expected the field `lnpay_admin_key` to be a primitive type in the JSON string but got " + data['lnpay_admin_key']);
      }
      // ensure the json data is a string
      if (data['lnd_grpc_endpoint'] && !(typeof data['lnd_grpc_endpoint'] === 'string' || data['lnd_grpc_endpoint'] instanceof String)) {
        throw new Error("Expected the field `lnd_grpc_endpoint` to be a primitive type in the JSON string but got " + data['lnd_grpc_endpoint']);
      }
      // ensure the json data is a string
      if (data['lnd_grpc_cert'] && !(typeof data['lnd_grpc_cert'] === 'string' || data['lnd_grpc_cert'] instanceof String)) {
        throw new Error("Expected the field `lnd_grpc_cert` to be a primitive type in the JSON string but got " + data['lnd_grpc_cert']);
      }
      // ensure the json data is a string
      if (data['lnd_grpc_admin_macaroon'] && !(typeof data['lnd_grpc_admin_macaroon'] === 'string' || data['lnd_grpc_admin_macaroon'] instanceof String)) {
        throw new Error("Expected the field `lnd_grpc_admin_macaroon` to be a primitive type in the JSON string but got " + data['lnd_grpc_admin_macaroon']);
      }
      // ensure the json data is a string
      if (data['lnd_grpc_invoice_macaroon'] && !(typeof data['lnd_grpc_invoice_macaroon'] === 'string' || data['lnd_grpc_invoice_macaroon'] instanceof String)) {
        throw new Error("Expected the field `lnd_grpc_invoice_macaroon` to be a primitive type in the JSON string but got " + data['lnd_grpc_invoice_macaroon']);
      }
      // ensure the json data is a string
      if (data['lnd_grpc_macaroon'] && !(typeof data['lnd_grpc_macaroon'] === 'string' || data['lnd_grpc_macaroon'] instanceof String)) {
        throw new Error("Expected the field `lnd_grpc_macaroon` to be a primitive type in the JSON string but got " + data['lnd_grpc_macaroon']);
      }
      // ensure the json data is a string
      if (data['lnd_grpc_macaroon_encrypted'] && !(typeof data['lnd_grpc_macaroon_encrypted'] === 'string' || data['lnd_grpc_macaroon_encrypted'] instanceof String)) {
        throw new Error("Expected the field `lnd_grpc_macaroon_encrypted` to be a primitive type in the JSON string but got " + data['lnd_grpc_macaroon_encrypted']);
      }
      // ensure the json data is a string
      if (data['lnd_rest_endpoint'] && !(typeof data['lnd_rest_endpoint'] === 'string' || data['lnd_rest_endpoint'] instanceof String)) {
        throw new Error("Expected the field `lnd_rest_endpoint` to be a primitive type in the JSON string but got " + data['lnd_rest_endpoint']);
      }
      // ensure the json data is a string
      if (data['lnd_rest_cert'] && !(typeof data['lnd_rest_cert'] === 'string' || data['lnd_rest_cert'] instanceof String)) {
        throw new Error("Expected the field `lnd_rest_cert` to be a primitive type in the JSON string but got " + data['lnd_rest_cert']);
      }
      // ensure the json data is a string
      if (data['lnd_rest_macaroon'] && !(typeof data['lnd_rest_macaroon'] === 'string' || data['lnd_rest_macaroon'] instanceof String)) {
        throw new Error("Expected the field `lnd_rest_macaroon` to be a primitive type in the JSON string but got " + data['lnd_rest_macaroon']);
      }
      // ensure the json data is a string
      if (data['lnd_rest_macaroon_encrypted'] && !(typeof data['lnd_rest_macaroon_encrypted'] === 'string' || data['lnd_rest_macaroon_encrypted'] instanceof String)) {
        throw new Error("Expected the field `lnd_rest_macaroon_encrypted` to be a primitive type in the JSON string but got " + data['lnd_rest_macaroon_encrypted']);
      }
      // ensure the json data is a string
      if (data['lnd_cert'] && !(typeof data['lnd_cert'] === 'string' || data['lnd_cert'] instanceof String)) {
        throw new Error("Expected the field `lnd_cert` to be a primitive type in the JSON string but got " + data['lnd_cert']);
      }
      // ensure the json data is a string
      if (data['lnd_admin_macaroon'] && !(typeof data['lnd_admin_macaroon'] === 'string' || data['lnd_admin_macaroon'] instanceof String)) {
        throw new Error("Expected the field `lnd_admin_macaroon` to be a primitive type in the JSON string but got " + data['lnd_admin_macaroon']);
      }
      // ensure the json data is a string
      if (data['lnd_invoice_macaroon'] && !(typeof data['lnd_invoice_macaroon'] === 'string' || data['lnd_invoice_macaroon'] instanceof String)) {
        throw new Error("Expected the field `lnd_invoice_macaroon` to be a primitive type in the JSON string but got " + data['lnd_invoice_macaroon']);
      }
      // ensure the json data is a string
      if (data['lnd_rest_admin_macaroon'] && !(typeof data['lnd_rest_admin_macaroon'] === 'string' || data['lnd_rest_admin_macaroon'] instanceof String)) {
        throw new Error("Expected the field `lnd_rest_admin_macaroon` to be a primitive type in the JSON string but got " + data['lnd_rest_admin_macaroon']);
      }
      // ensure the json data is a string
      if (data['lnd_rest_invoice_macaroon'] && !(typeof data['lnd_rest_invoice_macaroon'] === 'string' || data['lnd_rest_invoice_macaroon'] instanceof String)) {
        throw new Error("Expected the field `lnd_rest_invoice_macaroon` to be a primitive type in the JSON string but got " + data['lnd_rest_invoice_macaroon']);
      }
      // ensure the json data is a string
      if (data['eclair_url'] && !(typeof data['eclair_url'] === 'string' || data['eclair_url'] instanceof String)) {
        throw new Error("Expected the field `eclair_url` to be a primitive type in the JSON string but got " + data['eclair_url']);
      }
      // ensure the json data is a string
      if (data['eclair_pass'] && !(typeof data['eclair_pass'] === 'string' || data['eclair_pass'] instanceof String)) {
        throw new Error("Expected the field `eclair_pass` to be a primitive type in the JSON string but got " + data['eclair_pass']);
      }
      // ensure the json data is a string
      if (data['corelightning_rpc'] && !(typeof data['corelightning_rpc'] === 'string' || data['corelightning_rpc'] instanceof String)) {
        throw new Error("Expected the field `corelightning_rpc` to be a primitive type in the JSON string but got " + data['corelightning_rpc']);
      }
      // ensure the json data is a string
      if (data['clightning_rpc'] && !(typeof data['clightning_rpc'] === 'string' || data['clightning_rpc'] instanceof String)) {
        throw new Error("Expected the field `clightning_rpc` to be a primitive type in the JSON string but got " + data['clightning_rpc']);
      }
      // ensure the json data is a string
      if (data['cliche_endpoint'] && !(typeof data['cliche_endpoint'] === 'string' || data['cliche_endpoint'] instanceof String)) {
        throw new Error("Expected the field `cliche_endpoint` to be a primitive type in the JSON string but got " + data['cliche_endpoint']);
      }
      // ensure the json data is a string
      if (data['lnbits_endpoint'] && !(typeof data['lnbits_endpoint'] === 'string' || data['lnbits_endpoint'] instanceof String)) {
        throw new Error("Expected the field `lnbits_endpoint` to be a primitive type in the JSON string but got " + data['lnbits_endpoint']);
      }
      // ensure the json data is a string
      if (data['lnbits_key'] && !(typeof data['lnbits_key'] === 'string' || data['lnbits_key'] instanceof String)) {
        throw new Error("Expected the field `lnbits_key` to be a primitive type in the JSON string but got " + data['lnbits_key']);
      }
      // ensure the json data is a string
      if (data['lnbits_admin_key'] && !(typeof data['lnbits_admin_key'] === 'string' || data['lnbits_admin_key'] instanceof String)) {
        throw new Error("Expected the field `lnbits_admin_key` to be a primitive type in the JSON string but got " + data['lnbits_admin_key']);
      }
      // ensure the json data is a string
      if (data['lnbits_invoice_key'] && !(typeof data['lnbits_invoice_key'] === 'string' || data['lnbits_invoice_key'] instanceof String)) {
        throw new Error("Expected the field `lnbits_invoice_key` to be a primitive type in the JSON string but got " + data['lnbits_invoice_key']);
      }
      // ensure the json data is a string
      if (data['fake_wallet_secret'] && !(typeof data['fake_wallet_secret'] === 'string' || data['fake_wallet_secret'] instanceof String)) {
        throw new Error("Expected the field `fake_wallet_secret` to be a primitive type in the JSON string but got " + data['fake_wallet_secret']);
      }
      // ensure the json data is a string
      if (data['lnbits_backend_wallet_class'] && !(typeof data['lnbits_backend_wallet_class'] === 'string' || data['lnbits_backend_wallet_class'] instanceof String)) {
        throw new Error("Expected the field `lnbits_backend_wallet_class` to be a primitive type in the JSON string but got " + data['lnbits_backend_wallet_class']);
      }
      // ensure the json data is a string
      if (data['lnbits_rate_limit_no'] && !(typeof data['lnbits_rate_limit_no'] === 'string' || data['lnbits_rate_limit_no'] instanceof String)) {
        throw new Error("Expected the field `lnbits_rate_limit_no` to be a primitive type in the JSON string but got " + data['lnbits_rate_limit_no']);
      }
      // ensure the json data is a string
      if (data['lnbits_rate_limit_unit'] && !(typeof data['lnbits_rate_limit_unit'] === 'string' || data['lnbits_rate_limit_unit'] instanceof String)) {
        throw new Error("Expected the field `lnbits_rate_limit_unit` to be a primitive type in the JSON string but got " + data['lnbits_rate_limit_unit']);
      }
      // ensure the json data is an array
      if (!Array.isArray(data['lnbits_allowed_ips'])) {
        throw new Error("Expected the field `lnbits_allowed_ips` to be an array in the JSON data but got " + data['lnbits_allowed_ips']);
      }
      // ensure the json data is an array
      if (!Array.isArray(data['lnbits_blocked_ips'])) {
        throw new Error("Expected the field `lnbits_blocked_ips` to be an array in the JSON data but got " + data['lnbits_blocked_ips']);
      }
      // ensure the json data is a string
      if (data['lnbits_status_manifest'] && !(typeof data['lnbits_status_manifest'] === 'string' || data['lnbits_status_manifest'] instanceof String)) {
        throw new Error("Expected the field `lnbits_status_manifest` to be a primitive type in the JSON string but got " + data['lnbits_status_manifest']);
      }
      // ensure the json data is a string
      if (data['lnbits_baseurl'] && !(typeof data['lnbits_baseurl'] === 'string' || data['lnbits_baseurl'] instanceof String)) {
        throw new Error("Expected the field `lnbits_baseurl` to be a primitive type in the JSON string but got " + data['lnbits_baseurl']);
      }
      // ensure the json data is a string
      if (data['lnbits_denomination'] && !(typeof data['lnbits_denomination'] === 'string' || data['lnbits_denomination'] instanceof String)) {
        throw new Error("Expected the field `lnbits_denomination` to be a primitive type in the JSON string but got " + data['lnbits_denomination']);
      }
      // ensure the json data is a string
      if (data['lnbits_site_title'] && !(typeof data['lnbits_site_title'] === 'string' || data['lnbits_site_title'] instanceof String)) {
        throw new Error("Expected the field `lnbits_site_title` to be a primitive type in the JSON string but got " + data['lnbits_site_title']);
      }
      // ensure the json data is a string
      if (data['lnbits_site_tagline'] && !(typeof data['lnbits_site_tagline'] === 'string' || data['lnbits_site_tagline'] instanceof String)) {
        throw new Error("Expected the field `lnbits_site_tagline` to be a primitive type in the JSON string but got " + data['lnbits_site_tagline']);
      }
      // ensure the json data is a string
      if (data['lnbits_site_description'] && !(typeof data['lnbits_site_description'] === 'string' || data['lnbits_site_description'] instanceof String)) {
        throw new Error("Expected the field `lnbits_site_description` to be a primitive type in the JSON string but got " + data['lnbits_site_description']);
      }
      // ensure the json data is a string
      if (data['lnbits_default_wallet_name'] && !(typeof data['lnbits_default_wallet_name'] === 'string' || data['lnbits_default_wallet_name'] instanceof String)) {
        throw new Error("Expected the field `lnbits_default_wallet_name` to be a primitive type in the JSON string but got " + data['lnbits_default_wallet_name']);
      }
      // ensure the json data is an array
      if (!Array.isArray(data['lnbits_theme_options'])) {
        throw new Error("Expected the field `lnbits_theme_options` to be an array in the JSON data but got " + data['lnbits_theme_options']);
      }
      // ensure the json data is a string
      if (data['lnbits_custom_logo'] && !(typeof data['lnbits_custom_logo'] === 'string' || data['lnbits_custom_logo'] instanceof String)) {
        throw new Error("Expected the field `lnbits_custom_logo` to be a primitive type in the JSON string but got " + data['lnbits_custom_logo']);
      }
      // ensure the json data is a string
      if (data['lnbits_ad_space_title'] && !(typeof data['lnbits_ad_space_title'] === 'string' || data['lnbits_ad_space_title'] instanceof String)) {
        throw new Error("Expected the field `lnbits_ad_space_title` to be a primitive type in the JSON string but got " + data['lnbits_ad_space_title']);
      }
      // ensure the json data is a string
      if (data['lnbits_ad_space'] && !(typeof data['lnbits_ad_space'] === 'string' || data['lnbits_ad_space'] instanceof String)) {
        throw new Error("Expected the field `lnbits_ad_space` to be a primitive type in the JSON string but got " + data['lnbits_ad_space']);
      }
      // ensure the json data is an array
      if (!Array.isArray(data['lnbits_allowed_currencies'])) {
        throw new Error("Expected the field `lnbits_allowed_currencies` to be an array in the JSON data but got " + data['lnbits_allowed_currencies']);
      }
      // ensure the json data is an array
      if (!Array.isArray(data['lnbits_admin_extensions'])) {
        throw new Error("Expected the field `lnbits_admin_extensions` to be an array in the JSON data but got " + data['lnbits_admin_extensions']);
      }
      // ensure the json data is an array
      if (!Array.isArray(data['lnbits_extensions_manifests'])) {
        throw new Error("Expected the field `lnbits_extensions_manifests` to be an array in the JSON data but got " + data['lnbits_extensions_manifests']);
      }
      // ensure the json data is an array
      if (!Array.isArray(data['lnbits_admin_users'])) {
        throw new Error("Expected the field `lnbits_admin_users` to be an array in the JSON data but got " + data['lnbits_admin_users']);
      }
      // ensure the json data is an array
      if (!Array.isArray(data['lnbits_allowed_users'])) {
        throw new Error("Expected the field `lnbits_allowed_users` to be an array in the JSON data but got " + data['lnbits_allowed_users']);
      }
      return true;
    }
  }]);
  return EditableSettings;
}();
/**
 * @member {Number} lightning_invoice_expiry
 * @default 600
 */
EditableSettings.prototype['lightning_invoice_expiry'] = 600;

/**
 * @member {String} boltz_network
 * @default 'main'
 */
EditableSettings.prototype['boltz_network'] = 'main';

/**
 * @member {String} boltz_url
 * @default 'https://boltz.exchange/api'
 */
EditableSettings.prototype['boltz_url'] = 'https://boltz.exchange/api';

/**
 * @member {String} boltz_mempool_space_url
 * @default 'https://mempool.space'
 */
EditableSettings.prototype['boltz_mempool_space_url'] = 'https://mempool.space';

/**
 * @member {String} boltz_mempool_space_url_ws
 * @default 'wss://mempool.space'
 */
EditableSettings.prototype['boltz_mempool_space_url_ws'] = 'wss://mempool.space';

/**
 * @member {String} lntips_api_endpoint
 */
EditableSettings.prototype['lntips_api_endpoint'] = undefined;

/**
 * @member {String} lntips_api_key
 */
EditableSettings.prototype['lntips_api_key'] = undefined;

/**
 * @member {String} lntips_admin_key
 */
EditableSettings.prototype['lntips_admin_key'] = undefined;

/**
 * @member {String} lntips_invoice_key
 */
EditableSettings.prototype['lntips_invoice_key'] = undefined;

/**
 * @member {String} spark_url
 */
EditableSettings.prototype['spark_url'] = undefined;

/**
 * @member {String} spark_token
 */
EditableSettings.prototype['spark_token'] = undefined;

/**
 * @member {String} opennode_api_endpoint
 */
EditableSettings.prototype['opennode_api_endpoint'] = undefined;

/**
 * @member {String} opennode_key
 */
EditableSettings.prototype['opennode_key'] = undefined;

/**
 * @member {String} opennode_admin_key
 */
EditableSettings.prototype['opennode_admin_key'] = undefined;

/**
 * @member {String} opennode_invoice_key
 */
EditableSettings.prototype['opennode_invoice_key'] = undefined;

/**
 * @member {String} lnpay_api_endpoint
 */
EditableSettings.prototype['lnpay_api_endpoint'] = undefined;

/**
 * @member {String} lnpay_api_key
 */
EditableSettings.prototype['lnpay_api_key'] = undefined;

/**
 * @member {String} lnpay_wallet_key
 */
EditableSettings.prototype['lnpay_wallet_key'] = undefined;

/**
 * @member {String} lnpay_admin_key
 */
EditableSettings.prototype['lnpay_admin_key'] = undefined;

/**
 * @member {String} lnd_grpc_endpoint
 */
EditableSettings.prototype['lnd_grpc_endpoint'] = undefined;

/**
 * @member {String} lnd_grpc_cert
 */
EditableSettings.prototype['lnd_grpc_cert'] = undefined;

/**
 * @member {Number} lnd_grpc_port
 */
EditableSettings.prototype['lnd_grpc_port'] = undefined;

/**
 * @member {String} lnd_grpc_admin_macaroon
 */
EditableSettings.prototype['lnd_grpc_admin_macaroon'] = undefined;

/**
 * @member {String} lnd_grpc_invoice_macaroon
 */
EditableSettings.prototype['lnd_grpc_invoice_macaroon'] = undefined;

/**
 * @member {String} lnd_grpc_macaroon
 */
EditableSettings.prototype['lnd_grpc_macaroon'] = undefined;

/**
 * @member {String} lnd_grpc_macaroon_encrypted
 */
EditableSettings.prototype['lnd_grpc_macaroon_encrypted'] = undefined;

/**
 * @member {String} lnd_rest_endpoint
 */
EditableSettings.prototype['lnd_rest_endpoint'] = undefined;

/**
 * @member {String} lnd_rest_cert
 */
EditableSettings.prototype['lnd_rest_cert'] = undefined;

/**
 * @member {String} lnd_rest_macaroon
 */
EditableSettings.prototype['lnd_rest_macaroon'] = undefined;

/**
 * @member {String} lnd_rest_macaroon_encrypted
 */
EditableSettings.prototype['lnd_rest_macaroon_encrypted'] = undefined;

/**
 * @member {String} lnd_cert
 */
EditableSettings.prototype['lnd_cert'] = undefined;

/**
 * @member {String} lnd_admin_macaroon
 */
EditableSettings.prototype['lnd_admin_macaroon'] = undefined;

/**
 * @member {String} lnd_invoice_macaroon
 */
EditableSettings.prototype['lnd_invoice_macaroon'] = undefined;

/**
 * @member {String} lnd_rest_admin_macaroon
 */
EditableSettings.prototype['lnd_rest_admin_macaroon'] = undefined;

/**
 * @member {String} lnd_rest_invoice_macaroon
 */
EditableSettings.prototype['lnd_rest_invoice_macaroon'] = undefined;

/**
 * @member {String} eclair_url
 */
EditableSettings.prototype['eclair_url'] = undefined;

/**
 * @member {String} eclair_pass
 */
EditableSettings.prototype['eclair_pass'] = undefined;

/**
 * @member {String} corelightning_rpc
 */
EditableSettings.prototype['corelightning_rpc'] = undefined;

/**
 * @member {String} clightning_rpc
 */
EditableSettings.prototype['clightning_rpc'] = undefined;

/**
 * @member {String} cliche_endpoint
 */
EditableSettings.prototype['cliche_endpoint'] = undefined;

/**
 * @member {String} lnbits_endpoint
 * @default 'https://legend.lnbits.com'
 */
EditableSettings.prototype['lnbits_endpoint'] = 'https://legend.lnbits.com';

/**
 * @member {String} lnbits_key
 */
EditableSettings.prototype['lnbits_key'] = undefined;

/**
 * @member {String} lnbits_admin_key
 */
EditableSettings.prototype['lnbits_admin_key'] = undefined;

/**
 * @member {String} lnbits_invoice_key
 */
EditableSettings.prototype['lnbits_invoice_key'] = undefined;

/**
 * @member {String} fake_wallet_secret
 * @default 'ToTheMoon1'
 */
EditableSettings.prototype['fake_wallet_secret'] = 'ToTheMoon1';

/**
 * @member {String} lnbits_backend_wallet_class
 * @default 'VoidWallet'
 */
EditableSettings.prototype['lnbits_backend_wallet_class'] = 'VoidWallet';

/**
 * @member {String} lnbits_rate_limit_no
 * @default '200'
 */
EditableSettings.prototype['lnbits_rate_limit_no'] = '200';

/**
 * @member {String} lnbits_rate_limit_unit
 * @default 'minute'
 */
EditableSettings.prototype['lnbits_rate_limit_unit'] = 'minute';

/**
 * @member {Array.<String>} lnbits_allowed_ips
 */
EditableSettings.prototype['lnbits_allowed_ips'] = undefined;

/**
 * @member {Array.<String>} lnbits_blocked_ips
 */
EditableSettings.prototype['lnbits_blocked_ips'] = undefined;

/**
 * @member {Boolean} lnbits_notifications
 * @default false
 */
EditableSettings.prototype['lnbits_notifications'] = false;

/**
 * @member {Boolean} lnbits_killswitch
 * @default false
 */
EditableSettings.prototype['lnbits_killswitch'] = false;

/**
 * @member {Number} lnbits_killswitch_interval
 * @default 60
 */
EditableSettings.prototype['lnbits_killswitch_interval'] = 60;

/**
 * @member {Boolean} lnbits_watchdog
 * @default false
 */
EditableSettings.prototype['lnbits_watchdog'] = false;

/**
 * @member {Number} lnbits_watchdog_interval
 * @default 60
 */
EditableSettings.prototype['lnbits_watchdog_interval'] = 60;

/**
 * @member {Number} lnbits_watchdog_delta
 * @default 1000000
 */
EditableSettings.prototype['lnbits_watchdog_delta'] = 1000000;

/**
 * @member {String} lnbits_status_manifest
 * @default 'https://raw.githubusercontent.com/lnbits/lnbits-status/main/manifest.json'
 */
EditableSettings.prototype['lnbits_status_manifest'] = 'https://raw.githubusercontent.com/lnbits/lnbits-status/main/manifest.json';

/**
 * @member {String} lnbits_baseurl
 * @default 'http://127.0.0.1:5000/'
 */
EditableSettings.prototype['lnbits_baseurl'] = 'http://127.0.0.1:5000/';

/**
 * @member {Number} lnbits_reserve_fee_min
 * @default 2000
 */
EditableSettings.prototype['lnbits_reserve_fee_min'] = 2000;

/**
 * @member {Number} lnbits_reserve_fee_percent
 * @default 1.0
 */
EditableSettings.prototype['lnbits_reserve_fee_percent'] = 1.0;

/**
 * @member {Number} lnbits_service_fee
 * @default 0
 */
EditableSettings.prototype['lnbits_service_fee'] = 0;

/**
 * @member {Boolean} lnbits_hide_api
 * @default false
 */
EditableSettings.prototype['lnbits_hide_api'] = false;

/**
 * @member {String} lnbits_denomination
 * @default 'sats'
 */
EditableSettings.prototype['lnbits_denomination'] = 'sats';

/**
 * @member {String} lnbits_site_title
 * @default 'LNbits'
 */
EditableSettings.prototype['lnbits_site_title'] = 'LNbits';

/**
 * @member {String} lnbits_site_tagline
 * @default 'free and open-source lightning wallet'
 */
EditableSettings.prototype['lnbits_site_tagline'] = 'free and open-source lightning wallet';

/**
 * @member {String} lnbits_site_description
 */
EditableSettings.prototype['lnbits_site_description'] = undefined;

/**
 * @member {String} lnbits_default_wallet_name
 * @default 'LNbits wallet'
 */
EditableSettings.prototype['lnbits_default_wallet_name'] = 'LNbits wallet';

/**
 * @member {Array.<String>} lnbits_theme_options
 */
EditableSettings.prototype['lnbits_theme_options'] = undefined;

/**
 * @member {String} lnbits_custom_logo
 */
EditableSettings.prototype['lnbits_custom_logo'] = undefined;

/**
 * @member {String} lnbits_ad_space_title
 * @default 'Supported by'
 */
EditableSettings.prototype['lnbits_ad_space_title'] = 'Supported by';

/**
 * @member {String} lnbits_ad_space
 * @default 'https://shop.lnbits.com/;/static/images/lnbits-shop-light.png;/static/images/lnbits-shop-dark.png'
 */
EditableSettings.prototype['lnbits_ad_space'] = 'https://shop.lnbits.com/;/static/images/lnbits-shop-light.png;/static/images/lnbits-shop-dark.png';

/**
 * @member {Boolean} lnbits_ad_space_enabled
 * @default false
 */
EditableSettings.prototype['lnbits_ad_space_enabled'] = false;

/**
 * @member {Array.<String>} lnbits_allowed_currencies
 */
EditableSettings.prototype['lnbits_allowed_currencies'] = undefined;

/**
 * @member {Array.<String>} lnbits_admin_extensions
 */
EditableSettings.prototype['lnbits_admin_extensions'] = undefined;

/**
 * @member {Array.<String>} lnbits_extensions_manifests
 */
EditableSettings.prototype['lnbits_extensions_manifests'] = undefined;

/**
 * @member {Array.<String>} lnbits_admin_users
 */
EditableSettings.prototype['lnbits_admin_users'] = undefined;

/**
 * @member {Array.<String>} lnbits_allowed_users
 */
EditableSettings.prototype['lnbits_allowed_users'] = undefined;
var _default = EditableSettings;
exports["default"] = _default;
},{"../ApiClient":2}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _ValidationError = _interopRequireDefault(require("./ValidationError"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /**
                                                                                                                                                                                                                                                                                                                                                                                               * @lnbits/client
                                                                                                                                                                                                                                                                                                                                                                                               * API for LNbits, the free and open source bitcoin wallet and accounts system with plugins.
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * The version of the OpenAPI document: 0.10.9
                                                                                                                                                                                                                                                                                                                                                                                               * 
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
                                                                                                                                                                                                                                                                                                                                                                                               * https://openapi-generator.tech
                                                                                                                                                                                                                                                                                                                                                                                               * Do not edit the class manually.
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               */
/**
 * The HTTPValidationError model module.
 * @module model/HTTPValidationError
 * @version 0.10.9
 */
var HTTPValidationError = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>HTTPValidationError</code>.
   * @alias module:model/HTTPValidationError
   */
  function HTTPValidationError() {
    _classCallCheck(this, HTTPValidationError);
    HTTPValidationError.initialize(this);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(HTTPValidationError, null, [{
    key: "initialize",
    value: function initialize(obj) {}

    /**
     * Constructs a <code>HTTPValidationError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HTTPValidationError} obj Optional instance to populate.
     * @return {module:model/HTTPValidationError} The populated <code>HTTPValidationError</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new HTTPValidationError();
        if (data.hasOwnProperty('detail')) {
          obj['detail'] = _ApiClient["default"].convertToType(data['detail'], [_ValidationError["default"]]);
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>HTTPValidationError</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>HTTPValidationError</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      if (data['detail']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['detail'])) {
          throw new Error("Expected the field `detail` to be an array in the JSON data but got " + data['detail']);
        }
        // validate the optional field `detail` (array)
        var _iterator = _createForOfIteratorHelper(data['detail']),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            _ValidationError["default"].validateJSON(item);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        ;
      }
      return true;
    }
  }]);
  return HTTPValidationError;
}();
/**
 * @member {Array.<module:model/ValidationError>} detail
 */
HTTPValidationError.prototype['detail'] = undefined;
var _default = HTTPValidationError;
exports["default"] = _default;
},{"../ApiClient":2,"./ValidationError":17}],14:[function(require,module,exports){
"use strict";

var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
},{"../ApiClient":2}],15:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /**
                                                                                                                                                                                                                                                                                                                                                                                               * @lnbits/client
                                                                                                                                                                                                                                                                                                                                                                                               * API for LNbits, the free and open source bitcoin wallet and accounts system with plugins.
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * The version of the OpenAPI document: 0.10.9
                                                                                                                                                                                                                                                                                                                                                                                               * 
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
                                                                                                                                                                                                                                                                                                                                                                                               * https://openapi-generator.tech
                                                                                                                                                                                                                                                                                                                                                                                               * Do not edit the class manually.
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               */
/**
 * The Page model module.
 * @module model/Page
 * @version 0.10.9
 */
var Page = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Page</code>.
   * @alias module:model/Page
   * @param data {Array.<Object>} 
   * @param total {Number} 
   */
  function Page(data, total) {
    _classCallCheck(this, Page);
    Page.initialize(this, data, total);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(Page, null, [{
    key: "initialize",
    value: function initialize(obj, data, total) {
      obj['data'] = data;
      obj['total'] = total;
    }

    /**
     * Constructs a <code>Page</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Page} obj Optional instance to populate.
     * @return {module:model/Page} The populated <code>Page</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Page();
        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [Object]);
        }
        if (data.hasOwnProperty('total')) {
          obj['total'] = _ApiClient["default"].convertToType(data['total'], 'Number');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Page</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Page</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(Page.RequiredProperties),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var property = _step.value;
          if (!data[property]) {
            throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
          }
        }
        // ensure the json data is an array
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (!Array.isArray(data['data'])) {
        throw new Error("Expected the field `data` to be an array in the JSON data but got " + data['data']);
      }
      return true;
    }
  }]);
  return Page;
}();
Page.RequiredProperties = ["data", "total"];

/**
 * @member {Array.<Object>} data
 */
Page.prototype['data'] = undefined;

/**
 * @member {Number} total
 */
Page.prototype['total'] = undefined;
var _default = Page;
exports["default"] = _default;
},{"../ApiClient":2}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /**
                                                                                                                                                                                                                                                                                                                                                                                               * @lnbits/client
                                                                                                                                                                                                                                                                                                                                                                                               * API for LNbits, the free and open source bitcoin wallet and accounts system with plugins.
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * The version of the OpenAPI document: 0.10.9
                                                                                                                                                                                                                                                                                                                                                                                               * 
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
                                                                                                                                                                                                                                                                                                                                                                                               * https://openapi-generator.tech
                                                                                                                                                                                                                                                                                                                                                                                               * Do not edit the class manually.
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               */
/**
 * The Payment model module.
 * @module model/Payment
 * @version 0.10.9
 */
var Payment = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Payment</code>.
   * @alias module:model/Payment
   * @param checkingId {String} 
   * @param pending {Boolean} 
   * @param amount {Number} 
   * @param fee {Number} 
   * @param time {Number} 
   * @param bolt11 {String} 
   * @param preimage {String} 
   * @param paymentHash {String} 
   * @param walletId {String} 
   */
  function Payment(checkingId, pending, amount, fee, time, bolt11, preimage, paymentHash, walletId) {
    _classCallCheck(this, Payment);
    Payment.initialize(this, checkingId, pending, amount, fee, time, bolt11, preimage, paymentHash, walletId);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(Payment, null, [{
    key: "initialize",
    value: function initialize(obj, checkingId, pending, amount, fee, time, bolt11, preimage, paymentHash, walletId) {
      obj['checking_id'] = checkingId;
      obj['pending'] = pending;
      obj['amount'] = amount;
      obj['fee'] = fee;
      obj['time'] = time;
      obj['bolt11'] = bolt11;
      obj['preimage'] = preimage;
      obj['payment_hash'] = paymentHash;
      obj['wallet_id'] = walletId;
    }

    /**
     * Constructs a <code>Payment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Payment} obj Optional instance to populate.
     * @return {module:model/Payment} The populated <code>Payment</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Payment();
        if (data.hasOwnProperty('checking_id')) {
          obj['checking_id'] = _ApiClient["default"].convertToType(data['checking_id'], 'String');
        }
        if (data.hasOwnProperty('pending')) {
          obj['pending'] = _ApiClient["default"].convertToType(data['pending'], 'Boolean');
        }
        if (data.hasOwnProperty('amount')) {
          obj['amount'] = _ApiClient["default"].convertToType(data['amount'], 'Number');
        }
        if (data.hasOwnProperty('fee')) {
          obj['fee'] = _ApiClient["default"].convertToType(data['fee'], 'Number');
        }
        if (data.hasOwnProperty('memo')) {
          obj['memo'] = _ApiClient["default"].convertToType(data['memo'], 'String');
        }
        if (data.hasOwnProperty('time')) {
          obj['time'] = _ApiClient["default"].convertToType(data['time'], 'Number');
        }
        if (data.hasOwnProperty('bolt11')) {
          obj['bolt11'] = _ApiClient["default"].convertToType(data['bolt11'], 'String');
        }
        if (data.hasOwnProperty('preimage')) {
          obj['preimage'] = _ApiClient["default"].convertToType(data['preimage'], 'String');
        }
        if (data.hasOwnProperty('payment_hash')) {
          obj['payment_hash'] = _ApiClient["default"].convertToType(data['payment_hash'], 'String');
        }
        if (data.hasOwnProperty('expiry')) {
          obj['expiry'] = _ApiClient["default"].convertToType(data['expiry'], 'Number');
        }
        if (data.hasOwnProperty('extra')) {
          obj['extra'] = _ApiClient["default"].convertToType(data['extra'], Object);
        }
        if (data.hasOwnProperty('wallet_id')) {
          obj['wallet_id'] = _ApiClient["default"].convertToType(data['wallet_id'], 'String');
        }
        if (data.hasOwnProperty('webhook')) {
          obj['webhook'] = _ApiClient["default"].convertToType(data['webhook'], 'String');
        }
        if (data.hasOwnProperty('webhook_status')) {
          obj['webhook_status'] = _ApiClient["default"].convertToType(data['webhook_status'], 'Number');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Payment</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Payment</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(Payment.RequiredProperties),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var property = _step.value;
          if (!data[property]) {
            throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
          }
        }
        // ensure the json data is a string
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (data['checking_id'] && !(typeof data['checking_id'] === 'string' || data['checking_id'] instanceof String)) {
        throw new Error("Expected the field `checking_id` to be a primitive type in the JSON string but got " + data['checking_id']);
      }
      // ensure the json data is a string
      if (data['memo'] && !(typeof data['memo'] === 'string' || data['memo'] instanceof String)) {
        throw new Error("Expected the field `memo` to be a primitive type in the JSON string but got " + data['memo']);
      }
      // ensure the json data is a string
      if (data['bolt11'] && !(typeof data['bolt11'] === 'string' || data['bolt11'] instanceof String)) {
        throw new Error("Expected the field `bolt11` to be a primitive type in the JSON string but got " + data['bolt11']);
      }
      // ensure the json data is a string
      if (data['preimage'] && !(typeof data['preimage'] === 'string' || data['preimage'] instanceof String)) {
        throw new Error("Expected the field `preimage` to be a primitive type in the JSON string but got " + data['preimage']);
      }
      // ensure the json data is a string
      if (data['payment_hash'] && !(typeof data['payment_hash'] === 'string' || data['payment_hash'] instanceof String)) {
        throw new Error("Expected the field `payment_hash` to be a primitive type in the JSON string but got " + data['payment_hash']);
      }
      // ensure the json data is a string
      if (data['wallet_id'] && !(typeof data['wallet_id'] === 'string' || data['wallet_id'] instanceof String)) {
        throw new Error("Expected the field `wallet_id` to be a primitive type in the JSON string but got " + data['wallet_id']);
      }
      // ensure the json data is a string
      if (data['webhook'] && !(typeof data['webhook'] === 'string' || data['webhook'] instanceof String)) {
        throw new Error("Expected the field `webhook` to be a primitive type in the JSON string but got " + data['webhook']);
      }
      return true;
    }
  }]);
  return Payment;
}();
Payment.RequiredProperties = ["checking_id", "pending", "amount", "fee", "time", "bolt11", "preimage", "payment_hash", "wallet_id"];

/**
 * @member {String} checking_id
 */
Payment.prototype['checking_id'] = undefined;

/**
 * @member {Boolean} pending
 */
Payment.prototype['pending'] = undefined;

/**
 * @member {Number} amount
 */
Payment.prototype['amount'] = undefined;

/**
 * @member {Number} fee
 */
Payment.prototype['fee'] = undefined;

/**
 * @member {String} memo
 */
Payment.prototype['memo'] = undefined;

/**
 * @member {Number} time
 */
Payment.prototype['time'] = undefined;

/**
 * @member {String} bolt11
 */
Payment.prototype['bolt11'] = undefined;

/**
 * @member {String} preimage
 */
Payment.prototype['preimage'] = undefined;

/**
 * @member {String} payment_hash
 */
Payment.prototype['payment_hash'] = undefined;

/**
 * @member {Number} expiry
 */
Payment.prototype['expiry'] = undefined;

/**
 * @member {Object} extra
 */
Payment.prototype['extra'] = undefined;

/**
 * @member {String} wallet_id
 */
Payment.prototype['wallet_id'] = undefined;

/**
 * @member {String} webhook
 */
Payment.prototype['webhook'] = undefined;

/**
 * @member {Number} webhook_status
 */
Payment.prototype['webhook_status'] = undefined;
var _default = Payment;
exports["default"] = _default;
},{"../ApiClient":2}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ApiClient = _interopRequireDefault(require("../ApiClient"));
var _LocationInner = _interopRequireDefault(require("./LocationInner"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); } /**
                                                                                                                                                                                                                                                                                                                                                                                               * @lnbits/client
                                                                                                                                                                                                                                                                                                                                                                                               * API for LNbits, the free and open source bitcoin wallet and accounts system with plugins.
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * The version of the OpenAPI document: 0.10.9
                                                                                                                                                                                                                                                                                                                                                                                               * 
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
                                                                                                                                                                                                                                                                                                                                                                                               * https://openapi-generator.tech
                                                                                                                                                                                                                                                                                                                                                                                               * Do not edit the class manually.
                                                                                                                                                                                                                                                                                                                                                                                               *
                                                                                                                                                                                                                                                                                                                                                                                               */
/**
 * The ValidationError model module.
 * @module model/ValidationError
 * @version 0.10.9
 */
var ValidationError = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ValidationError</code>.
   * @alias module:model/ValidationError
   * @param loc {Array.<module:model/LocationInner>} 
   * @param msg {String} 
   * @param type {String} 
   */
  function ValidationError(loc, msg, type) {
    _classCallCheck(this, ValidationError);
    ValidationError.initialize(this, loc, msg, type);
  }

  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */
  _createClass(ValidationError, null, [{
    key: "initialize",
    value: function initialize(obj, loc, msg, type) {
      obj['loc'] = loc;
      obj['msg'] = msg;
      obj['type'] = type;
    }

    /**
     * Constructs a <code>ValidationError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ValidationError} obj Optional instance to populate.
     * @return {module:model/ValidationError} The populated <code>ValidationError</code> instance.
     */
  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ValidationError();
        if (data.hasOwnProperty('loc')) {
          obj['loc'] = _ApiClient["default"].convertToType(data['loc'], [_LocationInner["default"]]);
        }
        if (data.hasOwnProperty('msg')) {
          obj['msg'] = _ApiClient["default"].convertToType(data['msg'], 'String');
        }
        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }
      return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ValidationError</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ValidationError</code>.
     */
  }, {
    key: "validateJSON",
    value: function validateJSON(data) {
      // check to make sure all required properties are present in the JSON string
      var _iterator = _createForOfIteratorHelper(ValidationError.RequiredProperties),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var property = _step.value;
          if (!data[property]) {
            throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (data['loc']) {
        // data not null
        // ensure the json data is an array
        if (!Array.isArray(data['loc'])) {
          throw new Error("Expected the field `loc` to be an array in the JSON data but got " + data['loc']);
        }
        // validate the optional field `loc` (array)
        var _iterator2 = _createForOfIteratorHelper(data['loc']),
          _step2;
        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var item = _step2.value;
            _LocationInner["default"].validateJSON(item);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }
        ;
      }
      // ensure the json data is a string
      if (data['msg'] && !(typeof data['msg'] === 'string' || data['msg'] instanceof String)) {
        throw new Error("Expected the field `msg` to be a primitive type in the JSON string but got " + data['msg']);
      }
      // ensure the json data is a string
      if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
        throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
      }
      return true;
    }
  }]);
  return ValidationError;
}();
ValidationError.RequiredProperties = ["loc", "msg", "type"];

/**
 * @member {Array.<module:model/LocationInner>} loc
 */
ValidationError.prototype['loc'] = undefined;

/**
 * @member {String} msg
 */
ValidationError.prototype['msg'] = undefined;

/**
 * @member {String} type
 */
ValidationError.prototype['type'] = undefined;
var _default = ValidationError;
exports["default"] = _default;
},{"../ApiClient":2,"./LocationInner":14}],18:[function(require,module,exports){
'use strict'

exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}

},{}],19:[function(require,module,exports){

},{}],20:[function(require,module,exports){
(function (Buffer){(function (){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */

'use strict'

var base64 = require('base64-js')
var ieee754 = require('ieee754')

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

var K_MAX_LENGTH = 0x7fffffff
exports.kMaxLength = K_MAX_LENGTH

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */
Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport()

if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' &&
    typeof console.error === 'function') {
  console.error(
    'This browser lacks typed array (Uint8Array) support which is required by ' +
    '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
  )
}

function typedArraySupport () {
  // Can typed array instances can be augmented?
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = { __proto__: Uint8Array.prototype, foo: function () { return 42 } }
    return arr.foo() === 42
  } catch (e) {
    return false
  }
}

Object.defineProperty(Buffer.prototype, 'parent', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.buffer
  }
})

Object.defineProperty(Buffer.prototype, 'offset', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.byteOffset
  }
})

function createBuffer (length) {
  if (length > K_MAX_LENGTH) {
    throw new RangeError('The value "' + length + '" is invalid for option "size"')
  }
  // Return an augmented `Uint8Array` instance
  var buf = new Uint8Array(length)
  buf.__proto__ = Buffer.prototype
  return buf
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new TypeError(
        'The "string" argument must be of type string. Received type number'
      )
    }
    return allocUnsafe(arg)
  }
  return from(arg, encodingOrOffset, length)
}

// Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
if (typeof Symbol !== 'undefined' && Symbol.species != null &&
    Buffer[Symbol.species] === Buffer) {
  Object.defineProperty(Buffer, Symbol.species, {
    value: null,
    configurable: true,
    enumerable: false,
    writable: false
  })
}

Buffer.poolSize = 8192 // not used by this implementation

function from (value, encodingOrOffset, length) {
  if (typeof value === 'string') {
    return fromString(value, encodingOrOffset)
  }

  if (ArrayBuffer.isView(value)) {
    return fromArrayLike(value)
  }

  if (value == null) {
    throw TypeError(
      'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
      'or Array-like Object. Received type ' + (typeof value)
    )
  }

  if (isInstance(value, ArrayBuffer) ||
      (value && isInstance(value.buffer, ArrayBuffer))) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof value === 'number') {
    throw new TypeError(
      'The "value" argument must not be of type number. Received type number'
    )
  }

  var valueOf = value.valueOf && value.valueOf()
  if (valueOf != null && valueOf !== value) {
    return Buffer.from(valueOf, encodingOrOffset, length)
  }

  var b = fromObject(value)
  if (b) return b

  if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null &&
      typeof value[Symbol.toPrimitive] === 'function') {
    return Buffer.from(
      value[Symbol.toPrimitive]('string'), encodingOrOffset, length
    )
  }

  throw new TypeError(
    'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
    'or Array-like Object. Received type ' + (typeof value)
  )
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(value, encodingOrOffset, length)
}

// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Buffer.prototype.__proto__ = Uint8Array.prototype
Buffer.__proto__ = Uint8Array

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be of type number')
  } else if (size < 0) {
    throw new RangeError('The value "' + size + '" is invalid for option "size"')
  }
}

function alloc (size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(size).fill(fill, encoding)
      : createBuffer(size).fill(fill)
  }
  return createBuffer(size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(size, fill, encoding)
}

function allocUnsafe (size) {
  assertSize(size)
  return createBuffer(size < 0 ? 0 : checked(size) | 0)
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(size)
}

function fromString (string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('Unknown encoding: ' + encoding)
  }

  var length = byteLength(string, encoding) | 0
  var buf = createBuffer(length)

  var actual = buf.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual)
  }

  return buf
}

function fromArrayLike (array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  var buf = createBuffer(length)
  for (var i = 0; i < length; i += 1) {
    buf[i] = array[i] & 255
  }
  return buf
}

function fromArrayBuffer (array, byteOffset, length) {
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('"offset" is outside of buffer bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('"length" is outside of buffer bounds')
  }

  var buf
  if (byteOffset === undefined && length === undefined) {
    buf = new Uint8Array(array)
  } else if (length === undefined) {
    buf = new Uint8Array(array, byteOffset)
  } else {
    buf = new Uint8Array(array, byteOffset, length)
  }

  // Return an augmented `Uint8Array` instance
  buf.__proto__ = Buffer.prototype
  return buf
}

function fromObject (obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    var buf = createBuffer(len)

    if (buf.length === 0) {
      return buf
    }

    obj.copy(buf, 0, 0, len)
    return buf
  }

  if (obj.length !== undefined) {
    if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
      return createBuffer(0)
    }
    return fromArrayLike(obj)
  }

  if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
    return fromArrayLike(obj.data)
  }
}

function checked (length) {
  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= K_MAX_LENGTH) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return b != null && b._isBuffer === true &&
    b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
}

Buffer.compare = function compare (a, b) {
  if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength)
  if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength)
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError(
      'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
    )
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!Array.isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (isInstance(buf, Uint8Array)) {
      buf = Buffer.from(buf)
    }
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    throw new TypeError(
      'The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' +
      'Received type ' + typeof string
    )
  }

  var len = string.length
  var mustMatch = (arguments.length > 2 && arguments[2] === true)
  if (!mustMatch && len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) {
          return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
        }
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.toLocaleString = Buffer.prototype.toString

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim()
  if (this.length > max) str += ' ... '
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (isInstance(target, Uint8Array)) {
    target = Buffer.from(target, target.offset, target.byteLength)
  }
  if (!Buffer.isBuffer(target)) {
    throw new TypeError(
      'The "target" argument must be one of type Buffer or Uint8Array. ' +
      'Received type ' + (typeof target)
    )
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset // Coerce to Number.
  if (numberIsNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  var strLen = string.length

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (numberIsNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset >>> 0
    if (isFinite(length)) {
      length = length >>> 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
        : (firstByte > 0xBF) ? 2
          : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + (bytes[i + 1] * 256))
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf = this.subarray(start, end)
  // Return an augmented `Uint8Array` instance
  newBuf.__proto__ = Buffer.prototype
  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset + 3] = (value >>> 24)
  this[offset + 2] = (value >>> 16)
  this[offset + 1] = (value >>> 8)
  this[offset] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    var limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    var limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  this[offset + 2] = (value >>> 16)
  this[offset + 3] = (value >>> 24)
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer')
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('Index out of range')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start

  if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') {
    // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end)
  } else if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (var i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, end),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if ((encoding === 'utf8' && code < 128) ||
          encoding === 'latin1') {
        // Fast path: If `val` fits into a single byte, use that numeric value.
        val = code
      }
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : Buffer.from(val, encoding)
    var len = bytes.length
    if (len === 0) {
      throw new TypeError('The value "' + val +
        '" is invalid for argument "value"')
    }
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node takes equal signs as end of the Base64 encoding
  str = str.split('=')[0]
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = str.trim().replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance (obj, type) {
  return obj instanceof type ||
    (obj != null && obj.constructor != null && obj.constructor.name != null &&
      obj.constructor.name === type.name)
}
function numberIsNaN (obj) {
  // For IE11 support
  return obj !== obj // eslint-disable-line no-self-compare
}

}).call(this)}).call(this,require("buffer").Buffer)
},{"base64-js":18,"buffer":20,"ieee754":23}],21:[function(require,module,exports){

/**
 * Expose `Emitter`.
 */

if (typeof module !== 'undefined') {
  module.exports = Emitter;
}

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }

  // Remove event specific arrays for event types that no
  // one is subscribed for to avoid memory leak.
  if (callbacks.length === 0) {
    delete this._callbacks['$' + event];
  }

  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};

  var args = new Array(arguments.length - 1)
    , callbacks = this._callbacks['$' + event];

  for (var i = 1; i < arguments.length; i++) {
    args[i - 1] = arguments[i];
  }

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};

},{}],22:[function(require,module,exports){
module.exports = stringify
stringify.default = stringify
stringify.stable = deterministicStringify
stringify.stableStringify = deterministicStringify

var LIMIT_REPLACE_NODE = '[...]'
var CIRCULAR_REPLACE_NODE = '[Circular]'

var arr = []
var replacerStack = []

function defaultOptions () {
  return {
    depthLimit: Number.MAX_SAFE_INTEGER,
    edgesLimit: Number.MAX_SAFE_INTEGER
  }
}

// Regular stringify
function stringify (obj, replacer, spacer, options) {
  if (typeof options === 'undefined') {
    options = defaultOptions()
  }

  decirc(obj, '', 0, [], undefined, 0, options)
  var res
  try {
    if (replacerStack.length === 0) {
      res = JSON.stringify(obj, replacer, spacer)
    } else {
      res = JSON.stringify(obj, replaceGetterValues(replacer), spacer)
    }
  } catch (_) {
    return JSON.stringify('[unable to serialize, circular reference is too complex to analyze]')
  } finally {
    while (arr.length !== 0) {
      var part = arr.pop()
      if (part.length === 4) {
        Object.defineProperty(part[0], part[1], part[3])
      } else {
        part[0][part[1]] = part[2]
      }
    }
  }
  return res
}

function setReplace (replace, val, k, parent) {
  var propertyDescriptor = Object.getOwnPropertyDescriptor(parent, k)
  if (propertyDescriptor.get !== undefined) {
    if (propertyDescriptor.configurable) {
      Object.defineProperty(parent, k, { value: replace })
      arr.push([parent, k, val, propertyDescriptor])
    } else {
      replacerStack.push([val, k, replace])
    }
  } else {
    parent[k] = replace
    arr.push([parent, k, val])
  }
}

function decirc (val, k, edgeIndex, stack, parent, depth, options) {
  depth += 1
  var i
  if (typeof val === 'object' && val !== null) {
    for (i = 0; i < stack.length; i++) {
      if (stack[i] === val) {
        setReplace(CIRCULAR_REPLACE_NODE, val, k, parent)
        return
      }
    }

    if (
      typeof options.depthLimit !== 'undefined' &&
      depth > options.depthLimit
    ) {
      setReplace(LIMIT_REPLACE_NODE, val, k, parent)
      return
    }

    if (
      typeof options.edgesLimit !== 'undefined' &&
      edgeIndex + 1 > options.edgesLimit
    ) {
      setReplace(LIMIT_REPLACE_NODE, val, k, parent)
      return
    }

    stack.push(val)
    // Optimize for Arrays. Big arrays could kill the performance otherwise!
    if (Array.isArray(val)) {
      for (i = 0; i < val.length; i++) {
        decirc(val[i], i, i, stack, val, depth, options)
      }
    } else {
      var keys = Object.keys(val)
      for (i = 0; i < keys.length; i++) {
        var key = keys[i]
        decirc(val[key], key, i, stack, val, depth, options)
      }
    }
    stack.pop()
  }
}

// Stable-stringify
function compareFunction (a, b) {
  if (a < b) {
    return -1
  }
  if (a > b) {
    return 1
  }
  return 0
}

function deterministicStringify (obj, replacer, spacer, options) {
  if (typeof options === 'undefined') {
    options = defaultOptions()
  }

  var tmp = deterministicDecirc(obj, '', 0, [], undefined, 0, options) || obj
  var res
  try {
    if (replacerStack.length === 0) {
      res = JSON.stringify(tmp, replacer, spacer)
    } else {
      res = JSON.stringify(tmp, replaceGetterValues(replacer), spacer)
    }
  } catch (_) {
    return JSON.stringify('[unable to serialize, circular reference is too complex to analyze]')
  } finally {
    // Ensure that we restore the object as it was.
    while (arr.length !== 0) {
      var part = arr.pop()
      if (part.length === 4) {
        Object.defineProperty(part[0], part[1], part[3])
      } else {
        part[0][part[1]] = part[2]
      }
    }
  }
  return res
}

function deterministicDecirc (val, k, edgeIndex, stack, parent, depth, options) {
  depth += 1
  var i
  if (typeof val === 'object' && val !== null) {
    for (i = 0; i < stack.length; i++) {
      if (stack[i] === val) {
        setReplace(CIRCULAR_REPLACE_NODE, val, k, parent)
        return
      }
    }
    try {
      if (typeof val.toJSON === 'function') {
        return
      }
    } catch (_) {
      return
    }

    if (
      typeof options.depthLimit !== 'undefined' &&
      depth > options.depthLimit
    ) {
      setReplace(LIMIT_REPLACE_NODE, val, k, parent)
      return
    }

    if (
      typeof options.edgesLimit !== 'undefined' &&
      edgeIndex + 1 > options.edgesLimit
    ) {
      setReplace(LIMIT_REPLACE_NODE, val, k, parent)
      return
    }

    stack.push(val)
    // Optimize for Arrays. Big arrays could kill the performance otherwise!
    if (Array.isArray(val)) {
      for (i = 0; i < val.length; i++) {
        deterministicDecirc(val[i], i, i, stack, val, depth, options)
      }
    } else {
      // Create a temporary object in the required way
      var tmp = {}
      var keys = Object.keys(val).sort(compareFunction)
      for (i = 0; i < keys.length; i++) {
        var key = keys[i]
        deterministicDecirc(val[key], key, i, stack, val, depth, options)
        tmp[key] = val[key]
      }
      if (typeof parent !== 'undefined') {
        arr.push([parent, k, val])
        parent[k] = tmp
      } else {
        return tmp
      }
    }
    stack.pop()
  }
}

// wraps replacer function to handle values we couldn't replace
// and mark them as replaced value
function replaceGetterValues (replacer) {
  replacer =
    typeof replacer !== 'undefined'
      ? replacer
      : function (k, v) {
        return v
      }
  return function (key, val) {
    if (replacerStack.length > 0) {
      for (var i = 0; i < replacerStack.length; i++) {
        var part = replacerStack[i]
        if (part[1] === key && part[0] === val) {
          val = part[2]
          replacerStack.splice(i, 1)
          break
        }
      }
    }
    return replacer.call(this, key, val)
  }
}

},{}],23:[function(require,module,exports){
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}

},{}],24:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';

// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

},{}],25:[function(require,module,exports){
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';

var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};

},{}],26:[function(require,module,exports){
'use strict';

exports.decode = exports.parse = require('./decode');
exports.encode = exports.stringify = require('./encode');

},{"./decode":24,"./encode":25}],27:[function(require,module,exports){
"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Agent() {
  this._defaults = [];
}

['use', 'on', 'once', 'set', 'query', 'type', 'accept', 'auth', 'withCredentials', 'sortQuery', 'retry', 'ok', 'redirects', 'timeout', 'buffer', 'serialize', 'parse', 'ca', 'key', 'pfx', 'cert', 'disableTLSCerts'].forEach(function (fn) {
  // Default setting for all requests from this agent
  Agent.prototype[fn] = function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    this._defaults.push({
      fn: fn,
      args: args
    });

    return this;
  };
});

Agent.prototype._setDefaults = function (req) {
  this._defaults.forEach(function (def) {
    req[def.fn].apply(req, _toConsumableArray(def.args));
  });
};

module.exports = Agent;

},{}],28:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Root reference for iframes.
 */
var root;

if (typeof window !== 'undefined') {
  // Browser window
  root = window;
} else if (typeof self === 'undefined') {
  // Other environments
  console.warn('Using browser-only version of superagent in non-browser environment');
  root = void 0;
} else {
  // Web Worker
  root = self;
}

var Emitter = require('component-emitter');

var safeStringify = require('fast-safe-stringify');

var RequestBase = require('./request-base');

var isObject = require('./is-object');

var ResponseBase = require('./response-base');

var Agent = require('./agent-base');
/**
 * Noop.
 */


function noop() {}
/**
 * Expose `request`.
 */


module.exports = function (method, url) {
  // callback
  if (typeof url === 'function') {
    return new exports.Request('GET', method).end(url);
  } // url first


  if (arguments.length === 1) {
    return new exports.Request('GET', method);
  }

  return new exports.Request(method, url);
};

exports = module.exports;
var request = exports;
exports.Request = Request;
/**
 * Determine XHR.
 */

request.getXHR = function () {
  if (root.XMLHttpRequest && (!root.location || root.location.protocol !== 'file:' || !root.ActiveXObject)) {
    return new XMLHttpRequest();
  }

  try {
    return new ActiveXObject('Microsoft.XMLHTTP');
  } catch (_unused) {}

  try {
    return new ActiveXObject('Msxml2.XMLHTTP.6.0');
  } catch (_unused2) {}

  try {
    return new ActiveXObject('Msxml2.XMLHTTP.3.0');
  } catch (_unused3) {}

  try {
    return new ActiveXObject('Msxml2.XMLHTTP');
  } catch (_unused4) {}

  throw new Error('Browser-only version of superagent could not find XHR');
};
/**
 * Removes leading and trailing whitespace, added to support IE.
 *
 * @param {String} s
 * @return {String}
 * @api private
 */


var trim = ''.trim ? function (s) {
  return s.trim();
} : function (s) {
  return s.replace(/(^\s*|\s*$)/g, '');
};
/**
 * Serialize the given `obj`.
 *
 * @param {Object} obj
 * @return {String}
 * @api private
 */

function serialize(obj) {
  if (!isObject(obj)) return obj;
  var pairs = [];

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) pushEncodedKeyValuePair(pairs, key, obj[key]);
  }

  return pairs.join('&');
}
/**
 * Helps 'serialize' with serializing arrays.
 * Mutates the pairs array.
 *
 * @param {Array} pairs
 * @param {String} key
 * @param {Mixed} val
 */


function pushEncodedKeyValuePair(pairs, key, val) {
  if (val === undefined) return;

  if (val === null) {
    pairs.push(encodeURI(key));
    return;
  }

  if (Array.isArray(val)) {
    val.forEach(function (v) {
      pushEncodedKeyValuePair(pairs, key, v);
    });
  } else if (isObject(val)) {
    for (var subkey in val) {
      if (Object.prototype.hasOwnProperty.call(val, subkey)) pushEncodedKeyValuePair(pairs, "".concat(key, "[").concat(subkey, "]"), val[subkey]);
    }
  } else {
    pairs.push(encodeURI(key) + '=' + encodeURIComponent(val));
  }
}
/**
 * Expose serialization method.
 */


request.serializeObject = serialize;
/**
 * Parse the given x-www-form-urlencoded `str`.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

function parseString(str) {
  var obj = {};
  var pairs = str.split('&');
  var pair;
  var pos;

  for (var i = 0, len = pairs.length; i < len; ++i) {
    pair = pairs[i];
    pos = pair.indexOf('=');

    if (pos === -1) {
      obj[decodeURIComponent(pair)] = '';
    } else {
      obj[decodeURIComponent(pair.slice(0, pos))] = decodeURIComponent(pair.slice(pos + 1));
    }
  }

  return obj;
}
/**
 * Expose parser.
 */


request.parseString = parseString;
/**
 * Default MIME type map.
 *
 *     superagent.types.xml = 'application/xml';
 *
 */

request.types = {
  html: 'text/html',
  json: 'application/json',
  xml: 'text/xml',
  urlencoded: 'application/x-www-form-urlencoded',
  form: 'application/x-www-form-urlencoded',
  'form-data': 'application/x-www-form-urlencoded'
};
/**
 * Default serialization map.
 *
 *     superagent.serialize['application/xml'] = function(obj){
 *       return 'generated xml here';
 *     };
 *
 */

request.serialize = {
  'application/x-www-form-urlencoded': serialize,
  'application/json': safeStringify
};
/**
 * Default parsers.
 *
 *     superagent.parse['application/xml'] = function(str){
 *       return { object parsed from str };
 *     };
 *
 */

request.parse = {
  'application/x-www-form-urlencoded': parseString,
  'application/json': JSON.parse
};
/**
 * Parse the given header `str` into
 * an object containing the mapped fields.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

function parseHeader(str) {
  var lines = str.split(/\r?\n/);
  var fields = {};
  var index;
  var line;
  var field;
  var val;

  for (var i = 0, len = lines.length; i < len; ++i) {
    line = lines[i];
    index = line.indexOf(':');

    if (index === -1) {
      // could be empty line, just skip it
      continue;
    }

    field = line.slice(0, index).toLowerCase();
    val = trim(line.slice(index + 1));
    fields[field] = val;
  }

  return fields;
}
/**
 * Check if `mime` is json or has +json structured syntax suffix.
 *
 * @param {String} mime
 * @return {Boolean}
 * @api private
 */


function isJSON(mime) {
  // should match /json or +json
  // but not /json-seq
  return /[/+]json($|[^-\w])/.test(mime);
}
/**
 * Initialize a new `Response` with the given `xhr`.
 *
 *  - set flags (.ok, .error, etc)
 *  - parse header
 *
 * Examples:
 *
 *  Aliasing `superagent` as `request` is nice:
 *
 *      request = superagent;
 *
 *  We can use the promise-like API, or pass callbacks:
 *
 *      request.get('/').end(function(res){});
 *      request.get('/', function(res){});
 *
 *  Sending data can be chained:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' })
 *        .end(function(res){});
 *
 *  Or passed to `.send()`:
 *
 *      request
 *        .post('/user')
 *        .send({ name: 'tj' }, function(res){});
 *
 *  Or passed to `.post()`:
 *
 *      request
 *        .post('/user', { name: 'tj' })
 *        .end(function(res){});
 *
 * Or further reduced to a single call for simple cases:
 *
 *      request
 *        .post('/user', { name: 'tj' }, function(res){});
 *
 * @param {XMLHTTPRequest} xhr
 * @param {Object} options
 * @api private
 */


function Response(req) {
  this.req = req;
  this.xhr = this.req.xhr; // responseText is accessible only if responseType is '' or 'text' and on older browsers

  this.text = this.req.method !== 'HEAD' && (this.xhr.responseType === '' || this.xhr.responseType === 'text') || typeof this.xhr.responseType === 'undefined' ? this.xhr.responseText : null;
  this.statusText = this.req.xhr.statusText;
  var status = this.xhr.status; // handle IE9 bug: http://stackoverflow.com/questions/10046972/msie-returns-status-code-of-1223-for-ajax-request

  if (status === 1223) {
    status = 204;
  }

  this._setStatusProperties(status);

  this.headers = parseHeader(this.xhr.getAllResponseHeaders());
  this.header = this.headers; // getAllResponseHeaders sometimes falsely returns "" for CORS requests, but
  // getResponseHeader still works. so we get content-type even if getting
  // other headers fails.

  this.header['content-type'] = this.xhr.getResponseHeader('content-type');

  this._setHeaderProperties(this.header);

  if (this.text === null && req._responseType) {
    this.body = this.xhr.response;
  } else {
    this.body = this.req.method === 'HEAD' ? null : this._parseBody(this.text ? this.text : this.xhr.response);
  }
} // eslint-disable-next-line new-cap


ResponseBase(Response.prototype);
/**
 * Parse the given body `str`.
 *
 * Used for auto-parsing of bodies. Parsers
 * are defined on the `superagent.parse` object.
 *
 * @param {String} str
 * @return {Mixed}
 * @api private
 */

Response.prototype._parseBody = function (str) {
  var parse = request.parse[this.type];

  if (this.req._parser) {
    return this.req._parser(this, str);
  }

  if (!parse && isJSON(this.type)) {
    parse = request.parse['application/json'];
  }

  return parse && str && (str.length > 0 || str instanceof Object) ? parse(str) : null;
};
/**
 * Return an `Error` representative of this response.
 *
 * @return {Error}
 * @api public
 */


Response.prototype.toError = function () {
  var req = this.req;
  var method = req.method;
  var url = req.url;
  var msg = "cannot ".concat(method, " ").concat(url, " (").concat(this.status, ")");
  var err = new Error(msg);
  err.status = this.status;
  err.method = method;
  err.url = url;
  return err;
};
/**
 * Expose `Response`.
 */


request.Response = Response;
/**
 * Initialize a new `Request` with the given `method` and `url`.
 *
 * @param {String} method
 * @param {String} url
 * @api public
 */

function Request(method, url) {
  var self = this;
  this._query = this._query || [];
  this.method = method;
  this.url = url;
  this.header = {}; // preserves header name case

  this._header = {}; // coerces header names to lowercase

  this.on('end', function () {
    var err = null;
    var res = null;

    try {
      res = new Response(self);
    } catch (err_) {
      err = new Error('Parser is unable to parse the response');
      err.parse = true;
      err.original = err_; // issue #675: return the raw response if the response parsing fails

      if (self.xhr) {
        // ie9 doesn't have 'response' property
        err.rawResponse = typeof self.xhr.responseType === 'undefined' ? self.xhr.responseText : self.xhr.response; // issue #876: return the http status code if the response parsing fails

        err.status = self.xhr.status ? self.xhr.status : null;
        err.statusCode = err.status; // backwards-compat only
      } else {
        err.rawResponse = null;
        err.status = null;
      }

      return self.callback(err);
    }

    self.emit('response', res);
    var new_err;

    try {
      if (!self._isResponseOK(res)) {
        new_err = new Error(res.statusText || res.text || 'Unsuccessful HTTP response');
      }
    } catch (err_) {
      new_err = err_; // ok() callback can throw
    } // #1000 don't catch errors from the callback to avoid double calling it


    if (new_err) {
      new_err.original = err;
      new_err.response = res;
      new_err.status = res.status;
      self.callback(new_err, res);
    } else {
      self.callback(null, res);
    }
  });
}
/**
 * Mixin `Emitter` and `RequestBase`.
 */
// eslint-disable-next-line new-cap


Emitter(Request.prototype); // eslint-disable-next-line new-cap

RequestBase(Request.prototype);
/**
 * Set Content-Type to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.xml = 'application/xml';
 *
 *      request.post('/')
 *        .type('xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 *      request.post('/')
 *        .type('application/xml')
 *        .send(xmlstring)
 *        .end(callback);
 *
 * @param {String} type
 * @return {Request} for chaining
 * @api public
 */

Request.prototype.type = function (type) {
  this.set('Content-Type', request.types[type] || type);
  return this;
};
/**
 * Set Accept to `type`, mapping values from `request.types`.
 *
 * Examples:
 *
 *      superagent.types.json = 'application/json';
 *
 *      request.get('/agent')
 *        .accept('json')
 *        .end(callback);
 *
 *      request.get('/agent')
 *        .accept('application/json')
 *        .end(callback);
 *
 * @param {String} accept
 * @return {Request} for chaining
 * @api public
 */


Request.prototype.accept = function (type) {
  this.set('Accept', request.types[type] || type);
  return this;
};
/**
 * Set Authorization field value with `user` and `pass`.
 *
 * @param {String} user
 * @param {String} [pass] optional in case of using 'bearer' as type
 * @param {Object} options with 'type' property 'auto', 'basic' or 'bearer' (default 'basic')
 * @return {Request} for chaining
 * @api public
 */


Request.prototype.auth = function (user, pass, options) {
  if (arguments.length === 1) pass = '';

  if (_typeof(pass) === 'object' && pass !== null) {
    // pass is optional and can be replaced with options
    options = pass;
    pass = '';
  }

  if (!options) {
    options = {
      type: typeof btoa === 'function' ? 'basic' : 'auto'
    };
  }

  var encoder = function encoder(string) {
    if (typeof btoa === 'function') {
      return btoa(string);
    }

    throw new Error('Cannot use basic auth, btoa is not a function');
  };

  return this._auth(user, pass, options, encoder);
};
/**
 * Add query-string `val`.
 *
 * Examples:
 *
 *   request.get('/shoes')
 *     .query('size=10')
 *     .query({ color: 'blue' })
 *
 * @param {Object|String} val
 * @return {Request} for chaining
 * @api public
 */


Request.prototype.query = function (val) {
  if (typeof val !== 'string') val = serialize(val);
  if (val) this._query.push(val);
  return this;
};
/**
 * Queue the given `file` as an attachment to the specified `field`,
 * with optional `options` (or filename).
 *
 * ``` js
 * request.post('/upload')
 *   .attach('content', new Blob(['<a id="a"><b id="b">hey!</b></a>'], { type: "text/html"}))
 *   .end(callback);
 * ```
 *
 * @param {String} field
 * @param {Blob|File} file
 * @param {String|Object} options
 * @return {Request} for chaining
 * @api public
 */


Request.prototype.attach = function (field, file, options) {
  if (file) {
    if (this._data) {
      throw new Error("superagent can't mix .send() and .attach()");
    }

    this._getFormData().append(field, file, options || file.name);
  }

  return this;
};

Request.prototype._getFormData = function () {
  if (!this._formData) {
    this._formData = new root.FormData();
  }

  return this._formData;
};
/**
 * Invoke the callback with `err` and `res`
 * and handle arity check.
 *
 * @param {Error} err
 * @param {Response} res
 * @api private
 */


Request.prototype.callback = function (err, res) {
  if (this._shouldRetry(err, res)) {
    return this._retry();
  }

  var fn = this._callback;
  this.clearTimeout();

  if (err) {
    if (this._maxRetries) err.retries = this._retries - 1;
    this.emit('error', err);
  }

  fn(err, res);
};
/**
 * Invoke callback with x-domain error.
 *
 * @api private
 */


Request.prototype.crossDomainError = function () {
  var err = new Error('Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.');
  err.crossDomain = true;
  err.status = this.status;
  err.method = this.method;
  err.url = this.url;
  this.callback(err);
}; // This only warns, because the request is still likely to work


Request.prototype.agent = function () {
  console.warn('This is not supported in browser version of superagent');
  return this;
};

Request.prototype.ca = Request.prototype.agent;
Request.prototype.buffer = Request.prototype.ca; // This throws, because it can't send/receive data as expected

Request.prototype.write = function () {
  throw new Error('Streaming is not supported in browser version of superagent');
};

Request.prototype.pipe = Request.prototype.write;
/**
 * Check if `obj` is a host object,
 * we don't want to serialize these :)
 *
 * @param {Object} obj host object
 * @return {Boolean} is a host object
 * @api private
 */

Request.prototype._isHost = function (obj) {
  // Native objects stringify to [object File], [object Blob], [object FormData], etc.
  return obj && _typeof(obj) === 'object' && !Array.isArray(obj) && Object.prototype.toString.call(obj) !== '[object Object]';
};
/**
 * Initiate request, invoking callback `fn(res)`
 * with an instanceof `Response`.
 *
 * @param {Function} fn
 * @return {Request} for chaining
 * @api public
 */


Request.prototype.end = function (fn) {
  if (this._endCalled) {
    console.warn('Warning: .end() was called twice. This is not supported in superagent');
  }

  this._endCalled = true; // store callback

  this._callback = fn || noop; // querystring

  this._finalizeQueryString();

  this._end();
};

Request.prototype._setUploadTimeout = function () {
  var self = this; // upload timeout it's wokrs only if deadline timeout is off

  if (this._uploadTimeout && !this._uploadTimeoutTimer) {
    this._uploadTimeoutTimer = setTimeout(function () {
      self._timeoutError('Upload timeout of ', self._uploadTimeout, 'ETIMEDOUT');
    }, this._uploadTimeout);
  }
}; // eslint-disable-next-line complexity


Request.prototype._end = function () {
  if (this._aborted) return this.callback(new Error('The request has been aborted even before .end() was called'));
  var self = this;
  this.xhr = request.getXHR();
  var xhr = this.xhr;
  var data = this._formData || this._data;

  this._setTimeouts(); // state change


  xhr.onreadystatechange = function () {
    var readyState = xhr.readyState;

    if (readyState >= 2 && self._responseTimeoutTimer) {
      clearTimeout(self._responseTimeoutTimer);
    }

    if (readyState !== 4) {
      return;
    } // In IE9, reads to any property (e.g. status) off of an aborted XHR will
    // result in the error "Could not complete the operation due to error c00c023f"


    var status;

    try {
      status = xhr.status;
    } catch (_unused5) {
      status = 0;
    }

    if (!status) {
      if (self.timedout || self._aborted) return;
      return self.crossDomainError();
    }

    self.emit('end');
  }; // progress


  var handleProgress = function handleProgress(direction, e) {
    if (e.total > 0) {
      e.percent = e.loaded / e.total * 100;

      if (e.percent === 100) {
        clearTimeout(self._uploadTimeoutTimer);
      }
    }

    e.direction = direction;
    self.emit('progress', e);
  };

  if (this.hasListeners('progress')) {
    try {
      xhr.addEventListener('progress', handleProgress.bind(null, 'download'));

      if (xhr.upload) {
        xhr.upload.addEventListener('progress', handleProgress.bind(null, 'upload'));
      }
    } catch (_unused6) {// Accessing xhr.upload fails in IE from a web worker, so just pretend it doesn't exist.
      // Reported here:
      // https://connect.microsoft.com/IE/feedback/details/837245/xmlhttprequest-upload-throws-invalid-argument-when-used-from-web-worker-context
    }
  }

  if (xhr.upload) {
    this._setUploadTimeout();
  } // initiate request


  try {
    if (this.username && this.password) {
      xhr.open(this.method, this.url, true, this.username, this.password);
    } else {
      xhr.open(this.method, this.url, true);
    }
  } catch (err) {
    // see #1149
    return this.callback(err);
  } // CORS


  if (this._withCredentials) xhr.withCredentials = true; // body

  if (!this._formData && this.method !== 'GET' && this.method !== 'HEAD' && typeof data !== 'string' && !this._isHost(data)) {
    // serialize stuff
    var contentType = this._header['content-type'];

    var _serialize = this._serializer || request.serialize[contentType ? contentType.split(';')[0] : ''];

    if (!_serialize && isJSON(contentType)) {
      _serialize = request.serialize['application/json'];
    }

    if (_serialize) data = _serialize(data);
  } // set header fields


  for (var field in this.header) {
    if (this.header[field] === null) continue;
    if (Object.prototype.hasOwnProperty.call(this.header, field)) xhr.setRequestHeader(field, this.header[field]);
  }

  if (this._responseType) {
    xhr.responseType = this._responseType;
  } // send stuff


  this.emit('request', this); // IE11 xhr.send(undefined) sends 'undefined' string as POST payload (instead of nothing)
  // We need null here if data is undefined

  xhr.send(typeof data === 'undefined' ? null : data);
};

request.agent = function () {
  return new Agent();
};

['GET', 'POST', 'OPTIONS', 'PATCH', 'PUT', 'DELETE'].forEach(function (method) {
  Agent.prototype[method.toLowerCase()] = function (url, fn) {
    var req = new request.Request(method, url);

    this._setDefaults(req);

    if (fn) {
      req.end(fn);
    }

    return req;
  };
});
Agent.prototype.del = Agent.prototype.delete;
/**
 * GET `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.get = function (url, data, fn) {
  var req = request('GET', url);

  if (typeof data === 'function') {
    fn = data;
    data = null;
  }

  if (data) req.query(data);
  if (fn) req.end(fn);
  return req;
};
/**
 * HEAD `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */


request.head = function (url, data, fn) {
  var req = request('HEAD', url);

  if (typeof data === 'function') {
    fn = data;
    data = null;
  }

  if (data) req.query(data);
  if (fn) req.end(fn);
  return req;
};
/**
 * OPTIONS query to `url` with optional callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */


request.options = function (url, data, fn) {
  var req = request('OPTIONS', url);

  if (typeof data === 'function') {
    fn = data;
    data = null;
  }

  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};
/**
 * DELETE `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */


function del(url, data, fn) {
  var req = request('DELETE', url);

  if (typeof data === 'function') {
    fn = data;
    data = null;
  }

  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
}

request.del = del;
request.delete = del;
/**
 * PATCH `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */

request.patch = function (url, data, fn) {
  var req = request('PATCH', url);

  if (typeof data === 'function') {
    fn = data;
    data = null;
  }

  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};
/**
 * POST `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed} [data]
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */


request.post = function (url, data, fn) {
  var req = request('POST', url);

  if (typeof data === 'function') {
    fn = data;
    data = null;
  }

  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};
/**
 * PUT `url` with optional `data` and callback `fn(res)`.
 *
 * @param {String} url
 * @param {Mixed|Function} [data] or fn
 * @param {Function} [fn]
 * @return {Request}
 * @api public
 */


request.put = function (url, data, fn) {
  var req = request('PUT', url);

  if (typeof data === 'function') {
    fn = data;
    data = null;
  }

  if (data) req.send(data);
  if (fn) req.end(fn);
  return req;
};

},{"./agent-base":27,"./is-object":29,"./request-base":30,"./response-base":31,"component-emitter":21,"fast-safe-stringify":22}],29:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Check if `obj` is an object.
 *
 * @param {Object} obj
 * @return {Boolean}
 * @api private
 */
function isObject(obj) {
  return obj !== null && _typeof(obj) === 'object';
}

module.exports = isObject;

},{}],30:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Module of mixed-in functions shared between node and client code
 */
var isObject = require('./is-object');
/**
 * Expose `RequestBase`.
 */


module.exports = RequestBase;
/**
 * Initialize a new `RequestBase`.
 *
 * @api public
 */

function RequestBase(obj) {
  if (obj) return mixin(obj);
}
/**
 * Mixin the prototype properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */


function mixin(obj) {
  for (var key in RequestBase.prototype) {
    if (Object.prototype.hasOwnProperty.call(RequestBase.prototype, key)) obj[key] = RequestBase.prototype[key];
  }

  return obj;
}
/**
 * Clear previous timeout.
 *
 * @return {Request} for chaining
 * @api public
 */


RequestBase.prototype.clearTimeout = function () {
  clearTimeout(this._timer);
  clearTimeout(this._responseTimeoutTimer);
  clearTimeout(this._uploadTimeoutTimer);
  delete this._timer;
  delete this._responseTimeoutTimer;
  delete this._uploadTimeoutTimer;
  return this;
};
/**
 * Override default response body parser
 *
 * This function will be called to convert incoming data into request.body
 *
 * @param {Function}
 * @api public
 */


RequestBase.prototype.parse = function (fn) {
  this._parser = fn;
  return this;
};
/**
 * Set format of binary response body.
 * In browser valid formats are 'blob' and 'arraybuffer',
 * which return Blob and ArrayBuffer, respectively.
 *
 * In Node all values result in Buffer.
 *
 * Examples:
 *
 *      req.get('/')
 *        .responseType('blob')
 *        .end(callback);
 *
 * @param {String} val
 * @return {Request} for chaining
 * @api public
 */


RequestBase.prototype.responseType = function (val) {
  this._responseType = val;
  return this;
};
/**
 * Override default request body serializer
 *
 * This function will be called to convert data set via .send or .attach into payload to send
 *
 * @param {Function}
 * @api public
 */


RequestBase.prototype.serialize = function (fn) {
  this._serializer = fn;
  return this;
};
/**
 * Set timeouts.
 *
 * - response timeout is time between sending request and receiving the first byte of the response. Includes DNS and connection time.
 * - deadline is the time from start of the request to receiving response body in full. If the deadline is too short large files may not load at all on slow connections.
 * - upload is the time  since last bit of data was sent or received. This timeout works only if deadline timeout is off
 *
 * Value of 0 or false means no timeout.
 *
 * @param {Number|Object} ms or {response, deadline}
 * @return {Request} for chaining
 * @api public
 */


RequestBase.prototype.timeout = function (options) {
  if (!options || _typeof(options) !== 'object') {
    this._timeout = options;
    this._responseTimeout = 0;
    this._uploadTimeout = 0;
    return this;
  }

  for (var option in options) {
    if (Object.prototype.hasOwnProperty.call(options, option)) {
      switch (option) {
        case 'deadline':
          this._timeout = options.deadline;
          break;

        case 'response':
          this._responseTimeout = options.response;
          break;

        case 'upload':
          this._uploadTimeout = options.upload;
          break;

        default:
          console.warn('Unknown timeout option', option);
      }
    }
  }

  return this;
};
/**
 * Set number of retry attempts on error.
 *
 * Failed requests will be retried 'count' times if timeout or err.code >= 500.
 *
 * @param {Number} count
 * @param {Function} [fn]
 * @return {Request} for chaining
 * @api public
 */


RequestBase.prototype.retry = function (count, fn) {
  // Default to 1 if no count passed or true
  if (arguments.length === 0 || count === true) count = 1;
  if (count <= 0) count = 0;
  this._maxRetries = count;
  this._retries = 0;
  this._retryCallback = fn;
  return this;
};

var ERROR_CODES = ['ECONNRESET', 'ETIMEDOUT', 'EADDRINFO', 'ESOCKETTIMEDOUT'];
/**
 * Determine if a request should be retried.
 * (Borrowed from segmentio/superagent-retry)
 *
 * @param {Error} err an error
 * @param {Response} [res] response
 * @returns {Boolean} if segment should be retried
 */

RequestBase.prototype._shouldRetry = function (err, res) {
  if (!this._maxRetries || this._retries++ >= this._maxRetries) {
    return false;
  }

  if (this._retryCallback) {
    try {
      var override = this._retryCallback(err, res);

      if (override === true) return true;
      if (override === false) return false; // undefined falls back to defaults
    } catch (err_) {
      console.error(err_);
    }
  }

  if (res && res.status && res.status >= 500 && res.status !== 501) return true;

  if (err) {
    if (err.code && ERROR_CODES.includes(err.code)) return true; // Superagent timeout

    if (err.timeout && err.code === 'ECONNABORTED') return true;
    if (err.crossDomain) return true;
  }

  return false;
};
/**
 * Retry request
 *
 * @return {Request} for chaining
 * @api private
 */


RequestBase.prototype._retry = function () {
  this.clearTimeout(); // node

  if (this.req) {
    this.req = null;
    this.req = this.request();
  }

  this._aborted = false;
  this.timedout = false;
  this.timedoutError = null;
  return this._end();
};
/**
 * Promise support
 *
 * @param {Function} resolve
 * @param {Function} [reject]
 * @return {Request}
 */


RequestBase.prototype.then = function (resolve, reject) {
  var _this = this;

  if (!this._fullfilledPromise) {
    var self = this;

    if (this._endCalled) {
      console.warn('Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises');
    }

    this._fullfilledPromise = new Promise(function (resolve, reject) {
      self.on('abort', function () {
        if (_this._maxRetries && _this._maxRetries > _this._retries) {
          return;
        }

        if (_this.timedout && _this.timedoutError) {
          reject(_this.timedoutError);
          return;
        }

        var err = new Error('Aborted');
        err.code = 'ABORTED';
        err.status = _this.status;
        err.method = _this.method;
        err.url = _this.url;
        reject(err);
      });
      self.end(function (err, res) {
        if (err) reject(err);else resolve(res);
      });
    });
  }

  return this._fullfilledPromise.then(resolve, reject);
};

RequestBase.prototype.catch = function (cb) {
  return this.then(undefined, cb);
};
/**
 * Allow for extension
 */


RequestBase.prototype.use = function (fn) {
  fn(this);
  return this;
};

RequestBase.prototype.ok = function (cb) {
  if (typeof cb !== 'function') throw new Error('Callback required');
  this._okCallback = cb;
  return this;
};

RequestBase.prototype._isResponseOK = function (res) {
  if (!res) {
    return false;
  }

  if (this._okCallback) {
    return this._okCallback(res);
  }

  return res.status >= 200 && res.status < 300;
};
/**
 * Get request header `field`.
 * Case-insensitive.
 *
 * @param {String} field
 * @return {String}
 * @api public
 */


RequestBase.prototype.get = function (field) {
  return this._header[field.toLowerCase()];
};
/**
 * Get case-insensitive header `field` value.
 * This is a deprecated internal API. Use `.get(field)` instead.
 *
 * (getHeader is no longer used internally by the superagent code base)
 *
 * @param {String} field
 * @return {String}
 * @api private
 * @deprecated
 */


RequestBase.prototype.getHeader = RequestBase.prototype.get;
/**
 * Set header `field` to `val`, or multiple fields with one object.
 * Case-insensitive.
 *
 * Examples:
 *
 *      req.get('/')
 *        .set('Accept', 'application/json')
 *        .set('X-API-Key', 'foobar')
 *        .end(callback);
 *
 *      req.get('/')
 *        .set({ Accept: 'application/json', 'X-API-Key': 'foobar' })
 *        .end(callback);
 *
 * @param {String|Object} field
 * @param {String} val
 * @return {Request} for chaining
 * @api public
 */

RequestBase.prototype.set = function (field, val) {
  if (isObject(field)) {
    for (var key in field) {
      if (Object.prototype.hasOwnProperty.call(field, key)) this.set(key, field[key]);
    }

    return this;
  }

  this._header[field.toLowerCase()] = val;
  this.header[field] = val;
  return this;
};
/**
 * Remove header `field`.
 * Case-insensitive.
 *
 * Example:
 *
 *      req.get('/')
 *        .unset('User-Agent')
 *        .end(callback);
 *
 * @param {String} field field name
 */


RequestBase.prototype.unset = function (field) {
  delete this._header[field.toLowerCase()];
  delete this.header[field];
  return this;
};
/**
 * Write the field `name` and `val`, or multiple fields with one object
 * for "multipart/form-data" request bodies.
 *
 * ``` js
 * request.post('/upload')
 *   .field('foo', 'bar')
 *   .end(callback);
 *
 * request.post('/upload')
 *   .field({ foo: 'bar', baz: 'qux' })
 *   .end(callback);
 * ```
 *
 * @param {String|Object} name name of field
 * @param {String|Blob|File|Buffer|fs.ReadStream} val value of field
 * @return {Request} for chaining
 * @api public
 */


RequestBase.prototype.field = function (name, val) {
  // name should be either a string or an object.
  if (name === null || undefined === name) {
    throw new Error('.field(name, val) name can not be empty');
  }

  if (this._data) {
    throw new Error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()");
  }

  if (isObject(name)) {
    for (var key in name) {
      if (Object.prototype.hasOwnProperty.call(name, key)) this.field(key, name[key]);
    }

    return this;
  }

  if (Array.isArray(val)) {
    for (var i in val) {
      if (Object.prototype.hasOwnProperty.call(val, i)) this.field(name, val[i]);
    }

    return this;
  } // val should be defined now


  if (val === null || undefined === val) {
    throw new Error('.field(name, val) val can not be empty');
  }

  if (typeof val === 'boolean') {
    val = String(val);
  }

  this._getFormData().append(name, val);

  return this;
};
/**
 * Abort the request, and clear potential timeout.
 *
 * @return {Request} request
 * @api public
 */


RequestBase.prototype.abort = function () {
  if (this._aborted) {
    return this;
  }

  this._aborted = true;
  if (this.xhr) this.xhr.abort(); // browser

  if (this.req) this.req.abort(); // node

  this.clearTimeout();
  this.emit('abort');
  return this;
};

RequestBase.prototype._auth = function (user, pass, options, base64Encoder) {
  switch (options.type) {
    case 'basic':
      this.set('Authorization', "Basic ".concat(base64Encoder("".concat(user, ":").concat(pass))));
      break;

    case 'auto':
      this.username = user;
      this.password = pass;
      break;

    case 'bearer':
      // usage would be .auth(accessToken, { type: 'bearer' })
      this.set('Authorization', "Bearer ".concat(user));
      break;

    default:
      break;
  }

  return this;
};
/**
 * Enable transmission of cookies with x-domain requests.
 *
 * Note that for this to work the origin must not be
 * using "Access-Control-Allow-Origin" with a wildcard,
 * and also must set "Access-Control-Allow-Credentials"
 * to "true".
 *
 * @api public
 */


RequestBase.prototype.withCredentials = function (on) {
  // This is browser-only functionality. Node side is no-op.
  if (on === undefined) on = true;
  this._withCredentials = on;
  return this;
};
/**
 * Set the max redirects to `n`. Does nothing in browser XHR implementation.
 *
 * @param {Number} n
 * @return {Request} for chaining
 * @api public
 */


RequestBase.prototype.redirects = function (n) {
  this._maxRedirects = n;
  return this;
};
/**
 * Maximum size of buffered response body, in bytes. Counts uncompressed size.
 * Default 200MB.
 *
 * @param {Number} n number of bytes
 * @return {Request} for chaining
 */


RequestBase.prototype.maxResponseSize = function (n) {
  if (typeof n !== 'number') {
    throw new TypeError('Invalid argument');
  }

  this._maxResponseSize = n;
  return this;
};
/**
 * Convert to a plain javascript object (not JSON string) of scalar properties.
 * Note as this method is designed to return a useful non-this value,
 * it cannot be chained.
 *
 * @return {Object} describing method, url, and data of this request
 * @api public
 */


RequestBase.prototype.toJSON = function () {
  return {
    method: this.method,
    url: this.url,
    data: this._data,
    headers: this._header
  };
};
/**
 * Send `data` as the request body, defaulting the `.type()` to "json" when
 * an object is given.
 *
 * Examples:
 *
 *       // manual json
 *       request.post('/user')
 *         .type('json')
 *         .send('{"name":"tj"}')
 *         .end(callback)
 *
 *       // auto json
 *       request.post('/user')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // manual x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send('name=tj')
 *         .end(callback)
 *
 *       // auto x-www-form-urlencoded
 *       request.post('/user')
 *         .type('form')
 *         .send({ name: 'tj' })
 *         .end(callback)
 *
 *       // defaults to x-www-form-urlencoded
 *      request.post('/user')
 *        .send('name=tobi')
 *        .send('species=ferret')
 *        .end(callback)
 *
 * @param {String|Object} data
 * @return {Request} for chaining
 * @api public
 */
// eslint-disable-next-line complexity


RequestBase.prototype.send = function (data) {
  var isObj = isObject(data);
  var type = this._header['content-type'];

  if (this._formData) {
    throw new Error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()");
  }

  if (isObj && !this._data) {
    if (Array.isArray(data)) {
      this._data = [];
    } else if (!this._isHost(data)) {
      this._data = {};
    }
  } else if (data && this._data && this._isHost(this._data)) {
    throw new Error("Can't merge these send calls");
  } // merge


  if (isObj && isObject(this._data)) {
    for (var key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) this._data[key] = data[key];
    }
  } else if (typeof data === 'string') {
    // default to x-www-form-urlencoded
    if (!type) this.type('form');
    type = this._header['content-type'];

    if (type === 'application/x-www-form-urlencoded') {
      this._data = this._data ? "".concat(this._data, "&").concat(data) : data;
    } else {
      this._data = (this._data || '') + data;
    }
  } else {
    this._data = data;
  }

  if (!isObj || this._isHost(data)) {
    return this;
  } // default to json


  if (!type) this.type('json');
  return this;
};
/**
 * Sort `querystring` by the sort function
 *
 *
 * Examples:
 *
 *       // default order
 *       request.get('/user')
 *         .query('name=Nick')
 *         .query('search=Manny')
 *         .sortQuery()
 *         .end(callback)
 *
 *       // customized sort function
 *       request.get('/user')
 *         .query('name=Nick')
 *         .query('search=Manny')
 *         .sortQuery(function(a, b){
 *           return a.length - b.length;
 *         })
 *         .end(callback)
 *
 *
 * @param {Function} sort
 * @return {Request} for chaining
 * @api public
 */


RequestBase.prototype.sortQuery = function (sort) {
  // _sort default to true but otherwise can be a function or boolean
  this._sort = typeof sort === 'undefined' ? true : sort;
  return this;
};
/**
 * Compose querystring to append to req.url
 *
 * @api private
 */


RequestBase.prototype._finalizeQueryString = function () {
  var query = this._query.join('&');

  if (query) {
    this.url += (this.url.includes('?') ? '&' : '?') + query;
  }

  this._query.length = 0; // Makes the call idempotent

  if (this._sort) {
    var index = this.url.indexOf('?');

    if (index >= 0) {
      var queryArr = this.url.slice(index + 1).split('&');

      if (typeof this._sort === 'function') {
        queryArr.sort(this._sort);
      } else {
        queryArr.sort();
      }

      this.url = this.url.slice(0, index) + '?' + queryArr.join('&');
    }
  }
}; // For backwards compat only


RequestBase.prototype._appendQueryString = function () {
  console.warn('Unsupported');
};
/**
 * Invoke callback with timeout error.
 *
 * @api private
 */


RequestBase.prototype._timeoutError = function (reason, timeout, errno) {
  if (this._aborted) {
    return;
  }

  var err = new Error("".concat(reason + timeout, "ms exceeded"));
  err.timeout = timeout;
  err.code = 'ECONNABORTED';
  err.errno = errno;
  this.timedout = true;
  this.timedoutError = err;
  this.abort();
  this.callback(err);
};

RequestBase.prototype._setTimeouts = function () {
  var self = this; // deadline

  if (this._timeout && !this._timer) {
    this._timer = setTimeout(function () {
      self._timeoutError('Timeout of ', self._timeout, 'ETIME');
    }, this._timeout);
  } // response timeout


  if (this._responseTimeout && !this._responseTimeoutTimer) {
    this._responseTimeoutTimer = setTimeout(function () {
      self._timeoutError('Response timeout of ', self._responseTimeout, 'ETIMEDOUT');
    }, this._responseTimeout);
  }
};

},{"./is-object":29}],31:[function(require,module,exports){
"use strict";

/**
 * Module dependencies.
 */
var utils = require('./utils');
/**
 * Expose `ResponseBase`.
 */


module.exports = ResponseBase;
/**
 * Initialize a new `ResponseBase`.
 *
 * @api public
 */

function ResponseBase(obj) {
  if (obj) return mixin(obj);
}
/**
 * Mixin the prototype properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */


function mixin(obj) {
  for (var key in ResponseBase.prototype) {
    if (Object.prototype.hasOwnProperty.call(ResponseBase.prototype, key)) obj[key] = ResponseBase.prototype[key];
  }

  return obj;
}
/**
 * Get case-insensitive `field` value.
 *
 * @param {String} field
 * @return {String}
 * @api public
 */


ResponseBase.prototype.get = function (field) {
  return this.header[field.toLowerCase()];
};
/**
 * Set header related properties:
 *
 *   - `.type` the content type without params
 *
 * A response of "Content-Type: text/plain; charset=utf-8"
 * will provide you with a `.type` of "text/plain".
 *
 * @param {Object} header
 * @api private
 */


ResponseBase.prototype._setHeaderProperties = function (header) {
  // TODO: moar!
  // TODO: make this a util
  // content-type
  var ct = header['content-type'] || '';
  this.type = utils.type(ct); // params

  var params = utils.params(ct);

  for (var key in params) {
    if (Object.prototype.hasOwnProperty.call(params, key)) this[key] = params[key];
  }

  this.links = {}; // links

  try {
    if (header.link) {
      this.links = utils.parseLinks(header.link);
    }
  } catch (_unused) {// ignore
  }
};
/**
 * Set flags such as `.ok` based on `status`.
 *
 * For example a 2xx response will give you a `.ok` of __true__
 * whereas 5xx will be __false__ and `.error` will be __true__. The
 * `.clientError` and `.serverError` are also available to be more
 * specific, and `.statusType` is the class of error ranging from 1..5
 * sometimes useful for mapping respond colors etc.
 *
 * "sugar" properties are also defined for common cases. Currently providing:
 *
 *   - .noContent
 *   - .badRequest
 *   - .unauthorized
 *   - .notAcceptable
 *   - .notFound
 *
 * @param {Number} status
 * @api private
 */


ResponseBase.prototype._setStatusProperties = function (status) {
  var type = status / 100 | 0; // status / class

  this.statusCode = status;
  this.status = this.statusCode;
  this.statusType = type; // basics

  this.info = type === 1;
  this.ok = type === 2;
  this.redirect = type === 3;
  this.clientError = type === 4;
  this.serverError = type === 5;
  this.error = type === 4 || type === 5 ? this.toError() : false; // sugar

  this.created = status === 201;
  this.accepted = status === 202;
  this.noContent = status === 204;
  this.badRequest = status === 400;
  this.unauthorized = status === 401;
  this.notAcceptable = status === 406;
  this.forbidden = status === 403;
  this.notFound = status === 404;
  this.unprocessableEntity = status === 422;
};

},{"./utils":32}],32:[function(require,module,exports){
"use strict";

/**
 * Return the mime type for the given `str`.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */
exports.type = function (str) {
  return str.split(/ *; */).shift();
};
/**
 * Return header field parameters.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */


exports.params = function (str) {
  return str.split(/ *; */).reduce(function (obj, str) {
    var parts = str.split(/ *= */);
    var key = parts.shift();
    var val = parts.shift();
    if (key && val) obj[key] = val;
    return obj;
  }, {});
};
/**
 * Parse Link header fields.
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */


exports.parseLinks = function (str) {
  return str.split(/ *, */).reduce(function (obj, str) {
    var parts = str.split(/ *; */);
    var url = parts[0].slice(1, -1);
    var rel = parts[1].split(/ *= */)[1].slice(1, -1);
    obj[rel] = url;
    return obj;
  }, {});
};
/**
 * Strip content related fields from `header`.
 *
 * @param {Object} header
 * @return {Object} header
 * @api private
 */


exports.cleanHeader = function (header, changesOrigin) {
  delete header['content-type'];
  delete header['content-length'];
  delete header['transfer-encoding'];
  delete header.host; // secuirty

  if (changesOrigin) {
    delete header.authorization;
    delete header.cookie;
  }

  return header;
};

},{}]},{},[1]);
