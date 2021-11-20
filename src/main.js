let test = dom.find('#test')[0]
console.log(test)
console.log(dom.find('.red' , test)[0])

dom.style(test2 , 'color' , 'red')
dom.style(test , {color: 'blue' , border: '1px solid red'})
console.log(dom.style(test, 'border'))

let divList = dom.find('.x')
dom.each(divList , (n)=> console.log(n))
dom.each(divList , (n) => dom.style(n , 'color', 'red'))