"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var discord_js_1 = __importDefault(require("discord.js"));
var config_1 = require("./config");
var functions_1 = require("./functions");
var recruit_1 = __importDefault(require("./orders/recruit"));
var explain_1 = __importDefault(require("./orders/explain"));
var room_1 = __importDefault(require("./orders/room"));
var change_1 = __importDefault(require("./orders/change"));
var wipe_1 = __importDefault(require("./orders/wipe"));
var logout_1 = __importDefault(require("./orders/logout"));
// @ts-ignore
var client = new discord_js_1.default.Client();
var notice_channel = '';
client.on('ready', function () {
    // @ts-ignore
    for (var _i = 0, _a = client.channels.cache; _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        if (value.name === '一般' && value.type === 'text') {
            notice_channel = key;
            break;
        }
    }
    console.log(client.user.tag + " \u3067\u30ED\u30B0\u30A4\u30F3");
});
// @ts-ignore
client.on('message', function (msg) { return __awaiter(void 0, void 0, void 0, function () {
    var message_text, parsed;
    return __generator(this, function (_a) {
        message_text = msg.content.trim();
        parsed = functions_1.get_payload(message_text);
        if (msg.author.bot) {
            return [2 /*return*/];
        }
        else if (message_text === '!logout') {
            logout_1.default(client, msg);
        }
        else if (parsed.order === '!募集') {
            recruit_1.default(client, msg);
        }
        else if (parsed.order === '!説明') {
            explain_1.default(client, msg);
        }
        else if (parsed.order === '!教室' || parsed.order === '!キャンペーン') { // チャンネルを作成する
            room_1.default(client, msg);
        }
        else if (parsed.order === '!変更') {
            change_1.default(client, msg);
        }
        else if (parsed.order === '!削除') {
            wipe_1.default(client, msg);
        }
        return [2 /*return*/];
    });
}); });
client.login(config_1.token).then(function () {
});
