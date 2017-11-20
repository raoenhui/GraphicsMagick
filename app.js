
var gm = require('gm'); 
gm('img.png').size(function (err, size) {
  if (!err)
    console.log(size.width+'and'+size.height);
});