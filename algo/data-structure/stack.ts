import log from "../../index";

function line(){
    log("=========================")
}

class Node<T>{
    value: T
    constructor(value:T){
        this.value = value
    }
}

class Stack<T>{
    items: (Node<T> | null)[]
    length:number

    constructor(node:Node<T> | null){
        if(node){
            this.items = [node]
            this.length = 1
        }else{
            this.items = []
            this.length = 0;
        }

    }

    push(node:Node<T>){
        this.length++;
        return this.items.push(node)
    }
    pop(){
        if(this.length >= 0){
            this.length--;
        }
        return this.items.pop()
    }
    duplicate(){
        let top = this.pop()
        if(top){
            this.push(top)
            this.push(top)
        }
    }
    peek(){
        return this.items[this.length - 1]
    }
    swap(){
        if(this.length >= 2){
            let temp = this.items[this.length - 1]
            this.items[this.length - 1] = this.items[this.length - 2]
            this.items[this.length - 2] = temp
        }
    }
    insertAt(node:Node<T>,n:number){

        this.length++;
        let index = this.length - n
        if(index >= 0|| index <= this.length - 1){            
            this.items.splice(index,0,node)
        }
    }
    removeFrom(n:number){
        let index = this.length - n
        if(index >= 0|| index < this.length){            
            this.items.splice(index,1)
            this.length--;
        }
    }
    rightRotate(n:number){

        let index = this.length - n
        if(index >= 0 && index < this.length){
            let item = this.pop()
            if(item){
                this.insertAt(item, n)
            }
        }
    }

    leftRotate(n:number){
        let index = this.length - n
        let item = this.items[index]
        if(index >= 0 && index < this.length){
            this.removeFrom(n)
            if(item){
                this.push(item)
            }
        }
    }
}

export {Stack, Node as NodeStack}
