// add solution here
function theBeatlesPlay(musicians,instruments){
  var arr=[]
  for(let i=0;i<musicians.length;i++){
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return arr
}
function johnLennonFacts(facts){
  var arr2=[]
  let i=0
  while(i<facts.length){
    arr2.push(facts[i++]+"!!!")
  }
  return arr
}
function theBeatlesPlay(i){
  var arr3=[]
  i=15-i
  do{
    arr3.push('I love the Beatles!')
  }while(--i>0)
  return arr3
}
