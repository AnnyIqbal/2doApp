var job, newBox; //job: string, newBox: string; typescript ki file ext is .ts but yahan dom use krne k lie script must be in this file link ni krwa skti
function addTask() {
    job = document.getElementById("task").value; // input value assigned to variable 'job'
    newBox = "<tr>" +
        "<td>" + job + "</td>" +
        // "<td> <button onclick='dlt(this);'>x</button> </td>" + // bootstrap ka danger button use kro circular ya cross wala glyphicon
        "<td onclick='dlt(this);' style='border-radius:100%;'>X</td>" +
        "</tr>"; // added new row to table with the input value
    document.getElementById("taskList").innerHTML += newBox; //adding new task to list
    document.getElementById("task").value = ''; // removing the filled text field
}
function dlt(z) {
    //            alert(z.parentNode.nextSibling.innerHTML); // finally got it, the <td> to be dltd
    //            alert(z.parentNode.parentNode); //<tr> uska parent node mil gya
    z.parentNode.parentNode.innerHTML = ''; //yahoo urra diaaaa hahahaha
}
