import express from 'express'
import * as teamsController from '../services/teamService'
// import connection from '../mysql/mysql'

const router = express.Router();

router.get('/', (_req, res) => {
    res.status(200).send('App ok')
})

router.get('/players', async (_req, res) => {
    console.log('get /bbdd');
    const queryPlayers = await teamsController.getPlayers();
    console.log(queryPlayers);
    res.send(queryPlayers)
})

router.get('/playerByTeams', async (_req, res) => {
    console.log('get /bbdd');
    const queryTeams = await teamsController.getPlayerByTeams();
    console.log(queryTeams);
    res.send(queryTeams)
})

router.get('/teams', async (_req, res) => {
    res.header('Access-Control-Allow-Origin', '*')
    console.log('get teams');
    const result = await teamsController.getTeams();
    res.send(result);
    
})

router.post('/player', (req, res) => {
    console.log('post /player');
    
    console.log(req.body);
    
    if(!req.body) {
        res.status(400).send("No send DATA")
    } else {
        res.send(teamsController.setPlayer(req.body.name))
    }
    
})

export default router;
