// Đọc lại Dữ liệu từ localStorage đã được LƯU
const data_all = JSON.parse(window.localStorage.getItem('data_all'));
// Phân tích tham số URL để biết thông tin Mã giáo viên cần lấy
const queryString = window.location.search;

// console.log(queryString);
// ?id=n
const urlParams = new URLSearchParams(queryString);
const teacherID = urlParams.get('id')


let teacher = data_all.teachers[teacherID - 1];

console.log(teacher);

// Đọc dữ liệu ra DOM
let personal_text = document.querySelector(".personal_text");

// console.log(personal_text.children)
let avatar = document.querySelector(".imm");
avatar.src = teacher.avatar;
personal_text.children[1].textContent = teacher.name;
personal_text.children[2].textContent = teacher.position;
personal_text.children[3].textContent = teacher.short;
personal_text.children[4].children[0].textContent = teacher.dateOfBorned;

personal_text.children[4].children[1].textContent = teacher.phone;
personal_text.children[4].children[2].textContent = teacher.email;
personal_text.children[4].children[3].textContent = teacher.address;