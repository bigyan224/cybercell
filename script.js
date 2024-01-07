let logo=document.querySelector(".logo")
let name=document.querySelector(".name")
let hack=document.querySelector(".hack")
let page1=document.querySelector(".page1")

function loadinganimation(){

    gsap.from(".logo",{
        x:-100,
        opacity:0,
        delay:0.5,
        duration:0.9,
        stagger:0.3
    })
    gsap.from(".name",{
        y:100,
        opacity:0,
        delay:0.9,
        duration:0.9,
        stagger:0.3
    })
    gsap.from(".welcome",{
        y:100,
        opacity:0,
        delay:1.2,
        duration:0.9,
        stagger:0.3
    })

}
loadinganimation();
function startHacking() {
    const container = document.getElementById('falling-code');
    const characters = ['0', '1'];

    setInterval(() => {
        const codeElement = document.createElement('span');
        codeElement.textContent = characters[Math.floor(Math.random() * characters.length)];
        codeElement.style.position = 'absolute';
        codeElement.style.fontSize="20px"
        codeElement.style.left = Math.random() * window.innerWidth - 40 +"px";
        codeElement.style.animation = `fall 2s linear`;

        container.appendChild(codeElement);

        // Remove the element after the animation completes
        setTimeout(() => {
            codeElement.remove();
        }, 1900);
    }, 10);
}

