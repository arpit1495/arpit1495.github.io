  var table1 = {};
var table2 = {};
var table3 = {};
var table4 = {};

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
      ev.target.children[1].innerHTML = Number(ev.target.children[1].innerHTML) + Number(document.getElementById(data+'price').innerHTML);
      ev.target.children[2].innerHTML = Number(ev.target.children[2].innerHTML) +  1;
      if(ev.target.id === 'table1'){
        if(document.getElementById(data+'item').innerHTML in table1){
          table1[document.getElementById(data+'item').innerHTML][0] += 1;
        }
        else{
          table1[document.getElementById(data+'item').innerHTML] = [1, Number(document.getElementById(data+'price').innerHTML)];
        }
      }

      if(ev.target.id === 'table2'){
        if(document.getElementById(data+'item').innerHTML in table2){
          table2[document.getElementById(data+'item').innerHTML][0] += 1;
        }
        else{
          table2[document.getElementById(data+'item').innerHTML] = [1, Number(document.getElementById(data+'price').innerHTML)];
        }
      }

      if(ev.target.id === 'table3'){
        if(document.getElementById(data+'item').innerHTML in table3){
          table3[document.getElementById(data+'item').innerHTML][0] += 1;
        }
        else{
          table3[document.getElementById(data+'item').innerHTML] = [1, Number(document.getElementById(data+'price').innerHTML)];
        }
      }

      if(ev.target.id === 'table4'){
        if(document.getElementById(data+'item').innerHTML in table4){
          table4[document.getElementById(data+'item').innerHTML][0] += 1;
        }
        else{
          table4[document.getElementById(data+'item').innerHTML] = [1, Number(document.getElementById(data+'price').innerHTML)];
        }
      }
      
    }
    
    else{
      if(ev.target.className === "head" || ev.target.className === "bill" || ev.target.className === "items" ){
        ev.target.parentNode.children[1].innerHTML = Number(ev.target.parentNode.children[1].innerHTML) + Number(document.getElementById(data+'price').innerHTML);
        ev.target.parentNode.children[2].innerHTML = Number(ev.target.parentNode.children[2].innerHTML) +  1;

        if(ev.target.parentNode.id === 'table1'){
          if(document.getElementById(data+'item').innerHTML in table1){
            table1[document.getElementById(data+'item').innerHTML][0] += 1;
          }
          else{
            table1[document.getElementById(data+'item').innerHTML] = [1, Number(document.getElementById(data+'price').innerHTML)];
          }
        }

        if(ev.target.parentNode.id === 'table2'){
          if(document.getElementById(data+'item').innerHTML in table2){
            table2[document.getElementById(data+'item').innerHTML][0] += 1;
          }
          else{
            table2[document.getElementById(data+'item').innerHTML] = [1, Number(document.getElementById(data+'price').innerHTML)];
          }
        }

        if(ev.target.parentNode.id === 'table3'){
          if(document.getElementById(data+'item').innerHTML in table3){
            table3[document.getElementById(data+'item').innerHTML][0] += 1;
          }
          else{
            table3[document.getElementById(data+'item').innerHTML] = [1, Number(document.getElementById(data+'price').innerHTML)];
          }
        }

        if(ev.target.parentNode.id === 'table4'){
          if(document.getElementById(data+'item').innerHTML in table4){
            table4[document.getElementById(data+'item').innerHTML][0] += 1;
          }
          else{
            table4[document.getElementById(data+'item').innerHTML] = [1, Number(document.getElementById(data+'price').innerHTML)];
          }
        }
      }
    }
}

