const Service = require('egg').Service;

class UserService extends Service {
	async login(num,pwd){
		let sql = "select num from log where num=? and pwd=?";
        let list = await this.ctx.app.mysql.query(sql,[num,pwd]);
        return list;
	}
	async adduser(num,pwd){
		let sql = "insert into log(num,pwd)values(?,?)"
		let r = await this.ctx.app.mysql.query(sql,[num,pwd]);
		console.log("0000")
		return r.affectedRows;
	}
}

module.exports = UserService;
