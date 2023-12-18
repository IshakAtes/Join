/**
 * Rendering Category in list
 * @param {string} name 
 * @param {string} color 
 * @returns 
 */
function renderCategorysHtml(name, color) {
  return /*html*/ `
      <li onclick="renderSelectedCategory('${name}','${color}')" class="singleCategory">
        <span>${name}</span>
        <div class="circle ${color}"></div>
      </li>
    `;
}

/**
 * Render Categorie and show it
 * @param {string} name 
 * @param {string} color 
 * @returns 
 */
function renderSelectedCategoryHtml(name, color) {
  return /*html*/ `
    <li class="selectedCategory">
      <span id='selectedCategoryName'>${name}</span>
      <div class="${color} circle colorOfCategory"></div>
    </li>
  `;
}

/**
 * Render Contacts in Contactslist
 * @param {string} name 
 * @param {string} id 
 * @returns 
 */
function renderContactsHtml(name, id) {
  return /*html*/ `
      <li class="oneContact" onclick="event.stopPropagation();">
        <div onclick="toggleCheckbox(${id})" class="toggleCheckbox"></div>
        <label class="nameOfContact">${name}</label>
        <input id="checkBoxUser${id}" type="checkbox"/>
      </li>
    `;
}

/**
 * Rendering Subtasks
 * @param {string} subtask 
 * @param {number} indexOfSubtask 
 * @param {boolean} status 
 * @returns 
 */
function renderSubtasksHtml(subtask, indexOfSubtask, status) {
  return /*html*/ `
      <div id="singleSubtask${indexOfSubtask}" class="singleSubtask">
        <input onclick="setStatusCheckbox(${indexOfSubtask})" ${status} type="checkbox" id="subtask${indexOfSubtask}" class="checkbox">
        <span class="subtask">${subtask.name}</span>
        <img onclick="deleteSubTask('${subtask.name}')" onmouseout="trashNormal(${indexOfSubtask})" onmouseover="trashHover(${indexOfSubtask})" id="delete${indexOfSubtask}" src="../assets/img/boardDeleteTaskDarkBlue.svg" alt="">
      </div>
    `;
}
