function brojanjeSlova() {
  document.getElementById('output').textContent = ""
  let txt = document.getElementById('txt').value
  let ts = document.getElementById('ts').value // unet tekst
  let arr = txt.split('').sort().join('').match(/(.)\1*/gm)
  
  
  for (let item of arr) {
    document.getElementById('output').textContent = 'nema!'
    if (ts === item[0]) {
      document.getElementById('output').textContent = item.length   
      break 
    }  
  }
}

function listaKolicineSlova() {
  document.getElementById('tab').textContent = ""
  let txt = document.getElementById('txt').value
  let arr = txt.split('').sort().join('').match(/(.)\1*/gm).reverse()

  var table = document.getElementById("tab");
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = `Slovo`;
  cell2.innerHTML = `Kolicina`;

  for (let item of arr) {
      table = document.getElementById("tab");
      row = table.insertRow(0);
      cell1 = row.insertCell(0);
      cell2 = row.insertCell(1);
      cell1.innerHTML = `${item[0]}`;
      cell2.innerHTML = `${item.length}`;
  }

  table = document.getElementById("tab");
  row = table.insertRow(0);
  cell1 = row.insertCell(0);
  cell2 = row.insertCell(1);
  cell1.innerHTML = `Slovo`;
  cell2.innerHTML = `Kolicina`;
}


