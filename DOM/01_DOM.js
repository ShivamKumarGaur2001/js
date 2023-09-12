/**  1 --> document.getElementById

  document.getElementById('title') --> used to target by id 
  can take indiviual elements like
    document.getElementById('title').className
    document.getElementById('title').getAttribute('class')
    document.getElementById('title').getAttribute('id')

    can also apply style
    const title = document.getElementById('title')
    title.style.backgroundColor='green'
    title.style.padding='15px'


    title.textContent --> all text written 
    title.innertext  --> only text which is visible 
    title.innerHtml  --> gives all the content as well as html elements which used 

 */


/*   2 --> document.querySelector('h1') --> gives 1st h1

        document.querySelector('#title') --> id
        document.querySelector('.heading') --> class
        document.querySelector('input[type= "password"]') --> 

*/


/*   3 --> document.querySelectorAll('h1') --> gives all h1
        returns a nodelist similar to array but not array so we can't apply array function

        const lists = document.querySelectorAll('li') --> nodeList(3) [li,li,li]
         // to get first list --> lists[0]

         // nodelist give foreach function
         lists.forEach((num) => {num.style.background='green'})

*/



/*  4 -->  const temp= document.getElementsByClassName('list-item')
    const ans = Array.from(temp) --> convert it to array elements 
    ans[0].style.background='green'
*/
