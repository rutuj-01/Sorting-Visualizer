async function Bubble()
    {

      var f=0;
      console.log(array);	
      for(var i=0;i<50;i++)
      {
      	for(var j=0;j<50-i-1;j++)
      	{
      		
            arr1= document.getElementById(j);
            arr2=document.getElementById(j+1);
            //console.log(arr1.style.height,arr2.style.height);
            if(array[j] > array[j+1])
            {

                 // f=1;
                //console.log(array[j],array[j+1]);
                //console.log(arr1,arr2)
                style1 = window.getComputedStyle(arr1);
                style2 = window.getComputedStyle(arr2);

                const transform1 = style1.getPropertyValue("height");
                const transform2 = style2.getPropertyValue("height");
               
                // console.log(transform1);  
                //   console.log(transform2);
                
                var temp=array[j];
                array[j]=array[j+1];
                array[j+1]=temp;
                //onsole.log(style1.height);
                //console.log(style2.height);
                 
                 arr1.style.background = "red";
                 arr2.style.background="red";
                 

                 temp=arr1.style.height;
                 arr1.style.height = arr2.style.height;
                 arr2.style.height=temp;

                  const fast = await resolveAfter1Second()
                  //console.log(fast)
                 //  await 2;
                arr1.style.background = "white";
                arr2.style.background="white";
            
        }
         
    }
    // if(f==1){
    //   arr1.style.background = "green";
    //               arr2.style.background="green";
    //               f=0;
    // }
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