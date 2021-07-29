let btn = document.getElementById("btn-ok")
  .addEventListener("click", function(event) {
    console.log(event);
    let msg = document.getElementById("input-msg").value;
    console.log(msg);

    let select = document.getElementById("sel-brand").value;
    console.log(select);

    document.getElementById('msg').innerHTML = msg;
  });

let num = 0;

switch (num) {
  case 0:
    console.log('Es cero');
    break;
  case 1:
    console.log('Es uno');
    break;
  case 10:
    console.log('Es diez');
    break;
  default:
    console.log('ningún caso');
    break;
}

if (num == 1) {
  alert('ES UNO');
} else if (num == 10) {
  alert('ES DIEZ');
} else if (num == 20) {
  alert('ES VEINTE');
} else {
  alert('NINGUN CASO');
}
