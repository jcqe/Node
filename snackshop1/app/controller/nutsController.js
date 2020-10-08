const Controller = require('egg').Controller; 

class NutsController extends Controller {
	async uploadNutFile() {
		let Url = await this.ctx.service.nutsService.uploadnutGoods();
		this.ctx.response.body = Url;
	  }
	  async showAllNuts() {
		let list = await this.ctx.service.nutsService.showAllNuts();
		this.ctx.response.body = list;
	  }

	  async updateNuts() {
		let id = this.ctx.request.body.id;
		let newname = this.ctx.request.body.newname;
		let newprice = this.ctx.request.body.newprice;
		console.log(id,newname,newprice);
		let r = await this.ctx.service.nutsService.updateNuts(id, newname,newprice);
		this.ctx.response.body = r;
	}
	async delByNutsId() {
		let id = this.ctx.request.query.id;
		let r = await this.ctx.service.nutsService.delByNutsId(id);
		this.ctx.response.body = r;
	}
	
}

module.exports = NutsController;