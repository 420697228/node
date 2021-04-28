import rests from './rest'
let rest = rests.rest;

export function register (params) {
    return rest.post('/api/user',params)
}

export function login (params) {
    return rest.post('/api/login',params)
}

export function getLeaves (params) {
    return rest.get('/api/getLeaves',{params})
}

export function Leaves (params) {
    return rest.post('/api/Leaves',params)
}

export function deleteLeaver (params) {
    return rest.post('/api/deleteLeaver',params)
}
