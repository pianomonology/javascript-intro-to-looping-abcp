


function forLoop (array) {
  for (let i =0; i < 25; i++){
      if (i === 1){
      array.push(`I am ` + i + ` strange loop.`);
  } else {
      array.push(`I am ${i} strange loops.`);
  }
 } return array;
}

function whileLoop(n){
  let countdown = n;
  
  while (countdown > 0){
    console.log(--countdown);
  }
  return `done`
}

function doWhileLoop(array){
  
  do{
    delete array.shift;
  } while (array.length > 0 && maybeTrue()){
  
  }
  return array;
}
