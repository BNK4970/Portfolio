// afficher les elements au clic
// element 
const title = document.querySelector('.title') //title page
const sub = document.querySelector('.sub')  //subtitle page
const sectionHero = document.querySelector('.hero')  //section hero
const sectionAbout = document.querySelector('.about')  //section about
const sectionProject = document.querySelector('.containerProject')  //section project
const sectionContact = document.querySelector('.contact')  //section contact
const popup = document.querySelector('.pop-up') //popup
const newH2 = document.querySelector('.sub');


// touche echape || click on logo = display none the chat
document.addEventListener('keydown', function(event) {
    if (event.code == 'Escape') {
        sectionHero.style.filter='blur(0px)'
        sectionAbout.style.filter='blur(0px)'
        sectionProject.style.filter='blur(0px)'
        sectionContact.style.filter='blur(0px)'
        popup.classList.add('none');
        newH2.innerHTML = '';
    }
  })
  || title.addEventListener('click',function() {
        sectionHero.style.filter='blur(0px)'
        sectionAbout.style.filter='blur(0px)'
        sectionProject.style.filter='blur(0px)'
        sectionContact.style.filter='blur(0px)'
        popup.classList.add('none');
  });


// btn nav mobile ouvrir le menu mobile
const icons = document.querySelectorAll('.icon');
const sectionNavMobile = document.querySelector('.nav');
icons.forEach (icon => {  
  icon.addEventListener('click', (event) => {
    icon.classList.toggle("open");
    sectionNavMobile.classList.toggle("displayBlock");
  });
});

// btn nav mobile fermer le menu moblie
const liens = document.querySelectorAll('.lienMobile');
liens.forEach (lien => {
  lien.addEventListener('click', (event) => {
    sectionNavMobile.classList.remove('displayBlock')
    icons.forEach (icon => {
      icon.classList.remove('open');
    })
  })
})
