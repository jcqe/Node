const Controller = require('egg').Controller; 

class CandysController extends Controller {
	async uploadCandyFile() {
		let Url = await this.ctx.service.candysService.uploadcandyGoods();
		this.ctx.response.body = Url;
	  }
	  async showAllCandys() {
		let list = await this.ctx.service.candysService.selectAllCandys();
		this.ctx.response.body = list;
	  }

	  async updateCandys() {
		let id = this.ctx.request.body.id;
		let newname = this.ctx.request.body.newname;
		let newprice = this.ctx.request.body.newprice;
		console.log(id,newname,newprice);
		let r = await this.ctx.service.candysService.updateCandys(id, newname,newprice);
		this.ctx.response.body = r;
	}
	async delByCandyId() {
		let id = this.ctx.request.query.id;
		let r = await this.ctx.service.candysService.delByCandyId(id);
		this.ctx.response.body = r;
	}
	
}

module.exports = CandysController;