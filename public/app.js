function calculate() {
    var price = parseInt(document.getElementById("loanAmount").value);
    var duprate = parseInt(document.getElementById("interestRate").value);
    var rate = duprate / 12 / 100;
    var term = parseInt(document.getElementById("loanTerm").value);
    var pow = Math.pow((1 + rate), term)
    var sol = ((price * rate * pow) / (pow - 1))
    document.getElementById("ans").innerHTML = "$"+sol.toFixed(2);

    if (sol > 1000) {
      document.getElementById("ans").style.color = "red";
    }
    else {
      document.getElementById("ans").style.color = "green";
    }
  }