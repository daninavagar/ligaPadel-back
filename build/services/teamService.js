"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlayerByTeams = exports.getTeams = exports.getPlayers = exports.setPlayer = void 0;
const mysql_1 = __importDefault(require("../mysql/mysql"));
const setPlayer = (_playerName) => {
    return "Daniel Navarro";
};
exports.setPlayer = setPlayer;
async function getPlayers() {
    const [players] = await (await mysql_1.default).query('Select * from players;');
    return players;
}
exports.getPlayers = getPlayers;
async function getTeams() {
    const [teams] = await (await mysql_1.default).query('Select * from teams;');
    return teams;
}
exports.getTeams = getTeams;
async function getPlayerByTeams() {
    const [playerByTeams] = await (await mysql_1.default).query(`select t.name as NombreEquipo, p.name as NombreJugadores, pt.captain as Capitán from player_teams as pt 
        inner join players as p on pt.player_id = p.id
        inner join teams as t on pt.team_id = t.id where pt.captain = true;`);
    return playerByTeams;
}
exports.getPlayerByTeams = getPlayerByTeams;
