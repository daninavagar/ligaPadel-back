"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const http = axios_1.default.create({
    timeout: 5000,
    headers: {
        'X-Api-Key': 's_FqokQ2xLeFyauGdFJ#TmwBhN_Li#FRa%IcA%rDosp@4nmWQ_23v-3xzK1%w0Bw'
    }
});
exports.default = http;
