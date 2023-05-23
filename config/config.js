const dotenv = require('dotenv');
const assert = require('assert');

dotenv.config();

const{
    PORT,
    HOST,
    HOST_URL,
    MONGOLAB_URI,
    SECRET_SHA256,
    AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY,
    AWS_BUCKET_ONE,
}
= process.env;


module.exports = {
    port: PORT,
    host: HOST,
    url: HOST_URL,

    mongoURI : MONGOLAB_URI,

    secret_sha256 : SECRET_SHA256,

    amazonConfig: {
        accessKeyId : AWS_ACCESS_KEY_ID,
        secretAccessKey : AWS_SECRET_ACCESS_KEY,
    },

    amazonBuckets: {
        bucket : AWS_BUCKET_ONE
    }
    // firebaseConfig: {
    //     apiKey: API_KEY,
    //     authDomain: AUTH_DOMAIN,
    //     databaseURL: DATABASE_URL,
    //     projectId: PROJECT_ID,
    //     storageBucket : STORAGE_BUCKET,
    //     messagingSenderId: MESSAGING_SENDER_ID,
    //     appId: APP_ID,
    // },
    // firebaseServiceAccount: {
    //     type: type,
    //     project_id: project_id,
    //     private_key_id: private_key_id,
    //     private_key: private_key,
    //     client_email: client_email,
    //     client_id: client_id,
    //     auth_uri: auth_uri,
    //     token_uri: token_uri,
    //     auth_provider_x509_cert_url: auth_provider_x509_cert_url,
    //     client_x509_cert_url: client_x509_cert_url,
    // },

};
