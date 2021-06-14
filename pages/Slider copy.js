import React, { useEffect, useState } from 'react';
import { useKeenSlider } from 'keen-slider/react'
import "keen-slider/keen-slider.min.css"

// slider component
export const Slider = () => {

    const [pause, setPause] = React.useState(false)
    const timer = React.useRef()
    const [currentSlide, setCurrentSlide] = React.useState(0)
    const [sliderRef, slider] = useKeenSlider({
        slidesPerView: 3,
        mode: "free-snap",
        spacing: 35,
        // duration: 1000,
        // centered: true,
        loop: true,
        // duration: 1000,
        // dragStart: () => {
        //     setPause(true)
        // },
        // dragEnd: () => {
        //     setPause(false)
        // },
        // slideChanged(s) {
        //     setCurrentSlide(s.details().relativeSlide)
        // },
        breakpoints: {

            "(max-width: 1200px)": {
                slidesPerView: 2,
                mode: "free-snap",
            },
            "(max-width: 768px)": {
                slidesPerView: 1,
                mode: "free-snap",
            },
        },
    })

    // React.useEffect(() => {
    //     sliderRef.current.addEventListener("mouseover", () => {
    //         setPause(true)
    //     })
    //     sliderRef.current.addEventListener("mouseout", () => {
    //         setPause(false)
    //     })
    // }, [sliderRef])

    // useEffect(() => {
    //     timer.current = setInterval(() => {
    //         if (!pause && slider) {
    //             slider.next()
    //         }
    //     }, 2000)
    //     return () => {
    //         clearInterval(timer.current)
    //     }
    // }, [slider]);

    return (
        <div className="navigation-wrapper">
            <div ref={sliderRef} className="keen-slider pt-5">
                <div className="keen-slider__slide number-slide1"><img style={{ width: '100%' }} src='data:image/jpeg;base64,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' /></div>
                <div className="keen-slider__slide number-slide2"><img style={{ width: '100%' }} src='https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80' /></div>
                <div className="keen-slider__slide number-slide3"><img style={{ width: '100%' }} src='https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80' /></div>
                <div className="keen-slider__slide number-slide4"><img style={{ width: '100%' }} src='https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80' /></div>
                <div className="keen-slider__slide number-slide5"><img style={{ width: '100%' }} src='https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80' /></div>
                <div className="keen-slider__slide number-slide6"><img style={{ width: '100%' }} src='https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80' /></div>
            </div>
            {slider && (
                <>
                    <ArrowLeft
                        onClick={(e) => e.stopPropagation() || slider.prev()}
                    // disabled={currentSlide === 0}
                    />
                    <ArrowRight
                        onClick={(e) => e.stopPropagation() || slider.next()}
                    // disabled={currentSlide === slider.details().size - 1}
                    />
                </>
            )}
        </div>
    );
};

function ArrowLeft(props) {
    const disabeld = props.disabled ? " arrow--disabled" : ""
    return (
        <svg
            onClick={props.onClick}
            className={"arrow arrow--left" + disabeld}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
        </svg>
    )
}

function ArrowRight(props) {
    const disabeld = props.disabled ? " arrow--disabled" : ""
    return (
        <svg
            onClick={props.onClick}
            className={"arrow arrow--right" + disabeld}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
        </svg>
    )
}