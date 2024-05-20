console.log('hello this is Fahad');
const menuroles = document.getElementsByClassName('fahad')
// console.log(menuroles);
const handleMenu=()=>{

    console.log('clicked',menuroles);
    for (const menuElement of menuroles) {
        menuElement.classList.toggle('hidden');
      }
      
}