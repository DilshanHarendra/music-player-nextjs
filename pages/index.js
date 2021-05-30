import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import React from "react";

export default function Home() {
  return (

        <div className="mx-auto w-full h-full container pb-16">
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>


            <div className="object-cover bg-top relative" style={{backgroundImage:'url("/img/hero.jpeg")'}}>
                <div className="w-full   hero-section 2xl:pr-0 xl:pr-12 pr-16">
                    <div className="w-full flex ">
                        <div className="md:w-2/5 2xl:w-1/4 pt-16   px-4">
                                <button className="px-6 py-1 text-sm rounded-full border block">Update</button>

                            <div className="mt-12">
                               <div className="flex items-center">
                                   <p className="text-2xl truncate w-full">Album Name </p>
                                   <div className="flex items-center ml-3">
                                       <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                       </svg>
                                       <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                       </svg>
                                       <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                       </svg>
                                       <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                       </svg>
                                       <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                       </svg>
                                   </div>
                               </div>
                                <p className="text-xs mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad aut consectetur deleniti eaque est fugiat iste, laboriosam mollitia non numquam quae quas quia quidem quo rerum sed sint temporibus.</p>
                                <button className="px-6 py-1 rounded-sm mt-2 border block text-sm">See more</button>
                            </div>

                        </div>

                    </div>


                    <div className="w-3/4 mx-auto h-full flex items-start player" >
                        <img src="/img/hero.jpeg" className="w-16 h-16 object-cover" />
                        <div className="w-full ml-4">
                            <div className="w-full w-1/3 flex items-center">
                                <p className="truncate text-sm">Song Name</p>
                                <span className="ml-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </span>
                            </div>

                            <div className="w-full flex items-center mt-5">
                                <p className="pr-3">1:34</p>
                                <div className="bg-gray-200 rounded h-1 text-white flex items-center w-full">
                                    <div className="bg-green-500 rounded h-1 text-center" style={{width:`${40}%`,transition: 'width 200'}}>
                                </div>

                            </div>
                                <p className="pl-3">4:34</p>
                            </div>
                            <div className="w-full  flex items-center mt-5 justify-end">
                               <div className="w-1/5 flex items-center">
                                   <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                                   </svg>
                                   <div className="bg-gray-200 rounded h-1 text-white flex items-center w-full ml-2">
                                       <div className="bg-green-500 rounded h-1 text-center" style={{width:`${40}%`,transition: 'width 200'}}>
                                       </div>
                                   </div>
                               </div>

                            </div>

                            <div className="w-full flex items-center mt-5 justify-center">
                               <div className="width-fit-content flex items-center">
                                   <button className="px-2">
                                       <svg
                                           ariaHidden="true"
                                           className="w-6 h-6"
                                           data-ga-event-action="click"
                                           data-ga-event-category="material-icons"
                                           data-ga-event-label="ShuffleOutlined"
                                           tabIndex="-1"
                                           viewBox="0 0 24 24"
                                           stroke="currentColor"
                                           fill="none"
                                       >
                                           <path
                                               d="M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z"></path>
                                       </svg>

                                   </button>
                                   <button className="px-2">
                                       <svg
                                           ariaHidden="true"
                                           className="w-6 h-6"
                                           data-ga-event-action="click"
                                           data-ga-event-category="material-icons"
                                           data-ga-event-label="SkipPreviousOutlined"
                                           tabIndex="-1"
                                           viewBox="0 0 24 24"
                                           stroke="currentColor"
                                           fill="none"
                                       >
                                           <path
                                               d="M6 6h2v12H6zm3.5 6l8.5 6V6l-8.5 6zm6.5 2.14L12.97 12 16 9.86v4.28z"></path>
                                       </svg>

                                   </button>
                                   <button className="px-2">
                                       <svg
                                           ariaHidden="true"
                                           className="w-12 h-12"
                                           data-ga-event-action="click"
                                           data-ga-event-category="material-icons"
                                           data-ga-event-label="PlayCircleOutlineOutlined"
                                           tabIndex="-1"
                                           viewBox="0 0 24 24"
                                           stroke="currentColor"
                                           fill="none"
                                       >
                                           <path
                                               d="M10 16.5l6-4.5-6-4.5zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
                                       </svg>

                                   </button>
                                   <button className="px-2">
                                       <svg
                                           ariaHidden="true"
                                           className="w-6 h-6"
                                           data-ga-event-action="click"
                                           data-ga-event-category="material-icons"
                                           data-ga-event-label="SkipNextOutlined"
                                           tabIndex="-1"
                                           viewBox="0 0 24 24"
                                           stroke="currentColor"
                                           fill="none"
                                       >
                                           <path
                                               d="M6 18l8.5-6L6 6v12zm2-8.14L11.03 12 8 14.14V9.86zM16 6h2v12h-2z"></path>
                                       </svg>

                                   </button>
                                   <button className="px-2">
                                       <svg
                                           ariaHidden="true"
                                           className="w-6 h-6"
                                           data-ga-event-action="click"
                                           data-ga-event-category="material-icons"
                                           data-ga-event-label="RepeatOutlined"
                                           tabIndex="-1"
                                           viewBox="0 0 24 24"
                                           stroke="currentColor"
                                           fill="none"
                                       >
                                           <path
                                               d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"></path>
                                       </svg>
                                   </button>
                               </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>



            <div className="w-10/12 flex items-start mt-16 ">

                <div className="px-4 flex items-center w-1/5 pt-5">
                    <button className="px-2">
                        <svg
                            ariaHidden="true"
                            className="w-6 h-6"
                            data-ga-event-action="click"
                            data-ga-event-category="material-icons"
                            data-ga-event-label="ListOutlined"
                            tabIndex="-1"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            fill="none"
                        >
                            <path
                                d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7zm-4 6h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"></path>
                        </svg>
                    </button>
                    <button className="px-2">
                        <svg
                            ariaHidden="true"
                            className="w-6 h-6"
                            data-ga-event-action="click"
                            data-ga-event-category="material-icons"
                            data-ga-event-label="FlipToBackOutlined"
                            tabIndex="-1"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            fill="none"
                        >
                            <path
                                d="M9 7H7v2h2V7zm0 4H7v2h2v-2zm0-8a2 2 0 00-2 2h2V3zm4 12h-2v2h2v-2zm6-12v2h2c0-1.1-.9-2-2-2zm-6 0h-2v2h2V3zM9 17v-2H7a2 2 0 002 2zm10-4h2v-2h-2v2zm0-4h2V7h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zM5 7H3v12a2 2 0 002 2h12v-2H5V7zm10-2h2V3h-2v2zm0 12h2v-2h-2v2z"></path>
                        </svg>
                    </button>




                </div>
                <div className="w-4/5  py-12  bg-menu px-4">
                    <div className="mx-auto  flex items-center justify-center ">
                        <div className="font-semibold px-6" >
                            <span className="uppercase pb-2">Overview</span>
                        </div>
                        <div className="font-semibold px-6" >
                            <span className="uppercase pb-2">Products</span>
                        </div>
                        <div className="font-semibold px-6" >
                            <span className="uppercase pb-2 border-b border-green-500">charts</span>
                        </div>
                        <div className="font-semibold px-6" >
                            <span className="uppercase pb-2">New Release</span>
                        </div>
                        <div className="font-semibold px-6" >
                            <span className="uppercase pb-2">discover</span>
                        </div>
                        <div className="font-semibold px-6" >
                            <span className="uppercase pb-2">concert</span>
                        </div>
                    </div>
                    <hr className=" mt-8 border-gray-600"/>
                </div>



            </div>





        </div>

  )
}

