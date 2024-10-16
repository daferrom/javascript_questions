const paragraphOne = document.getElementById("p1")

/* The alert only works if the HTML document has been loaded 
otherwise it returns an error because the DOM is not accesible 
and therefore the HTML P1 element to get the text of the tag 
*/

alert(paragraphOne.innerText)