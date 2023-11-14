let app = angular.module("app", []);

app.controller("todosCtrl", function ($scope) {
    $scope.todos = [
        { id: "1", text: "Buy some candy", done: false },
        { id: "2", text: "do something", done: false }
    ];
    $scope.checked = false;
    $scope.addTodo = function () {
        $scope.todos.push({ id: $scope.todos.length + 1, text: $scope.newTodoText, done: false});
        console.log($scope.todos);
    };


    $scope.clearCompleted = function() {
       
        $scope.todos.forEach((todo) =>{
            if ( todo.done == true) {
                $scope.todos.splice($scope.todos.indexOf(todo), 1);
            }
        });
    }
});
