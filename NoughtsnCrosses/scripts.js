      var currentPlayer = "O"
      var won = false;

      function place(box){
        if(box.innerText != "" || won) return; /* Checks if box is empty, if it isn't empty do not change */
        box.innerText = currentPlayer; /* if not, checks what player it is */
        currentPlayer == "O" ? currentPlayer = "X" : currentPlayer = "O"; /* if player is O, place an O, if not, place an X */
        checkGameBoard();
      }

      function checkGameBoard() { 
        for(var i = 0; i <= 2; i++) {
          /* Checks rows */
          checkWinner(document.getElementById("0_"+ i).innerText,
                      document.getElementById("1_"+ i).innerText,
                      document.getElementById("2_"+ i).innerText);
           /* Checks columns */
           checkWinner(document.getElementById(i +"_0").innerText,
                       document.getElementById(i +"_1").innerText,
                       document.getElementById(i +"_2").innerText);            
        }
        /* checks diagonals */
        checkWinner (document.getElementById("0_0").innerText,
                     document.getElementById("1_1").innerText,
                     document.getElementById("2_2").innerText);

       checkWinner (document.getElementById("0_2").innerText,
                    document.getElementById("1_1").innerText,
                    document.getElementById("2_0").innerText);

        function checkWinner(first, second, third) {
          if(first != "" && first == second && first == third ) {
            alert("Winner!");
            won = true;
          }
        }  
      }