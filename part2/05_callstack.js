/* js execution context
{} --> global execution (global environment) context this refers to window object in browser
   --> functional execution conext
   --> eval execution context

   step 1 --> memory creation phase / creation phase
        val1 --> undefined
        val2 --> undefined
        addNUM { func definition}
        result1 --> undefined
        result2 --> undefined
   step 2 --> execution phase 
        val1=10
        val2=5
        .
        at result1 add num called then add num create its execution context
                        {
                            step 1--> memory creation
                                val1 --> undefined
                                val2 --> undefined
                                total --> undefined
                            step 2--> execution context 
                                val1 --> 10
                                val2 --> 5
                                total -->15
                        }
        result1=15
        result2 -->addNum 
                        {
                          step 1--> memory creation
                                val1 --> undefined
                                val2 --> undefined
                                total --> undefined
                            step 2--> execution context 
                                val1 --> 10
                                val2 --> 2
                                total -->15  
                        }
    
        result2 =12

        call stack  ---> global(push)  resul1(push)  result1(pop)  result2(push)  result2(pop)  global (pop) 
*/

let val1=10
let val2=5
function addNum(num1,num2){
    let total = num1 + num2
    return total
}
let result1 = addNum(val1,val2)
let result2 = addNum(10,2)
