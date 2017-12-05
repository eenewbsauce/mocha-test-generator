const helpers = require('./helpers');

module.exports = class {
  constructor() {

  }

  static describe(text, children, async = false) {
    return `
      describe('${text}', (${async ? 'done' : ''}) => {
        ${children}
      });
    `;
  }

  static it(sourceClass, key, async = false) {
    let methodName = helpers.getMethodName(sourceClass.prototype[key]);

    return `
      it('${methodName}', (${async ? 'done' : ''}) => {
        let result = ${methodName}();

        assert(result);
      })
    `;
  }

  buildFileHeader() {

  }
};