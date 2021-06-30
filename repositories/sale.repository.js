import DB from "./db.js";
import Sale from "../models/sale.model.js";
import Product from "../models/product.model.js";
import Client from "../models/client.model.js";


async function insertSale(sale) {
  try{
    return await Sale.create(sale);
  }  catch(err){
    throw err;
  }
}

async function getSale(id) {
  try{
    return await Sale.findByPk(id);
  } catch(err){
    throw err;
  }
}

async function getSales() {
  try{
    return await Sale.findAll({
      include:
      [ {
          model: Product
        },
        {
          model: Client
        }
      ]
    });
  }catch(err){
    throw err;
  }
}

async function getSalesByProductId(productId) {
  try{
    return await Sale.findAll({
        where: {productId: productId},
        include:
        [ {
            model: Product
          },
          {
            model: Client
          }
        ]
    });
  }catch(err){
    throw err;
  }
}

async function getSalesBySupplierId(supplierId) {
  try{
    return await Sale.findAll({
        include:
        [ {
            model: Product,
            where:{supplierId: supplierId}
          }
        ]
    });
  }catch(err){
    throw err;
  }
}


async function deleteSale(id) {
  try{
     await Sale.destroy({
      where:{ saleId:id }
    });
  }catch(err){
    throw err;
  }
}

async function updateSale(sale) {
  try{
     await Sale.update(sale, {
      where:{ saleId: sale.saleId }
    });
    return getSale(sale.SaleId);
  }
  catch(err){
    throw err;
  }
}

export default {
  insertSale,
  getSale,
  getSales,
  getSalesByProductId,
  getSalesBySupplierId,
  updateSale,
  deleteSale
};
