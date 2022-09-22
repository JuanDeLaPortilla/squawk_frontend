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
    if(users.userType ===  'Admin'){
    const tr = document.createElement('tr');
    const trContent =`
                    <td>${users.userName}</td>
                    <td>${users.userEmail}</td>
                    <td>${users.userBirthday}</td>
                    <td><center>
                        <div class="profile-photo">
                          <img src="${users.userImg}">
                        </div>
                        </center>
                    </td>
                    <td class="${users.status ===  'Eliminado' ? 'danger' : users.status === 'Suspendido' ? 'warning' : 'success'}">${users.status}</td>
                    <td>${users.userCD}</td>
                    <td>
                    <span class="material-icons-sharp" style="color : #ffbb55"> edit </span>            
                    <span class="material-icons-sharp" style="color : #ff7782"> delete_forever </span>
                    </td>
                    `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
    }                                                                             
}
)


