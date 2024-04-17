const webScocket = require('ws');
const wss = new webScocket.Server({port:8087});
wss.on('connection' , (ws)=>{
    console.log
    {"un nuevo usuario conectado"};
    ws.on('message', (data)=>{
        console.log(`mensaje:${data}`);
        wss.clients.forEach((cliente)=>{
            if(cliente != ws && cliente.readyState === webScocket.OPEN){
                cliente.send(data);
            }
        });
    });
    ws.on('close',()=>{
        console.log('usuario desconectado');
    });
});
console.log('server funcionando!');