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
console.log(cav)