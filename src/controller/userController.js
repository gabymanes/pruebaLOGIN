const path = require ("path")
const usersFilePath = path.join(__dirname, '../../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'))
const controller = {
    index: (req,res) => {
        res.render ("index")
    }
}
module.exports = controller