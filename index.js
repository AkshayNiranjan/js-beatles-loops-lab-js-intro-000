// add solution here
function theBeatlesPlay(musicians,instruments){
  var arr=[]
  for(let i=0;i<musicians.length;i++){
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return arr
}
function johnLennonFacts(facts){
  var arr=[]
  let i=0
  while(i<facts.length){
    arr.push(facts[i++]+"!!!")
  }
  return arr
}
function theBeatlesPlay(i){
  i=15-i
}
