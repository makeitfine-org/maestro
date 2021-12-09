import {frmt} from '../util/index.js'

let cloudServers = [
    {id: 1, name: 'AWS', status: 'active'},
    {id: 2, name: 'Google', status: 'active'},
    {id: 3, name: 'Unknown', status: 'pending'},
]

export const getAll = (req, res) => {
    res.header('desc', 'json API')
    res.header('res-time', frmt(new Date()))
    res.status(200)

    res.json(cloudServers)
}

export const create = (req, res) => {
    const newServer = {
        id: Date.now().toString(),
        ...req.body
    }
    cloudServers.push(newServer)
    res.status(201).json(newServer)
}

export const remove = (req, res) => {
    cloudServers.splice(cloudServers.findIndex(e => e.id === req.params.id), 1)
    res.json({message: `server (id = ${req.params.id}) removed`})
}