//creating bill of table 1
function openModal1(){
  var target = document.getElementById('container1');
  var total = 0;
  while (target.firstChild) {
          target.removeChild(target.firstChild);
  }
  if(Object.keys(table1).length > 0){
    for (var i = 0; i < Object.keys(table1).length; i++) {
      var key = Object.keys(table1)[i];
      total += table1[key][0]*table1[key][1];
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
      input.setAttribute("onchange", "editQuant(this, table1, 'table1', openModal1)");


      delBtn.setAttribute("onclick", "deleteItem(this, table1, 'table1', openModal1)");
      delBtn.className = "modalDelete";

      delBtn.innerHTML = "del";

      sNo.innerHTML = i + 1;
      item.innerHTML = key;
      price.innerHTML = table1[key][1];
      input.value = table1[key][0];

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

//creating bill of table 2
function openModal2(){
  var target = document.getElementById('container2');
  var total = 0;
  while (target.firstChild) {
          target.removeChild(target.firstChild);
  }
  if(Object.keys(table2).length > 0){
    for (var i = 0; i < Object.keys(table2).length; i++) {
      var key = Object.keys(table2)[i];
      total += table2[key][0]*table2[key][1];
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
      input.setAttribute("onchange", "editQuant(this, table2, 'table2', openModal2)");


      delBtn.setAttribute("onclick", "deleteItem(this, table2, 'table2', openModal2)");
      delBtn.className = "modalDelete";

      delBtn.innerHTML = "del";

      sNo.innerHTML = i + 1;
      item.innerHTML = key;
      price.innerHTML = table2[key][1];
      input.value = table2[key][0];

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


//creating bill of table 3
function openModal3(){
  var target = document.getElementById('container3')
  var total = 0;
  while (target.firstChild) {
          target.removeChild(target.firstChild);
  }
  if(Object.keys(table3).length > 0){
    for (var i = 0; i < Object.keys(table3).length; i++) {
      var key = Object.keys(table3)[i];
      total += table3[key][0]*table3[key][1];
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
      input.setAttribute("onchange", "editQuant(this, table3, 'table3', openModal3)");


      delBtn.setAttribute("onclick", "deleteItem(this, table3, 'table3', openModal3)");
      delBtn.className = "modalDelete";

      delBtn.innerHTML = "del";

      sNo.innerHTML = i + 1;
      item.innerHTML = key;
      price.innerHTML = table3[key][1];
      input.value = table3[key][0];

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


//creating bill of table 4
function openModal4(){
  var target = document.getElementById('container4');
  var total = 0;
  while (target.firstChild) {
          target.removeChild(target.firstChild);
  }
  if(Object.keys(table4).length > 0){
    for (var i = 0; i < Object.keys(table4).length; i++) {
      var key = Object.keys(table4)[i];
      total += table4[key][0]*table4[key][1];
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
      input.setAttribute("onchange", "editQuant(this, table4, 'table4', openModal4)");


      delBtn.setAttribute("onclick", "deleteItem(this, table4, 'table4', openModal4)");
      delBtn.className = "modalDelete";

      delBtn.innerHTML = "del";

      sNo.innerHTML = i + 1;
      item.innerHTML = key;
      price.innerHTML = table4[key][1];
      input.value = table4[key][0];

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

//Closes the session of table 1
function resetTable1(){
  table1 = {};
  var table = document.getElementById('table1');
  var modal = document.getElementById('container1');
  var total = modal.lastChild.lastChild.innerHTML;
  while (modal.firstChild) {
    modal.removeChild(modal.firstChild);
  }
  table.children[1].innerHTML = 0.00;
  table.children[2].innerHTML = 0;
  var modal1 = document.getElementById('id01');
  modal1.style.display = "none";
  alert("Table-1 bill amount is Rs " + total);
}

//Closes the session of table 2
function resetTable2(){
  table2 = {};
  var modal = document.getElementById('container2');
  var total = modal.lastChild.lastChild.innerHTML;
  while (modal.firstChild) {
    modal.removeChild(modal.firstChild);
  }
  var table = document.getElementById('table2');
  table.children[1].innerHTML = 0.00;
  table.children[2].innerHTML = 0;
  var modal2 = document.getElementById('id02');
  modal2.style.display = "none";
  alert("Table-1 bill amount is Rs " + total);
}

//Closes the session of table 3
function resetTable3(){
  table3 = {};
  var modal = document.getElementById('container3');
  var total = modal.lastChild.lastChild.innerHTML;
  while (modal.firstChild) {
    modal.removeChild(modal.firstChild);
  }
  var table = document.getElementById('table3');
  table.children[1].innerHTML = 0.00;
  table.children[2].innerHTML = 0;
  var modal3 = document.getElementById('id03');
  modal3.style.display = "none";
  alert("Table-1 bill amount is Rs " + total);
}

//Closes the session of table 4
function resetTable4(){
  table4 = {};
  var modal = document.getElementById('container4');
  var total = modal.lastChild.lastChild.innerHTML;
  while (modal.firstChild) {
    modal.removeChild(modal.firstChild);
  }
  var table = document.getElementById('table4');
  table.children[1].innerHTML = 0.00;
  table.children[2].innerHTML = 0;
  var modal4 = document.getElementById('id04');
  modal4.style.display = "none";
  alert("Table-1 bill amount is Rs " + total);
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
  ctr.children[1].innerHTML = amount;
  ctr.children[2].innerHTML = item;
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
  ctr.children[1].innerHTML = amount;
  ctr.children[2].innerHTML = item;
  
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