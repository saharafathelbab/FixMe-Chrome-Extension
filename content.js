//content.js
chrome.runtime.onMessage.addListener(
    function(request,sender,sendResponse){
        if(request.message === "clicked_browser_action"){

            //background color of page turned to white and color of text is black
             let background = document.querySelector("body");
             background.style['background-color'] = "white";
             background.style['color'] = "black";
            
             //background color of each <section> element turned to white
             let sectionChange = document.querySelectorAll('section');
             sectionChange.forEach(element =>{
                element.style['background-color'] = "white";
            })

             // for all <a href = ""></a> elements, they are originally all turned blue
             // SelectAll is the variable that holds all <a> elements --
             // by using querySelectorAll() this selects all elements

            let selectAll = document.querySelectorAll('a');
            selectAll.forEach(element => {
                element.style['color'] = "#3333FF";
            })

            //We use jQuery to adjust how the a tag elements look
            // when hovered on.
            // .hover method specifies two funcions to run when the mouse pointer
            // hovers over the selected elements
                $("a").hover(
                    function(){
                        $(this).css({color: 'red'}); // when mouse is hovering over an element
                    },
                    function(){
                        $(this).css({color: "#3333FF"}); // when mouse isn't hovering over an element
                    } 
                )
            // Why am I setting the color of all the links (via selectAll) above when I have a function that
            // has the color when it is not being hovered on?

            // the reason is because without setting the color via selectAll, upon clicking the icon
            // the elements won't appear blue *until* you hover over the elements.

            // for example, without selectAll part:
            // let's say there's a phrase on the page 'link for me please'
            // after clicking the icon of the extension, nothing appears to have changed to the phrase.
            // it is only after you hover your mouse over it that it shows up as a different color, and
            // when you move your mouse off of it, it remains the color specificed in the second function.

            // what we want is: the color to change immediately when clicking on icon -> when hovered the color is different -> when off hover, turn back to the color it changed to initially


            // let selectAll = document.querySelectorAll('a');
            // selectAll.forEach(element => {
            //     element.style['color'] = "#3333FF";
            // })


            // the first way I tried to make all a tags blue:
            // for(let i = 0; i < selectAll.length; i++){
            //     selectAll[i].style.color= "blue";
            // }
        }
    }
);
