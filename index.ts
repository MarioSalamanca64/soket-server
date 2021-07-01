//--inicio--
//npm init 
//--instalaciones--
//npm install express
//npm install cors //para elmanejo de las url
//npm install body-parser //para los metodos input delate get 
//--correr como si fuera typescryp--
//tsc --init //se crea el archivo tsconfig.json
//--configuraciones al archivo--
//"target": "es6"
//"type": ["node"]
//"outDir": "dist/" //esto es para donde guardar lo que estamos copilando 


import Server from "./classes/server";
import router  from "./routes/router";
import bodyParser from "body-parser"; //esto rive para que los datos que manden por post ya llegen de formato json
import cors from 'cors';
 const server = new Server();

 //BodyParses sea lo que sea que manden trasformalo en un objeto de js
 //debe de ser antes de las rutas 
 server.app.use(bodyParser.urlencoded({extended:true}));
 server.app.use(bodyParser.json() );
 
 //cors configuracion de rutas obligatorio
 //aque desimos que cualquier persona puede llamar mis servicios 
 server.app.use(cors({ origin: true , credentials: true }));


 server.app.use('/', router);


server.start( () => {
    console.log(`servidor corriendo en el puerto ${server.port}`);
})