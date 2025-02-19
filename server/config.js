const MONGO_URL =  process.env.DB_URL || "mongodb://127.0.0.1:27017/fake_so";//"mongodb+srv://add19:aadish3809@cluster0.sgumswr.mongodb.net/fake_so?retryWrites=true&w=majority";
const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:3000";
const port = process.env.PORT || 8000;
const SECRET =
    process.env.SECRET || "6373353530302D66696E616C2D70726F6A6563742D67616E6176692D68616F6E616E";

const JWT_SECRET =
    process.env.JWT_SECRET || "72aa12c4114074990e2d547191297765286f0ca193b2b24ae3a3b3970f417304";

const saltRounds = 10;

module.exports = {
    MONGO_URL,
    CLIENT_URL,
    port,
    SECRET,
    JWT_SECRET,
    saltRounds,
};
