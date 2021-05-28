@oclif/config
==============

NOTE: This is a modified version of `@oclif/config v1` which supports ES Module loading. To publish an ESM Oclif v2 CLI 
at the moment you need to copy the lib directory to `node_module/@oclif/config/lib` in your CLI directory. 
`@oclif/dev-cli` is not updated yet for Oclif v2 and uses`@oclif/config` v1 so the only way to do this is copying the 
lib directory of this repo to replace the v1 version. Then you can run `oclif-dev manifest` in the `prepublishOnly` NPM
script against your ESM Oclif V2 project. You also need to remove any usage of the README command from `@oclif/dev-cli` 
as this is not supported with this hack.

To see the history of the process I went through to add ES Module support to Oclif v2 see this Github issue:
https://github.com/oclif/core/issues/130

base config object and standard interfaces for oclif components

[![Version](https://img.shields.io/npm/v/@oclif/config.svg)](https://npmjs.org/package/@oclif/config)
[![CircleCI](https://circleci.com/gh/oclif/config/tree/master.svg?style=svg)](https://circleci.com/gh/oclif/config/tree/master)
[![Appveyor CI](https://ci.appveyor.com/api/projects/status/github/oclif/config?branch=master&svg=true)](https://ci.appveyor.com/project/heroku/config/branch/master)
[![Codecov](https://codecov.io/gh/oclif/config/branch/master/graph/badge.svg)](https://codecov.io/gh/oclif/config)
[![Known Vulnerabilities](https://snyk.io/test/npm/@oclif/config/badge.svg)](https://snyk.io/test/npm/@oclif/config)
[![Downloads/week](https://img.shields.io/npm/dw/@oclif/config.svg)](https://npmjs.org/package/@oclif/config)
[![License](https://img.shields.io/npm/l/@oclif/config.svg)](https://github.com/oclif/config/blob/master/package.json)
