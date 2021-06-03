// Define UI Vars
const form = document.querySelector('#task-form')
const taskList = document.querySelector('.collection')
const clearBtn = document.querySelector('.clear-tasks')
const filter = document.querySelector('#filter')
const taskInput = document.querySelector('#task')

// Load all event listeners
loadEventListeners()

// Load all event listeners
function loadEventListeners() {
	// Add task event
	form.addEventListener('submit', addTask)
	// Remove Task
	taskList.addEventListener('click', removeTask)
	// Clear Task Event
	clearBtn.addEventListener('click', clearTask)
	// Filter Tasks Event
	filter.addEventListener('keyup', filterTasks)
}

// Add Task
function addTask(e) {
	if (taskInput.value === '') {
		alert('Add a task')
	}

	// Create li element
	const li = document.createElement('li')
	// Add class
	li.className = 'collection-item'
	// Create text node and append to li
	li.appendChild(document.createTextNode(taskInput.value))
	// Create new link element
	const link = document.createElement('a')
	// Add class
	link.className = 'delete-item secondary-content'
	// Add icon html
	link.innerHTML = '<i class="fa fa-remove"></i>'
	// Append the link to li
	li.appendChild(link)

	// Append li to ul
	taskList.appendChild(li)

	// Clear input
	taskInput.value = ''

	e.preventDefault()
}

// Remove Task Function

// ! the confirm is an built in function that makes the pop up so if user confirms then run the remove code
function removeTask(e) {
	// Want to target the parent of the x icon to make it work which is the a we need to write it like this
	if (e.target.parentElement.classList.contains('delete-item')) {
		if (confirm('Are You Sure?')) {
			// We want to remove only the li not the icon which is the parent of the parent.
			e.target.parentElement.parentElement.remove()
		}
	}
}

// Clear Task Function
function clearTask(e) {
	// taskList.innerHTML = ''
	// or the faster better way

	// ! while there is a first child or something there loop through and remove them
	while (taskList.firstChild) {
		taskList.removeChild(taskList.firstChild)
	}
}

// Filter Task function
function filterTasks(e) {
	const text = e.target.value.toLowerCase()
	document.querySelectorAll('.collection-item').forEach(function (task) {
		const item = task.firstChild.textContent
		if (item.toLowerCase().indexOf(text) != -1) {
			task.style.display = 'block'
		} else {
			task.style.display = 'none'
		}
	})
}
