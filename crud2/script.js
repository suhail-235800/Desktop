var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["empid"] = document.getElementById("empid").value;
    formData["empname"] = document.getElementById("empname").value;
    formData["location"] = document.getElementById("location").value;
    formData["salary"] = document.getElementById("salary").value;
    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("empList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.empid;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.empname;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.location;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.salary;
    cell4 = newRow.insertCell(4);
        cell4.innerHTML = `<button onClick="onEdit(this)">Edit</button> <input type="checkbox" id= "del">`;
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("empid").value = selectedRow.cells[0].innerHTML;
    document.getElementById("empname").value = selectedRow.cells[1].innerHTML;
    document.getElementById("location").value = selectedRow.cells[2].innerHTML;
    document.getElementById("salary").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.empid;
    selectedRow.cells[1].innerHTML = formData.empname;
    selectedRow.cells[2].innerHTML = formData.location;
    selectedRow.cells[3].innerHTML = formData.salary;
}

//Delete the data
function onDelete() {
    var selected = document.querySelectorAll('delete');
 
    selected.forEach((userItem)=>{
        deleteUser(userItem);
    });
    
    if (confirm('Do you want to delete this record?')) {
        var selected = document.querySelectorAll("input[type=checkbox]:checked");
        selected.forEach(function(el){
            el.parentElement.parentElement.remove();
        });
    }
}

//Reset the data
function resetForm() {
    document.getElementById("empid").value = '';
    document.getElementById("empname").value = '';
    document.getElementById("location").value = '';
    document.getElementById("salary").value = '';
    selectedRow = null;
}
