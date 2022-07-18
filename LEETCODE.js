function linkedListFunction(){
        class Node{
        constructor (val, next = null) {
            this.val = val
            this.next = next
        }
    }
    class LinkedList{
        constructor (head = null) {
            this.head = head
        }
    }
    function createList() {
        let node1 = new Node(2);
        let node2 = new Node(3);
        let node3 = new Node(4);
        let node4 = new Node(5);
        node1.next = node2
        node2.next = node3
        node3.next = node4
        let linkedList = new LinkedList(node1)
        let count = 1;
        let head = linkedList.head
        let next;
        let last = null;
        while(head) {
            console.log(head.val)
            next = head.next;
            head.next = last;
            last = head;
            head = next
            count++
        }
        return last;
    }
    let cav = createList();
    // console.log(cav)
}


const chunkArr = [1,2,3,4,5,6]
const size = 2

function chunkedFunction(chunkArr, size) {
  let chunked = []
  for(let element of chunkArr) {
    const subChunk = chunked[chunked.length - 1]
    if (!subChunk || subChunk.length === size) {
        chunked.push([element])
    } else {
        subChunk.push(element)
    }
  }
  return chunked;
}
let answer = chunkedFunction(chunkArr, size);
console.log(answer)

const chunkArr1 = [1,2,3,4,5,6]
const size1 = 2

function chunkedMedium(chunkArr1, size1) {
    let chunked = [];
    let index = 0;
    while (index < chunkArr1.length) {
        chunked.push(chunkArr1.slice(index, index + size1))
        index += size1
    }
    return chunked
}
let otherAnswer = chunkedMedium(chunkArr1, size1);
console.log(otherAnswer)