"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const URL_LOCAL = 'http://localhost:5173/';
const URL_DEV = 'https://liga-padel-front.vercel.app/';
const allowedOrigins = [URL_DEV, URL_LOCAL];
const constant = {
    allowedOrigins
};
exports.default = constant;
