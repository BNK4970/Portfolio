function fetchUserRepositories(username) {
  const apiUrl = `https://api.github.com/users/${username}/repos`;

  return fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      if (Array.isArray(data)) { // Vérifier si data est un tableau
        data.forEach(async repository => {
          const { name, description, html_url } = repository;

          const metadataUrl = `https://api.github.com/repos/${username}/${name}/pages`;
          const metadataResponse = await fetch(metadataUrl);
          const metadata = await metadataResponse.json();

          const imageUrl = metadata && metadata.html_url ? `${metadata.html_url}/social_preview.png` : '/assets/placeholder.png';

          const cardHTML = `
            <div class="card">
              <div>
                <img src="${imageUrl}" alt="photo principale du projet">
              </div>
              <div>
                <div class="title">
                  <h3>${name}</h3>
                </div>
                <div class="content">
                  <p>${description}</p>
                </div>
                <a href="${html_url}">Voir plus</a>
              </div>
            </div>
          `;

          document.getElementById('containerCardProject').innerHTML += cardHTML;
        });
      } else {
        console.log('Les données renvoyées ne sont pas un tableau :', data);
      }
    })
    .catch(error => {
      console.log('Une erreur s\'est produite :', error);
    });
}

fetchUserRepositories('BNK4970');
