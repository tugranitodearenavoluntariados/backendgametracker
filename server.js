const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Conexión a MongoDB
mongoose.connect(
  "mongodb+srv://gameadmin:game1234@cluster0.z743zbk.mongodb.net/GameTrackerDB?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
)
.then(() => console.log("MongoDB conectado"))
.catch(err => console.error(err));

// Rutas
app.use("/api/games", require("./routes/games"));
app.use("/api/reviews", require("./routes/reviews"));

// Servidor
const PORT = 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
