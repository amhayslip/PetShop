(function () {

  var $root = $('.pet-shop')
    , petTemplate = $('#templates .pet').html()
  ;

  window.PetPresenter = function (pet) {
    var petHtml = $.render(petTemplate, pet);

    $petRoot = $(petHtml);

    $root.append($petRoot);

    var petComments = new Comment();

    var commentForm = new CommentFormPresenter({
      comments: petComments,
      root: $petRoot.find('form')
    });

    var commentList = new CommentListPresenter({
      comments: petComments,
      root: $petRoot.find('.comments')
    });

    petComments.create({
      author: 'Bob',
      message: "Anytime I close the bathroom door..."
    });
  };


})();