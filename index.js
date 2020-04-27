const express         = require('express'),
      mongoose        = require('mongoose'),
      bcrypt          = require('bcryptjs'),
      bodyParser      = require('body-parser'),
      User            = require('./models/user'),
      moment          = require('moment'),
      MongoDB_URL     = process.env.MONGODB_URL || "mongodb://localhost/User-API",
      MongoDB_OPTIONS = { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }

const app = express();
mongoose.connect(MongoDB_URL, MongoDB_OPTIONS);
app.use(bodyParser.json());


app.get('/', async (req, res) => {
    res.json("Please review https://github.com/amirf2/Users-API for documentation");
});


app.get('/api/admin/users', async (req, res) => {
    try{
        const allUsers = await User.find({ });
        res.json(allUsers);
    } catch(e){
        return res.status(500).json({error: e.message})
    }
});


app.post('/api/users', async (req, res) => {
    console.log(moment().format());
    try{
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const user = {...req.body, password: hash, created_at: moment().format()}
        const newUser = await User.create(user);
        return res.status(204).send();
    } catch (e){
        return res.status(500).json({error: e.message})
    }
});


app.use((req, res) => {
    res.status(404).json({ message: 'Path not found, only the following paths are supported: GET /api/admin/users, POST /api/users' });
  });


app.listen(PORT, function () {
    console.log(`User API Server listening.. Access it using address: ${SERVER_URL}`);
});

