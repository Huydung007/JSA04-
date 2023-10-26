function checkField(field) {
    if (field == null) {
        return false
    } else {
        return true
    }
}

function checkLength(field) {
    if (field.length < 8) {
        return false
    } else {
        return true
    }
}

function checkMail(field) {
    let expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(field) == false) {
        return false
    } else {
        return true
    }
}

function checkPassword1(pw1) {
    let letternumber = /^[0-9a-zA-Z]+$/;
    if (letternumber.test(pw1)) {
        return true
    } else {
        return false
    }
}

function checkPassword(pw1, pw2) {
    if (pw1 != pw2) {
        return false
    } else {
        return true
    }
}

// function checkPasswordandUsername(pw1, name) {
//     if (pw1 != name) {
//         return true
//     } else {
//         return false
//     }
// }

let signUpBtn = document.getElementById('sign-up-btn')

function checkRegister() {
    let username = document.getElementById('username').value
    let email = document.getElementById('email').value
    let pw = document.getElementById('pw').value
    let confirmed_pw = document.getElementById('confirmed-pw').value

    if (checkField(username) == false || checkField(email) == false
        || checkField(pw) == false || checkField(confirmed_pw) == false) {
        alert('Yêu cầu điền đầy đủ thông tin')
        return
    } else if (checkLength(username) == false) {
        alert('Tên cần có tối đa 8 chữ')
        return
    } else if (checkPassword1(pw) == false) {
        alert('Mật khẩu cần có đủ chữ và số')
        return
    } else if (checkMail(email) == false) {
        alert('Email không hợp lệ')
        return
    } else if (checkPasswordandUsername(pw, username) == false) {
        alert('Tên và mật khẩu không được trùng khớp')
        return
    } else if (checkPassword(pw, confirmed_pw) == false) {
        alert('Mật khẩu không trùng khớp')
        return
    } else {
        alert('Đăng ký thành công')
        return
    }
}

function checkPasswordandUsername(pw1, name) {
    if (pw1 != name) {
        return true
    } else {
        return false
    }
}