var app = angular.module('todolist',[ ]);

app.controller('todolistController', function($scope){

  $scope.todoList = []

  $scope.addToList = function(todo){
    todoObject = {name:$scope.currentTodo}
    $scope.todoList.push(todoObject);
  }

});
