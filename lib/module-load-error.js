"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("@oclif/errors");
class ModuleLoadError extends errors_1.CLIError {
    constructor(message) {
        super(`[MODULE_NOT_FOUND] ${message}`, { exit: 1 });
        this.code = 'MODULE_NOT_FOUND';
        this.name = 'ModuleLoadError';
    }
}
exports.ModuleLoadError = ModuleLoadError;
