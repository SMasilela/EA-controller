const express = require('express');
const app = express();
const server = require('http').createServer(app);
const WebSocket = require('ws');

const wss = new WebSocket.Server({server:server});

wss.on('connection',ws=>{
    console.log('New client connected!');
    
    ws.on('close', ()=>{
        console.log('Client has disconnected!')
    })
})
