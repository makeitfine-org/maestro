import {frmt} from '../util/index.js'

let cloudServers = [
    {id: 1, name: 'AWS', status: 'active'},
    {id: 2, name: 'Google', status: 'active'},
    {id: 3, name: 'Unknown', status: 'pending'},
]

export const getAll = (req, res) => {
    res.header('desc', 'json API')
    res.header('res-time', frmt(new Date()))
    res.status(201)

    res.json(cloudServers)
}
