import React from 'react'
import { Link } from 'react-router-dom'

const UiFooter = () => {
  return (
    <footer className="w-full bg-footerColor">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-8 py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8">
                <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
                    <Link to="https://pagedone.io/"  className="flex justify-center lg:justify-start py-3">
                        <div>
                            <img src="https://flone.jamstacktemplates.dev/assets/img/logo/logo.png" alt="" />
                        </div>
                    </Link>
                    <span className="text-sm text-gray-500 py-3">©<a to="https://pagedone.io/">2025 Flone.</a></span>
                    <div>
                    All rights reserved.
                    </div>
                </div>
                <div className="lg:mx-auto text-left ">
                    <h4 className="text-lg text-gray-900 font-medium mb-7">Pagedone</h4>
                    <ul className="text-sm  transition-all duration-500">
                        <li className="mb-6"><a to="javascript:;"  className="text-gray-600 hover:text-gray-900">Home</a></li>
                        <li className="mb-6"><a to="javascript:;"  className=" text-gray-600 hover:text-gray-900">About</a></li>
                        <li className="mb-6"><a to="javascript:;"  className=" text-gray-600 hover:text-gray-900">Pricing</a></li>
                        <li><Link to="javascript:;"  className=" text-gray-600 hover:text-gray-900">Features</Link></li>
                    </ul>
                </div>
                <div className="lg:mx-auto text-left ">
                    <h4 className="text-lg text-gray-900 font-medium mb-7">Products</h4>
                    <ul className="text-sm  transition-all duration-500">
                        <li className="mb-6"><a to="javascript:;"  className="text-gray-600 hover:text-gray-900">Figma UI System</a></li>
                        <li className="mb-6"><a to="javascript:;"  className=" text-gray-600 hover:text-gray-900">Icons Assets</a></li>
                        <li className="mb-6"><a to="javascript:;"  className=" text-gray-600 hover:text-gray-900">Responsive Blocks</a></li>
                        <li><Link to="javascript:;"  className=" text-gray-600 hover:text-gray-900">Components Library</Link></li>
                    </ul>
                </div>
                <div className="lg:mx-auto text-left">
                    <h4 className="text-lg text-gray-900 font-medium mb-7">Resources</h4>
                    <ul className="text-sm  transition-all duration-500">
                        <li className="mb-6"><a to="javascript:;"  className="text-gray-600 hover:text-gray-900">FAQs</a></li>
                        <li className="mb-6"><a to="javascript:;"  className=" text-gray-600 hover:text-gray-900">Quick Start</a></li>
                        <li className="mb-6"><a to="javascript:;"  className=" text-gray-600 hover:text-gray-900">Documentation</a></li>
                        <li><Link to="javascript:;"  className=" text-gray-600 hover:text-gray-900">User Guide</Link></li>
                    </ul>
                </div>
                <div className="lg:mx-auto text-left">
                    <h4 className="text-lg text-gray-900 font-medium mb-7">Blogs</h4>
                    <ul className="text-sm  transition-all duration-500">
                        <li className="mb-6"><a to="javascript:;"  className="text-gray-600 hover:text-gray-900">News</a></li>
                        <li className="mb-6"><a to="javascript:;"  className=" text-gray-600 hover:text-gray-900">Tips & Tricks</a></li>
                        <li className="mb-6"><a to="javascript:;"  className=" text-gray-600 hover:text-gray-900">New Updates</a></li>
                        <li><Link to="javascript:;"  className=" text-gray-600 hover:text-gray-900">Events</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default UiFooter