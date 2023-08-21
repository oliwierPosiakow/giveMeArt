import React from 'react';
import boy from '/boyImg.png'
import padlockIcon from '/padlockIcon.png'
function Ad() {
    return (
        <div>
            <div>
                <p>Style preview</p>
                <img src={boy} alt="Boy img"/>
            </div>
            <div>
                <p className='uppercase'>minimalistic</p>
                <div>
                    <p className='uppercase'>cartoon</p>
                </div>
                <div>
                    <img src="" alt=""/>
                    <p className='uppercase'>artistic</p>
                </div>
            </div>
        </div>
    );
}

export default Ad;