import React from 'react';


const SectionTitle = ({subtitle, title, description, textAlignment, textColor}) => {
    return (
        <div className={`section-heading ${textAlignment} ${textColor}`}>
            <div className="subtitle" dangerouslySetInnerHTML={{__html: subtitle}}></div>
            <h2 className="title service_title" dangerouslySetInnerHTML={{__html: title}}></h2>
            <p className='service_desc' dangerouslySetInnerHTML={{__html: description}}></p>
        </div>
    )
}

export default SectionTitle;