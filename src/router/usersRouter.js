const router = express.Router()
const controller = require ("../controller/userController")

router.get("/",controller.index)
router.get("/login", controller.login)
router.post("/login",[
check("password").isLength({min:4}).withMessage("La contraseña tiene que tener 4 caracteres")
],controller.logueado)

module.exports = router