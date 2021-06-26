const express = require('express');
const mongoose = require('mongoose');


const app = express();

app.use(express.json({extended:true}));
app.use('/api/auth',require('./routes/auth.routes'));
app.use('/api/user',require('./routes/user.routes'));


const PORT = process.env.PORT || 5000;

async function start() {
    try {
        await mongoose.connect('mongodb+srv://Lusine:123456qwerty@cluster0.5qmft.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology:true,
            useCreateIndex:true,
            useFindAndModify:true
        });
        app.listen(PORT, () => {
            console.log(`Server listen on port ${PORT}...`);
        });
        
    } catch (e) {
        console.log(e.message);
        process.exit(1);
    }
}

start();
