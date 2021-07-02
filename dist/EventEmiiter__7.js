"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var events_1 = __importDefault(require("events"));
var customEventEmitter = new events_1.default();
customEventEmitter.on('respond', function (s1) {
    console.log('this is my respond with no arguments');
    console.log('this is my respond with argument :' + s1);
});
customEventEmitter.on('respond', function () {
    console.log('this is my respond with no arguments');
});
customEventEmitter.emit("respond", "fuking boi");
