const user_password = document.getElementById("user_password");
const eye_icon = document.querySelector(".user_input i");
console.log(eye_icon);
const requirement_list = document.querySelectorAll(".requirement_list li")

const requirement = [
    {regex: /.{8,}/,index:0},
    {regex: /[0-9]/,index:1},
    {regex: /[a-z]/,index:2},
    {regex: /[A-Z]/,index:3},
    {regex: /[^A-Za-z0-9]/,index:4},
]

eye_icon.addEventListener("click",() => {
    // eye_icon.className === "fa-solid fa-eye" ? eye_icon.className = "fa-solid fa-eye-slash":eye_icon.className = "fa-solid fa-eye";
    // user_password.type === "password" ? user_password.type = "text" : user_password.type = "password";
    user_password.type = user_password.type === "password" ? "text" : "password";
    eye_icon.className = `fa-solid fa-eye${user_password.type === "password" ? "" : "-slash"}`;
})

user_password.addEventListener("keyup",() => {
    requirement.forEach((item) => {
        const isValid = item.regex.test(user_password.value);

        const requirement_item = requirement_list[item.index];

        if(isValid){
            requirement_item.firstElementChild.className = "fa-solid fa-check";
            requirement_item.classList.add("valid");
        }else{
            requirement_item.firstElementChild.className = "fa-solid fa-circle";
            requirement_item.classList.remove("valid");
        }

    })
})