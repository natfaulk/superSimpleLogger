let makeLogger = _prefix => {
  let p = ''
  if (process.env.SSLOGGER_PROCESS_PREFIX !== undefined) {
    p = `[${process.env.SSLOGGER_PROCESS_PREFIX}] `
  }
  
  if (_prefix !== undefined) p += `[${_prefix}] `

  if (p === '') return console.log

  return (...args) => {
    // so string substitution still works ie. 'test %d', someVal
    if (typeof args[0] === 'string') args[0] = p + ' ' + args[0]
    else args.unshift(p)
    console.log.apply(console, args)
  }
}

module.exports = makeLogger
