
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

     // Elements UI
     const listContainer = document.querySelector('.task-list-section .list-group');

     renderAllTasks(objOfTasks);

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

})(tasks);