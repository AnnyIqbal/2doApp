function enableButton() {
    var input = document.getElementById("task").value; //the input box's value
    document.getElementById("add").removeAttribute("disabled"); // enable the button by removing the disabled attribute
}
var job, newBox; //chk htmlinputelement type is ok or not
function addTask() {
    job = document.getElementById("task").value; // input value assigned to variable 'job'
    newBox = "<tr>" +
        "<td>" + job + "</td>" +
        "<td>" +
        "<button type='button' class='btn btn-danger' onclick='dlt(this);'>" +
        "<span class='glyphicon glyphicon-trash' aria-hidden='true'></span>" +
        "</button>" +
        "</td>" +
        "</tr>"; // added new row to table with the input value
    document.getElementById("taskList").innerHTML += newBox; //adding new task to list
    document.getElementById("task").value = ''; // removing the filled text field
    document.getElementById("task").setAttribute("autofocus", "autofocus"); // resetting focus(cursor) to the input field
    document.getElementById("add").setAttribute("disabled", "disabled"); // disabling the button again
}
function dlt(z) {
    //  alert(z.parentNode.innerHTML); // finally got it, the <td> to be dltd
    //  alert(z.parentNode.parentNode); //<tr> uska parent node mil gya
    z.parentNode.parentNode.innerHTML = ''; //yahoo urra diaaaa hahahaha
    document.getElementById("task").setAttribute("autofocus", "autofocus"); // resetting focus(cursor) to the input field
}
