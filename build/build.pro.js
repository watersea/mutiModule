
process.env.NODE_ENV = 'production'

const path = require('path')
const execFileSync = require('child_process').execFileSync;
const buildFile = path.join(__dirname, 'build.js')
const t = require('./handle.entry').handleEntryPath()
let itemObj = Object.keys(t)
let len = itemObj.length

for( const module of itemObj){
  console.log(`总共${len}个模块，正在打包模块${module}-->`,module)
  let res = execFileSync( 'node', [buildFile, module], {})
  process.stdout.write(res + '\n\n');
}
