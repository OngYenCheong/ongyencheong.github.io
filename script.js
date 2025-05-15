function addToContacts() {
  const vCardData = `BEGIN:VCARD\nVERSION:3.0\nFN:Chloe Luai\nTEL:+6592323165\nEMAIL:chloeluai10@gmail.com\nEND:VCARD`;

  const blob = new Blob([vCardData], { type: 'text/vcard' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'ChloeLuai.vcf';
  link.click();
}



//https://github.com/devmode-on/Animated-Dark-Mode-Button/tree/main
const body = document.querySelector('body');
const btn = document.querySelector('.btn');
const icon = document.querySelector('.btn__icon');

function store(value){
  localStorage.setItem('darkmode', value);
}

function load(){
  const darkmode = localStorage.getItem('darkmode');
  if(!darkmode){
    store(false);
    icon.classList.add('fa-sun');
  } else if( darkmode == 'true'){ 
    body.classList.add('darkmode');
    icon.classList.add('fa-moon');
  } else if(darkmode == 'false'){
    icon.classList.add('fa-sun');
  }
}

load();

btn.addEventListener('click', () => {
  body.classList.toggle('darkmode');
  icon.classList.add('animated');
  store(body.classList.contains('darkmode'));
  if(body.classList.contains('darkmode')){
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }else{
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  }
  setTimeout( () => {
    icon.classList.remove('animated');
  }, 500)
})
