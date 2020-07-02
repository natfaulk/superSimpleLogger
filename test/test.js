const logger1 = require('../index')()
const logger2 = require('../index')('this module')

;(()=>{
  logger1('test')
  logger2('%d test', 100)
  logger2({test: 123})
})()
