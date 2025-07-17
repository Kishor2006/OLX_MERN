const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose
      .connect(
        "mongodb+srv://kishorhcs:yDLtix1j52T9LO1W@cluster0.mxutapa.mongodb.net/majorBuySellDB?retryWrites=true&w=majority&appName=Cluster0"
      )
      .then(() => console.log("🔥 DB Connected Successfully"))
      .catch((err) => console.error("DB Error:", err));
  } catch (err) {
    console.error("DB Error:", err);
  }
};

module.exports = connectDB;
