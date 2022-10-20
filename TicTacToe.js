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
        var b = ["b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9"];
        for ( var i = 0; i < 9; ++i) {
          b[i] = document.getElementById(b[i]).value;
        }
        if (((b[0] == 'X') && (b[1] == 'X') && (b[2] == 'X') || ((b[0] == 'X') && (b[4] == 'X') && (b[8] == 'X')) || ((b[0] == 'X') && (b[3] == 'X') && (b[6] == 'X')) || ((b[3] == 'X') && (b[4] == 'X') && (b[5] == 'X')) || ((b[1] == 'X') && (b[4] == 'X') && (b[7] == 'X')) || ((b[2] == 'X') && (b[5] == 'X') && (b[8] == 'X')) || ((b[2] == 'X') && (b[4] == 'X') && (b[6] == 'X')) || ((b[6] == "X") && (b[7] == 'X') && (b[8] == 'X')))) {
          document.getElementById('print').innerHTML = "Player X won";
          for (var j = 1; j <= 9; ++j) {
            document.getElementById("b" + j).disabled = true;
          }
        }
        else if (((b[0] == '0') && (b[1] == '0') && (b[2] == '0') || ((b[0] == '0') && (b[4] == '0') && (b[8] == '0')) || ((b[0] == '0') && (b[3] == '0') && (b[6] == '0')) || ((b[3] == '0') && (b[4] == '0') && (b[5] == '0')) || ((b[3] == '0') && (b[4] == '0') && (b[7] == '0')) || ((b[2] == '0') && (b[5] == '0') && (b[8] == '0')) || ((b[2] == '0') && (b[4] == '0') && (b[6] == '0')) || ((b[6] == "0") && (b[7] == "0") && (b[8] == "0")))) {
          document.getElementById('print').innerHTML = "Player 0 won";
          for (var j = 1; j <= 9; ++j) {
            document.getElementById("b" + j).disabled = true;
          }
        }
        else if ((b[0] == 'X') || (b[0] == '0') && (b[1] == 'X') || (b[1] == '0') && (b[2] == 'X') || (b[2] == '0') && (b[3] == 'X') || (b[3] == '0') && (b[4] == 'X') || (b[4] == '0') && (b[5] == 'X') || (b[5] == '0') && (b[6] == 'X') || (b[6] == '0') && (b[7] == 'X') || (b[7] == '0') && (b[8] == 'X') || (b[8] == '0')) {
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
      }
    </script>
