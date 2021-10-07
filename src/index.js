import express, { json } from 'express';

const port = process.env.PORT | 8000;
const app = express();

app.use(json());

app.get('/hello', (req, res) => {
    res.status(200).json({ message: 'Hello!' });
});

app.get('/hello/:name', (req, res) => {
    const name = req.params.name;

    res.status(200).json({ message: `Hello ${name}!` });
});

app.post('/hello', (req, res) => {
    const body = req.body;
    
    res.status(200).json({ 
        message: 'Hello!',
        content: body 
    });
});

app.all('*', function(req, res){
    res.status(400).json({message: 'Page not found'});
});
  
app.listen(port, () => {
    console.log(`Express server is listening on port ${port}`);
});
