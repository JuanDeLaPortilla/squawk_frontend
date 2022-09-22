const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menu-btn");
const closeBtn = document.querySelector("#close-btn");

// show sidebar
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block' ;
})

// close sidebar
closeBtn.addEventListener('click', () =>{
    sideMenu.style.display = 'none';
})

//fill users in table
Users.forEach(users => {
    if(users.id_user > 004){
    const tr = document.createElement('tr');
    const trContent =`
                      <td>${users.userName}</td>
                      <td>${users.userEmail}</td>
                      <td class="${users.userType ===  'Premium' ? 'success' : users.userType === 'Normal' ? 'warning' : 'primary'}">${users.userType}</td>
                      <td class="${users.status ===  'Eliminado' ? 'danger' : users.status === 'Suspendido' ? 'warning' : 'success'}">${users.status}</td>
                      <td class="primary">Details</td>
                       `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);             
    }                  
})

