const helpers = require('./helpers');

module.exports = class {
  constructor(sourceClass) {
    this.className = sourceClass.name;
    this.class = sourceClass;
  }

  describe(children, async = false) {
    return `
      describe('${this.className}', (${async ? 'done' : ''}) => {
        ${children}
      });
    `;
  }

  it(key, async = false) {
    let methodName = helpers.getMethodName(this.class, key);

    return `
      it('${methodName}', (${async ? 'done' : ''}) => {
        let result = ${key === 'constructor' ? `new ${this.className}()` : `${methodName}()`};

        assert(result);
      })
    `;
  }

  buildFileHeader() {

  }
};