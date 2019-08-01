/**
 * 数组求和
 */
var arr1=[1,2,3,4,5]
function sum(arr1){
   return  arr1.reduce(function(prev,curr){
        return prev+curr
    })
}