
// List of tasks

const tasks = [
    {
        _id: '5435345643645645645',
        completed: true,
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis varius diam at accumsan condimentum. Suspendisse semper interdum rutrum. Maecenas vel accumsan enim. Praesent eu dolor vestibulum, gravida nibh quis, feugiat metus. Vestibulum eget sapien velit. Nulla facilisi. Nunc sit amet massa at neque iaculis bibendum ut eget justo. Vivamus vitae egestas mauris. ',
        title: 'Lorem ipsum dolor sit amet, consectetur',
    },
    {
        _id: '0989089fdfsd9809809',
        completed: false,
        body: 'Cras viverra diam eu nisl auctor aliquam. Nulla vitae iaculis mauris. Aenean varius vehicula convallis. Ut tellus urna, rhoncus semper auctor vitae, sodales et mauris. Ut tincidunt nulla ac fringilla scelerisque. Quisque ultrices, magna ut euismod malesuada, mauris nunc luctus turpis, quis pharetra nisl nunc eu odio. Aliquam tempor dui non feugiat sollicitudin. Curabitur fermentum tortor in orci pretium pellentesque. Nullam sodales eros odio, at aliquet elit auctor vel. In in porttitor augue. Fusce ut metus et quam molestie viverra sit amet vel libero. Vivamus fringilla nunc sit amet facilisis aliquet.',
        title: 'Cras viverra diam eu nisl auctor aliquam.',
    },
    {
        _id: '932852390584903504',
        completed: true,
        body: 'Morbi semper euismod placerat. Mauris tincidunt metus ac lacus aliquam condimentum. Nullam quis magna imperdiet tortor auctor interdum in ut magna. Vestibulum mattis dolor non mauris interdum ornare. Fusce leo nibh, suscipit commodo justo at, pulvinar condimentum massa. Suspendisse gravida velit et tincidunt dictum. Nam hendrerit a neque nec pulvinar. Curabitur semper justo a tellus gravida vestibulum. Duis dignissim neque ac nisi malesuada, a placerat eros euismod. Donec sit amet tortor vitae sem porttitor lacinia. Proin bibendum elementum maximus.',
        title: 'Morbi semper euismod placerat. ',
    },
];

