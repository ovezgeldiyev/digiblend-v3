import React, { Fragment } from 'react'
import Link from 'next/link'

const Breadcrumb = ({ array }) => {
    return (
        array?.map((el, i) => (
            <Fragment key={el.id}>
                <h6>
                    <Link href={el.url}>{el.label?.toUpperCase()}</Link>
                </h6>
                {array.length - 1 > i ? <span>/</span> : null}
            </Fragment>
        ))
    )
}

export default Breadcrumb