var config = {
    default: {
        port:8080,
        database:{
          url: process.env.DATABASE_URL,
          ssl: false
        }
    },
    production: {
        port:process.env.PORT,
        database:{
            url: process.env.DATABASE_URL,
            ssl: true
        }
    }
};

exports.get = function get(env) {
    return config[env] || config.default;
};
