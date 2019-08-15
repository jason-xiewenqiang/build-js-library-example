export default function deepClone(obj) {
    // 判断是否为对象
    function isObject(o) {
        return (typeof o === 'object' || typeof o === 'function') && o !== null
    }

    if (!isObject(obj)) {
        throw new Error('非对象')
    }

    let isArray = Array.isArray(obj)

    let newObj = isArray ? [...obj] : { ...obj }

    Reflect.ownKeys(newObj).forEach(key => {
        newObj[key] = isObject(obj[key]) ? deepClone(obj[key]) : obj[key] 
    })
    
    return newObj
}