import React from 'react'
import { Link } from 'react-router-dom'
import { NAVBAR_ELEMENT } from '../../../constants/nav-item'
import styles from "./style.module.scss"

const UiHeader = () => {
  return (
    <div className={styles.customContainer}>
        <footer className="w-full py-6 bg-transparent">
            <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <ul className="text-lg flex items-center gap-7 md:gap-12 transition-all duration-500 mb-0">
                        <li><Link to="/" className="text-linkTop hover:text-gray-900 text-[14px]">English</Link></li>
                        <li><Link to="/products" className="text-linkTop hover:text-gray-900 text-[14px]">EUR</Link></li>
                        <li><Link to="/resources" className="text-linkTop hover:text-gray-900 text-[14px]">Call Us 3965410</Link></li>
                    </ul>

                    <Link to="https://pagedone.io/" className="flex justify-center">
                        <div>
                            <img src="https://flone.jamstacktemplates.dev/assets/img/logo/logo.png" alt="" />
                        </div>
                    </Link>

                    <div className="flex space-x-6 items-center">
                        <Link to="#" className="block text-gray-900 transition-all  duration-500 hover:text-indigo-600">
                        <i className="ri-search-line"></i>
                        </Link>
                        <Link to="#" className="block text-gray-900 transition-all duration-500 hover:text-indigo-600">
                        <i className="ri-user-5-line"></i>
                        </Link>
                        <Link to="#" className="block text-gray-900 transition-all duration-500 hover:text-indigo-600">
                        <i className="ri-shuffle-line"></i>
                        </Link>
                        <Link to="#" className="block text-gray-900  transition-all duration-500 hover:text-indigo-600">
                        <i className="ri-heart-line"></i>
                        </Link>
                        <Link to="#" className="block text-gray-900 transition-all duration-500 hover:text-indigo-600">
                        <i className="ri-shopping-bag-2-line"></i>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
        <nav className="bg-transparent border-gray-200 py-6 dark:bg-gray-900 border-customGray border-t">
    <div className="flex flex-wrap items-center justify-center max-w-screen-xl px-4 mx-auto">
        <div className="flex items-center lg:order-2">
            <div className="hidden mt-2 mr-4 sm:inline-block">
                <span></span>
            </div>
            <button data-collapse-toggle="mobile-menu-2" type="button"
				className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
				aria-controls="mobile-menu-2" aria-expanded="true">
				<span className="sr-only">Open main menu</span>
				<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<path fillRule="evenodd"
						d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
						clip-rule="evenodd"></path>
				</svg>
				<svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd"
						d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
						clip-rule="evenodd"></path>
				</svg>
			</button>
        </div>
        <div className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                {
                    NAVBAR_ELEMENT && NAVBAR_ELEMENT.map((item,index) => (
                        <li>
                        <Link 
                        key={index}
                        to={item.path}
                            className="block py-2 pl-3 pr-4 text-linkTop text-[15px] border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">{item.name}</Link>
                    </li>
                    ))
                }
               
            </ul>
        </div>
    </div>
</nav>
    </div>

  )
}

export default UiHeader