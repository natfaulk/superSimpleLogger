# Super Simple Logger

A very basic logger for node that allows for adding of prefixes whilst still allowing for string substitutions (ie. `logger('%d test', 100)`).  
I have not really tested the efficiency of this.  
There are still features that I might add such as prepending timestamps, logging to files, debug levels.  

## How to use
`npm i --save supersimplelogger`  
`const logger = require('../index')('My prefix')`  
`logger('Some log message')`  
