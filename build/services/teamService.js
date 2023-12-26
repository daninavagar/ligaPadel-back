"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRound = exports.getClasification = exports.getPlayers = exports.getTeams = void 0;
const index_1 = __importDefault(require("../auth/index"));
const getTeams = async () => {
    const sheetName = 'Equipos';
    const result = await (0, index_1.default)(sheetName);
    result.values?.shift();
    const resultTransformed = result.values?.map((team) => {
        return {
            EQUIPOS: team[0]
        };
    });
    return resultTransformed;
};
exports.getTeams = getTeams;
const getPlayers = async () => {
    const sheetName = 'Jugadores';
    const result = await (0, index_1.default)(sheetName);
    result.values?.shift();
    const resultTransformed = result.values?.map((team) => {
        return {
            JUGADORES: team[0],
            EQUIPOS: team[1],
            CAPITAN: team[2]
        };
    });
    return resultTransformed;
};
exports.getPlayers = getPlayers;
const getClasification = async () => {
    const sheetName = 'Clasificación';
    const values = (await (0, index_1.default)(sheetName)).values;
    let headers = values[0];
    let resultNoSpaces = values.slice(1).map(row => {
        let obj = {}; // Add type annotation for obj
        headers.forEach((header, index) => {
            if (header !== "") {
                obj[header] = row[index];
            }
        });
        return obj;
    });
    return resultNoSpaces;
};
exports.getClasification = getClasification;
const getRound = async (roundParameter) => {
    const sheetName = roundParameter + '!A1:C15';
    const result = (await (0, index_1.default)(sheetName)).values;
    result?.splice(3, 1);
    result?.splice(6, 1);
    result?.splice(9, 1);
    let resultsRound = [];
    // let partido = {};
    for (let i = 1; i < result.length; i += 3) {
        const partidoNumber = (i + 2) / 3;
        let partido = {}; // Define the type of partido
        partido[`Partido ${partidoNumber}`] = [
            {
                EQUIPOS: result[i][0],
                'JUEGOS GANADOS': result[i][1],
                PUNTOS: result[i][2]
            },
            {
                EQUIPOS: result[i + 1][0],
                'JUEGOS GANADOS': result[i + 1][1],
                PUNTOS: result[i + 1][2]
            }
        ];
        resultsRound.push(partido);
        partido = {};
    }
    return resultsRound;
};
exports.getRound = getRound;
