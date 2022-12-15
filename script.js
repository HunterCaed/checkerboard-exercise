var container = document.createElement('div')

container.className = 'container'
container.style.display = 'flex'
container.style.flexDirection = 'row'
container.style.flexWrap = 'wrap'
container.style.aligncontent = 'stretch'
// container.className = 'container'
document.body.appendChild(container)

function square () {
    const div = document.createElement('div')
    div.className = 'box'
    div.display = 'flex'
    div.flexWrap = 'wrap'
    div.style.width = "11.1%"
    div.style.height ="11.1%"
    div.style.background = "black"
    div.style.border = "black"
    div.style.float = "left"
    div.style.paddingBottom = "11.1%"
    container.appendChild(div)
    

}
function square2 () {
    const div = document.createElement('div')
    var backgroundColor = Math.floor(Math.random()*16777215).toString(16);
    div.className = 'box'
    div.display = 'flex'
    div.flexWrap = 'wrap'
    div.style.width = "11.1%"
    div.style.height ="11.1%"
    div.style.background = "white"
    //div.style.backgroundColor = '#' + backgroundColor;
    div.style.border = "white"
    div.style.float = "left"
    div.style.paddingBottom = "11.1%"
    container.appendChild(div)
    

}

function loop () {
    for (var i = 0; i < 82; i++) {
        if (i % 2 == 0) {
            square ()
        } else {
            square2 ()
        } 
    }
}

loop ()
     
// container.style.width = "11.1%"
// container.style.height ="11.1%"
// container.style.background = "blue"
// container.style.border = "blue"
// container.style.float = "left"
// container.style.paddingBottom = "11.1%"


// function makeSquare() {
//     const div = document.createElement('div')
//     var st = div.style
    
//     div.className = 'square'
//     st.display = 'flex'
//     st.flexWrap = 'wrap'
//     st.color = 'blue'
//     st.width = "11.1%"
//     //    st.background = "blue"
//     //st.border = "blue"
//     st.float = "left"
//     st.paddingBottom = "11.1%"
//     st.backgroundColor = 'red'
//     container.appendChild(div)
// }

// function loop (){
//     for (var i = 0; 1 <10; i++)
//     makeSquare ()
// }





