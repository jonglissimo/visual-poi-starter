Visual Poi Starter
==================

Start Pyroterra Lighttoys Visual Poi through USB connection (serial port).
This library can be used as a CLI (command line interface) or consumed by your own code.

Install
-------

This library uses the Node + NPM package [https://www.npmjs.com/package/serialport](serialport) for serial port communication. It supports multiple platforms including Windows, Mac OS X, Ubuntu, Raspberry PI Linux. For platform specific installation details please refer to their [https://github.com/voodootikigod/node-serialport/blob/master/README.md](README).

To install the dependencies of visual-poi-starter type in your terminal:

```
npm install
```


Usage as CLI
------------

Inside this project folder type:

```
node cli
```

If you are missing some rights to access the serial port, you will receive something similar to: Error: Cannot open /dev/ttyACM0
Try to run it as root `sudo node cli` (Linux + Mac OS) or in a root shell (Windows).


Usage in your code
------------------

```
var VisualPoiStarter = require('visual-poi-starter');
var visualPoiStarter = new VisualPoiStarter();

visualPoiStarter.findPois(function() {
  visualPoiStarter.startSequence(1); // start sequence 1
});
```
