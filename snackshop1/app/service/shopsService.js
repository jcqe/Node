const Service = require('egg').Service;
const path = require("path");
const fs = require("fs");
class ShopsService extends Service {
	// async getAllShops() {
	// 	let sql = "select id, name, inf  from shops";
	// 	let list = await this.ctx.app.mysql.query(sql, []);
	// 	return list;
	// }

	async uploadGoods() {
		const file = this.ctx.request.files[0];
		const toFileName = '/public/upload/' + Date.now() + file.filename;
		let to = path.dirname(__dirname) + toFileName;
		await fs.copyFileSync(file.filepath, to);
		await fs.unlinkSync(file.filepath);

		//上传文件的网络访问 url
		const newUrl = "http://localhost:7001" + toFileName;
		// console.log(newUrl);
		let name = this.ctx.request.body.name;
		let inf = this.ctx.request.body.inf;
		// let price = this.ctx.request.body.price;
		const sql = "insert into shopspic(name,inf,url)values(?,?,?)";
		let r = await this.ctx.app.mysql.query(sql, [name,inf,newUrl]);
		if (r.affectedRows == 1) {
			return newUrl;
		} else {
			// return "http://localhost:7001/public/upload/cat.jpg";
			console.log("失败")
		}
	}

	async selectAllShopsPic() {
		const sql = "select  name,inf,url from shopspic";
		let list = await this.ctx.app.mysql.query(sql, []);
		return list;
	}

		async showAll() {
		let sql = "select id, name,inf,url from shopspic";
		let list = await this.ctx.app.mysql.query(sql, []);
		return list;
	}

	async delById(id) {
		let sql = "delete from shopspic where id=?";
		let r = await this.ctx.app.mysql.query(sql, [id]);
		return r.affectedRows;//1
	}
	//修改
	async updateName(id, newname) {
		let sql = "update shopspic set name=?  where id=?";
		let r = await this.ctx.app.mysql.query(sql, [newname, id]);
		console.log(r);
		return r.affectedRows;//1
	}
}

module.exports = ShopsService;
