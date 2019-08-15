// 设置引入库的配置文件
if (process.env.NODE_ENV === 'production') {
    module.exports = require('./dist/deepClone.min.js');
} else {
    module.exports = require('./dist/deepClone.js');
}