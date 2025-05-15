function addToContacts() {
  const vCardData = `BEGIN:VCARD
VERSION:3.0
N:Ong;Yen Cheong;;;
FN:Yen Cheong Ong
TEL;TYPE=CELL;TYPE=pref;TYPE=VOICE:9740 8776
EMAIL;TYPE=HOME;TYPE=pref;TYPE=INTERNET:eoyzyclbrggg@gmail.com
EMAIL;TYPE=WORK;TYPE=INTERNET:ongyencheong@gmail.com
PRODID:-//Apple Inc.//iCloud Web Address Book 2512B4//EN
REV:2025-05-15T05:52:11Z
item1.X-ADDRESSING-GRAMMAR:+1vCwv3odsEb1+on+RCrqeJ4hPM6yQ71qZHFKzSsPna6ESga
 55za+MN/mvo4P0FjtOa9M/r9JxwT/P5hYNK3mJoF2qXBuOgfcOneGHY4oRee94/Vlmk1zbAzrad
 z1qrR81GORhRBMhPGIJc5qTbNfgPi68nTqFaSVq9GHIPf7TMlL7q6RG9WG+myDOI0MDsUrh6mlf
 Mqx3UCIgr8e5yGWNUJiXlshDdN7KAh0W0nVaf8K01i3nF93slMpwjTjmJ2mfRFZ7Wlzx+XnGZKH
 tv42RhdgUTaXDA0TqI0WXBSEJdtwpKRtM5QeU6EUqHpziVkprhXe5EpSWeZ6x5A57GXGp9ZyeJk
 BblFPH7bCuypozMFGZKSHw9Jnbp0z8+DICaA8kBBYnZS/CmQS5eRzuo7j1jhH0k=
VND-63-SENSITIVE-CONTENT-CONFIG:YnBsaXN0MDDUAQIDBAUGBwpYJHZlcnNpb25ZJGFyY2h
 pdmVyVCR0b3BYJG9iamVjdHMSAAGGoF8QD05TS2V5ZWRBcmNoaXZlctEICVRyb290gAGjCwwRVS
 RudWxs0g0ODxBYb3ZlcnJpZGVWJGNsYXNzEACAAtISExQVWiRjbGFzc25hbWVYJGNsYXNzZXNfE
 B9DTlNlbnNpdGl2ZUNvbnRlbnRDb25maWd1cmF0aW9uohYXXxAfQ05TZW5zaXRpdmVDb250ZW50
 Q29uZmlndXJhdGlvblhOU09iamVjdAgRGiQpMjdJTFFTV11ia3J0dnuGj7G01gAAAAAAAAEBAAA
 AAAAAABgAAAAAAAAAAAAAAAAAAADf
X-SHARED-PHOTO-DISPLAY-PREF:IMPLICIT_AUTOUPDATE
X-IMAGETYPE:PHOTO
X-IMAGEHASH:V25uWeeL1kTlS8JbY7ELig==
END:VCARD
`;

  const blob = new Blob([vCardData], { type: 'text/vcard' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = OYC.vcf';
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
