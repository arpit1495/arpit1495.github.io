var table1 = {};//keep track of items on table 1
var table2 = {};//keep track of items on table 2
var table3 = {};//keep track of items on table 3
var table4 = {};//keep track of items on table 4

//method to populate tables
function populateTables(data, table) {
    //checks if item already in the table, else adds that item
    if(document.getElementById(data+'item').innerHTML in table){
        table[document.getElementById(data+'item').innerHTML][0] += 1;
    }else{
        table[document.getElementById(data+'item').innerHTML] = [1, Number(document.getElementById(data+'price').innerHTML)];
    }
}

//Searching Menu
function searchMenu() {
    // Declare variables
    var input, filter, ul, a, b, i;
    input = document.getElementById('menuSearch');
    filter = input.value.toUpperCase();
    ul = document.getElementsByClassName("food");


    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < ul.length; i++) {
        a = ul[i].getElementsByClassName("itemName")[0];
        b = ul[i].getElementsByClassName("type")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1 || b.innerHTML.toUpperCase().indexOf(filter) > -1) {
            ul[i].style.display = "";
        } else {
            ul[i].style.display = "none";
        }
    }
}

//Searching Tables
function searchTables() {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById('tableSearch');
    filter = input.value.toUpperCase();
    ul = document.getElementsByClassName("table");


    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < ul.length; i++) {
        a = ul[i].getElementsByTagName("h2")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            ul[i].style.display = "";
        } else {
            ul[i].style.display = "none";
        }
    }
}

function allowDrop(ev) {
    ev.preventDefault();

}


function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}


function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    if(ev.target.className === "table"){
        ev.target.children[1].lastChild.innerHTML = Number(ev.target.children[1].lastChild.innerHTML) + Number(document.getElementById(data+'price').innerHTML);
        ev.target.children[2].firstChild.innerHTML = Number(ev.target.children[2].firstChild.innerHTML) +  1;
        if(ev.target.id === 'table1'){
            populateTables(data, table1);
        }

        else if(ev.target.id === 'table2'){
            populateTables(data, table2);
        }

        else if(ev.target.id === 'table3'){
            populateTables(data, table3);
        }

        else if(ev.target.id === 'table4'){
           populateTables(data, table4);
        }

    }

    else{
        if(ev.target.className === "head" || ev.target.className === "bill" || ev.target.className === "items" ){
            ev.target.parentNode.children[1].lastChild.innerHTML = Number(ev.target.parentNode.children[1].lastChild.innerHTML) + Number(document.getElementById(data+'price').innerHTML);
            ev.target.parentNode.children[2].firstChild.innerHTML = Number(ev.target.parentNode.children[2].firstChild.innerHTML) +  1;

            if(ev.target.parentNode.id === 'table1'){
                populateTables(data, table1);
            }

            else if(ev.target.parentNode.id === 'table2'){
                populateTables(data, table2);
            }

            else if(ev.target.parentNode.id === 'table3'){
                populateTables(data, table3);
            }

            else if(ev.target.parentNode.id === 'table4'){
                populateTables(data, table4);
            }
        }
    }
}
//Function to open model 1
function openModal1() {
    openModal("container1", table1, "table1");
}
//Function to open model 2
function openModal2() {
    openModal("container2", table2, "table2");
}
//Function to open model 3
function openModal3() {
    openModal("container3", table3, "table3");
}
//Function to open model 4
function openModal4() {
    openModal("container4", table4, "table4");
}

