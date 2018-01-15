const jsonServer = require('json-server');
const db = require('./db.json')
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

const loginResult = (req) => {
    const { players } = db;

    const { username } = req.body;

    const existUser = Object.keys(players).find(player => {
        return player === username;
    });

    if(existUser){
        const { password } = req.body;
        if(players[existUser].password === password){

            const player = Object.assign({},players[existUser]);
            delete player.password;

            return {
                status: 'success',
                player
            }
        } else {
            return {
                status: 'fail',
                error: 'player does not exist or wrong password'
            }
        }
    } else {
        return {
            status: 'fail',
            error: 'player does not exist or wrong password'
        }
    }
};

const logoutResult = (req) => {
    const { players } = db;

    const { username } = req.body;

    const existUser = Object.keys(players).find(player => {
        return player === username;
    });

    if(existUser){
        return {
            status: 'success'
        }
    } else {
        return {
            status: 'fail',
            error: 'Username do not match!'
        }
    }
};

const playerResult = (req) => {
    const { players } = db;

    const { username } = req.body;

    const existUser = Object.keys(players).find(player => {
        return player === username;
    });

    if(existUser){
        const player = Object.assign({},players[existUser]);
        delete player.password;

        return {
            status: 'success',
            username, 
            ...player
        }
    } else {
        return {
            status: 'fail',
            error: 'Username do not match!'
        }
    }
};

server.post('/login', (req, res) => {
    const result = loginResult(req);
    return res.send(result);
});

server.post('/logout', (req, res) => {
    const result = logoutResult(req);
    return res.send(result);
});

server.post('/player', (req, res) => {
    const result = playerResult(req);
    return res.send(result);
});

server.use(router);

server.listen(3000, () => {
  console.log('JSON Server is running...')
});