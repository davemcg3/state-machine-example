export default class LocalWarehouse {
    local = false;
    defaultKey = 'stateMachineExample';

    constructor() {
        if (typeof (Storage) !== "undefined") {
            this.local = true;
        }
    }

    save(payload, key=this.defaultKey) {
        if (!this.local) return null;
        if (!payload.isArray()) return null;
        // localStorage can only store strings but payload should be an array of objects
        let lastSave = JSON.parse(this.load()) || [];
        payload.forEach(item => lastSave.push(item));
        return window.localStorage.setItem(key, JSON.stringify(lastSave));
    }

    load(key=this.defaultKey) {
        if (!this.local) return null;
        if (!(typeof key === 'string' || key instanceof String)) return null;
        return window.localStorage.getItem(key);
    }

    remove(key=this.defaultKey) {
        if (!this.local) return null;
        if (!(typeof key === 'string' || key instanceof String)) return null;
        return window.localStorage.removeItem(key);
    }

    clear() {
        if (!this.local) return null;
        return window.localStorage.clear();
    }

    key(index) {
        if (!this.local) return null;
        return window.localStorage.key(index);
    }
}