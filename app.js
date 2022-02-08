const express = require ("express")
const app = express ()
const path = require ("path")
const session = require ("expression-session")
const cookieParser = require('cookie-parser')


//SERVIDOR
const port = 3000
app.listen(port,() => {
    console.log ("Servidor funcionando en " + port )
})

//EJS
app.set = ("view engine" , "ejs")
app.set = ("views",path.join("./src/views"))


//ROUTER
const usersRouter = require (".src/router/userRouter")
const mainRouter = require ("./src/router/mainRouter")


//RUTAS y APP USE
app.use("/",mainRouter)
app.use("/users",usersRouter)
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(session({secret : "TOP SECRET"}))
app.use(cookieParser())