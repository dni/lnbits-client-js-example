// https://github.com/dni/lnbits-client-js/blob/main/docs/CoreApi.md#tinyurlApiV1TinyurlPost
import LnbitsClient from '@lnbits/client';

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
