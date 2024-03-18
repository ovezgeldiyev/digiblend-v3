import React from 'react'

const FormattedTitle = ({ rawTitle }) => {
    const title = rawTitle.split('<br>')
    return (
        title.length > 1 ? <>
            {title[0]}
            <br />
            {title[1]}
        </> : title
    )
}

export default FormattedTitle