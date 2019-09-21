/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function changeSelect(value) {
    let field = document.getElementById('searchText');
    let button = document.getElementById('seacrhButton');
    let combo = document.getElementById('selectType');
    console.log(field);
    if (value === 'sessionDate' || value === 'incorDate') {
        field.type = 'date';
        button.style.visibility = 'visible';
        combo.style.visibility = 'hidden';
    } else
    if (value === 'accNumber') {
        field.type = 'text';
        button.style.visibility = 'visible';
        combo.style.visibility = 'hidden';
    } else if (value === 'sessionType') {
        field.type = 'hidden';
        button.style.visibility = 'hidden';
        combo.style.visibility = 'visible';
    } else if (value === 'allAccords') {
        field.type = 'hidden';
        button.style.visibility = 'visible';
        combo.style.visibility = 'hidden';
    } else {
        field.type = 'hidden';
        button.style.visibility = 'hidden';
        combo.style.visibility = 'hidden';
    }



}

//document.addEventListener("DOMContentLoaded", function () {
//    document.getElementById('seacrhButton').style.visibility = 'hidden';
//});

function list(parent, accord) {
    var tr = $("<tr/>");
    tr.html(
            "<td>" + accord.accNumber + "</td>"
            + "<td>" + accord.incorporatedDate + "</td>"
            + "<td>" + accord.sessionDate + "</td>"
            + "<td>" + accord.deadline + "</td>"
            + "<td>" + typeToString(accord.type) + "</td>"
            + "<td>" + stateToString(accord.state) + "</td>"
            + "<td>" + "<button type=\"button\" style='text-align: center' class=\"bnt btn-primary\" onclick=\"location.href='addAccord.jsp?accnumber=" + accord.accNumber + "'\">"
            + "<i class=\"fas fa-edit\">" + "</i>" + "</button>" + "</td>"
            );
    parent.append(tr);
}


function stateToString(state) {
    let stateInt = parseInt(state, 10);
    switch (stateInt) {
        case 0:
            return 'Cumplido';
        case 1:
            return 'Incumplido';
        case 2:
            return 'Pendiente';

        case 3:
            return 'Recibido';

        case 4:
            return 'Desestimado';

        default:
            return '';
    }
}
function typeToString(type) {
    switch (type) {
        case 'A':
            return 'Administración Municipal';
        case 'B':
            return 'Auditoria Interna';
        case 'C':

            return 'Lic';

        case 'D':
            return 'Obras';

        case 'E':
            return 'Plan Regulador';

        case 'F':
            return 'Hacienda';

        case 'G':
            return 'Juridicos';

        case 'H':
            return 'Sociales';

        case 'I':
            return 'Ambiente';

        case 'J':
            return 'Varios';

        default:
            return '';


    }
}
function SearchBySessionDate() {
    let sessiondate = document.getElementById('searchText').value;
    let _url = "api/accord/getaccord/sessiondate/" + sessiondate;

    fetch(_url)
            .then(res =>
                res.json()
            )
            .then(accords => {
                var parent = $("#accordList");
                parent.html("");
                accords.forEach(item => {
                    list(parent, item);
                });

            })
            .catch(error => {
                console.log(error);
            });
}


function searchBySessionType() {
    let type = document.getElementById('selectType').value;
    let _url = "api/accord/getaccord/type/" + type;

    fetch(_url)
            .then(res =>
                res.json()
            )
            .then(accords => {
                var parent = $("#accordList");
                parent.html("");
                accords.forEach(item => {
                    list(parent, item);
                });

            })
            .catch(error => {
                console.log(error);
            });
}

function searchByIncorDate() {

    let incordate = document.getElementById('searchText').value;
    let _url = "api/accord/getaccord/incordate/" + incordate;

    fetch(_url)
            .then(res =>
                res.json()
            )
            .then(accords => {
                var parent = $("#accordList");
                parent.html("");
                accords.forEach(item => {
                    list(parent, item);
                });

            })
            .catch(error => {
                console.log(error);
            });
}


function searchByAccNumber() {
    let accnumber = document.getElementById('searchText').value;
    let _url = "api/accord/getaccord/accord/" + accnumber;

    fetch(_url)
            .then(res =>
                res.json()
            )
            .then(accords => {
                var parent = $("#accordList");
                parent.html("");
                accords.forEach(item => {
                    list(parent, item);
                });

            })
            .catch(error => {
                console.log(error);
            });
}

function searchAllAccords(){
     let _url = "api/accord/getaccord/all/";
         fetch(_url)
            .then(res =>
                res.json()
            )
            .then(accords => {
                var parent = $("#accordList");
                parent.html("");
                accords.forEach(item => {
                    list(parent, item);
                });

            })
            .catch(error => {
                console.log(error);
            });
}


function searchAccord() {
    let parameter = document.getElementById('serchType').value;
    if (parameter !== 'notSelected') {
        switch (parameter) {
            case 'sessionDate':
                SearchBySessionDate();
                break;

            case 'incorDate':
                searchByIncorDate();
                break;


            case 'sessionType':
                searchBySessionType();
                break;

            case 'accNumber':
                searchByAccNumber();
                break;

            case 'allAccords':
                searchAllAccords();
                break;
        }
    }
}
