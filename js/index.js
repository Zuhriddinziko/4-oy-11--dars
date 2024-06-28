// masala 1
// function aaa (str){
//     let sum =0;
//     for (let i=1; i<str.length; i++) {
//         if('a'==str[i]){
//             sum++
//         }
    
//     }
//     return sum;
// }
// let a ='salomlar'
// console.log(aaa(a))
   

// masala 2
// function number (n){
//     let sum =[];
//     for (let i=0; i<n; i+=2) {
      
//         sum.push(i)
    
//     }
//     return sum;
// }
// let a =25;
// console.log(number(a))
   
// masala 3
// function aaa (str){
//     for (let i=0; i<str.length; i++) {
//         let res;
//         if(' '!=str[i]){
//             res+=str[i]
//         }

//     }
   
//     return res;
// }
// let a ='salomlar dostlar'
// console.log(aaa(a))
   

// masala 4
// function aaa (str){
//      let res= str.split('')
//      res.shift();
//      let srting=res.join('');
//         return srting;
//     }
//     let a ='salomlar dostlar'
//     console.log(aaa(a))

// masala 5
// function bigNumbers(arr){
//     let res=arr[0];

//     for (const iterator of arr) {
//         if(iterator<res){
//             res=iterator
//         }}
        

//     return res;
// }
// let number = [12,5,6,8,9,20];
// console.log(bigNumbers(number))



// masala 6
// function lowerfone(str){
//     return str.toLowerCase();
// }
// let a= 'Assalomu Alaykum';
// console.log(lowerfone(a))


// masala 7
// function numbers(num){
//     let sum=0;
//     num.forEach(function(value){
//         sum+=value;
//     })
//     return sum;
// }
// let n=[1,2,3,4,5,6,7];
// console.log(numbers(n))

// masala 8
// function aaa (str){
//     let sum =0;
//     for (let i=1; i<str.length; i++) {
//         if('b'==str[i]){
//             sum++
//         }
    
//     }
//     return sum;
// }
// let a ='salomlar bolalar baxtlimisizlar'
// console.log(aaa(a))

// masala 9
// function number (n){
//     let sum =[];
//     for (let i=0; i<n; i++) {
      
//         sum.push(i**2)
    
//     }
//     return sum;
// }
// let a =10;
// console.log(number(a))

// masala 10
// function aaa (str){
//      let res= str.split('')
//      res.pop();
//      let srting=res.join('');
//         return srting;
//     }
//     let a ='salomlar dostlar'
//     console.log(aaa(a))

// masala 11
// function numbers (num){
//     let res=[]
//    num.map(function(value){
//        if (value>0){
//         res.push(value)
//        }

//     })
//     return res;
// }
// let nn=[12,-84,4,-8];
// console.log(numbers(nn))

// masala 12
// function nonumbers(str){
    // return str.replaceAll(typeof  'number', '');
    // let res=str.split('')
    // let a =[]
  
    // a=res.map(function(value){
    //     return value!=Number
    // })
//     for(let i=0; i<str.length; i++){
//         if(str[i]!=Number){
//           a.push(str[i])
//         }
//     }
//     return a

//     }

// let stringg='menda 23ta daftar bor'

// console.log(nonumbers(stringg))


// masala 13
// function strReverse(str){
//     let res=str.split(' ');
    
//     let ser= res.map(function(value){
//         return value.split('').reverse().join('')
//     })
//     return ser;
// }
// let stringg= 'salom bollar qalaysizlar'

// console.log(strReverse(stringg))


// masala 14
// function number (arr){
//     let res=arr.map(function(value){
//         return value*2;
//     })
//     return res;
// }
// let n = [1,8,9,6,5,4,7,1,2,3];
// console.log(number(n))


// masala 15
// function sttring(str){
//     let res=str.split('');
//     let a=res[0];
//     let b=res[str.length-1];
//     res.pop()
//     res.push(a)
//     res.shift()
//     res.unshift(b);
//     return res.join('');
    
// }
// let stt ='salom'

// console.log(sttring(stt))


// masala 16
// function numbers (arr){
//     let sum=0;
//     let res=arr.map(function(value){
//         if(value%2==0){
//             sum+=value;
//         }
//         return sum;
//     })
//     return sum;
// }
// let num =[2,8,,9,3,2,6,6,56,53,3,26,46,46,4,6,64,64,64,64,649674,313,1,31,31,34,94,94,6,46,1];
// console.log(numbers(num))

// masala 17
// function lowerfone(str){
//     return str.toUpperCase();
// }
// let a= 'Assalomu Alaykum';
// console.log(lowerfone(a))


// masala 18
// function bigword (arr){
//     arr.sort();
//     return arr;
// }
// let a=['salom','qalesan','birnimalar'];
// console.log(bigword(a))


// masala 19
// function bigHarf (str){
    
//     let res=str.split(' ');
//     res=res.map(function(value){
//         return value[0].toUpperCase()+value.slice(1)
//     })
//     return res.join(' ')
// }
// let a='men hammasiga tayyorman';
// console.log(bigHarf(a))

// masala 20
// function numbers(nn){
//     let res= nn.filter(function(value){
//        return value%2==0
//     })
//     return res
// }
// let a=[2,65,9,8,7,4,6,9,5,6,5,56];
// console.log(numbers(a))