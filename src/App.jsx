import { Route, Routes } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from "./components/Header";
import Home from './pages/home/Home';
import Shop from './pages/shop/Shop';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Footer from "./components/Footer";
import { useState } from "react";
import ProductDetail from "./pages/productdetail/ProductDetail";
import ranDombook1 from '../src/images/ai.jpg'
import ranDombook2 from '../src/images/angularjs.jpg'
import ranDombook3 from '../src/images/java.jpg'
import ranDombook4 from '../src/images/javascript.jpg'
import ranDombook5 from '../src/images/javscript-bible.jpg'
import ranDombook6 from '../src/images/motivation-learning.jpg'
import ranDombook7 from '../src/images/python-practical.jpg'
import ranDombook8 from '../src/images/python.jpg'
import ranDombook9 from '../src/images/react-explained.jpg'
import ranDombook10 from '../src/images/successgul-motivation.jpg'
import ranDombook11 from '../src/images/vuejs.jpg'
import ranDombook12 from '../src/images/react.jpg'
import { ToastContainer } from "react-toastify";
import { CartProvider } from "./context/CartContext";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Checkout from "./components/Checkout";


const stripePromise = loadStripe('pk_test_51QRzrQCvPObtaxPR53DWRwhANySeMYBjYJR1tjxxn2XEkGFo7e9ek0XPtcUA4j5LVe7zpd2nyuYU0cekYNVSVWkC00Zxyc1vDS');


