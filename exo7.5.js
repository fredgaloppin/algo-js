let array = [80, 276, 385, 47, 85];
console.log(array)

function sort(arr) { 
    for (let j = 0; j<= arr.length; j++) {
        for (index = j+1; index < arr.length; index++) {
            if (arr[j]>arr[index]) {
                let temp = arr[j];
                arr[j] = arr[index];
                arr[index] = temp;
            }       
        }  
    }    
    console.log(arr); 
 } 
 sort(array);