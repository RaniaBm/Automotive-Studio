const returnname = (req, res) => { res.send('This is me Rania Bm'); }
const home = (req, res) => { res.send('This is Home Page'); }
const aboutus = (req, res) => { res.send('This is About us Page'); }
const admin = (req, res) => { res.send('This is Admin Page'); }


module.exports = { returnname, home, aboutus, admin };