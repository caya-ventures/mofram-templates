import React from 'react';

const ScrollTop = () => {

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button className="btn btn-ico btn-primary" onClick={scrollTop}>
            <img src="assets/top.svg" alt=""/>
        </button>
    );
}

export default ScrollTop;
