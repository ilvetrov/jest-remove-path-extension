const transformerHelper = require('./index')

describe('jest-remove-path-extension', () => {
  it('regExp works', () => {
    const codeInput = `import myAwesomeLib, { MyAwesomeLib } from '../../myAwesomeLib.ts';require('../myAwesomeLib.js'); export * from './myAwesomeLib'; export * from './myAwesomeLib.js'`
    const codeOutputExpected = `import myAwesomeLib, { MyAwesomeLib } from '../../myAwesomeLib';require('../myAwesomeLib'); export * from './myAwesomeLib'; export * from './myAwesomeLib'`    
    const { code } = transformerHelper.process(codeInput, 'any-path', { transformerConfig: ['.js', '.ts'] })

    expect(code).toBe(codeOutputExpected)
  })
})
