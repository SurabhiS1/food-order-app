
const MongoClient = require("mongodb").MongoClient;


async function main() {
    const uri = "mongodb+srv://surabhisonam994:surabhi13@test.yszijtz.mongodb.net/?retryWrites=true&w=majority&appName=test";
    const client = new MongoClient(uri);

    try {
        await client.connect();
        console.log("Connected to MongoDB");


        const productsCollection = client.db("food-order").collection("products");
        const categoriesCollection = client.db("food-order").collection("categories");

        let categories = ['breakfast', 'lunch', 'dinner', 'drinks'].map((category) => { return { name: category } });
        await categoriesCollection.insertMany(categories);

        // let imageUrls = [
        //     'https://res.cloudinary.com/dlv0lekro/image/upload/v1657056151/food-ordering-app/1_mfgcb5.png',
        //     'https://res.cloudinary.com/dlv0lekro/image/upload/v1657056151/food-ordering-app/2_afbbos.png',
        //     'https://res.cloudinary.com/dlv0lekro/image/upload/v1657056151/food-ordering-app/3_iawvqb.png',
        // ]

        // let products = [];
        // for (let i = 0; i < 10; i+=1) {
        //     let newProduct = {
        //         name: faker.commerce.productName(),
        //         adjective: faker.commerce.productAdjective(),
        //         desciption: faker.commerce.productDescription(),
        //         price: faker.commerce.price(),
        //         category: _.sample(categories),
        //         imageUrl: _.sample(imageUrls)
        //     };
        //     products.push(newProduct);
        // }
        const products = [
            { name: 'pasta', adjective: 'too good', description: 'gluten free pesto pasta with sundried tomatoes', price: '300', category: 'dinner' },
            { name: 'omlette', adjective: 'wake up', description: 'protein rich with egg whites', price: '100', category: 'breakfast' },
            { name: 'sandwich', adjective: 'fulfilling', description: 'made with cheese and multigrain bread', price: '250', category: 'lunch' },
            { name: 'mojito', adjective: 'yummy', description: 'with fresh lime and soda', price: '150', category: 'drinks' }
        ];
    


        await productsCollection.insertMany(products);
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main();