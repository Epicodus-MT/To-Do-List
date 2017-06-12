function Task(task) {
  this.task = task;
}

Task.prototype.isDone = function() {
  return false;
}

$(document).ready(function () {
  $("form#toDoForm").submit(function(event) {
    event.preventDefault();

    var inputtedTask = $("input#new-task").val();

    var newTask = new Task(inputtedTask);

    $("ul#task-list").append("<li id='task'>" + newTask.task + "</li>");

    $("input#new-task").val("");
  })

});
