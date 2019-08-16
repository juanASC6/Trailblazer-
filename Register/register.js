const emailElement = document.getElementById("email");
const button = document.getElementById("register");
button.addEventListener("click", updateDB);

//Set database object here
const base = firebase.database().ref();

/**
 * Updates the database with the username and message.
 */
function updateDB(event) {
    event.preventDefault();
    const email = emailElement.value;

    emailElement.value = "";

    console.log(email + " : " );

    //Update database here
    let obj = {
        EMAIL: email
    };

    base.push(obj);

}

// Set database "child_added" event listener here

base.on("child_added", addEmail);

const emailContainer = document.querySelector(".allMessages");

function addEmail(rowData) {
    const row = rowData.val();
    const email = row.msg;
}