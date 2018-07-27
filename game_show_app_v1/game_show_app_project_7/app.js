var ul=document.querySelector('#phrase ul');
var q=document.getElementById('qwerty');
var ovr = document.querySelector('#overlay');
var missed = 0;
var btn = document.querySelector('.btn__reset');
var ol=document.querySelector('ol');
var li=document.querySelectorAll('ol li');

var bt=document.createElement('button');

           bt.textContent="Reset";
           ovr.appendChild(bt);
           bt.className='btn__reset';
         bt.style.display="none";
var h=document.createElement('h3');
    h.innerHTML="YOU WON MY FRIEND! CONGRATULATIONS!";
 ovr.appendChild(h);
h.style.display='none';

btn.addEventListener('click', () => {
    ovr.style.display='none';
    })

var phrases = [ 'My favorite movie', 'This is the end', 'What do you want to be', "He never knew that awesome trick", "Never ever give up", "I Love treehouse"];

function getRandomPhraseArray(a){
    
    var index=Math.floor(phrases.length*Math.random());
    var chr = a[index].split('');
    return chr;
} 


var arr = getRandomPhraseArray(phrases);
function addPhraseToDisplay(w){

    
    for (let i=0; i<w.length; i++) {
        var li = document.createElement('li');
        li.innerHTML= w[i].toLowerCase();
            ul.appendChild(li); 
        if (w[i]==' ') { 
            
            li.className='space';}
               else {  
                
                   li.className='letter'; } }
    
    }
addPhraseToDisplay(arr);
var letters= document.querySelectorAll('.letter');

function checkLetter(btn) { 
        var letterFound=null;
      for (let i=0; i<letters.length; i++) {
         if (btn===letters[i].innerHTML)          
         {  
             letters[i].classList.add ("show");
             letters[i].style.transition="all 0.6s ease-in-out";
              letterFound=letters[i].innerHTML;

                                }
      }
  return letterFound;  
}


function checkWin() {
    
      var shows= document.querySelectorAll('.show');
       if (letters.length===shows.length) { 
           ovr.style.display='flex'; ovr.classList.add("win"); 
           btn.style.display='none';
           bt.style.display="block";
           h.style.display='block';

       }
           
       else if (missed==5) { ovr.style.display='flex';ovr.classList.add ("lose"); 
                            btn.style.display='none';
                            bt.style.display="block";
                            h.innerHTML="YOU LOST, SORRY. TRY AGAIN!";
                            h.style.display='block';

                           }
    }
checkWin();
q.addEventListener('click', (event) => {  
   if(event.target.nodeName==='BUTTON') 
   
       {   event.target.className="chosen";
           event.target.setAttribute('disabled','true');
  var b = event.target.innerHTML;
       
       checkLetter(b);
        
        if (checkLetter(b)===null) 
            {  ol.removeChild(li[missed]);
                missed+=1;
        }    
       
           checkWin();   
        
         }   
  })

ovr.addEventListener('click', (event) => {
    if (event.target.innerHTML=="Reset") {

        location.reload();
            }
             })






