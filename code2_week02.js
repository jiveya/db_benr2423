const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.lhdjj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    if(err) {
        console.log(err.message)
        return
    }
     console.log('Connected to MongoDB');
     //to list down all the databases:
     client.db().admin().listDatabases().then(result => {
           console .log(result);
        })
    })
