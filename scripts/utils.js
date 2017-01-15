(function (root) {
    'use strict';

    function assert(cond, msg = 'AssertionError') {
        if (!cond) throw new Error(msg);
    }

   root.blog.utils = {
       assert
   };

}(window));
