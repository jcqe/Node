exports.keys = "asdfghjklmnb";
exports.multipart = {
  mode: 'file',
};
exports.security = {
	csrf: {
		enable: false,
		ignoreJSON: true
	} 
};
exports.security = {
  csrf: false
};

exports.mysql = {
  client: {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '123456',
    database: 'snack',
  },
};
exports.cors = {
  origin: '*',
  allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',

};