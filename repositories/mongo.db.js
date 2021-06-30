import mongodb from "mongodb";

function getClient(){

    //console.log("fazendo conexao...")
    const uri = "mongodb+srv://xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
    const client = new mongodb.MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    //console.log("conexao feita... ",client);
    return client;
}

export {getClient}
