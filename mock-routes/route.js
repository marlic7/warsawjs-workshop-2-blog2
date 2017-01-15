const posts = [];

module.exports = (app) => {
    app.get('/hello', (req, res) => {
        res.json({ hello: 'world!'});
    });

    app.get('/posts', (req, res) => {
        res.json(posts);
    })

    app.post('/post', (req, res) => {
        const post = Object.assign({}, req.body);
        post.id = (posts.map(v => v.id).sort().pop() || 0) + 1;

        posts.push(post);
        res.json(post);
    })

};
