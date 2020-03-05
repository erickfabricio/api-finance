const config = {};

config.portHttp = process.env.PORT || 3001;
config.portHttps = process.env.PORT || 3002;

config.db = 'mongodb://localhost/finance';

config.key = "ERICK-2020*XXIII";

//DEV
config.keytmp = "../keys/keytmp.pem";
config.cert = "../keys/cert.pem";
config.passphrase = "erick2020"

module.exports = config;