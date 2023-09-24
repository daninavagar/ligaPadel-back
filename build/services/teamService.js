"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setPlayer = exports.getTeams = void 0;
const ERROR_CODES = {
    UsedPlayer: {
        code: 101,
        message: 'This person is already used'
    }
};
const player = 'Daniel Navarro';
const teams = 'Real Madrid';
const getTeams = () => {
    return teams;
};
exports.getTeams = getTeams;
const setPlayer = (playerName) => {
    console.log(player);
    console.log(playerName);
    if (player === playerName)
        return ERROR_CODES;
    else
        return 'Jugadores disponible';
};
exports.setPlayer = setPlayer;
