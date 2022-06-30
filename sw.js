importScripts(
    "https://cdn.jsdelivr.net/npm/comlink@4.3.1/dist/umd/comlink.min.js",
);
importScripts(
    "https://raw.githubusercontent.com/lodash/lodash/npm-packages/lodash.isequal/index.js",
);

const service = {
    isStateEqual: (prev, next) => isEqual(prev, next),
};

expose(service, self);
