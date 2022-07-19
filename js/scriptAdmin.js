fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const adminContent = document.querySelector(".admin__wrapper");
    for (let i = 0; i < data.length; i++) {
      const appendAdminContent = document.createElement("div");
      appendAdminContent.classList.add("admin__content");
      appendAdminContent.innerHTML = `
      ${data[i].id}) 
      ${data[i].name},
      ${data[i].username}, 
      <a href="mailto:${data[i].email}">${data[i].email}</a>, 
      ${data[i].address.street}, 
      ${data[i].address.suite}, 
      ${data[i].address.city}, 
      ${data[i].address.zipcode}`;
      adminContent.append(appendAdminContent);
    }
  });
