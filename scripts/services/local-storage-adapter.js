(function (root) {
    'use strict';

    let POST_KEY = 'posts';

    class LocalStorageAdapter {
        constructor(key) {
            POST_KEY = key;
        }

        createOne(data, callback) {

        }

        readAll(callback) {
            fetchLocalStorage(callback);
        }

        readOneById(id, callback) {

        }

        updateOne(data, callback) {

        }

        deleteOne(data, callback) {

        }
    }

    function fetchLocalStoragePromise() {
        return new Promise((resolve, reject) => {
            try {
                let posts = root.localStorage.getItem(POST_KEY);
                resolve(posts);
            } catch(err) {
                reject(err);
            }
        });
    }


    function fetchLocalStorage(callback) {
        try {
            let posts = root.localStorage.getItem(POST_KEY);
            callback(null, posts);
        } catch(err) {
            callback(err);
        }
    }

    function saveLocalStorage(data, callback) {
        try {
            root.localStorage.setItem(POST_KEY, JSON.stringify(data));
            callback(null, data);
        } catch(err) {
            callback(err);
        }
    }

    function createOneInLocalStorage(data, callback) {
        fetchLocalStorage((err, posts) => {
            if(err) {
                callback(err);
                return;
            }

            let newData;

            try {
                const id = posts.map(v => v.id).sort().pop();
                newData = Object.assign(data, { id });
                posts.push(newData);
            } catch(err) {
                callback(err);
                return;
            }

            saveLocalStorage(posts, (err) => {
                if(err) {
                    callback(err);
                    return;
                }

                callback(null, newData);
            })
        });
    }





    root.blog.adapters.LocalStorageAdapter = LocalStorageAdapter;

}(window));
