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
        // animation: Movingup 10s linear 1 forwards;
        // animation-delay: 2s;
      }

    //   @keyframes Movingup {
    //     0%   {top: 5200px;}
    //     100% {top: 1300px;}
    // }   

    #string {
        position: absolute;
        transform: none;
        height:400px;
        width: 5px;
        top: 1130px;
        left: 355px;
        content: '';
        background: black;
        // animation: string 10s linear 1 forwards;
        // animation-delay: 2s;
    }
      
    // @keyframes string {
    //     0%      {height: 4100px;}
    //     100%    {height: 200px;} 
    // }

    #net_popup {
        position: absolute;
        opacity: 0%;
        top: 6150px;
        left: 60px;
        // animation: PopUp 10s linear 1 forwards;
        // animation-delay: 2s;
      }

    //   @keyframes PopUp {
    //     0%   {top: 6150px;}
    //     100% {top: 2300px;}
    //}   


</style>

    <div id='net_image'>
            <img id='net' src='/img/Net_with_Fish.png'/>
    </div>
    <div id ='string'></div>
    <div id ='net_popup'>
        <img id='popup' src='/img/Popup_net.png'/>
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
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!

        PopUp() {
            this.shadowRoot.querySelector("#net_popup").style.opacity = "90%";
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