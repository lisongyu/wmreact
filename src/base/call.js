// 我是call原理使用

function bar(name,age){
  // console.log(this.value)
  // console.log(name,age)
  return {
    value:this.value,
    name:name,
    age:age
  }
}

let obj={
  value:12
}

Function.prototype.call2=function(conTextP){
  let context=conTextP||global;
  context.fn=this;
  let arrContext=[]
  for(let i=1,len=arguments.length;i<len;i++){
    arrContext.push('arguments[' + i + ']')
  }
  let result=eval('context.fn('+arrContext+')');
  delete context.fn
  return result
}

let getJ=bar.call2(obj,'lili','55')
console.log(getJ)