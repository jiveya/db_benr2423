const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.lhdjj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect(async err => {
    if(err) {
        console.log(err.message)
        return
    }
    console.log('Connected to MongoDB');

//Inserts a document into the collection ~ insertOne().
//Will create db named 'myFirstDatabase' and collection named 'customers' if it's not found.
  // client.db('myFirstDatabase').collection('customers').insertOne({ 
  //	name: 'James ',
	//	age: 30,
	//	location: 'New York',
	//	isActive: true,
	//	tags: ['tag1', 'tag2'],
  //}).then(result => {         // -OLD METHOD using then(result=>...)
		//console.log(result);
  
   // client.db('myFirstDatabase').collection('customers').insertOne({        
      //  name:'James Friend',      
      //  friend:result.insertedId,                                              
      //  age:31,
      //  location:'New York',
      //  isActive: true,
      //  tags:['tags1','tags2'],
      // }).then(result => {                                                     
      //       console.log(result);
      //   })
      // })
                      //OR
//NEW METHOD:Insert by using await operator that used to wait for a promise
//Await is only valid in async function=> important**change client.connect(async err) ,then let result = await client.db...
  //  console.time('insert');   //async process=awaits, which is a process that takes time to complete the operation
  //  let result = await client.db('myFirstDatabase').collection('customers').insertOne({
  //  	name: 'Michael',
	//    age: 32,
	//  	location: 'New York',
	//  	isActive: true,
	//  	tags: ['tag1', 'tag2'],
	//  })
  //  console.timeEnd('insert');
  //  console.log('Doc inserted', result);
  //  });
  
//Insert multiple documents into a collection ~ insertMany()
    //console.time('insert');//async process=awaits, which is a process that takes time to complete the operation
    //let result = await client.db('myFirstDatabase').collection('customers').insertMany([
    // {
    //     name: 'Jean ',
    //     age: 30,
    //     location: 'New York',
    //     isActive: true,
    //     tags: ['tag1', 'tag2'],
    // },{
    //     name: 'Charles',
    //     age: 35,
    //     location: 'London',
    //     isActive: true,
    //     tags: ['tag1', 'tag2','tags3','tags4'],
    // }
    //])
    //console.timeEnd('insert');
    //console.log('doc inserted', result);
    //})

//updateOne- used to update / change the document saved before
   //await client.db('myFirstDatabase').collection('customers').updateOne({
	 //  name: 'John'
         //  _id:ObjectId("62383db8bd95365831be6816") 
	 // }, {
	 //	$set: {
	 //	name: "John Mac",
	 //	age: 35
	 //	}
//upsert used to update or insert
	 //}, { upsert: true }).then(res => {
	 //	console.log(res)
	 //})
          // OR
//updateOne() by using await 
  //console.time('insert');
  // let result = await client.db('myFirstDatabase').collection('customers').updateOne(
	//	 { name: 'John Mac' },
	// 	 { $set: { location: 'Denmark' }},
	// 	 { upsert: true }
	// )
  //   console.timeEnd('insert');
  //   console.log('Doc inserted', result);
  
//Delete-deleteOne()function-Using id  
     //client.db('myFirstDatabase').collection('customers').deleteOne({ _id :ObjectID("6238564383315ba60bdce0b8") }).then(result => {
     //          console.log(result);
     //   })
  
//Delete-deleteOne()function-Using name 
    //  client.db('myFirstDatabase').collection('customers').deleteOne({ name:"James chadwick" }).then(result => {
    //  console.log(result);
    // })

//Delete-using deleteMany() func
     client.db('myFirstDatabase').collection('customers').deleteMany({
     name: "John Mac", 
     age: 35 
     }).then(result => {
     console.log(result.deletedCount);
     })

});
