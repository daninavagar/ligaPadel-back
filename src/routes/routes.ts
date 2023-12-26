import express from 'express'
import * as teamsController from '../services/teamService'

const router = express.Router();

router.get('/', (_req, res) => {
    const result = 'App ok'
    res.status(200).send(result)
    console.log(result);
})

router.get('/teams', async (_req, res) => {
    console.log('get teams');
    const teams = await teamsController.getTeams();
    res.send(teams);  
})

router.get('/players', async (_req, res) => {
    console.log('get /players');
    const players = await teamsController.getPlayers();
    console.log(players);
    res.send(players)
})

router.get('/clasification', async (_req, res) => {
    console.log('get /clasification');
    const clasification = await teamsController.getClasification();
    console.log(clasification);
    res.send(clasification)
})

router.get('/round', async (req, res) => {
    console.log('get /rounds');
    if (!req.query.round) {
        res.status(400).send("No send DATA")
    } else {
        const rounds = await teamsController.getRound(req.query.round.toString());
        res.send(rounds)
    }
}) 

export default router;
