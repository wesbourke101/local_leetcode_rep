// function linkedListFunction(){
//         class Node{
//         constructor (val, next = null) {
//             this.val = val
//             this.next = next
//         }
//     }
//     class LinkedList{
//         constructor (head = null) {
//             this.head = head
//         }
//     }
//     function createList() {
//         let node1 = new Node(2);
//         let node2 = new Node(3);
//         let node3 = new Node(4);
//         let node4 = new Node(5);
//         node1.next = node2
//         node2.next = node3
//         node3.next = node4
//         let linkedList = new LinkedList(node1)
//         let count = 1;
//         let head = linkedList.head
//         let next;
//         let last = null;
//         while(head) {
//             console.log(head.val)
//             next = head.next;
//             head.next = last;
//             last = head;
//             head = next
//             count++
//         }
//         return last;
//     }
//     let cav = createList();
//     console.log(cav)
// }
// const chunkArr = [1,2,3,4,5,6]
// const size = 2
// function chunkedFunction(chunkArr, size) {
//   let chunked = []
//   for(let element of chunkArr) {
//     const subChunk = chunked[chunked.length - 1]
//     if (!subChunk || subChunk.length === size) {
//         chunked.push([element])
//     } else {
//         subChunk.push(element)
//     }
//   }
//   return chunked;
// }
// let answer = chunkedFunction(chunkArr, size);
// console.log(answer)

// const chunkArr1 = [1,2,3,4,5,6]
// const size1 = 2

// function chunkedMedium(chunkArr1, size1) {
//     let chunked = [];
//     let index = 0;
//     while (index < chunkArr1.length) {
//         chunked.push(chunkArr1.slice(index, index + size1))
//         index += size1
//     }
//     return chunked
// }
// let otherAnswer = chunkedMedium(chunkArr1, size1);
// console.log(otherAnswer)



//    '.>.<.><...'
//     '>>>>>>.<<<<<<<'
// function solution(S) {
//     let max = 0;
//     for (let i = 0; i < S.length - 1; i++) {
//         let tempSlice = '';
//         let newNew = ''
//         if (S[i] === '>') {
//             tempSlice = S.slice(i)
//             console.log(tempSlice)
//             newNew = tempSlice.replace(/>/g, '')
//             max = max + newNew
//             console.log(newNew)
//         } else if(S[i] === "<") {
//             console.log('wes')
//         }
//     }
// }
// let newReturn = solution(S)
// console.log(newReturn)


// let str = '.>.....';
// let str = '...><>.<..';
// let S = ['....>.', '.>..<.>.', '..<>...']

// function newFunction(str) {
//     let count = 0;
//     let cameraEncounter = 0 
//     for (let i = 0; i < str.length; i++) {
//         if(str[i] === '.') cameraEncounter += 1;
//         if(str[i] === '<') count += cameraEncounter;
//     }
//     cameraEncounter = 0;

//     for (let i = str.length; i >= 0; i--) {
//         if(str[i] === '.') cameraEncounter += 1;
//         if(str[i] === '>') count += cameraEncounter;
//     }
//     return count
// }

// console.log(newFunction(str))

// function thisThatAndTheOther(str) {
//     let count = 0;
//     let period = 0;
//     for (let i = 0; i < str.length; i++) {
//         if(str[i] === '.') period = period + 1;
//         else if(str[i] === '<') count = count + period;
//     }
//     period = 0;
//     for (let i = str.length - 1; i > 0; i--) {
//         if (str[i] === '.') period += 1;
//         if (str[i] === '>') count += period
//     }
//     return count;
// }
// console.log(thisThatAndTheOther(str))
// const A = [1,1,1,2,3,4,5,5,6]
// const K = 6;
// function ThatNewNew(A, K) {
    // let increase = false;
    // let VarName = A[A.length - 1]
    // if (K > A[A.length - 1]) return false;
    // if (K < A[A.length - 1]) return false;
    // if (K === A[A.length - 1]) {
    //     for (let i = 0; i < A.length; i++) {
    //         if (A[i] === A[i + 1] || A[i] === A[i + 1] + 1) {
    //             increase = true
    //         } else increase = false 
    //     }
    // }
    // return increase
//     const arr = new Set(A);
//     if(arr.size != K) {
//         console.log(false)
//     }
//     else console.log(helper(arr, K))
// }
// function helper(set, K) {
//     if(K === 0) return true

//     if(set.has(K)) {
//         return helper(set, K - 1)
//     }
//     return false
// }
// console.log(ThatNewNew(A, K))
// let s = '[][](?';
// function kindle(s) {
//     if (s.length % 2 != 0) return false
//     let map = {}
//     for(let char of s) {
//         if (!map[char]) map[char] = 1;
//         else if (map[char]) map[char] += map[char]
//     }
//     console.log(map)
// }
// kindle(s)
// let str = 'aaaaasdfastasfad'
// function letsGOO(str) {
//     let map = {}
//     for(let char of str) {
//         if(!map[char]) map[char] = 1
//         else if(map[char]) map[char] += 1
//     }
//     console.log(Object.keys(map))
//     return Object.keys(map).find(key => map[key] === 1)
// }
// console.log(letsGOO(str))

function WesTest() {
    console.log('told you so')
}
WesTest()
