import mongodb from "mongodb";

function getClient(){

    //console.log("fazendo conexao...")
    const uri = "mongodb+srv://tonio:tonio@cluster0.i7qu8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    const client = new mongodb.MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    //console.log("conexao feita... ",client);
    return client;
}

export {getClient}