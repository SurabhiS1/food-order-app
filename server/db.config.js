const dbName = 'food-order';
const dbUser = 'surabhisonam994';
const dbPassword = 'surabhi13';
const dbCluster = 'test.yszijtz.mongodb.net';

module.exports = {
    url: `mongodb+srv://${dbUser}:${dbPassword}@${dbCluster}/${dbName}?retryWrites=true&w=majority`
}
// module.exports = {
//     url: "mongodb+srv://surabhisonam994:surabhi13@test.yszijtz.mongodb.net/?retryWrites=true&w=majority&appName=test"
// }