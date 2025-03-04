"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.convert = void 0;
const color_convert_1 = __importDefault(require("color-convert"));
function convert(color) {
    const colorToConvert = [color.red, color.green, color.blue];
    const convertedColor = color_convert_1.default.rgb.cmyk(colorToConvert);
    return { cyan: convertedColor[0], magenta: convertedColor[1], yellow: convertedColor[2], black: convertedColor[3] };
}
exports.convert = convert;
//# sourceMappingURL=Service.js.map