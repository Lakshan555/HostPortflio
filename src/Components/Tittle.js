import React from 'react'

function Tittle({tittel,span}) {
    return (
        <div className='Tittle'>
            <h3>
                {tittel}
                <span> {span}</span>
            </h3>
        </div>
    )
}

export default Tittle;
