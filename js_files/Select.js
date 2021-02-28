async function Select(){

	for(var i=0;i< 50;i++)
	{
		 let min = i;
        for(let j = i+1; j < 50; j++){
       	
// console.log(arr1.style.height,array[j])
            if(array[j] < array[min]) {
                min=j; 
            }
        }
         
         if (min != i) {
         	
         	arr1= document.getElementById(i);
        	arr2=document.getElementById(min);
             // Swapping the elements
             let tmp=array[i];
             array[i]=array[min];
             array[min]=tmp;

             arr1.style.background = "red";
             arr2.style.background="red";

             let temp2=arr1.style.height;
             arr1.style.height = arr2.style.height;
             arr2.style.height=temp2;     
        
             const fast = await resolveAfter1Second()
                  //console.log(fast)
                 //  await 2;
                arr1.style.background = "green";
                arr2.style.background="green";

        }

      

    console.log(array);
    }
    
}

function resolveAfter1Second() {
  //console.log("starting fast promise")
  return new Promise(resolve => {
    setTimeout(function() {
      resolve("fast")
      //console.log("fast promise is done")
    }, 30)
  })
}