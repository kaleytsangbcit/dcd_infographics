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
        left: 130px;
        top:5000px;
        position: absolute;
    }

</style>

<div id='net_cont'>
    <div id='net_image'>
            <img id='net' src='/img/Net.png'/>
    </div>
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
        $(window).on("load resize scroll") = () => this.HandleNet();
        }
    }

    

    //To-do - CREATE THE FUNCTIONALITIES HERE!
        HandleNet(){
             this.shadowRoot.querySelector("#net_image").style.cssText = `
                top:500px;
            `
            }
    
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
        // }
    }

//MUST HAVE - define the tag for the custom elements
customElements.define("the-net", TheNet)