
const url="http://localhost:3000/users/"


function getUsers(){
    let t=document.getElementById("table");
    let tr=document.createElement("tr");
    tr.innerHTML=`<th>Id</th>
    <th>Name</th>
    <th>Action</th>`
    t.appendChild(tr);
    axios.get(url).then((res)=>{
        let arr=res.data
        arr.forEach(d => {
            let tr=document.createElement("tr");
            tr.innerHTML=`<td>${d.id}</td>
            <td>${d.name}</td>
            <td><i class="fa-solid fa-trash" onclick=deleteUser(${d.id})></i>
                <i class="fa-solid fa-pen-to-square" onclick=editUser(${d.id})></i>
            `
            t.appendChild(tr);
        });
    })
}


function addUser(){
    
        let id=document.getElementById("id").value
        let name=document.getElementById("name").value
        deleteUser(id);
        axios.post(url,{id,name}).then((res)=>{
        window.location.reload();
    })
    
        
}
function deleteUser(id){
    axios.delete(url+`${id}`).then((res)=>{
        window.location.reload();
    })
}
function editUser(d){
    axios.get(url).then((res)=>{
        let user=res.data;
        user.forEach((u)=>{
        if(u.id==d){
        let i=document.getElementById("id")
        let name=document.getElementById("name")
        i.value=u.id;
        name.value=u.name;
        }
     } )
})
}