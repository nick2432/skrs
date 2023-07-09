const express = require("express");
const app = express();
const mongoose = require("mongoose");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const morgan = require("morgan")
const helmet = require("helmet");
const driver =require("./router/driver");
const passanger = require("./router/passanger");
app.use(cors());
const server = http.createServer(app);
const database = (module.exports = () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  try {
    mongoose.connect(
      "mongodb+srv://nikhilanand2432:uRbxUvORTU6QJ8yd@cluster0.ebjo83o.mongodb.net/?retryWrites=true&w=majority",
      connectionParams
    );
    console.log("Database connected succesfully");
  } catch (error) {
    console.log(error);
    console.log("Database connection failed");
  }
});
database();
const io = new Server(server, {
  cors:{
    origin:"*"
},
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);
  socket.on("book_driver", (data) => {
    socket.broadcast.emit("information", data);
  });
  socket.on("accept",(data)=>{
    socket.broadcast.emit("accepted", data);
  });
  socket.on("passenger",(data) => {
    socket.broadcast.emit('pass',data);
  });
  socket.on("details",(data) => {
    socket.broadcast.emit('driverdetails',data);
  });
});
app.use(express.json());
app.use(helmet());
app.use('/api', driver);
app.use('/api', passanger);
app.use(morgan("common"));
server.listen(8100, () => {
  console.log("SERVER IS RUNNING");
});