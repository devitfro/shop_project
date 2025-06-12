export function loadFooterNavigationItem(url, selectorClass) {
   fetch(url)
      .then(response => {
         if(!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
         }
         return response.json();
      })
      .then(data => {
            renderFooterNavigationMenu(data, selectorClass);
      })
   
      .catch(error => {
         console.error(`Error loading data from ${url}:`, error);
      });
}

export function renderFooterNavigationMenu(json, containerSelector) {
  const container = document.querySelector(containerSelector);
   console.log("Container found:", container);
   console.log("JSON received:", json);

  if (!container) {
    console.warn("Container not found:", containerSelector);
    return;
  }

  json.forEach(section => {
    const ul = document.createElement('ul');
    ul.className = section.class;

    section.links.forEach(linkText => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = "#";
      a.textContent = linkText;
      li.appendChild(a);
      ul.appendChild(li);
    });

    container.appendChild(ul);
  });
}

