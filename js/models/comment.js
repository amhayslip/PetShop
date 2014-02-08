(function () {

  var idCounter = 0;
  var generateId = function () {
    idCounter += 1;
    return 'comment_' + idCounter;
  };

  var getIdIndexOf = function (array, id) {
    for (var i = 0; i < array.length; i += 1) {
      if (array[i].id === id) {
        return i;
      }
    }
    return -1;
  };

  window.Comment = function () {
    var comments = [];
    var index = 0;

    $.observable(this);

    this.create = function (comment) {
      comment.id = generateId();
      comment.likes = 0;
      comments.push(comment);
      this.trigger("create", comment);
    };

    this.like = function (id) {
      var index = getIdIndexOf(comments, id);
      var comment = comments[index];
      comment.likes += 1;
      this.trigger("like", comment);
      console.log("The like property in comment model has this comment: ", comment);
    };

  };

})();
