'use strict'
let j=1;
let buttons=document.querySelectorAll('.set button');
for(let i=0;i<buttons.length;i++){
  buttons[i].addEventListener('click', function(){
    let buttonsinnerHTML=this.innerHTML;
    makeSound(buttonsinnerHTML)
    pressedKey(buttonsinnerHTML);
})

}
document.addEventListener('keypress',function(e){

 makeSound(e.key);
})


function makeSound(key){
  switch (key) {
    case 'w':
      pressedKey(key);
      let tom1=new Audio("tom-1.mp3");
      tom1.play();
      break;
      case 'a':
       pressedKey(key);
        let tom2=new Audio("tom-2.mp3");
        tom2.play();
        break;

        case 's':
         pressedKey(key);
          let tom3=new Audio("tom-3.mp3");
          tom3.play();
          break;

          case 'd':
           pressedKey(key);
            let tom4=new Audio("tom-4.mp3");
            tom4.play();
            break;

            case 'j':
             pressedKey(key);
              let tom5=new Audio("tom-5.mp3");
              tom5.play();
              break;

              case 'k':
               pressedKey(key);
                let tom6=new Audio("tom-6.mp3");
                tom6.play();
                break;
                case 'l':
                 pressedKey(key);
                  let tom7=new Audio("tom-7.mp3");
                  tom7.play();
                  break;
    default:

  }
}
function pressedKey(press){
  document.querySelector('.'+press).classList.add('pressed');
  setTimeout(function(){
    document.querySelector('.'+press).classList.remove('pressed');
  },100)
}
