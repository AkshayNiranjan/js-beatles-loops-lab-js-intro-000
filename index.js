// add solution here
function theBeatlesPlay(musicians,instruments){
  var arr=new Array()
  for(let i=0;i<musicians.length;i++){
    arr.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return arr
}
function johnLennonFacts(facts){
  var arr2=new Array()
  let i=0
  while(i<facts.length){
    arr2.push(facts[i++]+"!!!")
  }
  return arr2
}
function theBeatlesPlay(i){
  var arr3=new Array()
  i=15-i
  do{
    arr3.push('I love the Beatles!')
  }while(i-- >0)
  return arr3
}
