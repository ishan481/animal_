function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Ht393h53Q/model.json', modelReady);
}

function modelReady(){
  classifier.classify(gotResults);
}
var dog = 0;
var cat = 0;

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } 
}
