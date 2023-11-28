"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRound = exports.getClasification = exports.getPlayers = exports.getTeams = void 0;
const axios_1 = __importDefault(require("../plugins/axios"));
const constant_1 = __importDefault(require("../constant"));
const getTeams = async () => {
    const sheetName = '/Equipos';
    const options = {
        method: 'GET',
        url: constant_1.default.URL_SHEETS + sheetName,
    };
    let result = '';
    await axios_1.default.request(options)
        .then((response) => {
        result = response.data;
    }).catch((error => {
        console.error(error);
    }));
    console.log(result);
    return result;
};
exports.getTeams = getTeams;
const getPlayers = async () => {
    const sheetName = '/Jugadores';
    const options = {
        method: 'GET',
        url: constant_1.default.URL_SHEETS + sheetName,
    };
    let result = '';
    await axios_1.default.request(options)
        .then((response) => {
        result = response.data;
    }).catch((error => {
        console.error(error);
    }));
    console.log(result);
    return result;
};
exports.getPlayers = getPlayers;
const getClasification = async () => {
    const sheetName = '/Clasificación';
    const options = {
        method: 'GET',
        url: constant_1.default.URL_SHEETS + sheetName,
    };
    let result = '';
    await axios_1.default.request(options)
        .then((response) => {
        result = response.data;
    }).catch((error => {
        console.error(error);
    }));
    console.log(result);
    return result;
};
exports.getClasification = getClasification;
const getRound = async (roundParameter) => {
    const sheetName = roundParameter;
    const options = {
        method: 'GET',
        url: constant_1.default.URL_SHEETS + `/${sheetName}`,
    };
    let result = null;
    await axios_1.default.request(options)
        .then((response) => {
        result = response.data;
        result = result.map((item) => {
            for (let i = 3; i <= 10; i++) {
                delete item[i.toString()];
            }
            return item;
        });
        let partidos = [];
        let partidoNum = 1;
        for (let i = 0; i < result.length; i += 2) {
            if (result[i].EQUIPOS && result[i + 1].EQUIPOS) {
                let partido = {
                    [`Partido ${partidoNum}`]: [result[i], result[i + 1]]
                };
                partidos.push(partido);
                partidoNum++;
            }
        }
        result = partidos;
    }).catch((error => {
        console.error(error);
    }));
    return result;
};
exports.getRound = getRound;
