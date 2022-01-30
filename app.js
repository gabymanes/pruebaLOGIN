const express = require ("express")
const app = express ()
const path = require ("path")


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

//RUTAS
app.use("/users",usersRouter)
app.use(express.urlencoded({extended: false}))
app.use(express.json())