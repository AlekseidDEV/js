function one (z) {
    function two () {
          const x = Math.floor(Math.random() *100)
          console.log(x);
          
          let a = +prompt('угадай число от 1 до 100')
          console.log(a);

          z--
         
          switch (true) {
               case z === 0 :
                    console.log('игра закончилась, у вас закончились попытки');
                    return
          }

          switch(true) {

               case a > x :
               console.log('загаданное число меньше' + ' количество попыток осталось: ' + z );
                    two()
                    break
               case a < x :
               console.log('загаданное число больше' + ' количество попыток осталось: ' + z );
                    two()
                    break
               case a !== x :
               console.log('введи число придурок' + ' количество попыток осталось: ' + z );
                    two()
                    break
               case a === x :
               console.log('поздравляем, вы прошли игру' + ' , количество попыток осталось: ' + z );
                    break      
     }

    }
    two()
}

one(10)




