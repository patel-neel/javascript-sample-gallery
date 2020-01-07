const panels = document.querySelectorAll('.panel');

function toggleOpen() {
    console.log('heyy');
    this.classList.toggle('open');

}

function toggleActive(){
    if(e.propertyName === 'flex-grow')
    // this.classList.toggle('open-active');
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen))
panels.forEach(panel => panel.addEventListener("transitionend", toggleActive))