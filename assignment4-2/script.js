function getAge(birthdate) {
    const birth = new Date(birthdate);
    const today = new Date();

    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    const dayDiff = today.getDate() - birth.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    return age;
}

function validate(event)
{
    event.preventDefault();
    let age = document.getElementsByClassName("age")[0].value;
    let dob = document.getElementsByClassName("dob")[0].value;

    if (!age)
    {
        age = getAge(dob);
        document.getElementsByClassName("age")[0].value = age;    
    }

    if (age < 15 || age > 30)
    {
        alert("Age should be within 15 - 30");
        return;
    }

    if (age != getAge(dob))
    {
        alert("Age and dob doesn't match!");
        return;
    }

    let password = document.getElementsByClassName("password")[0].value;
    let confirmPassword = document.getElementsByClassName("confirm_password")[0].value;

    if (password != confirmPassword)
    {
        alert("Passwords doesn't match");
        return;
    }

    document.getElementById("tbox").innerHTML = document.getElementsByClassName("fname")[0].value + " " + document.getElementsByClassName("lname")[0].value;
    alert(document.getElementsByClassName("fname")[0].value + " " + document.getElementsByClassName("lname")[0].value);
    document.forms[0].submit();
    return;

}