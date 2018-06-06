var config = {
    default: {
        port:8010,
        database:{
          url: process.env.DATABASE_URL
        }
    },
    testing: {
        port:8080,
        database:{
            url: process.env.DATABASE_URL
        }
    }
};

exports.get = function get(env) {
    return config[env] || config.default;
};
