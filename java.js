
      // Set starting value of counter to 0
      if (!localStorage.getItem('counter'))
          localStorage.setItem('counter', 0);

      // Load current value of  counter
      document.addEventListener('DOMContentLoaded', () => {
          document.querySelector('#gg').innerHTML = localStorage.getItem('counter');

          // Aumento Contatore
          document.querySelector('#aumenta').onclick = () => {
              // Increment current counter
              let counter = localStorage.getItem('counter');
              counter++;

              // Update counter
              document.querySelector('#gg').innerHTML = counter;
              localStorage.setItem('counter', counter);
          }
      });


      if (!localStorage.getItem('counter'))
                localStorage.setItem('counter', 0);

            // Load current value of  counter
            document.addEventListener('DOMContentLoaded', () => {


                document.querySelector('#gg').innerHTML = localStorage.getItem('counter');

                // Decremento Contatore
                document.querySelector('#diminuisce').onclick = () => {
                     // Reduce current counter
                    let counter = localStorage.getItem('counter');
                    counter--;

                    if (counter < 0) counter = 0;
                    // Update counter
                    document.querySelector('#gg').innerHTML = counter;
                    localStorage.setItem('counter', counter);
                }
                


            });