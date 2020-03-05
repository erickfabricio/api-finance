const config = {};

config.port = process.env.PORT || 443;

config.db = 'mongodb://localhost/finance';

config.key = "ERICK-2020*XXIII";

config.privkey = "/etc/letsencrypt/live/finance.erickfabricio.com-0001/privkey.pem";
config.fullchain = "/etc/letsencrypt/live/finance.erickfabricio.com-0001/fullchain.pem";

module.exports = config;