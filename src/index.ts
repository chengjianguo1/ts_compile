function addSay(target: Function) { // 修饰类本身当前参数就是类
  target.prototype.say = function () {
      console.log('say')
  }
  // return 'test'
}

@addSay    // 语法糖 只是为了简单一点  ()=>{}
class Person {

}

export {}