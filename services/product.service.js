import ProductRepository from "../repositories/product.repository.js";
import SupplierRepository from "../repositories/supplier.repository.js";
import SaleRepository from "../repositories/sale.repository.js";
import ProductInfoRepository from "../repositories/productInfo.repository.js";


async function createProduct(product) {
  const Supplier = await SupplierRepository.getSupplier(product.supplierId);
  if (Supplier) {
    return ProductRepository.insertProduct(product);
  } else {
    throw new Error(
      "Supplier não existe! Cadastre o Supplier antes de cadastrar os produtos dele!"
    );
  }
}

async function getProducts() {
  return ProductRepository.getProducts();
}
async function getProduct(id) {
  const product = await ProductRepository.getProduct(id);
  if (product){
    const productInfo = await getProductInfo(id);
    product.dataValues.Info = productInfo;
  }
  return product;
}
async function deleteProduct(id) {
  const sales = await SaleRepository.getSalesByProductId(id);
  if(sales.length>0){
    throw new Error ("Não é possível excluir o produto pois ele tem vendas!")
  }
  return ProductRepository.deleteProduct(id);
}

async function updateProduct(product) {
  const Supplier = await SupplierRepository.getSupplier(product.supplierId);
  if (Supplier) {
    return ProductRepository.updateProduct(product);
  } else {
    throw new Error(
      "Supplier não existe! Cadastre o novo Supplier antes de alterar o Supplier do produto!"
    );
  }
}

async function createProductInfo(productInfo){
  return await ProductInfoRepository.createProductInfo(productInfo);
}

async function updateProductInfo(productInfo){
  return await ProductInfoRepository.updateProductInfo(productInfo);
}

async function getProductInfo(productInfo){
  return ProductInfoRepository.getProductInfo(parseInt(productInfo));
}

async function deleteProductInfo(productInfo){
  return ProductInfoRepository.deleteProductInfo( parseInt(productInfo) );
}

async function createProductReview(productId, review){
  await ProductInfoRepository.createProductReview( parseInt(productId), review );
}


async function deleteProductReview(productId, index){
  await ProductInfoRepository.deleteProductReview( parseInt(productId), parseInt(index) );
}

async function getAllProductInfo(){
  return await ProductInfoRepository.getAllProductInfo();
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