//creating bill of given table
function openModal(container, table, tableID){
    var target = document.getElementById(container);
    var total = 0;
    while (target.firstChild) {
        target.removeChild(target.firstChild);
    }
    if(Object.keys(table).length > 0){
        for (var i = 0; i < Object.keys(table).length; i++) {
            var key = Object.keys(table)[i];
            total += table[key][0]*table[key][1];
            var row = document.createElement("tr");
            var sNo = document.createElement("td");
            var item = document.createElement("td");
            var price = document.createElement("td");
            var quant = document.createElement("td");
            var input = document.createElement("input");
            var del = document.createElement("td");
            var delBtn = document.createElement("button");


            sNo.className = "modalserial";
            item.className = "modalItemName";
            price.className = "modalPrice";
            quant.className = "modalQuant";

            input.setAttribute("type", "number");
            input.setAttribute("min", 1);
            input.setAttribute("onkeypress", "return event.charCode >= 48");
            if (tableID === "table1"){
                input.setAttribute("onchange", "editQuant(this, table1, 'table1', openModal1)");
            }
            else if (tableID === "table2"){
                input.setAttribute("onchange", "editQuant(this, table2, 'table2', openModal2)");
            }
            else if (tableID === "table3"){
                input.setAttribute("onchange", "editQuant(this, table3, 'table3', openModal3)");
            }
            else{
                input.setAttribute("onchange", "editQuant(this, table4, 'table4', openModal4)");
            }

            if (tableID === "table1"){
                delBtn.setAttribute("onclick", "deleteItem(this, table1, 'table1', openModal1)");
            }
            else if (tableID === "table2"){
                delBtn.setAttribute("onclick", "deleteItem(this, table2, 'table2', openModal2)");
            }
            else if (tableID === "table3"){
                delBtn.setAttribute("onclick", "deleteItem(this, table3, 'table3', openModal3)");
            }
            else {
                delBtn.setAttribute("onclick", "deleteItem(this, table4, 'table4', openModal4)");
            }

            delBtn.className = "modalDelete";

            delBtn.innerHTML = "del";

            sNo.innerHTML = i + 1;
            item.innerHTML = key;
            price.innerHTML = table[key][1];
            input.value = table[key][0];

            quant.appendChild(input);
            del.appendChild(delBtn);


            row.appendChild(sNo);
            row.appendChild(item);
            row.appendChild(price);
            row.appendChild(quant);
            row.appendChild(del);
            target.appendChild(row);
        }
    }
    var fRow = document.createElement('tr');
    var tData = document.createElement('th');
    var tValue = document.createElement('td');
    tData.colspan = 2;
    tValue.colspan = 2;
    tData.innerHTML = 'Total';
    tValue.innerHTML = total;
    fRow.appendChild(tData);
    fRow.appendChild(tValue);
    target.appendChild(fRow);
}
//resets table 1
function resetTable1() {
    table1={};
    resetTable("table1", "container1", "id01", "Table-1");
}
//resets table 2
function resetTable2() {
    table2={};
    resetTable("table2", "container2", "id02", "Table-2");
}
//resets table 3
function resetTable3() {
    table3={};
    resetTable("table3", "container3", "id03", "Table-3");
}
//resets table 4
function resetTable4() {
    table4={};
    resetTable("table4", "container4", "id04", "Table-4");
}

//Closes the session of tables
function resetTable(tableId, container, modalId, str){
    var table = document.getElementById(tableId);
    var modal = document.getElementById(container);
    var total = modal.lastChild.lastChild.innerHTML;
    while (modal.firstChild) {
        modal.removeChild(modal.firstChild);
    }
    var ctr = 0;
    table.children[1].lastChild.innerHTML = ctr.toFixed(2);
    table.children[2].firstChild.innerHTML = 0;
    var modal1 = document.getElementById(modalId);
    modal1.style.display = "none";
    alert(str + " bill amount is Rs " + total);
}


//to edit quantity of certain item
function editQuant(ev, table, tableId, fn){
    key = ev.parentNode.parentNode.children[1].innerHTML;
    if(Number(ev.value) === 0){
        delete table[key];
    }
    else{
        table[key][0] = Number(ev.value);
    }
    var ctr = document.getElementById(tableId);
    var amount = 0;
    var item = 0;
    for(var i = 0; i < Object.keys(table).length; i++){
        amount += table[Object.keys(table)[i]][0]*table[Object.keys(table)[i]][1];
        item += table[Object.keys(table)[i]][0];
    }
    ctr.children[1].lastChild.innerHTML = amount;
    ctr.children[2].firstChild.innerHTML = item;
    fn();

}

//to delete certain item
function deleteItem(ev, table, tableId, fn){
    key = ev.parentNode.parentNode.children[1].innerHTML;
    delete table[key];
    fn();
    var ctr = document.getElementById(tableId);
    var amount = 0;
    var item = 0;
    for(var i = 0; i < Object.keys(table).length; i++){
        amount += table[Object.keys(table)[i]][0]*table[Object.keys(table)[i]][1];
        item += table[Object.keys(table)[i]][0];
    }
    ctr.children[1].lastChild.innerHTML = amount;
    ctr.children[2].firstChild.innerHTML = item;

}


//Clossing modal box by clicking outside of it
var modal1 = document.getElementById('id01');
var modal2 = document.getElementById('id02');
var modal3 = document.getElementById('id03');
var modal4 = document.getElementById('id04');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal1||event.target == modal2||event.target == modal3||event.target == modal4) {
        event.target.style.display = "none";
        var ctr = event.target.getElementsByClassName('tbody')[0];
        while (ctr.firstChild) {
            ctr.removeChild(ctr.firstChild);
        }
    }
} 