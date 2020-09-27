function onformsubmit() {
    var formdata=readformdata();
    insertintorecord(formdata);
    resetForm();
}

function readformdata() {
    var formdata={};
    formdata["date"]=document.getElementById("date").value;
    formdata["patientname"]=document.getElementById("patientname").value;
    formdata["gender"]=document.getElementById("gender").value;
    formdata["age"]=document.getElementById("age").value;
    formdata["problem"]=document.getElementById("problem").value;
    formdata["remarks"]=document.getElementById("remarks").value;
    formdata["medico"]=document.getElementById("medico").value;
    return formdata;
}

function insertintorecord(data) {
    var table=document.getElementById("tableid").getElementsByTagName('tbody')[0];
    var newRow=table.insertRow(table.length);

    cell1=newRow.insertCell(0);
    cell1.innerHTML=data.date;

    cell2=newRow.insertCell(1);
    cell2.innerHTML=data.patientname;

    cell3=newRow.insertCell(2);
    cell3.innerHTML=data.gender;

    cell4=newRow.insertCell(3);
    cell4.innerHTML=data.age;

    cell5=newRow.insertCell(4);
    cell5.innerHTML=data.problem;

    cell6=newRow.insertCell(5);
    cell6.innerHTML=data.remarks;

    cell7=newRow.insertCell(6);
    cell7.innerHTML=data.medico;
}

function resetForm() {
    document.getElementById("date").value="";
    document.getElementById("patientname").value="";
    document.getElementById("gender").value="";
    document.getElementById("age").value="";
    document.getElementById("problem").value="";
    document.getElementById("remarks").value="";
    document.getElementById("medico").value="";
}