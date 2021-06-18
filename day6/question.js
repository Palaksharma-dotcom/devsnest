let a =function(input)
{
    if (toString.call(input)==="[object Array]")
    return true;
    return false
};


//question 2
let array_clone=function(arr)
{
return arr.slice(0);
}


//question 3
var first =  function(array, n) {
    if (array == null) 
    return void 0;
  if (n == null) 
    return array[0];
  if (n < 0)
    return [];
  return array.slice(0, n);
};


console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));

console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));

console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));

//question 4

function join_elements(list) {
    console.log('"'+list.join(',')+'"');
    console.log('"'+list.join('+')+'"');
  }
  join_elements(["Red","Green","White","Black"]);
  

  //question 5
  var arr=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var var1 = 1;
var var2 = 0;
var item;
for (var i=0; i<arr.length; i++)
{
        for (var j=i; j<arr.length; j++)
        {
                if (arr[i] == arr[j])
                 var2++;
                if (var1<var2)
                {
                  var1=var2; 
                  item = arr[i];
                }
        }
        var2=0;
}
console.log(item+" ( " +var1 +" times ) ");
