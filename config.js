module.exports = {
    'secret': 'ramataranamaka',
    'database': 'mongodb://kgangadhar:takanami1643@ds249128.mlab.com:49128/jodo',
    'playerstat':'mongodb://kgangadhar:takanami1643@ds249718.mlab.com:49718/playerstats',
    'token_message': "Expires in %s Minutes",
    'Authentication_messages': {
        token_required: {
            success: false,
            message: 'Token is required.'
        },
        invalid_username: {
            success: false,
            message: 'Authentication failed. User Name missing.'
        },
        invalid_password: {
            success: false,
            message: 'Authentication failed. Wrong password.'
        },
        authentication_error: {
            success: false,
            message: 'Authentication failed. User not found.'
        },
        token_auth_failure: {
            success: false,
            message: 'Failed to authenticate token.'
        },
        delete_success: {
            success: true,
            message: "User profile deleted"
        },
        profile_not_exist: {
            success: false,
            message: "Profile Already deleted"
        }
    },
};