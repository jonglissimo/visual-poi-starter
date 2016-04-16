var serialport = require('serialport');
var SerialPort = require('serialport').SerialPort;
var vendorId = '0x1669';  // Pyroterra Lighttoys
var productId = '0x1026'; // Visual Poi 80px

function VisualPoiStarter() {
  this.portList = [];
}

VisualPoiStarter.prototype.findPois = function(callback) {
  this.portList = [];
  var that = this;

  serialport.list(function (err, ports) {
    ports.forEach(function(port) {
      var currentVendorId = port.vendorId;
      var currentProductId = port.productId;

      if (vendorId == currentVendorId && productId == currentProductId) {
        console.log('Found Visual Poi on serial port: ' + port.comName);
        var port = new SerialPort(port.comName);
        that.portList.push(port);
      }
    });

    if (that.portList.length == 0) console.log('No visual poi found');

    callback(that.portList);
  });
};

VisualPoiStarter.prototype.startSequence = function(no) {
  this._write(no);
}

VisualPoiStarter.prototype.stopSequence = function() {
  this._write(0);
}

VisualPoiStarter.prototype._write = function (no) {
  if (this.portList.length > 0) {
    this.portList.forEach(function(port) {
      port.write('s' + no + '\r', function(err) {
        if (err) console.log('Error: ', err.message);
      });
    });
  } else {
    console.log('Could not send command. No Visual Poi detected.');
  }
}

module.exports = VisualPoiStarter;