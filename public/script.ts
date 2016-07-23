var job: string, newBox: string; 
        function addTask(){
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
            document.getElementById("task").value = ''; // removing the filled text field
        }

        function dlt(z){
//            alert(z.parentNode.innerHTML); // finally got it, the <td> to be dltd
//            alert(z.parentNode.parentNode); //<tr> uska parent node mil gya
            z.parentNode.parentNode.innerHTML = ''; //yahoo urra diaaaa hahahaha
        }

        // "<td> <button onclick='dlt(this);'>x</button> </td>" + // bootstrap ka danger button use kro circular ya cross wala glyphicon
                        //"<td onclick='dlt(this);'>X</td>" +