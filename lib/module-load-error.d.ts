import { CLIError } from '@oclif/errors';
export declare class ModuleLoadError extends CLIError {
    oclif: {
        exit: number;
    };
    code: string;
    constructor(message: string);
}
