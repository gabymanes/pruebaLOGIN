const path = require ("path")
const usersFilePath = path.join(__dirname, '../../data/users.json');
const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'))
const controller = {
    index: (req,res) => {
        res.render ("index")
    },
    
    login:(req,res) => {
        res.render("login")
    },

    logueado :(req,res) => {
        let errors = validationResult(req)
        if (errors.isEmpty()) {
        //aca tenes que traer el JSON
        }
            for (let i=0;i < users.length ;i++){
                if (users[i].email== req.body.email){
        // falta bcrypt para validar la contraseña
                }
            }
            //aca falta codigo del bcrypt
            if (usuarioALoguear== undefined) {
                return res.render ("login", {errors: [{msg: "ERRORES"}]})
            }

            req.session.usuarioLogueado = usuarioALoguear

            if(req.body.recordarme =! undefined ) {
                res.cookie("recordarme",usuarioALoguear.email,{
                    maxAge: NIIDEA
                })

            }

        else {
            return res.render ("login", {errors})
        }
    },

}
module.exports = controller