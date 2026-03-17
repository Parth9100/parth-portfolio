const net = require('net');

const port = 27017;
const host = 'practice1-shard-00-00.uta1j4q.mongodb.net';

console.log(`Testing connection to ${host}:${port}...`);

const socket = new net.Socket();
socket.setTimeout(5000);

socket.on('connect', () => {
    console.log('SUCCESS: Successfully connected to MongoDB Atlas on port 27017!');
    socket.destroy();
});

socket.on('timeout', () => {
    console.error('ERROR: Connection timed out. Port 27017 is blocked by your network/firewall.');
    socket.destroy();
});

socket.on('error', (err) => {
    console.error(`ERROR: Could not connect to MongoDB Atlas -> ${err.message}`);
    if (err.code === 'ECONNREFUSED' || err.code === 'ETIMEDOUT') {
        console.error('This means your current internet network (Cisco Umbrella/VPN/ISP) is actively blocking outbound connections to port 27017.');
    }
});

socket.connect(port, host);
