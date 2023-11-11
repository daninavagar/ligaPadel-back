"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = __importDefault(require("./routes/routes"));
const cors_1 = __importDefault(require("./plugins/cors"));
const subapase_1 = __importDefault(require("./plugins/subapase"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
app.use(cors_1.default);
const data = subapase_1.default.from('players').select();
console.log(data);
app.use('/', routes_1.default);
