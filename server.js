var Hapi = require('hapi');
var Path = require('path');
var Vision = require('vision');
var Inert = require('inert');

var setup = {
    host: process.env.NODE_ENV === "production" ? "0.0.0.0" : "localhost",
    port: process.env.PORT || "8080"
};

var visionRoutes = require(Path.join(__dirname, 'routes/vision_routes.js'));
var Api = require(Path.join(__dirname, 'routes/api_routes.js'));

var TheTube = new Hapi.Server({
    connections: {
        routes: {
            files: {
                relativeTo: Path.join(__dirname, 'static')
            }
        }
    }
});

TheTube.connection({
    host: setup.host,
    port: setup.port
});

TheTube.register(Api, {
    routes: {
        prefix: '/api'
    }
});

TheTube.register(Inert, function () {});
TheTube.register(Vision, function () {
    TheTube.views({
        engines: {
            html: require('nunjucks')
        },
        path: Path.join(__dirname, 'templates')
    });
    TheTube.route(visionRoutes);
});

TheTube.register({
    register: require('good'),
    options: {
        ops: {
            interval: 1000
        },
        reporters: {
            console: [{
                module: 'good-squeeze',
                name: 'Squeeze',
                args: [{
                    log: '*',
                    response: '*'
                }]
            }, {
                module: 'good-console'
            }, 'stdout']
        }
    }
}, function (err) {
    if (err) {
        console.error(err);
        throw err;
    }
});

TheTube.start(function () {
    TheTube.log(['TheTube', 'info'], "Server started on " + setup.host + ":" + setup.port);
}); 

module.exports = TheTube;