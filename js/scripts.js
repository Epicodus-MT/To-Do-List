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

    $("#task-list").append('<div class="checkbox">' +
                                '<label><input type="checkbox" value="">' +
                                newTask.task + '</label>' +
                              '</div>');

    $("input#new-task").val("");
  })

});
