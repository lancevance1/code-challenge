const Ziggy = {"url":"http:\/\/localhost","port":null,"defaults":{},"routes":{"api.media.index":{"uri":"api\/media","methods":["GET","HEAD"]},"api.media.store":{"uri":"api\/media","methods":["POST"]},"api.media.show":{"uri":"api\/media\/{medium}","methods":["GET","HEAD"],"bindings":{"medium":"id"}},"api.media.update":{"uri":"api\/media\/{medium}","methods":["PUT","PATCH"],"bindings":{"medium":"id"}},"api.media.destroy":{"uri":"api\/media\/{medium}","methods":["DELETE"],"bindings":{"medium":"id"}},"search":{"uri":"search","methods":["GET","HEAD"]},"home.index":{"uri":"home","methods":["GET","HEAD"]},"media.index":{"uri":"media","methods":["GET","HEAD"]},"media.create":{"uri":"media\/create","methods":["GET","HEAD"]},"media.store":{"uri":"media","methods":["POST"]},"media.show":{"uri":"media\/{medium}","methods":["GET","HEAD"]},"media.edit":{"uri":"media\/{medium}\/edit","methods":["GET","HEAD"]},"media.update":{"uri":"media\/{medium}","methods":["PUT","PATCH"]},"media.destroy":{"uri":"media\/{medium}","methods":["DELETE"]}}};

if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
    for (let name in window.Ziggy.routes) {
        Ziggy.routes[name] = window.Ziggy.routes[name];
    }
}

export { Ziggy };
