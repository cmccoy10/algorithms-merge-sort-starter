function merge(array1, array2) {
    let result = [];

    while (array1.length !== undefined && array2.length !== undefined) {
        if (array1[0] > array2[0]) {
            result.push(array2[0]);
            array2.pop(array2[0]);
            //console.log('first if') //not showing
        } else {
            result.push(array1[0]);
            array1.pop(array1[0]);
            //console.log('first else')
        }
    }
    while (array1 !== []) {
        result.push(array1[0]);
        array1.pop(array1[0]);
        console.log('second while')
    }
    while (array2 !== []) {
        result.push(array2[0]);
        array2.pop(array2[0]);
        console.log('third while')
    }
}

function mergeSort(array) {
    let n = array.length;

    if (n === 1){
        return array;
    }
    let middle = Math.floor(n / 2);
    let merge1 = array.slice(0, middle);
    let merge2 = array.slice(middle + 1);

    let mergeLeft = mergeSort(merge1)
    console.log('left', mergeLeft)
    let mergeRight = mergeSort(merge2)
    console.log('right', mergeRight)

    return merge(mergeLeft, mergeRight);
}

    // /* Split the array into two */
    // var l1 as array = a[0] ... a[n/2]
    // var l2 as array = a[n/2+1] ... a[n]

console.log(mergeSort([2, 4, 1, 8, 3, 5]));
// let arr1 = [1, 5, 10, 15];
// let arr2 = [0, 2, 3, 7, 10];
// merge(arr1, arr2); // => [0, 1, 2, 3, 5, 7, 10, 10, 15]

module.exports = {
  merge,
  mergeSort
};

// function merge(array1, array2) {

    // var result as array
    // while ( a and b have elements )
    //   if ( a[0] > b[0] )
    //     add b[0] to the end of result
    //     remove b[0] from b
    //   else
    //     add a[0] to the end of result
    //     remove a[0] from a
    //   end if
    // end while

    // while ( a has elements )
    //   add a[0] to the end of result
    //   remove a[0] from a
    // end while

    // while ( b has elements )
    //   add b[0] to the end of result
    //   remove b[0] from b
    // end while

    // return result

//   }

//   function mergeSort(array) {

    // if ( n == 1 ) return a

    // /* Split the array into two */
    // var l1 as array = a[0] ... a[n/2]
    // var l2 as array = a[n/2+1] ... a[n]

    // l1 = mergesort( l1 )
    // l2 = mergesort( l2 )

    // return merge( l1, l2 )

//   }
