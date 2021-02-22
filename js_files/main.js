
function getRandomNumber(){
    return Math.floor(Math.random() * 400) + 5;
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
            for (let i = 0; i < 100; ++i) {
                let randomNumber = getRandomNumber()
                array.push(randomNumber)

                let lineElement = document.createElement('div')
                lineElement.className = "bar"
                lineElement.style.height = randomNumber + 'px'
                lineElement.style.width = 100/100-(2*0.1) + "%"
                lineContainerElement.appendChild(lineElement)
            }
            console.log(array);
            console.log(lineContainerElement);
        }
	// var div_sizes=[];
 //    var divs=[];
 //    var margin_size;
 //    var array_size=100;
	// var cont=document.getElementById("heightBars");
	// cont.style="flex-direction:row";

	// for(var i=0;i<100;i++)
 //    {
 //        cont.innerHTML="";
 //        div_sizes[i]=Math.floor(Math.random() * 100 ) + 1;
 //        //console.log(div_sizes);
 //        divs[i]=document.createElement("div");
 //        //console.log(divs);
 //        var text = document.createTextNode("Tutorix is the best e-learning platform");
 //        divs[i].appendChild(text);
 //        cont.appendChild(divs[i]);
 //        //console.log(cont);
 //        margin_size=0.1;
 //        divs[i].style=" margin:0% " + margin_size + "%; background-color:white; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
 //    }
 //    console.log(cont);
 //    console.log(div_sizes);
 //    console.log(divs);

