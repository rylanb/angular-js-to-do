// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

//Angular Functions
function ToDosListCTRL($scope, $http) {
  //$scope.todos = $('#todos_data').data('todos');
  $http.get('todos/').success(function(data) {
    $scope.todos = data;
  });
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
      url: "/todos/",
      data: {"title" : $(this).find('input').val()},
      dataType: 'json',
      type: 'POST'
    }).done(function() {
      console.log('created!');
    });
  });

  $('#todo_list').on('click', '.delete', function(e){
    e.preventDefault();
    $.ajax({
      url: "/todos/" + $(this).data('todoid'),
      dataType: 'json',
      type: 'DELETE'
    }).done(function() {
      alert('deleted!')
    });
  });
});
