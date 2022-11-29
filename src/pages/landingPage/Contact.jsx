import React from 'react'

export default function Contact() {
  return (

    <div>
      <div className="container mx-auto  pt-12 pb-12">
      
        <div className="mb-32 text-gray-800">

          <div className="block rounded-lg  bg-white">
            <div className="flex flex-wrap items-center">
              <div className="grow-0 shrink-0 basis-auto block w-full lg:flex lg:w-6/12 xl:w-4/12">
                <div className="map-container-2 w-full bg-blue-50" data-aos="zoom-out" data-aos-delay="50">
                  <iframe src="https://maps.google.com/maps?q=Ashaley+Botwe&t=&z=13&ie=UTF8&iwloc=&output=embed" className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg" frameborder="0" allowfullscreen></iframe>
                </div>
              </div>
              <div className="isolate grow-0 shrink-0 basis-auto self-start w-full lg:w-6/12 xl:w-8/12  h-[500px] relative ">

                <div className=" py-10 md:py-12 px-4 md:px-6">
                  <div className="flex justify-center mb-12">
                    <div className="text-center">
                      <nav className="text-2xl " data-aos="fade-up" data-aos-delay="50">Get in touch!</nav>
                      <nav className=" text-gray-400" data-aos="fade-up" data-aos-delay="100">we will be glad to hear from you</nav>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-2 lg:gap-y-8 xl:grid-cols-3 gap-x-6 mb-12">
                    <div className="mb-12 lg:mb-0 text-center mx-auto" data-aos="fade-up" data-aos-delay="100">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-600  mx-auto" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg>
                      <nav className="mt-6 mb-2 text-gray-400 text-sm">Email</nav>
                      <a href="mailto: akorlicourage@gmail.com" className="font-medium block">info@general.gov.gh</a>
                      <a href="mailto: ceejay995@live.com" className="font-medium block">accra@ocr.gov.gh</a>
                    </div>
                    <div className="mb-12 lg:mb-0 text-center mx-auto" data-aos="fade-up" data-aos-delay="150">
                      <svg className="w-8 h-8 text-blue-600  mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>
                      <nav className="mt-6 mb-2 text-gray-400 text-sm">address</nav>
                      <h6 className="font-medium">Botwe, Madina</h6>
                      <h6 className="font-medium">Street name</h6>
                      <h6 className="font-medium">GA-143-4647</h6>
                    </div>
                    <div className="mb-6 md:mb-0 text-center mx-auto" data-aos="fade-up" data-aos-delay="200">
                      <svg className="w-8 h-8 text-blue-600 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path></svg>
                      <nav className="mt-6 mb-2 text-gray-400 text-sm">Phone</nav>
                      <a href="tel:0203843143" className="font-medium block">+233 030 000 0000</a>
                      <a href="tel:0544082734" className="font-medium block">+233 020 000 0000</a>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>


  )
}