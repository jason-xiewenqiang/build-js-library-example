## 如何打包一个js库
#### 使用webpack和npm上传组件包
###### 要求 支持压缩版和非压缩版 支持CMD CJS ECM 引入

+ 实例 ： 打包一个js库，简单克隆的js工具库 里面只有一个方法 deepClone 拷贝对象

```
    // webpack output 学习 -> library: 指定库的全局全局变量
    // webpack output 学习 -> libraryTarget: 支持库引入的方式

    module.exports = {
        mode: 'none',
        entry: {
            'deepClone': './src/index.js',
            'deepClone.min': './src/index.js'
        },
        output: {
            filename: '[name].js',
            library: 'deepClone',
            libraryExport: 'default',
            libraryTarget: 'umd' 
        },
        optimization: {
            minimize: true,
            minimizer: [
                new TerserPlugin({
                    include: /\.min\.js$/
                }),
            ]
        }
    };


    // index.js ==== 定义 不同环境引入不同的文件 
    // package.json 内 script 中的 prepublish 钩子表示每次发布前要打包一下

    npm 包账号： 

```