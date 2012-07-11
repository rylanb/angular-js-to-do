// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

//Angular Functions
function ToDosListCTRL($scope) {
  $scope.todos = [
    {"title": "Buy lots of things"},
    {"title": "Sell It Out!"},
    {"title": "Testing"}
  ];
}

//Setup for binding of form/delete events
$(function() {
  //Call angular setup/functions to prevent auto creation
  angular.element(document).ready(function() {
    angular.bootstrap(document);
  });

  //Bind Click/Submit Handlers
  $('#todos_form').submit(function(){
    $.ajax({
      url: "/todos/new",
      context: document.body
    }).done(function() {
      $(this).addClass("done");
    });
  })
});
