import React from 'react'
// import img_first from '../assets/images/fashion1.png'
// import img_first2 from '../assets/images/fashion2.png'
// import img_first3 from '../assets/images/fashion3.png'
// import img_first4 from '../assets/images/fashion4.png'

import img_comment from '../assets/images/Group.png'
import img_comment1 from '../assets/images/Group2.png'
import img_comment2 from '../assets/images/Group3.png'
import img_comment3 from '../assets/images/Group4.png'


function Header({img}) {
    
    return (
        <header className='container'>
            <div className='header'>
                <div className='head-img'>
                    <img src={img} alt="fashion-man" />
                </div>
                <div className='head-title'>
                    <h1>The best fashion influencers to follow for sartorial inspiration</h1>
                    <p>From our favourite UK influencers to the best missives from Milan and the coolest New Yorkers, read on some of the best fashion blogs out there, and for even more inspiration, do head to our separate black fashion influencer round-up.</p>

                    <p>Fancy some shopping deals? Check out these amazing sales: Zara Black Friday, ASOS Black Friday, Missoma Black Friday and Gucci Black Friday...</p>
                    <div className='com-title'>
                        <img src={img_comment} alt="com_avatar" />
                        <img src={img_comment1} alt="com_avatar" />
                        <img src={img_comment2} alt="com_avatar" />
                        <img src={img_comment3} alt="com_avatar" />
                    </div>
                </div>
            </div>
            {/* <div className='header'>
                <div className='head-img'>
                    <img src={img_first2} alt="fashion-man" />
                </div>
                <div className='head-title'>
                    <h1>The best fashion influencers to follow for sartorial inspiration</h1>
                    <p>From our favourite UK influencers to the best missives from Milan and the coolest New Yorkers, read on some of the best fashion blogs out there, and for even more inspiration, do head to our separate black fashion influencer round-up.</p>

                    <p>Fancy some shopping deals? Check out these amazing sales: Zara Black Friday, ASOS Black Friday, Missoma Black Friday and Gucci Black Friday...</p>
                    <div className='com-title'>
                        <img src={img_comment} alt="com_avatar" />
                        <img src={img_comment1} alt="com_avatar" />
                        <img src={img_comment2} alt="com_avatar" />
                        <img src={img_comment3} alt="com_avatar" />
                    </div>
                </div>
            </div>
            <div className='header'>
                <div className='head-img'>
                    <img src={img_first3} alt="fashion-man" />
                </div>
                <div className='head-title'>
                    <h1>The best fashion influencers to follow for sartorial inspiration</h1>
                    <p>From our favourite UK influencers to the best missives from Milan and the coolest New Yorkers, read on some of the best fashion blogs out there, and for even more inspiration, do head to our separate black fashion influencer round-up.</p>

                    <p>Fancy some shopping deals? Check out these amazing sales: Zara Black Friday, ASOS Black Friday, Missoma Black Friday and Gucci Black Friday...</p>
                    <div className='com-title'>
                        <img src={img_comment} alt="com_avatar" />
                        <img src={img_comment1} alt="com_avatar" />
                        <img src={img_comment2} alt="com_avatar" />
                        <img src={img_comment3} alt="com_avatar" />
                    </div>
                </div>
            </div>
            <div className='header'>
                <div className='head-img'>
                    <img src={img_first4} alt="fashion-man" />
                </div>
                <div className='head-title'>
                    <h1>The best fashion influencers to follow for sartorial inspiration</h1>
                    <p>From our favourite UK influencers to the best missives from Milan and the coolest New Yorkers, read on some of the best fashion blogs out there, and for even more inspiration, do head to our separate black fashion influencer round-up.</p>

                    <p>Fancy some shopping deals? Check out these amazing sales: Zara Black Friday, ASOS Black Friday, Missoma Black Friday and Gucci Black Friday...</p>
                    <div className='com-title'>
                        <img src={img_comment} alt="com_avatar" />
                        <img src={img_comment1} alt="com_avatar" />
                        <img src={img_comment2} alt="com_avatar" />
                        <img src={img_comment3} alt="com_avatar" />
                    </div>
                </div>
            </div> */}
        </header>
    )
}

export default Header