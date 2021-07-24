let btn = document.getElementById("btn-ok")
  .addEventListener("click", function(event) {
    console.log(event);
    let msg = document.getElementById("input-msg").value;
    console.log(msg);

    document.getElementById('msg').innerHTML = msg;
  });
