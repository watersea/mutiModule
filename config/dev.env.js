'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
const type = typeof (process.env.npm_config_entryname)
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  ENTRY_NAME: `"${process.env.npm_config_entryname}"`,
  ENTRY_NAME_TYPE: `"${type}"`
})
