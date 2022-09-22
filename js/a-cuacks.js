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
Cuacks.forEach(cuack => {
    const tr = document.createElement('tr');
    const trContent =`
                    <td>${cuack.id_cuack}</td>
                    <td>${cuack.uName}</td>
                    <td>${cuack.uEmail}</td>
                    <td>${cuack.tdes}</td>
                    <td><a href="${cuack.url}"><span class="material-icons-sharp" style="background-color: gray; color: white; border-radius: 50%">link</span></a></td>
                    <td>${cuack.calification}</td>
                    <td class="${cuack.status ===  'Oculto' ? 'danger' : cuack.status === 'Visible' ? 'success' : 'primary'}">${cuack.status}</td>
                    <td>
                    <span class="material-icons-sharp" style="color : #ffbb55"> edit </span>            
                    <span class="material-icons-sharp" style="color : #ff7782"> delete_forever </span>
                    </td>
                    `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
    }                                                                             
)