(function(arrOfTasks){
     // array to object of objects
     const objOfTasks = arrOfTasks.reduce((acc, task) => {
         acc[task._id] = task;
         return acc;
     }, {});

     const themes = {
         default: {
             '--base-text-color': '#212529',
             '--header-bg': '#007bff',
             '--header-text-color': '#fff',
             '--default-btn-bg': '#007bff',
             '--default-btn-text-color': '#fff',
             '--default-btn-hover-bg': '#0069d9',
             '--default-btn-border-color': '#0069d9',
             '--danger-btn-bg': '#dc3545',
             '--danger-btn-text-color': '#fff',
             '--danger-btn-hover-color': '#dc3545',
             '--input-border-color': '#ced4da',
             '--input-bg-color': '#fff',
             '--input-text-color': '#495057',
             '--input-focus-bg-color': '#fff',
             '--input-focus-text-color': '#495057',
             '--input-focus-border-color': '#80bdff',
             '--input-focus-box-shadow': '0 0 0 0.2rem rgba(0, 123, 255, 0.25)',
         },
         dark: {
            '--base-text-color': '#212529',
            '--header-bg': '#343a40',
            '--header-text-color': '#fff',
            '--default-btn-bg': '#58616b',
            '--default-btn-text-color': '#fff',
            '--default-btn-hover-bg': '#292d31',
            '--default-btn-border-color': '#343a40',
            '--default-btn-focus-box-shadow': '0 0 0 0.2rem rgba(141, 143, 146, 0.25)',
            '--danger-btn-bg': '#b52d3a',
            '--danger-btn-text-color': '#fff',
            '--danger-btn-hover-bg': '#88222c',
            '--danger-btn-hover-color': '#88222c',
            '--input-border-color': '#ced4da',
            '--input-bg-color': '#fff',
            '--input-text-color': '#495057',
            '--input-focus-bg-color': '#fff',
            '--input-focus-text-color': '#495057',
            '--input-focus-border-color': '#78818a',
            '--input-focus-box-shadow': '0 0 0 0.2rem rgba(141, 143, 146, 0.25)',

         },
         light: {
            '--base-text-color': '#212529',
            '--header-bg': '#fff',
            '--header-text-color': '#212529',
            '--default-btn-bg': '#fff',
            '--default-btn-text-color': '#212529',
            '--default-btn-hover-bg': '#e8e7e7',
            '--default-btn-border-color': '#34a40',
            '--default-btn-focus-box-shadow': '0 0 0 0.2rem rgba(141, 143, 146, 0.25)',
            '--danger-btn-bg': '#f1b5bb',
            '--danger-btn-text-color': '#212529',
            '--danger-btn-hover-bg': '#ef808a',
            '--danger-btn-hover-color': '#e2818a',
            '--input-border-color': '#ced4da',
            '--input-bg-color': '#fff',
            '--input-text-color': '#495057',
            '--input-focus-bg-color': '#fff',
            '--input-focus-text-color': '#495057',
            '--input-focus-border-color': '#78818a',
            '--input-focus-box-shadow': '0 0 0 0.2rem rgba(141, 143, 146, 0.25)',
         },
     };

     let lastSelectedTheme = 'default';

     // Elements UI
     const listContainer = document.querySelector('.task-list-section .list-group');
     const form = document.forms['addTask'];
     const inputTitle = form.elements['title'];
     const inputBody = form.elements['body'];
     const themeSelect = document.querySelector('#themeSelect');

     // Events
     renderAllTasks(objOfTasks);
     form.addEventListener('submit', onFormSubmitHandler);
     listContainer.addEventListener('click', onDeleteHandler); 
     themeSelect.addEventListener('change', onThemeSelectHandler);

     function renderAllTasks(tasksList){
         if (!tasksList) {
            console.error("Pass object with tasks");
            return;
         }

         const fragement = document.createDocumentFragment();
         Object.values(tasksList).forEach(task => {
             const li = listItemTemplate(task);
             fragement.appendChild(li);
         });
         listContainer.appendChild(fragement);
     }
     
     function listItemTemplate({_id, title, body} = {}) {
        // create li
        const li = document.createElement('li');
        li.classList.add('list-group-item', 'd-flex', 'align-item-center', 'flex-wrap', 'mt-4');
        li.setAttribute('data-task-id', _id);
        // create span
        const span = document.createElement('span');
        span.textContent = title;
        span.style.fontWeight = 'bold';
        // create btn
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete task';
        deleteBtn.classList.add('btn', 'btn-danger', 'ml-auto', 'delete-btn');
        // create body task
        const article = document.createElement('p');
        article.textContent = body;
        article.classList.add('mt-2', 'w-100');
        // add all Elements
        li.appendChild(span);
        li.appendChild(deleteBtn);
        li.appendChild(article);
        return li;
     }

     function onFormSubmitHandler(e) {
         e.preventDefault();
         const titleValue = inputTitle.value;
         const bodyValue = inputBody.value;
         if (!titleValue || !bodyValue) {
             alert('Enter a title and a body');
             return;
         }
         const task = createNewTask(titleValue, bodyValue);
         const listItem = listItemTemplate(task);
         listContainer.insertAdjacentElement('afterbegin', listItem);
         form.reset();
     }

     function createNewTask(title, body) {
        const newTask = {
            title,
            body,
            complited: false,
            _id: `task-${Math.random()}`,
        };
        objOfTasks[newTask._id] = newTask;
        return {...newTask};
     }

     function deleteTask(id) {
         const { title } = objOfTasks[id];
         const isConfirm = confirm(`Are you sure that you want to delete a task with title ${title}?`);
         if (!isConfirm) return isConfirm;
         delete objOfTasks[id];
         return isConfirm;
     }

     function deleteTaskFromHtml(confirmed, el) {
         if (!confirmed) return; 
         el.remove();
     }

     function onDeleteHandler({target}) {
         if (target.classList.contains('delete-btn')) {
            const parent = target.closest('[data-task-id]');
            const id = parent.dataset.taskId;
            const confirmed = deleteTask(id);
            deleteTaskFromHtml(confirmed, parent);
         }
     }

     function onThemeSelectHandler(e) {
        const selectedTheme = themeSelect.value;
        const isConfirmed = confirm(`Do you want to change a theme to ${selectedTheme}?`);
        if(!isConfirmed) {
            themeSelect.value = lastSelectedTheme;
            return;
        }

        setTheme(selectedTheme);
        lastSelectedTheme = selectedTheme; 
     }

     function setTheme(name) {
         const selectedThemeObj = themes[name];
         Object.entries(selectedThemeObj).forEach(([key, value]) => {
             document.documentElement.style.setProperty(key, value);
         })
     }

})(tasks);