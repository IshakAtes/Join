/*SUBTASKS*******************************************************************************/

/**
 * Adds a unchecked subtask to the SUBTASKS array and initialize rendering the updated list of subtasks.
 */
function addSubtask() {
  const subtask = addTaskSubtasks.value;
  if (subtask) {
    SUBTASKS.push({
      name: subtask,
      status: "unchecked",
    });
    document.getElementById("addTaskSubtasks").value = "";
    renderSubtasks();
  }
}

/**
 * Renders the list of subtasks.
 */
function renderSubtasks() {
  document.getElementById("subtasks").innerHTML = "";
  SUBTASKS.forEach((subtask) => {
    const indexOfSubtask = SUBTASKS.indexOf(subtask);
    const status = subtask.status;
    document.getElementById("subtasks").innerHTML += renderSubtasksHtml(subtask, indexOfSubtask, status);
  });
}

/**
 * Sets the status of a subtask based on the checkbox state.
 * @param {number} indexOfSubtask - The index of the subtask in the SUBTASKS array.
 */
function setStatusCheckbox(indexOfSubtask) {
  const checkbox = document.getElementById(`subtask${indexOfSubtask}`);
  let status;
  if (checkbox.checked) {
    status = "checked";
  } else {
    status = "unchecked";
  }
  SUBTASKS[indexOfSubtask].status = status;
}


/**
 * Render Trash icon
 * @param {number} indexOfSubtask 
 */
function trashNormal(indexOfSubtask) {
  trashIMG = document.getElementById(`delete${indexOfSubtask}`)
  trashIMG.src = '../assets/img/boardDeleteTaskDarkBlue.svg';
}

/**
 * Change Trash icon src onmouseover
 * @param {number} indexOfSubtask 
 */
function trashHover(indexOfSubtask) {
  trashIMG = document.getElementById(`delete${indexOfSubtask}`);
  trashIMG.src = '../assets/img/boardDeleteTaskBrightBlue.svg';
}

/**
 * Delete Subtask from SUBTASKS Array and Refresh Subtask Container
 * @param {string} subtask 
 */
function deleteSubTask(subtask) {
  SUBTASKS.forEach( (call, i) => {
    if (call.name == subtask) {
      SUBTASKS.splice(i, 1);
      renderSubtasks();
    }
  })
}