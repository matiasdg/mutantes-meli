var config = {
    default: {
        port:(process.env.PORT || 8010),
        database:{
          url: process.env.DATABASE_URL
        }
    },
    production: {
        port:(process.env.PORT || 8080),
        database:{
            url: process.env.DATABASE_URL
        }
    }
};

exports.get = function get(env) {
    return config[env] || config.default;
};
