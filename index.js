let makeLogger = _prefix => {
  if (_prefix === undefined) return console.log

  return (...args) => {
    let p = `[${_prefix}] `
    // so string substitution still works ie. 'test %d', someVal
    if (typeof args[0] === 'string') args[0] = p + ' ' + args[0]
    else args.unshift(p)
    console.log.apply(console, args)
  }
}

module.exports = makeLogger
