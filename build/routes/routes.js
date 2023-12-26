"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const teamsController = __importStar(require("../services/teamService"));
const router = express_1.default.Router();
router.get('/', (_req, res) => {
    const result = 'App ok';
    res.status(200).send(result);
    console.log(result);
});
router.get('/teams', async (_req, res) => {
    console.log('get teams');
    const teams = await teamsController.getTeams();
    res.send(teams);
});
router.get('/players', async (_req, res) => {
    console.log('get /players');
    const players = await teamsController.getPlayers();
    console.log(players);
    res.send(players);
});
router.get('/clasification', async (_req, res) => {
    console.log('get /clasification');
    const clasification = await teamsController.getClasification();
    console.log(clasification);
    res.send(clasification);
});
router.get('/round', async (req, res) => {
    console.log('get /rounds');
    if (!req.query.round) {
        res.status(400).send("No send DATA");
    }
    else {
        const rounds = await teamsController.getRound(req.query.round.toString());
        res.send(rounds);
    }
});
exports.default = router;
