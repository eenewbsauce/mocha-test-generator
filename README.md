# Mocha Test Generator

## Installation

Clone the repo

```
git clone git@github.com:eenewbsauce/mocha-test-generator.git
```

Install the dependencies

`cd mocha-test-generator`

`npm install`

## Usage

Try it on the sample class provided:

`node index --source './sample.js'`

The output:

```javascript
describe('Sample ::', () => {
        
      describe('constructor ::', () => {

        it('should do stuff', () => {
          let result = new Sample();
  
          assert(result);
        })

      })
    
      describe('add ::', () => {

        it('should do stuff', () => {
          let result = add();
  
          assert(result);
        })
        
      })
    
});

```

Try it on your own class:

`node index --source '{path/to/your/class}'`
