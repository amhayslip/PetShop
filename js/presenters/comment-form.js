(function () {

  window.CommentFormPresenter = function (options) {
    var $root = options.root;
    console.log($root)

    var comments = options.comments;

    $root.on('submit', function (e) {
      e.preventDefault();
      var author = $('.author', $root).val();
      var message = $('.message', $root).val();
      console.log('submitted', author, message);

      comments.create({
        author: author,
        message: message
      });
      $('.author, .message', $root).val('');
    });
  };

})();
