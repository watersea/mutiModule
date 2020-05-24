
// 在入口文件处解析ES6语法
require ('babel-polyfill')
//  输入空  打包全部，输入对应参数打包相应的模块
const glob = require('glob')

//  获取启动环境
const startUpEnvir = process.env.NODE_ENV

// 测试环境
function devFun () {
  let name = process.env.npm_config_entryname
  let entryPathDev = {}
  let url = (!name || name.split(',').length > 1) ? './src/main.js' : `./src/views/${name}/entry.js`
      entryPathDev.web = ['babel-polyfill', url]
   return entryPathDev
}
// 生产环境
function proFun () {
  let moduleSrcArray = []
  let entryPathPro = {}  //配置入口文件
  let [,, name] = process.argv
  
  moduleSrcArray = name ?  name.split(',') : getAllEntry()

  moduleSrcArray.map(item => {
    entryPathPro[item] = ['babel-polyfill', `./src/views/${item}/entry.js`]
  })
  
  return entryPathPro
}
// 获取所有打包模块
function getAllEntry (){
  let arr = []
  let moduleFile = glob.sync('./src/views/*/entry.js')
      moduleFile.map(item => {
        arr.push((item.split('/'))[3])
      })
  
  return arr
}
exports.handleEntryPath = function (name) {

  let entryPath = startUpEnvir === 'production' ?  proFun() :  devFun()
  
    return entryPath
}
