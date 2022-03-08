//MUST HAVE - CREATE A TEMPLATE TAG
var template_scrollcont = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_scrollcont.innerHTML = `
<style>
    #cont {
        position:fixed;
        left:0;
        top:0;
        width:100vw;
        height:100vh;
        overflow-y:auto;
        overflow-x:none;
    }
</style>
<div id='cont'>
    <the-destruct id='scroll1'><the-destruct>
</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class ScrollCont extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_scrollcont.content.cloneNode(true)); //use the template to make a clone
        //style the main container!
        this.shadowRoot.querySelector("#cont").onscroll = (e) => this.HandleContScroll(e.target.scrollTop);
        // e -> event object from your browser, mouse, keyboard, hardware, events
        // e.traget -> elements / <tag> the event is happening on
        // e.target.scrollTop -> a data about how far the scroll bar is available for the element 
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
    HandleContScroll(scrollNum=0){ //var scrollNum = e.target.scrollTop
        console.log("scroll", scrollNum);
        if(scrollNum > 200){ 
            this.shadowRoot.querySelector("#scroll1").SlideRight();
        }
        if(scrollNum > 300){
            this.shadowRoot.querySelector("#scroll2").SlideRight();
        }
        if(scrollNum > 400){
            this.shadowRoot.querySelector("#scroll3").SlideRight();
        }
        if(scrollNum > 500){
            this.shadowRoot.querySelector("#scroll4").SlideRight();
        }
    }
}

//MUST HAVE - define the tag for the custom elements
customElements.define("scroll-cont", ScrollCont)