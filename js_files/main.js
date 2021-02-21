function Bars(){

	var arr = [];
	var divs=[];
	var cont=document.getElementById("heightBars");
	//cont.style="flex-direction:row";
	for(var i=0;i<100;i++)
    {
        arr[i]=Math.floor(Math.random() * 100 ) + 1;
        divs[i]=document.createElement("div");
        	
        cont.appendChild(divs[i]);
        margin_size=0.1;
        divs[i].style=" margin:0% " + margin_size + "%; background-color:blue; width:" + (100/100-(2*margin_size)) + "%; height:" + (2) + "%;";
    }
    console.log(arr)
    console.log(divs)
	// while(arr.length < 100){
	//     var r = Math.floor(Math.random() * 100) + 1;
	//     if(arr.indexOf(r) === -1) arr.push(r);

	//     divs[i]=document.createElement("div");
	//     document.body.appendChild(divs[i]);

	// }
	// console.log(arr);
}