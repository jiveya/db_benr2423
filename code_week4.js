const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.lhdjj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(async err => {
    if(err) {
        console.log(err.message)
        return
    }
    console.log('Connected to MongoDB');

    // let result1=await client.db('sample_training').collection('trips').count({ tripduration:{'$lt':350} })
    //     console.log("result :",result1);
    // })

    //Find all documents that has tripduration less than 350
    // client.db('sample_training').collection('trips').find({ tripduration:{'$lt':350} }).toArray().then(result=>{
    //     console.log(result);
    // })

    //Find documents that  usertype not equal to subscriber
    //let result2 = await client.db('sample_training').collection('trips').find({"usertype":{'$ne': "Subscriber"}}).toArray()
    //   console.log(result2);

    //Find all documents in the trips collection where the value of tripduration is either 100 or 200
    // client.db('sample_training').collection('trips').find({ tripduration:{'$in':[100,200]} }).toArray().then(result=>{
    //     console.log(result);
    // })

    //Find all documents that tripduration less than or equal to 100 and not subscriber
    //  let result3 = await client.db('sample_training').collection('trips').find({"tripduration":{'$lte':100},"usertype":{'$ne': "Subscriber"}}).toArray()
    //   console.log(result3);
    
    //Find all documents that tripduration less than or equal to 70 and the usertype was Customer
    //let result4 = await client.db('sample_training').collection('trips').find({ "tripduration": { "$lte" : 100 }, "usertype": { "$eq": "Customer" }}).toArray()
    // console.log(result4);
    
    //Find all documents where airplanes CR2 or A81 left or landed in the KZN airport~ using the $and and $or operator
    //let result5 = await client.db('sample_training').collection('routes').find({ "$and": [ { "$or" :[ { "dst_airport": "KZN" },{ "src_airport": "KZN" }] },{ "$or" :[ { "airplane": "CR2" },{ "airplane": "A81" } ] } ]}).toArray()
    //  console.log(result5);

    // let result6 = await client.db('sample_training').collection('trips').updateOne({_id:ObjectId("572bb8222b288919b68abf68")},
    //  {'$set':{"start station name":"Hogwarts"}} )
    //  console.log(result6);

    //console.time('insert');
    //let result = await client.db('sample_db').collection('fakeData').insertMany([
    //  {
    //      name: 'Twitter ',
    //      followers: 30000,
    //      location: 'New York',
    //      likes: 50000
    //  },{
    //      name: 'Facebook',
    //      followers: 400000,
    //      location: 'London',
    //      likes: 100000
    // },{
    //    name: 'TikTok',
    //    followers: 500000,
    //    location: 'United Kingdom',
    //    likes: 200000
    // }
    //])
    //  console.timeEnd('insert');
    //  console.log('doc inserted', result);
    //})
    
    //$set operator replaces the value of a field with the specified value.
    // client.db('sample_db').collection('fakeData').updateOne(            
    // {_id : ObjectId('62491cb95bc6b7bdf12a51d1')},
    // { $set: {likes: 1000000}}                                           
    // ).then(result => {  
    // console.log(result);                                         
    //});
    //})

    //$unset operator deletes a particular field.
    //client.db('sample_db').collection('fakeData').updateOne(            
    // {_id : ObjectId('62491cb95bc6b7bdf12a51d1')},
    // { $unset: {likes:1000000}}                                          
    // ).then(result => {  
    // console.log(result);                                         
    //});
    //})
    
    //$inc operator increments a field by a specified value 
    //client.db('sample_db').collection('fakeData').updateOne(              
    // {_id : ObjectId('62491cb95bc6b7bdf12a51d1')},
    //{ $inc: {likes: 100}}                                           
    //).then(result => {  
    //console.log(result);                                         
    //});
    //})

   //$max operator updates the value of the field to a specified value if the specified value is greater than the current value of the field.
   //client.db('sample_db').collection('fakeData').updateOne(          
   //  {_id : ObjectId('62491cb95bc6b7bdf12a51d2')},
   //  { $max: {likes: 100000}}                                          
   //).then(result => {  
   // console.log(result);                                         
   //});
   //})
   
   // $min updates the value of the field to a specified value if the specified value is less than the current value of the field.
   //client.db('sample_db').collection('fakeData').updateOne(          
   // {_id : ObjectId('62491cb95bc6b7bdf12a51d2')},
   // { $min: {likes: 10}}                                          
   // ).then(result => {  
   //console.log(result);                                         
   //});
   //})
  
   // client.db('sample_db').collection('fakeData').updateOne( 
   //   {_id : ObjectId('62491cb95bc6b7bdf12a51d3')},
   //   { $set: { reviews: [
   //     'helpful',
   //     'flexible',
   //     'user-friendly'
   //   ]}                                           
   // }).then(result => {  
   //   console.log(result);                                         
   // });
   // })
    
    //$push operator ~ appends/insert a specified value to an array.
    //client.db('sample_db').collection('fakeData').updateOne(         
    // {_id : ObjectId('62491cb95bc6b7bdf12a51d3')},
    // { $push: { reviews: 'Amazing' }                                           
    //}).then(result => {  
    // console.log(result);                                         
    //});
    //})
    
    // $pop operator ~ removes the first or last element of an array
    // client.db('sample_db').collection('fakeData').updateOne(     
    // {_id : ObjectId('62491cb95bc6b7bdf12a51d3')},
    // { $pop: { reviews:-1 }    //[-1]~remove first element && [1] remove last element in the array
    // }).then(result => {  
    // console.log(result);                                         
    // });
    // })
    
    // $addToSet operator ~ adds a value that not exist in an array
    // client.db('sample_db').collection('fakeData').updateOne(         
    //{_id : ObjectId('62491cb95bc6b7bdf12a51d3')},
    //{ $addToSet: { reviews: 'good' }                                           
    //}).then(result => {  
    //console.log(result);                                         
    //});
    //})
    
    //$pull operator ~ removes all selected instances of a value in a array
    client.db('sample_db').collection('fakeData').updateOne(   
    {_id : ObjectId('62491cb95bc6b7bdf12a51d3')},     
    { $pull: { reviews: "good"}                                           
    }).then(result => {  
     console.log(result);                                         
    });
    })
