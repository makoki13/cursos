function carga() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      if (!response.ok) {
        throw new Error('Solicitud fallida');
      }
      return response.json(); // Analiza la respuesta como JSON
    })
    .then(users => {
      const ul = document.createElement('ul');
      users.forEach(user => {
        const li = document.createElement('li');
        li.textContent = user.name;
        ul.appendChild(li);
      });
      document.body.appendChild(ul);
    })
    .catch(error => {
      console.error(error);
    });
}
