// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

//Angular Functions
function ToDosListCTRL($scope, $http) {
  //$scope.todos = $('#todos_data').data('todos');
  $http.get('todos/').success(function(data) {
    $scope.todos = data;
  });

  $scope.addTodo = function() {
    $http({url: "/todos/", data: {"title" : $scope.todoText},method: 'POST'})
    .success(function(data) {
      $scope.todos.push({id: data.id, title: data.title, done: false});
      $scope.todoText = '';
    });
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

  $scope.remaining = function() {
    var count, todo, _i, _len, _ref;
    count = 0;
    _ref = $scope.todos;
    if( _ref === undefined ) { return }
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      todo = _ref[_i];
      if (!todo.done) {
        count++;
      }
    }
    return count;
  }
}
ToDosListCTRL.$inject = ['$scope', '$http'];
//Setup for binding of form/delete events
$(function() {
  //Call angular setup/functions to prevent auto creation
  angular.element(document).ready(function() {
    angular.bootstrap(document);
  });

  //Bind Click/Submit Handlers
  $('#todos_form').submit(function(){

  });

  $('#todo_list').on('click', '.delete', function(e){
    e.preventDefault();
  });
});
