import React from 'react'
import Link from "next/link";

const ContactCard = ({ item, uniq = true }) => {
    const img = item.image?.data?.attributes
    return (
        <section className={`mission ${uniq ? 'uniq' : ''}`}>
            <div className="mission__bg">
                <img src={img.url} alt={img.name} />
            </div>
            <div className="auto__container">
                <div className="mission__inner">
                    <div className="mission__inner-content">
                        <div className="mission__inner-text">
                            <h6 className="sup">{item.subtitle}</h6>
                            <h4>{item.title}</h4>
                            <p>{item.content}</p>
                        </div>
                        <Link href={item.link.url} className="button primary">
                            <span>{item.link.label}</span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactCard