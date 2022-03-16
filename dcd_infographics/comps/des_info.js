//MUST HAVE - CREATE A TEMPLATE TAG
var template_desinfo = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_desinfo.innerHTML = `
<style>
    #desinfo {
        font-family: 'Fredoka', sans-serif;
        font-style: normal;
        text-align: center;
        position: absolute;
        top: 1000px;
        width: 500px;
        color:#57595D;
        // display:none;
    }

    #desc {
        font-size: 33px;
        text-decoration: none;
        width: 400px;
        top: 50px;
        left: 50px;
        position:absolute;
    }

    #popup {
        width:85%;
      }

    #close {
        width:10%;
        top:5px;
        position: absolute;
        left: 400px;
        opacity:60%;
      }

</style>

<div id="desinfo">
    <img id='popup' src='/img/Popupbox.png'/>    
    <div id="desc">text</div>
    <img id='close' src='/img/close.png'/>
</div>

`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheDesinfo extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_desinfo.content.cloneNode(true)); //use the template to make a clone
        if(this.getAttribute("desc"))
        {
            this.shadowRoot.querySelector("#desc").innerHTML = this.getAttribute("desc");
        }
       
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
    scrollFunction() {
        if (document.querySelector("#wrapper").scrollTop > 3000) {
          this.shadowRoot.querySelector("#desinfo").style.display = "block";
        } else {
          this.shadowRoot.querySelector("#desinfo").style.display = "none";
        }
       }
      }

//MUST HAVE - define the tag for the custom elements
customElements.define("the-desinfo", TheDesinfo)