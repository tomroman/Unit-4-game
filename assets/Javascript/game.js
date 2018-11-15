document.onreadystatechange = function (){
    if (document.readyState === "interactive"){



        var targetNumber = Math.floor(Math.random()*102+19);
        console.log(targetNumber)


        $("#number-to-guess").text(targetNumber);
        $("#Player-Score").text(counter);


        var counter = 0;
        var playerscore = [] 
   

    

        var numberOptions = 
        
        [
        Math.floor(Math.random()*12+1), 
        Math.floor(Math.random()*12+1), 
        Math.floor(Math.random()*12+1), 
        Math.floor(Math.random()*12+1)
        ];
        
        

        

        

        if( counter < targetNumber) {
        $(".bluecrystal-image").on("click", function() {

         
            counter += numberOptions[0];
            
            alert('New score: ' + counter)

            

        })} 

        $(".greencrystal-image").on("click", function() {

         
            counter += numberOptions[1];

            alert("new score: " + counter); 
            console.log(counter)

        })}      

        $(".redcrystal-image").on("click", function() {

         
            counter += numberOptions[2];

            alert("new score: " + counter); 

        });

        $(".yellowcrystal-image").on("click", function() {

         
            counter += numberOptions[3];

            alert("new score: " + counter); 

        });

    }
    

  
        
    }
    
}
