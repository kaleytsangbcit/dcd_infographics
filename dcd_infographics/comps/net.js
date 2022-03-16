//MUST HAVE - CREATE A TEMPLATE TAG
var template_net = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_net.innerHTML = `

<style>


    #net_image {
        position: absolute;
        transform: none;
        top: 5200px;
        left: 150px;
      }


    #string {
        position: absolute;
        transform: none;
        height:400px;
        width: 5px;
        top: 1130px;
        left: 355px;
        content: '';
        background: black;
    }

    #net_popup {
        position: absolute;
        opacity: 0%;
        top: 6150px;
        left: 60px;
        display:flex;
        justify-content:center;
      }
 
      #popup {
        width:80%;
      }

      #text {
        width:600px;
        font-size: 38px;
        position: absolute;
        top: 20px;
        text-align: center;
        color: #177B9B;
      }

      #text > p {
        font-size:48px;
        font-weight:600;
        margin:0px;
        color: #12637C
      }

      #close {
        width:10%;
        position: absolute;
        left: 600px;
        opacity:60%;
      }

</style>

    <div id='net_image'>
            <img id='net' src='/img/Net_with_Fish.png'/>
    </div>
    <div id ='string'></div>
    <div id ='net_popup'>
        <img id='popup' src='/img/popupbox.png'/>
        <text id='text'>
        <p>Bycatch</p>
        The incidental capture of species when other unwanted species are being targeted. 
        Bycatch are either kept and landed, or discarded (thrown back to sea).</text>
        <img id='close' src='/img/close.png'/>
    <div>

`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheNet extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_net.content.cloneNode(true)); //use the template to make a clone

        if(this.getAttribute("img")){
            this.shadowRoot.querySelector("#net_image > img").src = this.getAttribute("img");
        }

        this.shadowRoot.querySelector("#net_image").onclick = () => this.PopUp();

        this.shadowRoot.querySelector("#close").onclick = () => this.closePopUp();
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!

        PopUp() {
            this.shadowRoot.querySelector("#net_popup").style.opacity = "100%";
        }

        closePopUp() {
            this.shadowRoot.querySelector("#net_popup").style.opacity = "0%";
        }

        //maket the net goes up when scrolling up
        ChangeNetPosition(num=200) {
            if (num >1300){
           this.shadowRoot.querySelector("#net_image").style.top = num;
            }
        }

        ChangePopupPosition(num=200) {
            if (num >1800){
           this.shadowRoot.querySelector("#net_popup").style.top = num;
            }
        }
}


//MUST HAVE - define the tag for the custom elements
customElements.define("the-net", TheNet)