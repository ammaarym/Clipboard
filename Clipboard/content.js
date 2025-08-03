console.log("content.js is running!");

 // create empty array
let texts = [];

// declare button
let button;

let highlight;

let n = 0;

// listen for mouseup event
document.addEventListener("mouseup", async () => {
    // get selection
    const selection = window.getSelection();
    // if selection exists and is not collapsed (highlighted text) 
    // collapsed = click, not highlighted text
    if (selection && !selection.isCollapsed){
        // store position of text rect - selection.getRangeAt(0), range.getBoundingClientRect()
        const range = selection.getRangeAt(0);
        const rect = range.getBoundingClientRect();
        // store rect.left
        const rectLeft = rect.left;
        // store rect.top
        const rectTop = rect.top;

        // get highlighted text with selection.toString()
        highlight = selection.toString();
        
        // if button doesn't already exist
        if (!button){
            button = document.createElement("button");
            // create button element and style with text "Save Text"
            // const button = document.createElement("button");

            button.id = "btn";
            button.innerText = "Save Text";
            button.style.backgroundColor = 'lightblue';
            button.style.textAlign = "justify";
            button.style.border = "6px solid black";
            button.style.fontFamily = "Serif";
            button.style.fontSize = "12px";
            button.style.position = "fixed";
            // calculate floating box coordinates - store box.style.left and box.style.top
            button.style.left = rectLeft + "px";
            button.style.top = (rectTop - 30) + "px";
            // button.style.padding = ;
            button.style.zIndex = 9999;

            // append button to document
            document.body.appendChild(button);

            // when button clicked
            button.addEventListener("click", () => {
            
            // if selection is not empty
            if (highlight){
                // push into array
                texts.push(highlight);
            }
            console.log("Text: ", texts[n]);
            console.log("-----");
            n++;
            })
        }
        else {
            button.style.left = rectLeft + "px";
            button.style.top = (rectTop - 30) + "px";
        }  
    }
    selection.removeAllRanges();
})
