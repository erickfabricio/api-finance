const config = {};

config.portHttp = process.env.PORT || 3001;
config.portHttps = process.env.PORT || 3002;

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

config.db = 'mongodb://localhost:27017/finance';

config.key = "ERICK-2020*XXIII";

//DEV
config.keytmp = "../keys/keytmp.pem";
config.cert = "../keys/cert.pem";
config.passphrase = "erick2020"

//Let
config.privkey = ".../etc/letsencrypt/live/finance.erickfabricio.com-0001/keytmp.pem";
config.fullchain = ".../etc/letsencrypt/live/finance.erickfabricio.com-0001/fullchain.pem";

module.exports = config;