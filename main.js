function startclassification(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    });
classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/zU2DrxL_J/model.json",modelready);
}
function modelready(){
classifier.classify(gotresults);
}
function gotresults(error,results){
    if(error){
console.error(error);
    }
    else{
console.log(results);
    r=Math.floor(Math.random()*255)+1;
     g=Math.floor(Math.random()*255)+1;
    b=Math.floor(Math.random()*255)+1;
        document.getElementById("resultlable").innerHTML="I can hear"+results[0].label;
      document.getElementById("resultconfidence").innerHTML="Accuracy"+(results[0].confidence).toFixed(2)+" %";
        document.getElementById("resultlable").style.color="rgb("+r+","+g+","+b+")";
        document.getElementById("resultconfidence").style.color="rgb("+r+","+g+","+b+")";
        img=document.getElementById("alien1");
         img1=document.getElementById("alien2");
         img2=document.getElementById("alien3");
         img3=document.getElementById("alien4");
        if (results[0].label == "clapping")
        { img.src = 'aliens-01.gif';
         img1.src = 'aliens-02.png';
         img2.src = 'aliens-03.png'; 
         img3.src = 'aliens-04.png'; 
        }
         else 
             if (results[0].label == "metal")
        { img.src = 'aliens-01.png';
         img1.src = 'aliens-02.gif';
         img2.src = 'aliens-03.png'; 
         img3.src = 'aliens-04.png'; 
        }
        else 
             if (results[0].label == "whistle")
        { img.src = 'aliens-01.png';
         img1.src = 'aliens-02.png';
         img2.src = 'aliens-03.gif'; 
         img3.src = 'aliens-04.png'; 
        }
        else
        { img.src = 'aliens-01.png';
         img1.src = 'aliens-02.png';
         img2.src = 'aliens-03.png'; 
         img3.src = 'aliens-04.gif'; 
        }
    }
}