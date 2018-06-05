var config = {
    default: {
        port:8010,
        database:{
        }
    },
    testing: {
        port:8080,
        database:{
        }
    }
};

exports.get = function get(env) {
    return config[env] || config.default;
};
