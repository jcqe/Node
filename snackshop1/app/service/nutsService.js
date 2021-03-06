const Service = require('egg').Service;
const path = require("path");
const fs = require("fs");
class NutsService extends Service {
	// async getAllShops() {
	// 	let sql = "select id, name, inf  from shops";
	// 	let list = await this.ctx.app.mysql.query(sql, []);
	// 	return list;
	// }

	async uploadnutGoods() {
		const file = this.ctx.request.files[0];
		const toFileName = '/public/upload/' + Date.now() + file.filename;
		let to = path.dirname(__dirname) + toFileName;
		await fs.copyFileSync(file.filepath,to);
		await fs.unlinkSync(file.filepath);

		//上传文件的网络访问 url
		const Url = "http://localhost:7001" + toFileName;
		// console.log(newUrl);
		let name = this.ctx.request.body.name;
		let inf = this.ctx.request.body.inf;
		let price = this.ctx.request.body.price;
		const sql = "insert into nut(name,inf,price,url)values(?,?,?,?)";
		let re = await this.ctx.app.mysql.query(sql, [name,inf,price,Url]);
		if (re.affectedRows == 1) {
			return Url;
		} else {
			// return "http://localhost:7001/public/upload/cat.jpg";
			console.log("失败")
		}
	}

	async showAllNuts() {
		const sql = "select id,name,inf,price,url from nut";
		let list = await this.ctx.app.mysql.query(sql, []);
		return list;
	}

	async updateNuts(id, newname,newprice) {
		let sql = "update nut set name=?,price=? where id=?";
		let r = await this.ctx.app.mysql.query(sql, [newname,newprice,id]);
		console.log(r);
		return r.affectedRows;
	}
	async delByNutsId(id) {
		let sql = "delete from nut where id=?";
		let r = await this.ctx.app.mysql.query(sql, [id]);
		console.log(r.affectedRows)
		return r.affectedRows;//1
	}
}

module.exports = NutsService;
