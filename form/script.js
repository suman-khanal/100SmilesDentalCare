function validateForm() {
    var fName = document.forms[0]["fName"].value;
    var lName = document.forms[0]["lName"].value;
    var email = document.forms[0]["email"].value;
    var phone = document.forms[0]["phone"].value;


    if (fName == "") {
        alert("First Name must be filled out");
        return false;
    } else if (!/^[A-Za-z]+$/.test(fName)) {
        alert("First Name must contain only letters");
        return false;
    }


    if (lName == "") {
        alert("Last Name must be filled out");
        return false;
    } else if (!/^[A-Za-z]+$/.test(lName)) {
        alert("Last Name must contain only letters");
        return false;
    }


    if (email == "") {
        alert("Email must be filled out");
        return false;
    } else if (!email.includes("@")) {
        alert("Email must contain an @ symbol");
        return false;
    }

 
    if (phone == "") {
        alert("Phone must be filled out");
        return false;
    } else if (!/^\d+$/.test(phone)) {
        alert("Phone must contain only numbers");
        return false;
    }

    return true;
}


// function hamburger() {
//     var menu = document.getElementById("menu-links");
//     var logo = document.getElementById("ffc-logo");
//     if (menu.style.display === "block" && logo.style.display === "none") {
//         menu.style.display = "none";
//         logo.style.display = "block";
//     } else {
//         menu.style.display = "block";
//         logo.style.display = "none";
//     }
// }

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuLinks = document.getElementById('menu-links');
    const logo = document.getElementById('ffc-logo');

    menuToggle.addEventListener('click', () => {
        // Toggle menu
        menuLinks.classList.toggle('show');

        // Hide logo when menu is open
        if (menuLinks.classList.contains('show')) {
            logo.style.display = 'none';
        } else {
            logo.style.display = 'block';
        }
    });
});
