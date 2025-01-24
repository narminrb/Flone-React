import React from 'react'
import {Link} from 'react-router-dom'
const BreadCrumbs = ({ breadCrumb }) => {
  return (
        <nav className="flex bg-footerColor text-center justify-center py-10 my-10" aria-label="Breadcrumb">
    <ol className="inline-flex items-center space-x-1 md:space-x-3">
      {
        breadCrumb && breadCrumb.map((breadCrumb, index) => (
          <li key={index} className="inline-flex items-center">
            <Link
              to={breadCrumb.link}
              className="ml-1 inline-flex text-sm font-medium text-gray-800 hover:underline md:ml-2"
            >
              {breadCrumb.title}
            </Link>
          </li>
        ))
      }
    </ol>
  </nav>
  )
}

export default BreadCrumbs