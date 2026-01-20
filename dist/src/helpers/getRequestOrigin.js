"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRequestOrigin = getRequestOrigin;
function getRequestOrigin(req) {
    return `${req.protocol}://${req.get('host')}`;
}
//# sourceMappingURL=getRequestOrigin.js.map