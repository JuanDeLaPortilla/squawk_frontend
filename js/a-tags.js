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
Tags.forEach(tags => {
    const tr = document.createElement('tr');
    const trContent =`
                    <td>${tags.id_tag}</td>
                    <td>${tags.description}</td>
                    <td>
                    <span class="material-icons-sharp" style="color : #ffbb55"> edit </span>            
                    <span class="material-icons-sharp" style="color : #ff7782"> delete_forever </span>
                    </td>
                    `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
                                                                               
})