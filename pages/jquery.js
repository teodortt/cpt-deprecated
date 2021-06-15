// import $ from "jquery";
import React from "react"
import dynamic from 'next/dynamic'
import Head from 'next/head'
// import bootstrap from 'bootstrap'
// import bootstrapBundle from '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

// import 'bootstrap/dist/css/bootstrap.min.css'
// const bootstrap = dynamic(() => import('bootstrap'), { ssr: false })


const Jquery = () => {

    const [count, setCount] = React.useState(0);

    React.useEffect(() => {

        // $(window).scroll(() => {
        //     // put your code here
        //     var scrolled_val = window.scrollY;
        //     console.log(scrolled_val)

        // });

        $(function () {
            $(window).on('scroll', function () {
                if ($(window).scrollTop() > 10) {
                    $('.navbar').addClass('active');
                } else {
                    $('.navbar').removeClass('active');
                }
            });
        });
    })

    return (
        <html style={{ height: '200vh' }}>
            jquery
            <Head>
                <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet" />
                <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" type="text/javascript"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.bundle.min.js" type="text/javascript"></script>
            </Head>
            <body>
                <header class="header">
                    <nav class="navbar navbar-expand-lg fixed-top py-3">
                        <div class="container"><a href="#" class="navbar-brand text-uppercase font-weight-bold">Transparent Nav</a>
                            {/* <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler navbar-toggler-right"><i class="fa fa-bars"></i></button> */}
                            <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler navbar-toggler-right"><i class="fa fa-bars"></i></button>
                            <div id="navbarSupportedContent" class="collapse navbar-collapse">
                                <ul class="navbar-nav ml-auto">
                                    <li class="nav-item active"><a href="#" class="nav-link text-uppercase font-weight-bold">Home <span class="sr-only">(current)</span></a></li>
                                    <li class="nav-item"><a href="#" class="nav-link text-uppercase font-weight-bold">About</a></li>
                                    <li class="nav-item"><a href="#" class="nav-link text-uppercase font-weight-bold">Gallery</a></li>
                                    <li class="nav-item"><a href="#" class="nav-link text-uppercase font-weight-bold">Portfolio</a></li>
                                    <li class="nav-item"><a href="#" class="nav-link text-uppercase font-weight-bold">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>


                <div class="container">
                    <div class="pt-5 text-white">
                        <header class="py-5 mt-5">
                            <h1 class="display-4">Transparent Navbar</h1>
                            <p class="lead mb-0">Using Bootstrap 4 and Javascript, create a transparent navbar which changes its style on scroll.</p>
                            <p class="lead mb-0">Snippet by
                                <a href="https://bootstrapious.com" class="text-white">
                                    <u>Bootstrapious</u></a>
                            </p>
                        </header>
                        <div class="py-5">
                            <p class="lead">Lorem ipsum dolor sit amet, <strong class="font-weight-bold">consectetur adipisicing </strong>elit. Explicabo consectetur odio voluptatum facere animi temporibus, distinctio tempore enim corporis quam <strong class="font-weight-bold">recusandae </strong>placeat! Voluptatum voluptate, ex modi illum quas nam distinctio.</p>
                            <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                        <div class="py-5">
                            <p class="lead">Lorem ipsum dolor sit amet, <strong class="font-weight-bold">consectetur adipisicing </strong>elit. Explicabo consectetur odio voluptatum facere animi temporibus, distinctio tempore enim corporis quam <strong class="font-weight-bold">recusandae </strong>placeat! Voluptatum voluptate, ex modi illum quas nam distinctio.</p>
                            <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    )
}

export default Jquery;



// $(function () {
//     $(window).on('scroll', function () {
//       if ($(window).width() > 991) {

//         if ($(window).scrollTop() > 10) {
//           $('.navbar').addClass('active');
//           $('#cpt-logo').attr("src", '/images/logo-green.png').attr("width", "100");

//         } else {
//           $('.navbar').removeClass('active');
//           $('#cpt-logo').attr("src", '/images/logo-white-full.png').attr("width", "150");

//         }
//       } else {
//         $('.navbar').addClass('active');
//         $('#cpt-logo').attr("src", '/images/logo-green.png').attr("width", "100");
//       }
//     });
//   });