
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.lhdjj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    if(err) {
        console.log(err.message)
        return
    }
     console.log('Connected to MongoDB');
 //List down all the databases:
     //client.db().admin().listDatabases().then(result => {
        //console .log(result);
        //console .log(result['databases']);
//Array method to view the specific databases:-
      //  console .log(result['databases'][5]);
      //  console .log(result['databases'][5]['name']);
      //  console .log(result['databases'][5]['sizeOnDisk']);
      //  console .log(result['databases'][5]['empty']);
     //})
     //const collection = client.db("test").collection("devices");
// List down all the collection under a specific database:
     //client.db('sample_training').listCollections().toArray().then(result => {
      // console .log(result);
     // })
     // client.db('sample_airbnb').listCollections().toArray().then(result => {
          //  console.log(result);
         // console.log(result[4]);
     //})
//Find documents under a collection
     //client.db('sample_training').collection('trips').find().toArray().then(result =>{
         //  console.log(result)
         //  console.log(result[2]) //use array  
     //})
     //client.db('sample_training').collection('companies').find({}).toArray().then(result=>{
              // console.log(result)      
     //})  
     //client.db('sample_training').collection('companies').find({'name':'Zenfolio'}).toArray().then(result=>{
      //  console.log(result)
     //})
     //client.db('sample_training').collection('companies').find({'name':'Zenfolio'},{'founded year':2005}).toArray().then(result=>{
           // console.log(result)
     //})
     client.db('sample_training').collection('companies').find({'name':'Adteractive'},{ category_code: 'advertising'}).toArray().then(result=>{
            console.log(result)
   })
     });

