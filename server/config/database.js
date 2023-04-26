const mongoose = require('mongoose');

const DATABASE_URL  = "mongodb+srv://admin-pragya:Pragya1*@cluster0.bnzao.mongodb.net/Reunion?retryWrites=true&w=majority";

exports.connect = () => {
  mongoose
  .connect(DATABASE_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
  })
  .then(console.log("DB Connected Sucessfully!"))
  .catch((error) => {
    console.log("DB Connection Failed!");
    console.log(error);
    process.exit(1);
  });
}
