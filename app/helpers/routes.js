'use strict';

const Joi = require('joi');
const Handlers = require('../lib/handlers.js');

const objectSchema = Joi.object({
    year: Joi.string(),
    type: Joi.string(),
    city: Joi.string(),
    event: Joi.string(),
    category: Joi.string()
});

const athleteSchema = {
    id: Joi.string().required(),
    name: Joi.string().required(),
    country: Joi.string(),
    birth: Joi.string(),
    image: Joi.string(),
    cover: Joi.string(),
    link: Joi.string(),
    medals: Joi.array().items(objectSchema).unique()
};

const resultHTTPStatus = {
    '200': {
        'description': 'Success'
    },
    '400': {
        'description': 'Bad Request'
    },
    '404': {
        'description': 'Profile not found'
    },
    '500': {
        'description': 'Internal Server Error'
    }
};

module.exports = [{
        method: 'GET',
        path: '/athletes',
        config: {
            handler: Handlers.getAllUsers,
            description: 'Get All athletes',
            tags: ['api', 'reduced'],
            notes: ['Fetches all the existing athletes data from mongodb'],
            plugins: {
                'hapi-swagger': {
                    responses: resultHTTPStatus
                }
            }
        }
    },
    {
        method: 'POST',
        path: '/athletes',
        config: {
            handler: Handlers.createUser,
            description: 'Create New athletes',
            tags: ['api', 'reduced'],
            notes: ['Create a new athletes and updates data'],
            plugins: {
                'hapi-swagger': {
                    responses: resultHTTPStatus
                }
            },
            validate: {
                payload: athleteSchema
            }
        }
    },
    {
        method: 'GET',
        path: '/athletes/{athleteId}',
        config: {
            handler: Handlers.getByIdUser,
            description: 'Get athletes By ID',
            tags: ['api', 'reduced'],
            notes: ['Fetches the existing athletes data by Id'],
            plugins: {
                'hapi-swagger': {
                    responses: resultHTTPStatus
                }
            },
            validate: {
                query: {
                    id: Joi.string().required().description('Id: athlete Id')
                }
            }
        }
    },
    {
        method: 'PUT',
        path: '/athletes/{athleteId}',
        config: {
            handler: Handlers.updateUser,
            description: 'Update existing athlete Data',
            tags: ['api', 'reduced'],
            notes: ['Update a athletes data by Id'],
            plugins: {
                'hapi-swagger': {
                    responses: resultHTTPStatus
                }
            },
            validate: {
                payload: athleteSchema,
                query: {
                    id: Joi.string().required().description('Id: athlete Id')
                }
            }
        }
    },
    {
        method: 'DELETE',
        path: '/athletes/{athleteId}',
        config: {
            handler: Handlers.deleteUser,
            description: 'Delete a athlete Data',
            tags: ['api', 'reduced'],
            notes: ['Update a athletes data by Id'],
            plugins: {
                'hapi-swagger': {
                    responses: resultHTTPStatus
                }
            },
            validate: {
                payload: {
                    _id: Joi.string().required(),
                    id: Joi.string().required(),
                    name: Joi.string().required(),
                }
            }
        }
    }
];