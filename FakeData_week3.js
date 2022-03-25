
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.lhdjj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(async err => {
    if(err) {
        console.log(err.message)
        return
    }
    console.log('Connected to MongoDB');

	const { faker } = require('@faker-js/faker');
	const faker_zh_CN= require('@faker-js/faker/locale/zh_CN');
	const firstname = faker.name.firstName(); 
	const lastname = faker.name.lastName();
	const country= faker.address.country();
	const city= faker.address.city();
	const Email = faker.internet.email(); 
	const PhoneNumber = faker.phone.phoneNumber(); 
	const homepage= faker.internet.url();
        const avatar= faker.internet.avatar();
	const zh_CN_fullName = `${faker_zh_CN.name.firstName()} ${faker_zh_CN.name.lastName()}`;
	
		console.time('insert');
		let result= await client.db('Faker_Demo').collection('Faker_information').insertOne({
	
			Firstname:`${firstname}`,
			Lastname: `${lastname}`,
			Country:`${country}`,
                        City:`${city}`,
			PhoneNumber: `${PhoneNumber}`,
			Email:`${Email}`,
			AvatarURL:`${avatar}`,
			HomePage:`${homepage}`,
			_zh_CN_Name:`${zh_CN_fullName}`

			////////////OR ////////////////

			//'Firstname':faker.name.firstName(),
			//'Lastname':faker.name.lastName(),
			//'Country':faker.address.country(),
			//'City':faker.address.city(),
			//'Email':faker.internet.email(),
			//'PhoneNumber':faker.phone.phoneNumber(),
		        //'HomePage': faker.internet.url(),
                        //'AvatarURL': faker.internet.avatar()
			
			})  
	
		console.timeEnd('insert');
		console.log("Document inserted !", result);
	});
