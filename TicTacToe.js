<script type="text/javascript">

       flag = 0;
      function getValue() {
        if (flag == 1) {
          document.getElementById(event.srcElement.id).value = "X";
          document.getElementById(event.srcElement.id).disabled = true;
          flag = 0;
        } else if (flag == 0) {
          document.getElementById(event.srcElement.id).value = "0";
          document.getElementById(event.srcElement.id).disabled = true;
          flag = 1;
        }
      } 

      function playerTurn() {
        let b1, b2, b3, b4, b5, b6, b7, b8, b9;
        b1 = document.getElementById("b1").value;
        b2 = document.getElementById("b2").value;
        b3 = document.getElementById("b3").value;
        b4 = document.getElementById("b4").value;
        b5 = document.getElementById("b5").value;
        b6 = document.getElementById("b6").value;
        b7 = document.getElementById("b7").value;
        b8 = document.getElementById("b8").value;
        b9 = document.getElementById("b9").value;

        if (((b1 == 'X') && (b2 == 'X') && (b3 == 'X') || ((b1 == 'X') && (b5 == 'X') && (b9 == 'X')) || ((b1 == 'X') && (b4 == 'X') && (b7 == 'X')) || ((b4 == 'X') && (b5 == 'X') && (b6 == 'X')) || ((b2 == 'X') && (b5 == 'X') && (b8 == 'X')) || ((b3 == 'X') && (b6 == 'X') && (b9 == 'X')) || ((b3 == 'X') && (b5 == 'X') && (b7 == 'X')) || ((b7 == "X") && (b8 == 'X') && (b9 == 'X')))) {
          document.getElementById('print').innerHTML = "Player X won";
          document.getElementById("b1").disabled = true;
          document.getElementById("b2").disabled = true;
          document.getElementById("b3").disabled = true;
          document.getElementById("b4").disabled = true;
          document.getElementById("b5").disabled = true;
          document.getElementById("b6").disabled = true;
          document.getElementById("b7").disabled = true;
          document.getElementById("b8").disabled = true;
          document.getElementById("b9").disabled = true;
        }
        else if (((b1 == '0') && (b2 == '0') && (b3 == '0') || ((b1 == '0') && (b5 == '0') && (b9 == '0')) || ((b1 == '0') && (b4 == '0') && (b7 == '0')) || ((b4 == '0') && (b5 == '0') && (b6 == '0')) || ((b2 == '0') && (b5 == '0') && (b8 == '0')) || ((b3 == '0') && (b6 == '0') && (b9 == '0')) || ((b3 == '0') && (b5 == '0') && (b7 == '0')) || ((b7 == "0") && (b8 == "0") && (b9 == "0")))) {
          document.getElementById('print').innerHTML = "Player 0 won";
          document.getElementById("b1").disabled = true;
          document.getElementById("b2").disabled = true;
          document.getElementById("b3").disabled = true;
          document.getElementById("b4").disabled = true;
          document.getElementById("b5").disabled = true;
          document.getElementById("b6").disabled = true;
          document.getElementById("b7").disabled = true;
          document.getElementById("b8").disabled = true;
          document.getElementById("b9").disabled = true;
        }
        else if ((b1 == 'X') || (b1 == '0') && (b2 == 'X') || (b2 == '0') && (b3 == 'X') || (b3 == '0') && (b4 == 'X') || (b4 == '0') && (b5 == 'X') || (b5 == '0') && (b6 == 'X') || (b6 == '0') && (b7 == 'X') || (b7 == '0') && (b8 == 'X') || (b8 == '0') && (b9 == 'X') || (b9 == '0')) {
          document.getElementById('print')
                  .innerHTML = "I'ts a tie";
        }
        else if (flag == 1) {
          document.getElementById('print')
                  .innerHTML = "Player X Turn";
        }
        else {
          document.getElementById('print')
                  .innerHTML = "Player 0 Turn";
        }
      }

      function restartGame() {
        location.reload();
        document.getElementById('b1').value = '';
        document.getElementById("b2").value = '';
        document.getElementById("b3").value = '';
        document.getElementById("b4").value = '';
        document.getElementById("b5").value = '';
        document.getElementById("b6").value = '';
        document.getElementById("b7").value = '';
        document.getElementById("b8").value = '';
        document.getElementById("b9").value = '';
      }
    </script>
