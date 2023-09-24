import express from 'express'
import * as teamsController from '../services/teamService'

const router = express.Router();

router.get('/', (_req, res) => {
    res.status(200).send('App ok')
})
router.get('/teams', (_req, res) => {
    res.header('Access-Control-Allow-Origin', '*')
    console.log('get /teams');
    
    const response = teamsController.getTeams();
    res.send(response)
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
