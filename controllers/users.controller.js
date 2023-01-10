const { response, request } = require('express');

const usersGet = (req = request, res = response) => {
    const {name = 'No name',q, apikey, page, limit} = req.query;
    res.json({
        msj: 'Get API',
        name,
        q,
        page,
        apikey,
        limit
    });
}
const usersPost = (req, res = response) => {
    const { name, edad } = req.body;
    res.json(
        {
            msg: 'Post API',
            name,
            edad
        });
}
const usersPut = (req, res = response) => {
    const id = req.params.id
    res.json({ msj: 'Put API', id });
}
const usersPatch = (req, res = response) => {
    res.json({ msj: 'Patch API' });
}
const usersDelete = (req, res = response) => {
    res.json({ msj: 'Delete API' });
}

module.exports = {
    usersGet,
    usersPost,
    usersPatch,
    usersPut,
    usersDelete
}