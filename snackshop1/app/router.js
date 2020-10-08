// app/router.js
module.exports = app => {
  const { router, controller } = app;
  router.post('/login.do', controller.userController.login);
  router.post('/registered.do', controller.userController.addUser);
  router.get('/showAllShops.do', controller.shopsController.showAllShopsPic);
  router.post('/uploadFile.do', controller.shopsController.uploadFile);
  router.post('/uploadCandyFile.do', controller.candysController.uploadCandyFile);
  router.post('/admlogin.do', controller.adminController.login);
  router.get('/showAll.do', controller.shopsController.showAll);
  router.get('/delById.do', controller.shopsController.delById);
  router.post("/updateName.do", controller.shopsController.updateName);

  router.get('/showAllCandys.do', controller.candysController.showAllCandys);
  router.post("/updateCandys.do", controller.candysController.updateCandys);
  router.get('/delByCandyId.do', controller.candysController.delByCandyId);

  router.post('/uploadNutFile.do', controller.nutsController.uploadNutFile);
  router.get('/showAllNuts.do', controller.nutsController.showAllNuts);
  router.post("/updateNuts.do", controller.nutsController.updateNuts);
  router.get('/delByNutsId.do', controller.nutsController.delByNutsId);


  
};