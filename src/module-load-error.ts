import {CLIError} from '@oclif/errors'

export class ModuleLoadError extends CLIError {
  oclif!: { exit: number }

  code = 'MODULE_NOT_FOUND'

  constructor(message: string) {
    super(`[MODULE_NOT_FOUND] ${message}`, {exit: 1})
    this.name = 'ModuleLoadError'
  }
}
