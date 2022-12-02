//Install express server
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000
// Serve only the static files form the dist directory
app.use(express.static(path.join(__dirname, 'dist/')));

// app.get('*', (req, res) =>
//     res.sendFile('index.html', {root: __dirname + '/dist'})
//     // res.sendFile(path.resolve('dist/index.html'))
//     // {root: 'dist/'}
//     // ),
// );

// Start the app by listening on the default Heroku port
app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`)
});