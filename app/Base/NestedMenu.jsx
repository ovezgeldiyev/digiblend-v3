import React from 'react'
import Link from 'next/link'

const NestedMenu = ({ condition, menuType, setMenuType, servicesMenu, closeMenu }) => {
  return (
    menuType === condition && (
      <div className="nav__inner-main">
        <div
          className="nav__inner-back"
          onClick={() => setMenuType("services")}
        >
          <span>
            <img src="/images/icons/triangle.svg" alt="" />
          </span>
          <h6>Services</h6>
        </div>
        {servicesMenu.nested_menus.data.filter(el => el.attributes.label.toLowerCase() === menuType)[0].attributes.child_menus.data.map(child => {
          
          return <div key={child.id}
            className='navItem'
          // className={
          //     "navItem " +
          //     (pathname === "/services/data-analytics/data-collection"
          //         ? "active"
          //         : "")
          // }
          >
            <div className="navItem__inner">
              <Link
                className="navItem__link"
                href={child.attributes.url}
                onClick={closeMenu}
              >
                <h3>{child.attributes.label}</h3>
                <p>{child.attributes.excerpt}</p>
              </Link>
            </div>
          </div>
        })}

        {/* <div
            className={
              "navItem " +
              (pathname === "/services/data-analytics/data-storage"
                ? "active"
                : "")
            }
          >
            <div className="navItem__inner">
              <Link
                className="navItem__link"
                href="/services/data-analytics/data-storage"
              >
                <h3>Data Storage</h3>
                <p>Efficient data storage and transformation</p>
              </Link>
            </div>
          </div>
          <div
            className={
              "navItem " +
              (pathname === "/services/data-analytics/dashboarding"
                ? "active"
                : "")
            }
          >
            <div className="navItem__inner">
              <Link
                className="navItem__link"
                href="/services/data-analytics/dashboarding"
              >
                <h3>Dashboarding</h3>
                <p>Turning data into real-time insights</p>
              </Link>
            </div>
          </div>
          <div
            className={
              "navItem " +
              (pathname === "/services/data-analytics/data-analysis"
                ? "active"
                : "")
            }
          >
            <div className="navItem__inner">
              <Link
                className="navItem__link"
                href="/services/data-analytics/data-analysis"
              >
                <h3>Data Analysis</h3>
                <p>Harnessing insights for decision-making</p>
              </Link>
            </div>
          </div> */}
      </div>
    )
  )
}

export default NestedMenu