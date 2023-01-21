const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useCreateIndex: true,
  // useFindAndModify:false
})
.then(() => console.log("DB connection established"))
.catch((err) => console.log("DB not connected"));
