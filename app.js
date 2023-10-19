'use strict';

const Hapi = require('@hapi/hapi');
const Hoek = require('@hapi/hoek');
const Vision = require('@hapi/vision');

const server = Hapi.server({
    port: 2000,
    host: 'localhost'
});

const init = async () => {
    await server.register(Vision);

    server.views({
        engines: {
            html: require('handlebars')
        },
        relativeTo: __dirname,
        path: 'pages'
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return h.view('index', {
                title: 'Handlebar working'
            });
        }
    });

    

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();