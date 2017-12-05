const argv = require('minimist')(process.argv.slice(2));
const { helpers, mocha } = require('./lib');

let sourceClass = require(argv.source);
let className = sourceClass.name;
let output = '';
let specs = [];

Reflect.ownKeys(sourceClass.prototype).forEach((key) => {
    // console.log(helpers.getMethodName(sourceClass.prototype[key]));
    // console.log(sourceClass.prototype[key].toString())
    specs.push(mocha.it(sourceClass, key));

});

output = mocha.describe(className, specs, false);

console.log(JSON.stringify(output, null, 4));
