const Host = require('./Host');
const Bridge = require('../src/bridge/Bridge');
const Sdk = require('./Sdk');

const bridge = new Bridge(Host.window.BridgeInterface, global);

let sdk = new Sdk(bridge);

sdk.getUser({id: 12345678}).then(data => {
    console.log(`data=${JSON.stringify(data)}`);
}).catch(err => {
    console.log(`err=${JSON.stringify(err)}`);
});

sdk.getLocation().then(data => {
    console.log(`data=${JSON.stringify(data)}`);
}).catch(err => {
    console.log(`err=${JSON.stringify(err)}`);
});

sdk.getXXX().then(data => {
    console.log(`data=${JSON.stringify(data)}`);
}).catch(err => {
    console.log(`err=${JSON.stringify(err)}`);
});
