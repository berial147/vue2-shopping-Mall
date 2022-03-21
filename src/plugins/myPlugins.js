//vue插件一定会暴露一个对象
let myPlugins = {}

myPlugins.install = function() {
    console.log('调用')
}

export default myPlugins