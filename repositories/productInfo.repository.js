import {getClient} from "./mongo.db.js";

async function createProductInfo(productInfo){
    const client = getClient();
    try{
        await client.connect();
        return await client.db("store").collection("productInfo").insertOne(productInfo);
    }catch(err){
        throw err;
    }finally{
        await client.close();
    }
}

async function updateProductInfo(productInfo){
    const client = getClient();
    
    try{
        await client.connect();
        await client.db("store").collection("productInfo")
            .updateOne({productId: productInfo.productId}, {$set: {...productInfo}});
    }catch(err){
        throw err;
    }finally{
        await client.close();
    }
}

async function getProductInfo(productId){
    const client = getClient();
    try{
        await client.connect();
        return await client.db("store").collection("productInfo")
            .findOne({productId});
    }catch(err){
        throw err;
    }finally{
        await client.close();
    }
}

async function getAllProductInfo(){
    const client = getClient();
    try{
        await client.connect();
        return await client.db("store").collection("productInfo").find({}).toArray();
    }catch(err){
        throw err;
    }finally{
        await client.close();
    }
}

async function deleteProductInfo(productId){
    const client = getClient();
    console.log(productId)
    try{
        await client.connect();
        await client.db("store").collection("productInfo")
            .deleteOne({productId});
    }catch(err){
        throw err;
    }finally{
        await client.close();
    }
}

async function createProductReview(productId, review){
    const client = getClient();
    try{
        await client.connect();
        const productInfo = await getProductInfo(productId);
        console.log(productInfo)
        productInfo.reviews.push(review);
        await updateProductInfo(productInfo)
    }catch(err){
        throw err;
    }finally{
        await client.close();
    }
}

async function deleteProductReview(productId, index){
    const client = getClient();
    try{
        console.log(productId, "  ", index)
        await client.connect();
        const productInfo = await getProductInfo(productId);
        console.log(productInfo)
        productInfo.reviews.splice(index, 1);
        await updateProductInfo(productInfo)
    }catch(err){
        throw err;
    }finally{
        await client.close();
    }
}

export default {
    createProductInfo, 
    updateProductInfo, 
    getProductInfo,
    getAllProductInfo,
    deleteProductInfo, 
    createProductReview, 
    deleteProductReview 
}