//MUST HAVE - CREATE A TEMPLATE TAG
var template_destruct = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_destruct.innerHTML = `

<style>
    #destruct_image {
        margin: 100px auto;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        position:absolute;
    }

    #destruct_ex {
        width: 200px;
        justify-content:center;
        left:30px;
    }

    #text {
        width:300px;
        font-size: 38px;
        position: relative;
        top: 20px;
        text-align: center;
        color: white;
    }

    #desc_popup {
        position: absolute;
        opacity: 0%;
        top: 30px;
        left: -620px;
        display:flex;
        justify-content:center;
        color: #177B9B;
      }

    #popup {
        width:470px;
      }

    #desc {
        font-size: 33px;
        text-decoration: none;
        width: 400px;
        top: 20px;
        left: 20px;
        position:absolute;
    }

    #close {
        width:10%;
        top:5px;
        position: absolute;
        left: 420px;
        opacity:60%;
      }

</style>


<div id='destruct_image'>
    <img id='destruct_ex' src='/img/cyanide_drawing.png'/>
    <div id='text'>text</div>
</div>
<div id='desc_popup'>
    <img id='popup' src='/img/popupbox.png'/>  
    <div id="desc">desc</div>
    <img id='close' src='/img/close.png'/>
</div>

`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheDestruct extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_destruct.content.cloneNode(true)); //use the template to make a clone

        if(this.getAttribute("img")){
            this.shadowRoot.querySelector("#destruct_image > img").src = this.getAttribute("img");
        }
        if(this.getAttribute("text")){
            this.shadowRoot.querySelector("#destruct_image > #text").innerHTML = this.getAttribute("text");
        }

        if(this.getAttribute("desc")){
            this.shadowRoot.querySelector("#desc_popup > #desc").innerHTML = this.getAttribute("desc");
        }

        this.shadowRoot.querySelector("#destruct_image").onclick = () => this.PopUp();

        this.shadowRoot.querySelector("#close").onclick = () => this.closePopUp();
       
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
    PopUp() {
        this.shadowRoot.querySelector("#desc_popup").style.opacity = "100%";
    }

    closePopUp() {
        this.shadowRoot.querySelector("#desc_popup").style.opacity = "0%";
    }

 
}

//MUST HAVE - define the tag for the custom elements
customElements.define("the-destruct", TheDestruct)