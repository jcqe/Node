const Controller = require('egg').Controller; 

class ShopsController extends Controller {
	async uploadFile() {
		let newUrl = await this.ctx.service.shopsService.uploadGoods();
		this.ctx.response.body = newUrl;
	  }
	  async showAllShopsPic() {
		let list = await this.ctx.service.shopsService.selectAllShopsPic();
		this.ctx.response.body = list;
	  }


	  async showAll() {
		let list = await this.ctx.service.shopsService.showAll();
		this.ctx.response.body = list;
	  }

	  async delById() {
		let id = this.ctx.request.query.id;
		let r = await this.ctx.service.shopsService.delById(id);
		this.ctx.response.body = r;
	}

	async updateName() {
		let id = this.ctx.request.body.id;
		let newname = this.ctx.request.body.newname;
		console.log(id,newname);
		let r = await this.ctx.service.shopsService.updateName(id, newname);
		this.ctx.response.body = r;
	}

	//   async uploadCandyFile() {
	// 	let newUrl = await this.ctx.service.shopsService.uploadCandyGoods();
	// 	this.ctx.response.body = newUrl;
	//   }
}

module.exports = ShopsController;