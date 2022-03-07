//MUST HAVE - CREATE A TEMPLATE TAG
var template_net = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_net.innerHTML = `

<style>
    // #net_cont {
    //     positon:fixed;
    //     height: auto;
    //     overflow-y:auto;
    //     overflow-x:none; 
    // }   

    #net_image {
        position: absolute;
        transform: none;
        top: 5200px;
        left: 150px;
        animation: Movingup 10s linear 1 forwards;
        animation-delay: 2s;
      }

      @keyframes Movingup {
        0%   {top: 5200px;}
        100% {top: 1300px;}
    }   

    #string {
        position: absolute;
        transform: none;
        height:4100px;
        width: 5px;
        top: 1130px;
        left: 355px;
        content: '';
        background: black;
        animation: string 10s linear 1 forwards;
        animation-delay: 2s;
      }
      
    @keyframes string {
        0%      {height: 4100px;}
        100%    {height: 200px;} 
    }


</style>

<div id='net_cont'>
    <div id='net_image'>
            <img id='net' src='/img/Net_with_Fish.png'/>
    </div>
    <div id ='string'></div>
</div>
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
    
    // $(window).onsrcoll = () => this.HandleNet();

    // }

    

    //To-do - CREATE THE FUNCTIONALITIES HERE!
        // HandleNet(){
        //      this.shadowRoot.querySelector("#net_image").style.cssText = `
        //         top:500px;
        //     `
        //     }
    
        // $(window).on("load resize scroll", function() {
        //     $("#net_image").each(function() {
        //       var ScrollTop = $(window).scrollTop();
        //       var elementTop = $(this).offset().top;
        //       var leftPosition = ScrollTop - elementTop;
        //         $(this)
        //           .find("#net_image")
        //           .css({ left: leftPosition });
        //     });
        //   });
        }
    }


//MUST HAVE - define the tag for the custom elements
customElements.define("the-net", TheNet)