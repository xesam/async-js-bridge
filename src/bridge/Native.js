const { VERSION, NATIVE, WEB } = require("./Protocol");

class Native {
    constructor(bridge, native) {
        this.bridge = bridge;
        this.native = native;
    }

    _invoke(action, payload, listener = null) {
        this.native.invoke(
            JSON.stringify(action),
            JSON.stringify(payload),
            JSON.stringify(listener)
        );
    }

    invokeCall(action, payload, webCallback) {
        let cbkName = this.bridge.pushWebCallback(webCallback);
        let listener = { [NATIVE.LISTENER_NAME]: cbkName };
        this._invoke(action, payload, listener);
    }

    invokeCallback(action, payload = null) {
        this._invoke(action, payload);
    }

    pushCallback(listener) {
        let action = {
            [NATIVE.BRIDGE_VERSION]: VERSION,
            [NATIVE.ACTION_NAME]: listener && listener[NATIVE.LISTENER_NAME],
            [NATIVE.ACTION_TYPE]: NATIVE.TYPE_CALLBACK
        };
        return payload => {
            this.invokeCallback(action, payload);
        };
    }
}
module.exports = Native;
