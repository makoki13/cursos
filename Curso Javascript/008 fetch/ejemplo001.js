const url = 'https://jsonplaceholder.typicode.com/users';

fetch(url)
    .then(response => response.json())
    .then(data => {
        const ul = document.createElement('ul');
        data.forEach(user => {
            const li = document.createElement('li');
            li.textContent = user.name;
            ul.appendChild(li);
        });
        document.body.appendChild(ul);
    })
    .catch(error => console.error(error));


/* Con control de errores */
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    if (!response.ok) {
      throw new Error('Solicitud fallida');
    }
    return response.json(); // Analiza la respuesta como JSON
  })
  .then(users => {
    console.log('Lista de usuarios:');
    console.log(users);
  })
  .catch(error => {
    console.error(error);
  });
