"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes/routes"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
// app.get('/', (_req, res) => {
//     res.status(200).send('App ok')
// })
app.use('/', routes_1.default);
app.use(body_parser_1.default.urlencoded({ extended: true }));
// app.get('/teams', (_req, res) => {
//   const teams:string = 'Real Madrid'
//   res.send(teams)
// })
