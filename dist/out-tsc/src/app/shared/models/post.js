import { User } from './user';
export var Post = (function () {
    function Post(postInfo) {
        if (postInfo) {
            this._id = postInfo._id;
            this.sender = new User(postInfo.sender);
            for (var _i = 0, _a = postInfo.receiver; _i < _a.length; _i++) {
                var elt = _a[_i];
                this.receiver.push(new User(elt));
            }
            this.text = postInfo.text;
            this.type = postInfo.type;
        }
        else {
            this._id = "";
            this.sender = new User(null);
            this.text = "";
            this.Created_at = null;
        }
    }
    return Post;
}());
//# sourceMappingURL=F:/CALM/src/src/app/shared/models/post.js.map