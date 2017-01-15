(function (root) {
    'use strict';

    class PostView {
        constructor() {
            this.$template = document.querySelector('#template-post').innerHTML;
            this.$dest = document.querySelector('#js-list-of-posts');
        }

        compile(post) {
            return root.Mustache.render(this.$template, post);
        }

        render(post) {
            let compiled = this.compile(post);
            let $fake = document.createElement('fake');
            $fake.innerHTML = compiled;
            let $article = $fake.firstElementChild;
            this.$dest.insertBefore($article, this.$dest.firstElementChild);
        }

        removeAll() {
            this.$dest.innerHTML = '';
        }
    }

    root.blog.views.PostView = PostView;
}(window));
