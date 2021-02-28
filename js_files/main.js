
function getRandomNumber(){
    return Math.floor(Math.random() * 0.5*(800) ) + 10
}


function Bars(){

    let lineContainerElement = document.getElementById('heightBars')
            // Remove Present Children
            let child = lineContainerElement.lastElementChild;  
            while (child) { 
                lineContainerElement.removeChild(child); 
                child = lineContainerElement.lastElementChild; 
            }
            array = []

            // Add new Children
            for (let i = 0; i < 50; ++i) {
                let randomNumber = getRandomNumber()
                array.push(randomNumber)

                let lineElement = document.createElement('div')
                lineElement.className = "bar"
                lineElement.id=i
                lineElement.style.height = randomNumber + 'px'
                lineElement.style.width = 100/50-(2*0.1) + "%"
                lineContainerElement.appendChild(lineElement)
            }
            console.log(array);
            console.log(lineContainerElement);
        }
