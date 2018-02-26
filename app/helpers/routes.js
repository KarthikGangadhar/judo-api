'use strict';

const Joi = require('joi');
const Handlers = require('../lib/handlers.js');
const crickerHandlers = require('../lib/cricker_handlers.js');

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

const battingSchema = Joi.object({
    "50": Joi.string(),
    "100": Joi.string(),
    "St": Joi.string(),
    "Ct": Joi.string(),
    "6s": Joi.string(),
    "4s": Joi.string(),
    "SR": Joi.string(),
    "BF": Joi.string(),
    "Ave": Joi.string(),
    "HS": Joi.string(),
    "Runs": Joi.string(),
    "NO": Joi.string(),
    "Inns": Joi.string(),
    "Mat": Joi.string()
});

const bowlingSchema = Joi.object({
    "10": Joi.string(),
    "5w": Joi.string(),
    "4w": Joi.string(),
    "SR": Joi.string(),
    "Econ": Joi.string(),
    "Ave": Joi.string(),
    "BBM": Joi.string(),
    "BBI": Joi.string(),
    "Wkts": Joi.string(),
    "Runs": Joi.string(),
    "Balls": Joi.string(),
    "Inns": Joi.string(),
    "Mat": Joi.string()
})

const playerSchema = {
    "pid": Joi.string().required(),
    "profile": Joi.string(),
    "imageURL": Joi.string(),
    "battingStyle": Joi.string(),
    "bowlingStyle": Joi.string(),
    "majorTeams": Joi.string(),
    "currentAge": Joi.string(),
    "born": Joi.string(),
    "fullName": Joi.string(),
    "name": Joi.string().required(),
    "country": Joi.string().required(),
    "playingRole": Joi.string(),
    "data": Joi.object({
        "bowling": Joi.object({
            "listA": bowlingSchema,
            "firstClass": bowlingSchema,
            "T20Is": bowlingSchema,
            "ODIs": bowlingSchema,
            "tests": bowlingSchema
        }),
        "batting": Joi.object({
            "listA": battingSchema,
            "firstClass": battingSchema,
            "T20Is": battingSchema,
            "ODIs": battingSchema,
            "tests": battingSchema
        })
    })
}

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
        path: '/athletes/:athleteId',
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
    }, ///////////////////
    {
        method: 'GET',
        path: '/crickers',
        config: {
            handler: crickerHandlers.getAllPlayers,
            description: 'Get All Crickers',
            tags: ['api', 'reduced'],
            notes: ['Fetches all the existing crickers data from mongodb'],
            plugins: {
                'hapi-swagger': {
                    responses: resultHTTPStatus
                }
            }
        }
    },
    {
        method: 'POST',
        path: '/crickers',
        config: {
            handler: crickerHandlers.createPlayer,
            description: 'Create New crickers',
            tags: ['api', 'reduced'],
            notes: ['Create a new crickers and updates data'],
            plugins: {
                'hapi-swagger': {
                    responses: resultHTTPStatus
                }
            },
            validate: {
                payload: playerSchema
            }
        }
    },
    {
        method: 'GET',
        path: '/crickers/{crickerId}',
        config: {
            handler: crickerHandlers.getByIdPlayer,
            description: 'Get crickers By ID',
            tags: ['api', 'reduced'],
            notes: ['Fetches the existing crickers data by Id'],
            plugins: {
                'hapi-swagger': {
                    responses: resultHTTPStatus
                }
            },
            validate: {
                query: {
                    id: Joi.string().required().description('Id: cricker Id')
                }
            }
        }
    },
    {
        method: 'PUT',
        path: '/crickers/{crickerId}',
        config: {
            handler: crickerHandlers.updatePlayer,
            description: 'Update existing cricker Data',
            tags: ['api', 'reduced'],
            notes: ['Update a crickers data by Id'],
            plugins: {
                'hapi-swagger': {
                    responses: resultHTTPStatus
                }
            },
            validate: {
                payload: playerSchema,
                query: {
                    id: Joi.string().required().description('Id: cricker Id')
                }
            }
        }
    },
    {
        method: 'DELETE',
        path: '/crickers/{crickerId}',
        config: {
            handler: crickerHandlers.deletePlayer,
            description: 'Delete a cricker Data',
            tags: ['api', 'reduced'],
            notes: ['Update a crickers data by Id'],
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