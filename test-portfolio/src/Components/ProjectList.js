import React from 'react'
import  "./ProjectList.css"
import {FaAngleUp } from "react-icons/fa"
import {animateScroll as scroll} from "react-scroll";

const projects=[
    {
        title: "Stock Returns",
        date: "31st July 2021",
        description:"App Calculates your absolute and percentage profit/loss in stock transactions. Tech Stack used- MERN, Tailwind CSS, Vanilla JS",
        git:"https://github.com/percius47/stox",
        live:"https://stock-prices.netlify.app"

    },
    {
        title: "To-Do App",
        date: "22nd June 2021",
        description:"App manages your to-dos in a list form, made using Firebase in React JS. Tech Stack used- MERN, Tailwind CSS, Vanilla JS, Firebase",
        git:"https://github.com/percius47/todo-app-firebasereact",
        live:"https://prashant-todo.netlify.app"

    },
    {
        title: "Netflix re-done!",
        date: "13th July 2021",
        description:"A Netflix Clone App with database support included payment gateways and separate profile management with encrypted user login. using Stripe API. Tech Stack used- MERN, Tailwind CSS, Firebase, Stripe.",
        git:"https://github.com/percius47/netflix-clone",
        live:"https://netflix-redone.netlify.app/"

    },
    {
        title: "OTT Recommendation App",
        date: "25th July 2021",
        description:"App recommends you OTT content with separate genres to choose from, made with a Netflix Theme.Tech Stack used- MERN, Tailwind CSS, Vanilla JS.",
        git:"https://github.com/percius47/ott-recommendation",
        live:"https://ott-recommendation.netlify.app"

    },
    {
        title: "Palindrome Birthdays!",
        date: "30th July 2021",
        description:"App tell if your birthday is a Palindrome or not in checked in all combinations, mm-dd-yyyy,mm-dd--yy,dd-mm-yyy, etc. Tech Stack used- MERN, Tailwind CSS, Vanilla JS.",
        git:"https://github.com/percius47/pal-birthday",
        live:"https://pal-birthdays.netlify.app"

    },
    
    {
        title: "Fun Triangles Quiz!",
        date: "29th July 2021",
        description:"App which tests you knowledge of triangles and also comes with side length calculator. Tech Stack used- MERN, Tailwind CSS, Vanilla JS",
        git:"https://github.com/percius47/tri-quiz",
        live:"https://triangles-quiz.netlify.app"

    },
    {
        title: "Lucky Person!",
        date: "6th August 2021",
        description:"App checks if the user is a lucky person based on their birth date and the choice of their lucky number. Tech Stack used- MERN, Tailwind CSS, Vanilla JS",
        git:"https://github.com/percius47/tri-quiz",
        live:"https://triangles-quiz.netlify.app"


    },
    {
        title: "Cash Manager App",
        date: "26th July 2021",
        description:"App calculates the amount of change due for a customer against a certain bill amount and the number of note denominations the cashier has to give out. Tech Stack used- MERN, Tailwind CSS, Vanilla JS",
        git:"https://github.com/percius47/cash",
        live:"https://cashxmanager.netlify.app/"


    },
    {
        title: "Devanagari",
        date: "24th July 2021",
        description:"Devanagari is the art of written Hindi language. This application translates basic english letters into devanagari on the basis of how they sound. Tech Stack used- MERN, Tailwind CSS, Vanilla JS",
        git:"https://github.com/percius47/react-basics-markeight",
        live:"https://devanagri.netlify.app"


    },
    {
        title: "Emoji Interpreter",
        date: "22nd July 2021",
        description:"Emoji Interpreter App to tell us what each emoji from the given tray exactly mean. Tech Stack used- React JS.",
        git:"https://github.com/percius47/emoji-interpreter",
        live:"https://emoji-ctionary.netlify.app/"


    },
    {
        title: "BANANAZ!!",
        date: "23rd July 2021",
        description:"Bello minion fans. You always have fascinated about how we minions speak our language BANANA. Well, this app contains the secret formula of our Minion Land which translates English into Banana. So are you excited, human of the Earth!? Go on then!! Tech Stack used- MERN, Tailwind CSS, Vanilla JS",
        git:"https://github.com/percius47/talk-banana",
        live:"https://talk-bananaz.netlify.app/"


    },
    {
        title: "Tech Portfolio",
        date: "20th July 2021",
        description:"Portfolio made for showcasing the projects made and the Blogs published in the various technologies spread across which is THIS SITE itself. Tech Stack used- MERN, Tailwind CSS, Vanilla JS",
        git:"https://github.com/percius47/hosted-portfolio",
        live:"/"


    },
    {
        title: "Harry Potter Quiz",
        date: "21st July 2021",
        description:"CLI App made to host a Harry Potter Trivia Quiz using JavaScript and showcase the Leader board at the end.",
        git:"https://github.com/percius47/harry-potter-quiz",
        live:"https://replit.com/@PrashantSingh41/markTwo?embed=1&output=1"


    },
    {
        title: "How Better do you know ME!?",
        date: "21st July 2021",
        description:"CLI App made to host a Know-Me-Better Quiz using JavaScript and showcase the Leader board at the end.",
        git:"https://github.com/percius47/know-me-quiz",
        live:"https://replit.com/@PrashantSingh41/markOne?embed=1&output=1#index.js"


    }
];

function ProjectList() {
function goTop(){
    scroll.scrollToTop();

}


    return (
        
        <div className="projectList">
            <h1>Projects</h1>
            <h3>This is my web development journey from basic CLI apps to a Full-Stack Application. </h3>
            <div className="listParent">
                {projects.map(function (item,index){
                        return(
                            <div className="listCard">
                            <h4 className="title">{item.title}</h4>
                            <small>{item.date}</small>
                            <p>{item.description}</p>
                            <a href={item.live} className="liveProject">View Live</a>
                            <a href={item.git} className="codeProject">View Source</a>
                        </div>
                        );
                })}

                
            </div>
            <div className="top"
            onClick={goTop}
            >
            
            <FaAngleUp/>
            <span>Top</span>
            </div>

        </div>
    )
}

export default ProjectList
