
import { images, pages, projectImage } from "../assets/images/index.js";

const projects = [{
    title: "TipTok",
    description: "Coming soon",
    eyebrow: "Personal Project",
    img: projectImage.test.src,
    coinName: ["html5", "css3", "react", "nodejs", "postgresql"],
    buttonName: "View",
    href: "/",
}, {
    title: "BAFE Dashboard",
    description: "An inventory dashboard built on top of PHP and Yii2 framework. It is presented with the power of Chart.js along with bootstrap5.",
    eyebrow: "Internship Project",
    img: projectImage.bafemis.src,
    alt: projectImage.bafemis.alt,
    coinName: ["html5", "php", "bootstrap4", "js", "mysql"],
    buttonName: "View",
    href: "/",
}, {
    title: "Payroll Web",
    description: "It is a Payroll Management Website for a security agency. The website monitors the attendance of every employees and calculates monthly payouts easily producing pdf payslips.",
    eyebrow: "Client Project",
    img: projectImage.payroll.src,
    alt: projectImage.payroll.alt,
    coinName: ["flutter", "firebase"],
    buttonName: "View",
    href: "/",
}, {
    title: "Chatmate",
    description: "Chatmate is an anonymous chat web application like omegle. This personal project trains my backend skills with express and socket.io.",
    eyebrow: "Personal Project",
    img: projectImage.chatmate.src,
    alt: projectImage.chatmate.alt,
    coinName: ["html5", "css3", "js", "react"],
    buttonName: "View",
    href: "/",
}];

const landingPages = [
    {
        title: "Blackout Command",
        description: "A PVP mock-up game designed to show the who's the strongest player on the battlefield",
        eyebrow: "Mock-up Game",
        img: pages[0].src,
        alt: pages[0].alt,
        coinName: ["html5", "css3", "react"],
        buttonName: "View",
        href: "https://advento098.github.io/blackout-command/",
    },
    {
        title: "Space Voyage",
        description: "A mock space game that challenges players to conquer a dangerous space voyage to save man-kind",
        eyebrow: "Mock-up Game",
        img: pages[2].src,
        alt: pages[2].alt,
        customImageDivClass: "flex justify-start",
        coinName: ["html5", "css3", "react"],
        buttonName: "View",
        href: "https://advento098.github.io/space-voyage/",
    },
    {
        title: "Silent Creed",
        description: "An assasin's creed inspired mock-up game",
        eyebrow: "Mock-up Game",
        img: pages[1].src,
        alt: pages[1].alt,
        coinName: ["html5", "css3", "react"],
        buttonName: "View",
        href: "https://advento098.github.io/silent-creed/",
    },
]

const capstoneImages = images;

export { projects, capstoneImages, landingPages };