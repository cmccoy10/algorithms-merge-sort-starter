function merge(array1, array2) {
    let result = [];

    while (array1.length || array2.length) {
        let ele1 = array1.length ? array1[0] : Infinity;
        let ele2 = array2.length ? array2[0] : Infinity;

        let next;
        if (ele1 < ele2) {
            next = array1.shift();
        } else {
            next = array2.shift();
        }
        result.push(next);
    }
    return result;
}

function mergeSort(array) {
    let n = array.length;

    if (n === 1){
        return array;
    }
    let middle = Math.floor(n / 2);
    let merge1 = array.slice(0, middle);
    let merge2 = array.slice(middle);

    let mergeLeft = mergeSort(merge1)

    let mergeRight = mergeSort(merge2)


    return merge(mergeLeft, mergeRight);
}

    // /* Split the array into two */
    // var l1 as array = a[0] ... a[n/2]
    // var l2 as array = a[n/2+1] ... a[n]

console.log(mergeSort([2, 4, 1, 8, 3, 5]));
console.log(mergeSort([1, 5, 10, 15]));
console.log(mergeSort([0, 2, 3, 7, 10]));
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
