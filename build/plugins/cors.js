"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
// import constant from 'src/constant';
// const URL_LOCAL = 'http://localhost:5173/'
// const URL_DEV = 'https://liga-padel-front.vercel.app/'
// const allowedOrigins = [URL_DEV, URL_LOCAL]
const cors = (0, cors_1.default)();
exports.default = cors;
