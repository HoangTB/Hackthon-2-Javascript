const users = [
    {
        point: 8,
        comment: 'JS khó quá',

    },
    {
        point: 9,
        comment: 'Làm như nào để học giỏi JS',

    },

];
const acountLocal = JSON.parse(localStorage.getItem("account"));
if (!acountLocal) {
    localStorage.setItem("account", JSON.stringify(users));
}