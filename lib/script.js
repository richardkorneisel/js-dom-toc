//console.log ("this works")
//let firstHeading = document.querySelector('h1');
//console.log (firstHeading)
//let secondHeading = document.querySelectorAll('h2');
//console.log (secondHeading)

let title = document.querySelectorAll('.heading');  //Get headings in node array
console.log (title)

let toc = document.querySelector('aside')  // define where aside is
console.log (toc)

let list = document.createElement('ol')  // set variable and create list 
toc.appendChild(list)                     // take toc and append empty list into

for (let i=0; i<title.length; i++) {             
    let listItem = document.createElement('li'); // do second
    listItem.innerText = title[i].innerHTML;

    console.log(title[i].innerHTML);         // do third
    console.log(title[i]);                  // do first
    console.log(listItem);

    list.appendChild(listItem)                        // append inside ordered list
}

//let titleChildNodes = title.childNodes;
//console.log(titleChildNodes);

//console.log(title.innterText)

// document.querySelector('aside').innerHTML = "Hello"; //hello to aside

/*function getHeadings() {
    var title = document.querySelectorAll('.heading'),
        result = [];
    for (var i=0; i<title.length; i++) {               //iterate through array
        result.push(title[i].textContent);                   //create ol element
    }
    return result;
}
*/

/*function getHeadings() {
    var title, i;
    title = document.querySelectorAll('.heading');
    for (i=0; i<title.length; i++) {               //iterate through array
        title[i].getElementsByClassName.backgroundColor = red;
    }
}
*/

/* createElement(ol, title[i]); */