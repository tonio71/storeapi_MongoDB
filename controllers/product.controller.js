import ProductService from "../services/product.service.js";

async function createProduct(req, res, next) {
  try {
    let product = req.body;
    if (
      !product.name ||
      !product.description ||
      !product.value ||
      !product.stock ||
      !product.supplierId
    ) {
      throw new Error(
        "Name, Description, Value, Stock e Supplier_id  são campos obrigatórios!"
      );
    }
    product = await ProductService.createProduct(product);
    res.send(product);
    logger.info(`Post /product - ${JSON.stringify(product)}`);
  } catch (err) {
    next(err);
  }
}

async function getProducts(req, res, next) {
  try {
    res.send(await ProductService.getProducts());
    logger.info(`Get /product`);
  } catch (err) {
    next(err);
  }
}

async function getProduct(req, res, next) {
  try {
    res.send(await ProductService.getProduct(req.params.id));
    logger.info(`Get /product`);
  } catch (err) {
    next(err);
  }
}

async function deleteProduct(req, res, next) {
  try {
    let retorno = await ProductService.deleteProduct(req.params.id);
    if (retorno === null) {
      res.status(404).send("product não encontrado!");
    } else {
      res.send("");
    }
    logger.info(`Delete /product`);
  } catch (err) {
    next(err);
  }
}

async function updateProduct(req, res, next) {
  try {
    let product = req.body;
    if (
      !product.productId ||
      !product.name ||
      !product.description ||
      !product.value ||
      !product.stock ||
      !product.supplierId
    ) {
      throw new Error(
        "Product_id, Name, Description, Value, Stock e Supplier_id são campos obrigatórios!"
      );
    }
    product = await ProductService.updateProduct(product);
    res.send(product);
    logger.info(`Update using PUT /product - ${JSON.stringify(product)}`);
  } catch (err) {
    next(err);
  }
}

async function createProductInfo(req, res, next){
  try{
    let productInfo = req.body;
    if (!productInfo.productId){
      throw new Error("Product ID é obrigatório");
    }
    await ProductService.createProductInfo(productInfo);
    res.end();
    logger.info(`POST /product/info - ${JSON.stringify(productInfo)}`);
  }catch(err){
    next(err);  
  }
}

async function updateProductInfo(req, res, next){
  try{
    let productInfo = req.body;
    if (!productInfo.productId){
      throw new Error("Product ID é obrigatório");
    }
    await ProductService.updateProductInfo(productInfo);
    res.end();
    logger.info(`PUT /product/info - ${JSON.stringify(productInfo)}`);
  }catch(err){
    next(err);  
  }
}

async function getProductInfo(req, res, next){
  try{
    let productId = req.params.id;
    if (!productId){
      throw new Error("Product ID é obrigatório");
    }
    const productInfo = await ProductService.getProductInfo(productId);
    res.send(productInfo);
    logger.info(`GET  /product/info - ${JSON.stringify(productInfo)}`);
  }catch(err){
    next(err);  
  }
}

async function deleteProductInfo(req, res, next){
  try{
    let productId = req.params.id;
    if (!productId){
      throw new Error("Product ID é obrigatório");
    }
    const productInfo = await ProductService.deleteProductInfo(productId);
    res.send(productInfo);
    logger.info(`DELETE /product/info - ${JSON.stringfy(productInfo)}`);
  }catch(err){
    next(err);  
  }
}

async function createProductReview(req, res, next){
  try{
    let params = req.body;
    console.log(req.body)
    if (!params.productId || !params.review){
      throw new Error("Product ID e review são obrigatórios");
    }
    await ProductService.createProductReview( params.productId, params.review);
    res.end();
    logger.info(`POST /product/review - ${JSON.stringify(productInfo)}`);
  }catch(err){
    next(err);  
  }
}

async function deleteProductReview(req, res, next){
  try{
    await ProductService.deleteProductReview( req.params.id, req.params.index);
    res.end();
    logger.info(`DELETE /product/review - ${JSON.stringify(productInfo)}`);
  }catch(err){
    next(err);  
  }
}

async function getAllProductInfo(req, res, next){
  try{
    console.log("controller getallproduct")
    const productInfo = await ProductService.getAllProductInfo();
    res.send(productInfo);
    logger.info(`GET ALL  /product/info - ${JSON.stringify(productInfo)}`);
  }catch(err){
    next(err);  
  }
}

export default {
  createProduct,
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct,
  createProductInfo,
  updateProductInfo,
  getProductInfo,
  getAllProductInfo,
  deleteProductInfo,
  createProductReview,
  deleteProductReview
};
