var crypto = require('crypto');

module.exports.encrypt = function(data){
  try{
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv('aes-256-cbc', new Buffer('passwordpasswordpasswordpassword'), iv);
    var encrypted = Buffer.concat([cipher.update(data), cipher.final()]);
    return iv.toString('hex') + ':' + encrypted.toString('hex');
  } catch (exception){
    throw new Error(exception.message);
  }
};

module.exports.decrypt = function(data){
  try{
    var dataParts = data.split(':');
    const iv = new Buffer(dataParts.shift(), 'hex');
    var encryptedData = new Buffer(dataParts.join(':'), 'hex');
    const decipher = crypto.createDecipheriv('aes-256-cbc', new Buffer('passwordpasswordpasswordpassword'), iv);
    var decrypted = Buffer.concat([decipher.update(encryptedData), decipher.final()]);
    return decrypted;
  } catch (exception) {
    throw new Error(exception.message);
  }
};