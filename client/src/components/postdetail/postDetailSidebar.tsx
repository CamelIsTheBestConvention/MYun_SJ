import React, { useRef, useState } from 'react'
import "../../style/postDetail/postDetailSidebar.scss"
import modify from "../../img/modify.png"
import trash from "../../img/trash.png"
import ScrollArrow from '../common/scrollArrow'

const PostDetailSidebar = () => {

    return (
        <>
            <div className="writeSidebar-box">
                <div className="writeSidebar-inner">
                    <p className="writeSidebar-inner-nickname">Navigator</p>
                    <div className="writeSidebar-icon">
                        <div>
                            <img src={modify} alt="" />
                            <p>modify</p>
                        </div>
                        <div>
                            <img src={trash} alt="" />
                            <p>delete</p>
                        </div>
                    </div>
                    <ScrollArrow />
                </div>
            </div>
        </>
    );
};

export default PostDetailSidebar;
