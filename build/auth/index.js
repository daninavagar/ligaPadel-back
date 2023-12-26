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
Object.defineProperty(exports, "__esModule", { value: true });
const googleapis_1 = require("googleapis");
const credentials = __importStar(require("../credentials.json"));
async function getAuth(sheetName) {
    const auth = new googleapis_1.google.auth.JWT(credentials.client_email, undefined, credentials.private_key, ['https://www.googleapis.com/auth/spreadsheets']);
    const googleSheets = googleapis_1.google.sheets({ version: 'v4', auth: auth });
    const spreadsheetId = '1TIHRPQIc7F16dbN0giJaix9w5fe2auCd_jPBinLAWUo';
    const getRows = await googleSheets.spreadsheets.values.get({
        spreadsheetId,
        range: sheetName
    });
    return getRows.data;
}
exports.default = getAuth;
