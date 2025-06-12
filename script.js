// script.js
const task_form = document.querySelector("#taskForm");
const clear_task_button = document.querySelector("#clearTask");
const task_list = document.querySelector(".task_list");
const task_input = document.querySelector("#task-input");

task_form.addEventListener("submit", addTask);

function addTask(e) {
  e.preventDefault();
  const taskText = task_input.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");
  li.className = "slide-in bg-gray-700 border border-gray-600 p-3 rounded-lg flex justify-between items-center text-white shadow-sm";
  li.innerHTML = `
    <span>${taskText}</span>
    <a href="#" class="delete_task">
      <i class="text-red-400 hover:text-red-500 text-lg cursor-pointer">✖</i>
    </a>
  `;

  task_list.appendChild(li);
  task_input.value = "";
}

clear_task_button.addEventListener("click", () => {
  task_list.innerHTML = "";
});

task_list.addEventListener("click", (e) => {
  if (e.target.closest(".delete_task")) {
    e.preventDefault();
    const taskItem = e.target.closest("li");
    taskItem.classList.add("opacity-0", "transition", "duration-300");
    setTimeout(() => taskItem.remove(), 300);
  }
});