function App() {

    const [searchResults, setSearchResults] = useState([])

    const randomProducts = [
        {
            volumeInfo: {
                id: 2000,
                title: "A Classical Approach to Artificial Intelligence",
                pageCount: 540,
                authors: ["Munesh Chandra Trivedi"],
                imageLinks: { thumbnail: ranDombook1 },
                description: "There are many books available in the market on the proposed topic but none of them can be termed as comprehensive. Besides, students face many problems in understanding the language of this books. Keeping these points in mind, Artificial Intelligence was prepared, which should be simple enough to comprehend and comprehensive enough to encompass all the topics of different institutions and universities."
            }
        },
        {
            volumeInfo: {
                id: 2001,
                title: "AngularJS",
                pageCount: 197,
                authors: ["Brad Green, Shyam Seshadri"],
                imageLinks: { thumbnail: ranDombook2 },
                description: "Develop smaller, lighter web apps that are simple to create and easy to test, extend, and maintain as they grow. This hands-on guide introduces you to AngularJS, the open source JavaScript framework that uses Model–view–controller (MVC) architecture, data binding, client-side templates, and dependency injection to create a much-needed structure for building web apps. Guided by two engineers who worked on AngularJS at Google, you’ll walk through the framework’s key features, and then build a working AngularJS app—from layout to testing, compiling, and debugging. If you have JavaScript experience, you’ll learn how AngularJS helps reduce the complexity of your web app. Dive deep into Angular’s building blocks and learn how they work together Gain maximum flexibility by separating logic, data, and presentation responsibilities with MVC Assemble your full app in the browser, using client-side templates Use AngularJS directives to extend HTML with declarative syntax Communicate with the server and implement simple caching with the $http service Use dependency injection to improve refactoring, testability, and multiple environment design Get code samples for common problems you face in most web apps"
            }
        },
        {
            volumeInfo: {
                id: 2002,
                title: "Java 6 Programming Black Book, New Ed",
                pageCount: 1628,
                authors: ["Kogent Solution Inc."],
                imageLinks: { thumbnail: ranDombook3 },
                description: "This book is a one time reference and a solid introduction, written from the programmer s point of view that contains hundreds of examples covering every aspect of Java 6. It helps you master the entire spectrum of Java 6 from Generics to Security enhancements; from new applet deployment enhancements to Networking; from Servlets to XML; from Sound and Animation to database handling; from Java Naming from Internationalization to Dynamic Scripting and Groovy and much more."
            }
        },
        {
            volumeInfo: {
                id: 2003,
                title: "JavaScript from Beginner to Professional",
                pageCount: 545,
                authors: ["Laurence Lars Svekis, Maaike van Putten, Codestars By Rob Percival"],
                imageLinks: { thumbnail: ranDombook4 },
                description: "Start your journey towards becoming a JavaScript developer with the help of more than 100 fun exercises and projects. Purchase of the print or Kindle book includes a free eBook in the PDF format. Key Features Write eloquent JavaScript and employ fundamental and advanced features to create your own web apps Interact with the browser with HTML and JavaScript, and add dynamic images, shapes, and text with HTML5 Canvas Build a password checker, paint web app, hangman game, and many more fun projects Book Description This book demonstrates the capabilities of JavaScript for web application development by combining theoretical learning with code exercises and fun projects that you can challenge yourself with. The guiding principle of the book is to show how straightforward JavaScript techniques can be used to make web apps ranging from dynamic websites to simple browser-based games. JavaScript from Beginner to Professional focuses on key programming concepts and Document Object Model manipulations that are used to solve common problems in professional web applications. These include data validation, manipulating the appearance of web pages, working with asynchronous and concurrent code. The book uses project-based learning to provide context for the theoretical components in a series of code examples that can be used as modules of an application, such as input validators, games, and simple animations. This will be supplemented with a brief crash course on HTML and CSS to illustrate how JavaScript components fit into a complete web application. As you learn the concepts, you can try them in your own editor or browser console to get a solid understanding of how they work and what they do. By the end of this JavaScript book, you will feel confident writing core JavaScript code and be equipped to progress to more advanced libraries, frameworks, and environments such as React, Angular, and Node.js. What you will learn Use logic statements to make decisions within your code Save time with JavaScript loops by avoiding writing the same code repeatedly Use JavaScript functions and methods to selectively execute code Connect to HTML5 elements and bring your own web pages to life with interactive content Make your search patterns more effective with regular expressions Explore concurrency and asynchronous programming to process events efficiently and improve performance Get a head start on your next steps with primers on key libraries, frameworks, and APIs Who this book is for This book is for people who are new to JavaScript (JS) or those looking to build up their skills in web development. Basic familiarity with HTML & CSS would be beneficial. Whether you are a junior or intermediate developer who needs an easy-to-understand practical guide for JS concepts, a developer who wants to transition into working with JS, or a student studying programming concepts using JS, this book will prove helpful."
            }
        },
        {
            volumeInfo: {
                id: 2004,
                title: "JavaScript Bible",
                pageCount: 2359,
                authors: ["Danny Goodman, Michael Morrison, Paul Novitski, Tia Gustaff Rayl"],
                imageLinks: { thumbnail: ranDombook5 },
                description: "The bestselling JavaScript reference, now updated to reflect changes in technology and best practices As the most comprehensive book on the market, the JavaScript Bible is a classic bestseller that keeps you up to date on the latest changes in JavaScript, the leading technology for incorporating interactivity into Web pages. Part tutorial, part reference, this book serves as both a learning tool for building new JavaScript skills as well as a detailed reference for the more experienced JavaScript user. You'll get up-to-date coverage on the latest JavaScript practices that have been implemented since the previous edition, as well as the most updated code listings that reflect new concepts. Plus, you'll learn how to apply the latest JavaScript exception handling and custom object techniques. Coverage includes: JavaScript's Role in the World Wide Web and Beyond Developing a Scripting Strategy Selecting and Using Your Tools JavaScript Essentials Your First JavaScript Script Browser and Document Objects Scripts and HTML Documents Programming Fundamentals Window and Document Objects Forms and Form Elements Strings, Math, and Dates Scripting Frames and Multiple Windows Images and Dynamic HTML The String Object The Math, Number, and Boolean Objects The Date Object The Array Object JSON - Native JavaScript Object Notation E4X - Native XML Processing Control Structures and Exception Handling JavaScript Operators Function Objects and Custom Objects Global Functions and Statements Document Object Model Essentials Generic HTML Element Objects Window and Frame Objects Location and History Objects Document and Body Objects Link and Anchor Objects Image, Area, Map, and Canvas Objects Event Objects Practical examples of working code round out this new edition and contribute to helping you learn JavaScript quickly yet thoroughly."
            }
        },
        {
            volumeInfo: {
                id: 2005,
                title: "Motivation for Learning and Performance",
                pageCount: 428,
                authors: ["Bobby Hoffman"],
                imageLinks: { thumbnail: ranDombook6 },
                description: "Designed for educators, researchers, practitioners, or anyone interested in maximizing human potential, Motivation for Learning and Performance outlines 50 key motivation principles based on the latest scientific evidence from the disciplines of psychology, education, business, athletics, and neurology. Using a highly applied and conversational style, the book is designed to inform the reader about how to diagnosis, analyze, and mediate learning and performance challenges influenced by motivation. The book features chapters on the biopsychology of motivation, how motivation changes across the lifespan, and the important influence of culture on motivated behavior. Three chapters are devoted to practical strategies and the implementation of motivational change. Special sections are included on enhancing motivation at work, in the classroom, in competitive environments, and during online education. Hoffman employs the innovative approach of using his interviews with \"real\" people including many notable personalities across diverse cultures and disciplines to illustrate motivated behavior. For example, readers will learn what motivated the colossal investment fraud masterminded by Bernie Madoff, the intimate thoughts of former NFL superstar Nick Lowery when he missed a field goal, and the joys and tribulations of Emmy-nominated \"Curb your Enthusiasm\" actress Cheryl Hines. The book provides a practical, applied, and multi-disciplinary resource for anyone interested in motivation and performance, but especially for university students at the graduate or undergraduate level studying education, psychology, business, leadership, hospitality, sports management, or military science. Additionally, the writing style and eclectic nature of the text will appeal to readers of non-fiction who can use the book to gain self-awareness to enhance performance of themselves or others. - Considers motivation for both learning and performance - Identifies 50 foundational principles relating to motivation - Provides research evidence supporting the foundational principles - Includes interviews from famous individuals, identifying what motivated them and why - Includes research from psychology, education, neuroscience, business, and sports"
            }
        },
        {
            volumeInfo: {
                id: 2006,
                title: "An Introduction to Python Programming: A Practical Approach",
                pageCount: 468,
                authors: ["Dr. Krishna Kumar Mohbey, Dr. Brijesh Bakariya"],
                imageLinks: { thumbnail: ranDombook7 },
                description: "step-by-step approach to Python programming with machine learning fundamental and theoretical principles. KEY FEATURES ● Introduces readers to Python programming in a very simple way. ● Extensive practical demonstration of Python concepts using numerous examples. ● Implementation of machine learning in Python using hands-on techniques. DESCRIPTION The book ‘Introduction to Python Programming: A Practical Approach’ lays out a path for readers who want to pursue a career in the field of computer software development. It covers the fundamentals of Python programming as well as machine learning principles. Students will benefit from the examples that are included with each concept, which will aid them in understanding the concept. This book provides a practical understanding of Python programming using numerous programs and examples. It also develops problem-solving and code-writing abilities for the readers. This book covers Python fundamentals, operators, and data structures such as strings, lists, dictionaries, and tuples. It also contains information on file and exception handling. The implementation of a machine learning model has also been included in this book. With the help of this book, students and programmers can improve their programming skills as well as their ability to sprint towards a rewarding career. WHAT YOU WILL LEARN ● Learn Python concepts, operators, and data structures. ● Learn the properties and operations of lists, tuples, and dictionaries. ● Write Python code to solve specific issues. ● Write Python code to handle disk files and exceptions. ● Work with OOPS properties like classes, objects, constructors, inheritance, and polymorphism. ● Use machine learning for classification, regression, prediction, and clustering. WHO THIS BOOK IS FOR This book is intended for current and aspiring emerging technology professionals, students, and anyone else who wishes to better understand the Python programming language and machine learning concepts. TABLE OF CONTENTS 1. Chapter 1: Basics of Python Programming 2. Chapter 2: Operators and Expressions 3. Chapter 3: Control Flow Statements 4. Chapter 4: Functions 5. Chapter 5: Strings 6. Chapter 6: Lists 7. Chapter 7: Tuple 8. Chapter 8: Dictionaries 9. Chapter 9: File Handling 10. Chapter 10: Exception Handling, Modules, and Packages 11. Chapter 11: Object-oriented Programming 12. Chapter 12: Machine Learning with Python 13. Chapter 13: Clustering with Python"
            }
        },
        {
            volumeInfo: {
                id: 2007,
                title: "Programming in Python 3",
                pageCount: 648,
                authors: ["Mark Summerfield"],
                imageLinks: { thumbnail: ranDombook8 },
                description: "Now fully updated, this edition brings together all the knowledge needed to write programs, use any library, and even create new library modules. The book teaches every aspect of the Python 3 language and covers all the built-in functionality."
            }
        },
        {
            volumeInfo: {
                id: 2008,
                title: "React Explained",
                pageCount: 304,
                authors: ["Zac Gordon"],
                imageLinks: { thumbnail: ranDombook9 },
                description: "React Explained is a fun and enjoyable introduction to React, which is the Javascript framework of choice for WordPress, Drupal, Magento, and thousands of developers. Key Features Up-to-Date: Constantly updated, the material in React Explained is always current. Clear instruction: You will follow plain English, clear visuals, and enjoyable step-by-step instructions. Hands-on learning: You will master React by building a complete React application. What You'll Learn In React Explained, readers will dig deep into how React works and will learn how to build applications with it. While the focus is on building for the frontend on the web, many of the skills you will learn will also apply to writing React on the server side, for native applications and even for Virtual Reality environments. Table of Contents The Javascript You Should Know for React Helpful Developer Tools for React A High Level Overview of React React Elements and Components Explained 5 Exercises in Writing React With Elements and Components JSX Explained 5 Exercises in Writing React With JSX Create React App Explained 5 Exercises With Create React App Props in React Explained 5 Exercises in Working With Props State in React Explained 5 Exercises in Working With State The Component Lifecycle Explained 5 Exercises With the Component Lifecycle Project Introduction Step 1 - Listing Content from State Step 2 - Routing and Single Content Views Step 3 - Adding a Content Form Step 4 - Adding Flash Messages Step 5 - Updating Content Step 6 - Deleting Content Step 7 - Maintaining Persistent State With Local Storage Step 8 - Authenticating With a Firebase Database Step 9 - CRUD and Live Syncing With Firebase Step 10 - Deploying the Project Step 11 - Refactoring Your Code About the Author Zac Gordon is a professional educator, who currently focuses on JavaScript development with and alongside WordPress at javascriptforwp.com. Zac has years of experience teaching at high schools, colleges, bootcamps and online learning sites like Treehouse, Udemy and Frontend Masters. In addition to teaching, Zac also runs Web Hosting for Students, one of the world's largest hosting companies dedicated to students and teachers. You can also catch his free Office Yoga sessions on OfficeYoga.tv."
            }
        },
        {
            volumeInfo: {
                id: 2009,
                title: "Successful Management by Motivation",
                pageCount: 324,
                authors: ["Bruno S. Frey, Margit Osterloh"],
                imageLinks: { thumbnail: ranDombook10 },
                description: "Motivated employees play a crucial role in creating a companys sustainable competitive advantage. Successful Management by Motivation shows that in a knowledge-based society, this goal cannot be achieved by extrinsic motivation alone. Pay for performance often even hurts because it crowds out intrinsic motivation. To succeed, companies have to find ways of fostering and sustaining intrinsic motivation. With the help of in-depth case studies, representative surveys, and analysis based on a large number of firms and employees, this work identifies the various aspects of motivation in companies and shows how the right combination of intrinsic and extrinsic motivation can be achieved."
            }
        },
        {
            volumeInfo: {
                id: 2010,
                title: "Vue.js 3 By Example",
                pageCount: 321,
                authors: ["John Au-Yeung"],
                imageLinks: { thumbnail: ranDombook11 },
                description: "Kick-start your Vue.js development career by learning the fundamentals of Vue 3 and its integration with modern web technologies such as Electron, GraphQL, Ionic, and Laravel Key FeaturesDownload complete source code for all Vue.js projects built throughout the bookDiscover steps to build production-ready Vue.js apps across web, mobile, and desktopBuild a compelling portfolio of web apps, including shopping cart system, booking app, slider puzzle game, real-time chat app, and moreBook Description With its huge ecosystem and wide adoption, Vue is one of the leading frameworks thanks to its ease of use when developing applications. However, it can get challenging for aspiring Vue.js developers to make sense of the ecosystem and build meaningful applications. This book will help you understand how you can leverage Vue effectively to develop impressive apps quickly using its latest version – Vue 3.0. The book takes an example-based approach to help you get to grips with the basics of Vue 3 and create a simple application by exploring features such as components and directives. You'll then enhance your app building skills by learning how to test the app with Jest and Vue Test Utils. As you advance, you'll understand how to write non-web apps with Vue 3, create cross-platform desktop apps with the Electron plugin, and build a multi-purpose mobile app with Vue and Ionic. You'll also be able to develop web apps with Vue 3 that interact well with GraphQL APIs. Finally, you'll build a chat app that performs real-time communication using Vue 3 and Laravel. By the end of this Vue.js book, you'll have developed the skills you need to build real-world apps using Vue 3 by working through a range of projects. What you will learnGet to grips with Vue architecture, components, props, directives, mixins, and other advanced featuresUnderstand the Vue 3 template system and use directivesUse third-party libraries such as Vue Router for routing and Vuex for state managementCreate GraphQL APIs to power your Vue 3 web appsBuild cross-platform Vue 3 apps with Electron and IonicMake your Vue 3 apps more captivating with PrimeVueBuild real-time communication apps with Vue 3 as the frontend and LaravelWho this book is for This book is for web developers who want to learn frontend web development with Vue 3 and use it to create professional applications. You'll also find this book useful if you're looking to create full-stack web apps with Vue.js 3.0 as the frontend. Knowledge of JavaScript programming is required to get the most out of this book."
            }
        },
        {
            volumeInfo: {
                id: 2011,
                title: "React and React Native",
                pageCount: 485,
                authors: ["Adam Boduch"],
                imageLinks: { thumbnail: ranDombook12 },
                description: "Use React and React Native to build applications for desktop browsers, mobile browsers, and even as native mobile apps About This Book Build React and React Native applications using familiar component concepts Dive deep into each platform, from routing in React to creating native mobile applications that can run offline Use Facebook's Relay, React and GraphQL technologies, to create a unified architecture that powers both web and native applications Who This Book Is For This book is written for any JavaScript developer—beginner or expert—who wants to start learning how to put both of Facebook's UI libraries to work. No knowledge of React is needed, though a working knowledge of ES2015 will help you follow along better. What You Will Learn Craft reusable React components Control navigation using the React Router to help keep your UI in sync with URLs Build isomorphic web applications using Node.js Use the Flexbox layout model to create responsive mobile designs Leverage the native APIs of Android and iOS to build engaging applications with React Native Respond to gestures in a way that's intuitive for the user Use Relay to build a unified data architecture for your React UIs In Detail React and React Native allow you to build cross-platform desktop and mobile applications using Facebook's innovative UI libraries. Combined with the Flux data architecture and Relay, you can now create powerful and feature-complete applications from just one code base! This book is split into three parts. The first part shows you how to start crafting composable UIs using React, from rendering with JSX and creating reusable components through to routing and creating isomorphic applications that run on Node. We then move on to showing you how to take the concepts of React and apply them to building Native UIs using React Native. You'll find out how to build responsive and streamlined UIs that can properly handle user interactions in a mobile environment. You'll also learn how to access device-specific APIs such as the geolocation API, and how to handle offline development with React Native. Finally, we'll tie all of these skills together and shows you how you can create React applications that run on every major platform. As well as understanding application state in depth, you'll learn how to leverage Relay to make feature-complete, data-driven web and native mobile applications. Style and approach Split into three major sections to help organize your learning, this hands-on, code-first book will help you get up to speed with React and React Native—the UI framework that powers Netflix, Yahoo, and Facebook."
            }
        },
    ];

    const [cartCount, setCartCount] = useState(0);

    return (
        <>

            <CartProvider>
                <Header setSearchResults={setSearchResults} cartCount={cartCount} />
                <Routes>
                    <Route path="/" element={<Home deliverhome={searchResults} />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/shop" element={<Shop deliverhome={searchResults} />} />
                    <Route path="/product/:id" element={<ProductDetail data={searchResults.length ? searchResults : randomProducts} setCartCount={setCartCount} />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/checkout" element={<Elements stripe={stripePromise}><Checkout /></Elements>}/>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
                <ToastContainer />
                <Footer />
            </CartProvider>
        </>
    )
}

export default App
