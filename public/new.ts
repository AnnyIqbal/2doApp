// this file simply disables the button if user erases input and tries to enter 
function enableButton(): void {
    var job: HTMLInputElement = document.getElementById("task").value;

    if(job.toString().length === 0) { // if input field empty
         document.getElementById("add").setAttribute("disabled", "disabled"); // disable the button
    }
    else {
         document.getElementById("add").removeAttribute("disabled"); //enable button
    }
}

var input: HTMLElement, job: HTMLInputElement, newBox: string;

function addTask(): void {
    input = document.getElementById("task"); // input field
    job = document.getElementById("task").value; // input value assigned to variable 'job'

    newBox = "<tr>" +
                "<td>" + job + "</td>" +
                "<td>" +
                   "<button type='button' class='btn btn-danger' onclick='dlt(this);'>"+
                      "<span class='glyphicon glyphicon-trash' aria-hidden='true'></span>" + //dlt button
                   "</button>"+
                 "</td>" +
               "</tr>";    // added new row to table with the input value
    document.getElementById("taskList").innerHTML += newBox; //adding new task to list
     
    input.value = ''; // removing the filled text field
    input.style.borderColor = "#9137FF"; //border color is reset again
    document.getElementById("add").setAttribute("disabled","disabled"); // disabling the button again
    input.focus(); // resetting focus(cursor) to the input field
}

  function dlt(z) : void {
    z.parentNode.parentNode.innerHTML = ''; //deleted the row from where dlt button was clicked
    document.getElementById("task").focus(); // resetting focus(cursor) to the input field
}