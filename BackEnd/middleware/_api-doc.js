const swaggerJsdoc = require('swagger-jsdoc');

const swaggerOptions = {
    definition:{
        openapi: '3.0.0',
        info:{
            title: 'API Documentation',
            version: '1.0.0',
            description: 'API StayHost'
        },
        servers: [{url: 'http://localhost:3000'}]
    },
    apis: ['app.js']
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

module.exports = swaggerSpec;

