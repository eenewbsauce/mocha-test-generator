const argv = require('minimist')(process.argv.slice(2));

let sourceClass = require(argv.source);

Reflect.ownKeys(sourceClass.prototype).forEach((key) => {
    console.log(sourceClass.prototype[key])
    console.log(sourceClass.prototype[key].toString())
})
