let usersDB = JSON.parse(localStorage.getItem("account")) ?? [];
// Render
renderForm();
function renderForm() {
    const content = document.querySelector(".list-content");
    let contentList = "";
    usersDB.forEach((data, index) => {
        contentList += `
        <div class="content">
            <p class="content-text">${data.comment}</p><input type="button" value="${data.point}" class="row review">
            <i class='bx bxs-edit' onclick="handleEdit(${data.index})"></i>
            <i class='bx bx-x' onclick="handleDelete(${data.index})"></i>
        </div>`;
    });
    content.innerHTML = contentList;
}

//   Create
const user = {};
function handleClick(data) {
    user.point = data.value;
}
function handleSend() {
    usersDB = JSON.parse(localStorage.getItem("account"));
    const commnetAdd = document.querySelector("#comment").value;
    user.comment = commnetAdd;
    usersDB.push(user);
    localStorage.setItem("account", JSON.stringify(usersDB));
    renderForm();
}



// Delete
function handleDelete(index){
    usersDB = JSON.parse(localStorage.getItem("account"));
    usersDB.splice(index, 1);
    localStorage.setItem("account",JSON.stringify(usersDB));
    renderForm();
}

 // Edit
 function handleEdit(index) {
    let userEdit = {};
    usersDB.forEach((data) => {
        if (data.point == point) {
            userEdit = data;
        }
    });
    const commentEdit = document.querySelector("#comment");
    pointEdit.value = userEdit.point;
    commentEdit.value = userEdit.comment;
}