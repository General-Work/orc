import React from 'react'
import Logo from '../../assets/orc-logo-head.png'

const Index = () => {

    // const el = document.getElementById('messages')
	// el.scrollTop = el.scrollHeight

  return (
    <div className="flex-1 p:2 sm:p-6 justify-between flex flex-col h-full">
        <div className="flex sm:items-center justify-between py-3 border-b-2 border-gray-200">
            <div className="relative flex items-center space-x-4">
                <div className="relative">
                    <span className="absolute  right-0 bottom-6 ">
                        <div className='rounded-full  p-1.5 bg-green-500'/>
                    </span>
                <img src={Logo} alt="" className="w-10  h-10  rounded-full"/>
                </div>
                <div className="flex flex-col leading-tight">
                    <div className="text-lg mt-1 flex items-center">
                    <span className="text-gray-700 mr-3">Othello</span>
                    </div>
                    <span className="text-base text-gray-600">Support</span>
                </div>
            </div>
        </div>
        <div id="messages" className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
            <div className="chat-message">
                <div className="flex items-end">
                    <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                    <div><span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">Welcome</span></div>
                    </div>
                    <img src={Logo} alt="My profile" className="w-6 h-6 rounded-full order-1"/>
                </div>
            </div>
            <div className="chat-message">
                <div className="flex items-end justify-end">
                    <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                        <div><span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">Can you assist in registering a business.</span></div>
                    </div>
                    <div className="w-6 h-6 rounded-full order-2 bg-blue-600 text-white text-xs grid place-content-center">Na</div>
                </div>
            </div>
            <div className="chat-message">
                <div className="flex items-end">
                    <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                    <div><span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">What is the nature of business?</span></div>
                    {/* <div><span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">How large is your company?</span></div> */}
                    {/* <div><span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600"></span></div> */}
                    <div>
                        <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                            How large is your company?
                            <span className=" py-2 rounded-lg inline-block bg-gray-300 text-gray-600">Is your company a joint company?</span>
                          
                        </span>
                    </div>
                    </div>
                    <img src={Logo} alt="My profile" className="w-6 h-6 rounded-full order-1"/>
                </div>
            </div>
            {/* <div className="chat-message">
                <div className="flex items-end justify-end">
                    <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                    <div><span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">Any updates on this issue? I'm getting the same error when trying to install devtools. Thanks</span></div>
                    </div>
                    <div className="w-6 h-6 rounded-full order-2 bg-blue-600 text-white text-xs grid place-content-center">Na</div>
                </div>
            </div>
           
           
            <div class="chat-message">
                <div class="flex items-end">
                    <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                    <div><span class="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">It seems like you are from Mac OS world. There is no /Users/ folder on linux ?</span></div>
                    <div><span class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">I have no issue with any other packages installed with root permission globally.</span></div>
                    </div>
                    <img src={Logo} alt="My profile" className="w-6 h-6 rounded-full order-1"/>
                </div>
            </div>
            <div className="chat-message">
                <div className="flex items-end justify-end">
                    <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                    <div><span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">yes, I have a mac. I never had issues with root permission as well, but this helped me to solve the problem</span></div>
                    </div>
                    <div className="w-6 h-6 rounded-full order-2 bg-blue-600 text-white text-xs grid place-content-center">Na</div>

                </div>
            </div>
            <div className="chat-message">
                <div className="flex items-end">
                    <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                    <div><span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">I get the same error on Arch Linux (also with sudo)</span></div>
                    <div><span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">I also have this issue, Here is what I was doing until now: #1076</span></div>
                    <div><span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">even i am facing</span></div>
                    </div>
                    <img src={Logo} alt="My profile" className="w-6 h-6 rounded-full order-1"/>
                </div>
            </div> */}
        </div>
        <div>
            <div className="border-t-2 border-gray-200  pt-4 mb-2 sm:mb-0">
                <div className="relative flex">
                    <span class="absolute inset-y-0 flex items-center">
                        <button type="button" className="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-gray-600">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
                        </svg>
                        </button>
                    </span>
                    <input type="text" placeholder="Write your message!" className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-md py-3"/>
                
                </div>
            </div>
            <div className='flex justify-between '>
                <div className=''>
                    <button type="button" className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-gray-600">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </button>
                    <button type="button" className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-gray-600">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path>
                        </svg>
                    </button>
                </div>
                <button type="button" className="inline-flex items-center justify-center  transition duration-500 ease-in-out text-blue-500 hover:text-blue-400 focus:outline-none">
                        {/* <span className="font-bold">Send</span> */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6 ml-2 transform rotate-90">
                            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                        </svg>
                </button>

            </div>

        </div>
    </div>




  )
}

export default Index
