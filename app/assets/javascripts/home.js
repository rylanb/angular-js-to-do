// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

//Angular Functions
function ToDosListCTRL($scope, $http) {
  //$scope.todos = $('#todos_data').data('todos');
  $http.get('todos/').success(function(data) {
    $scope.todos = data;
  });

  $scope.addTodo = function() {
    $scope.todos.push({title: $scope.todoText, done: false})
    $scope.todoText = '';
  }

  $scope.deleteTodo = function() {
    var index = this.$index;
    $scope.todos.splice(index, 1);

    //Now remove from DB
    $.ajax({
      url: "/todos/" + this.todo.id,
      dataType: 'json',
      type: 'DELETE'
    }).done(function() {
    });
  }

  $scope.markTodoDone = function() {
    var index = this.$index;

    //Now remove from DB
    $.ajax({
      url: "/todos/" + this.todo.id,
      dataType: 'json',
      type: 'PUT'
    }).done(function() {
    });
  }
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
    });
  });

  $('#todo_list').on('click', '.delete', function(e){
    e.preventDefault();
  });
});
