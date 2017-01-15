(function (root) {
    'use strict';

    const rootUrl = '/';
    const useHash = false;

    root.blog = {
        runtime: new EventEmitter(),
        controllers: {},
        models: {},
        services: {},
        adapters: {},
        router: new Navigo(rootUrl, useHash),
        views: {},
        utils: {}
    };
}(window));
