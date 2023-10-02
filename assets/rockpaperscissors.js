    function rockGame (){let randomNumber = Math.random();

        if (randomNumber >= 0 && randomNumber < 1/3){
                console.log('Rock');
            }
         else if (randomNumber >= 1/3 && randomNumber < 2/3){
                console.log('Paper');
        }
        else if (randomNumber >= 2/3 && randomNumber < 1)
    {console.log('Rock')}
    }