import tiptime from "../assets/tip-time.png";
import duck from "../assets/support_duck.png";
import website from "../assets/website.png"

const ProjectCardData = [
    {
        imgsrc: tiptime,
        title: "Tip Time - Mobile App",
        text: "This is a mobile app built on Android Studio using Kotlin." +
               " It calculates the amount of tips you should provide based on varying " +
               "levels of service recieved and keeps track of your tipping tendencies. 💸💸💸",
        view: "https://github.com/O1iviaC/Tip_time",

    },
    {
        imgsrc: duck,
        title: "Support Duck - Discord Bot",
        text: "This is a discord bot built with Javascript and various API's. 'Support Duck' is an emotional-support " +
                "bot that shares quotes, dad-jokes, declares achievements, and more! Engage with the duck " +
                "in a variety of ways and enjoy the art I personally drew to give the bot some more personality! 💛🦆🤖" ,
        view: "https://github.com/O1iviaC/SupportDuck",
        
    },
    {
        imgsrc: website,
        title: "Personal Portfolio Website",
        text: "It's this website right here! I created this using ReactJS, HTML, and CSS to give you a snapshot of who I am, "+
               "my capabilities, and what I'm up to!" ,
        view: "https://github.com/O1iviaC/olivia-chan.me",
        
    },
];

export default ProjectCardData;