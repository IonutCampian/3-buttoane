var adaugaButoate = document.getElementById('adaugaButoate');
var btn = [0 , 1 , 2];
function getRandomInt(max) {
return Math.floor(Math.random() * max);
 }
var numar = getRandomInt(3);
for( var i = 0; i < 3; ++i){
    var btnNou = document.createElement('BUTTON');
     btnNou.innerText = i;
     btnNou.setAttribute("id", i)
      adaugaButoate.appendChild(btnNou);
        btnNou.addEventListener('click',  function() {
        if(this.id == numar){
            document.write("winner");
        }
        else{
            alert("try again!");
        }
    });
}  
