window.dom = {
    find(selector , scope){
        return (scope || document).querySelectorAll(selector)
    },
    style(node , name , value){
        if (arguments.length === 3) {
            // dom.style(test , 'color' , 'red')
            node.style[name] = value
        } else if (arguments.length === 2){
            if (typeof name === 'string') {
                // dom.style(test , 'color')
                return node.style[name]
            } else if (name instanceof Object){
                // dom.style(test , {color: 'red' , border: '1px solid red'})
                for(let key in name){
                    node.style[key] = name[key]
                }
            }
        }
    },
    each(nodeList,fn){
        for (let i = 0; i < nodeList.length; i++) {
            fn.call(null,nodeList[i])
            
        }
    }
}