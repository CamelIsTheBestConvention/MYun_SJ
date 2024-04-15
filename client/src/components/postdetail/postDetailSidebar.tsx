import React, { useRef, useState } from 'react'
import "../../style/postDetail/postDetailSidebar.scss"
import modify from "../../img/modify.png"
import trash from "../../img/trash.png"
import downArrow from "../../img/downArrow.png"
import upArrow from "../../img/upArrow.png"

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
                    <div className="postSidebar-arrow">
                        <img src={upArrow} alt="" />
                        <img src={downArrow} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default PostDetailSidebar;
