function getRandomInt(max) {
    return Math.floor(Math.random() * max);
        }
    var numar = getRandomInt(3);
    var button = document.getElementById('nou');
    button.addEventListener('click', e => {
        if( numar == 0) {
            var text = 'winner';
            document.write(text);
        }
        else{
            alert('try again')
        }
    } )
    var button1 = document.getElementById('nou2')
    button1.addEventListener('click', e => {
        if(numar == 1){
            var text1 = 'winner';
            document.write(text1);
        }
        else{
            alert('try again!')
        }
    })
    var button2 = document.getElementById('nou3')
    button2.addEventListener('click', e => {
        if(numar == 2){
            var text2 = 'winner';
            document.write(text2);
        }
        else{
            alert('try again');
        }
    })