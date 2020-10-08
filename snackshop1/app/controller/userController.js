const Controller = require('egg').Controller; 

class UserController extends Controller {
	async login(){
		let num = this.ctx.request.body.num;
		let pwd = this.ctx.request.body.pwd;
		let shopsArray = await this.ctx.service.userService.login(num,pwd);
		this.ctx.response.body = shopsArray;
	}
	async addUser(){
		// console.log("addUser......")
		let num = this.ctx.request.body.num;
		let pwd = this.ctx.request.body.pwd;
		let r = await this.ctx.service.userService.adduser(num,pwd);
		this.ctx.response.body = r;
	}
}

module.exports = UserController;