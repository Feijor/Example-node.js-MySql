var config = {
  environment: process.env.NODE_ENV || 'dev',
  server: {
    port: process.env.PORT || 3001
  },
  database: {
    host: "<HOST>",
    port: '<PORT>',
    user: "<USER>",
    password: "<PASSWORD>",
    database: "<DATA_BASE>"
  },
  conetion: '',
  token_web: '<TOKEN>'
};

module.exports = config;