
const memoize = (fn) => {
    let cache = {}
    
    return (...args) => {
        console.log(...args)
        let cacheKey = args.map(n => n.toString() + '+').join('')
        if (cacheKey in cache) {
            return cache[cacheKey]
        } else {
            let result = args.reduce((acc, curr) => fn(acc, curr), 0);
            console.log(result)
            cache[cacheKey] = result;
    
            return result;
        }
        
    }
  
}
const add = (a, b) => a + b


const memoizeAdd = memoize(add)
console.log(memoizeAdd(10,10))
console.log(memoizeAdd(10,10))
console.log(memoizeAdd(10,10))