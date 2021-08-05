var addButtons = document.getElementById('addButtons');
var btn = [0 , 1 , 2];
function getRandomInt(max) {
return Math.floor(Math.random() * max);
 }
var number = getRandomInt(3);
for( var i = 0; i < 3; ++i){
    var newBtn = document.createElement('BUTTON');
     newBtn.innerText = i;
     newBtn.setAttribute("id", i)
     addButtons.appendChild(newBtn);
     newBtn.addEventListener('click',  function() {
     if(this.id == number){
            document.write("winner");
     }
     else{
            alert("try again!");
     }
    });
}  
