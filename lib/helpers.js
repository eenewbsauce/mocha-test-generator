module.exports = class {
    constructor() {

    }

    static getMethodName(sourceClass, key) {
        let methodName = sourceClass.prototype[key].name;
        return methodName === sourceClass.name
            ? 'constructor' 
            : methodName;
    }
};
