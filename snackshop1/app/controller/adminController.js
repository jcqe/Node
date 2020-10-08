const Controller = require('egg').Controller; 

class AdminController extends Controller {
	async login(){
		let num = this.ctx.request.body.num;
		let pwd = this.ctx.request.body.pwd;
		let  shopsPicture = await this.ctx.service.adminService.login(num,pwd);
		this.ctx.response.body = shopsPicture;
	}
// 	async addUser(){
// 		console.log("addUser......")
// 		let num = this.ctx.request.body.num;
// 		let pwd = this.ctx.request.body.pwd;
// 		let r = await this.ctx.service.userService.adduser(num,pwd);
// 		this.ctx.response.body = r;
// 	}
}

module.exports = AdminController;