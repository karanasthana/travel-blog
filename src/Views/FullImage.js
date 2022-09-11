import React from 'react';

import Full1 from '../Assets/full_image1.jpg';
import Full2 from '../Assets/full_image2.jpg';
import Full3 from '../Assets/full_image3.jpg';
import Full4 from '../Assets/full_image4.jpg';

export default class FullImage extends React.Component {
    constructor(props) {
        super(props);

        this.enterImage1 = this.enterImage1.bind(this);
        this.exitImage1 = this.exitImage1.bind(this);
        this.enterImage2 = this.enterImage2.bind(this);
        this.exitImage2 = this.exitImage2.bind(this);
        this.enterImage3 = this.enterImage3.bind(this);
        this.exitImage3 = this.exitImage3.bind(this);
        this.enterImage4 = this.enterImage4.bind(this);
        this.exitImage4 = this.exitImage4.bind(this);
    }
    state={
        showImage1: true,
        showImage2: true,
        showImage3: true,
        showImage4: true,
    }

    enterImage3() {
        this.setState({ showImage3: false });
    }
    exitImage3() {
        this.setState({ showImage3: true });
    }

    enterImage4() {
        this.setState({ showImage4: false });
    }
    exitImage4() {
        this.setState({ showImage4: true });
    }
    enterImage1() {
        this.setState({ showImage1: false });
    }
    exitImage1() {
        this.setState({ showImage1: true });
    }

    enterImage2() {
        this.setState({ showImage2: false });
    }
    exitImage2() {
        this.setState({ showImage2: true });
    }

    render() {
        const imgResponsive = {
            display: 'block',
            maxWidth: '100%',
            height: 'auto',
        };
        const img = {
            width: '100vw',
        };
        
        return (
            <div>
                <div onMouseEnter={this.enterImage1} onMouseLeave={this.exitImage1} style={{position: 'relative', backgroundColor: '#222831',}}>
                    <img src={Full1} alt={'India'} style={{ display: 'block', maxWidth: '100%', width: '100vw', opacity: (this.state.showImage1 ? 1 : 0.5) }} />
                    <div style={{ display: (this.state.showImage1 ? 'none' : 'flex') }}>
                        <div style={{position: "absolute", top: "50%", left: "50%", fontSize: 28,backgroundColor: '#222831', color: 'white'}}>India</div>
                    </div>
                </div>
                <div onMouseEnter={this.enterImage2} onMouseLeave={this.exitImage2} style={{position: 'relative', backgroundColor: '#393e46',}}>
                    <img src={Full2} alt={'Singapore'} style={{ display: 'block', maxWidth: '100%', width: '100vw', opacity: (this.state.showImage2 ? 1 : 0.5) }} />
                    <div style={{ display: (this.state.showImage2 ? 'none' : 'flex') }}>
                        <div style={{position: "absolute", top: "50%", left: "50%", fontSize: 28,backgroundColor: '#393e46', color: 'grey'}}>Singapore</div>
                    </div>
                </div>

                <div onMouseEnter={this.enterImage3} onMouseLeave={this.exitImage3} style={{position: 'relative', backgroundColor: '#00adb5',}}>
                    <img src={Full3} alt={'USA'} style={{ display: 'block', maxWidth: '100%', width: '100vw', opacity: (this.state.showImage3 ? 1 : 0.5) }} />
                    <div style={{ display: (this.state.showImage3 ? 'none' : 'flex') }}>
                        <div style={{position: "absolute", top: "50%", left: "50%", fontSize: 28,backgroundColor: '#00adb5', color: '#393e46'}}>USA</div>
                    </div>
                </div>
                <div onMouseEnter={this.enterImage4} onMouseLeave={this.exitImage4} style={{position: 'relative', backgroundColor: '#cccccc',}}>
                    <img src={Full4} alt={'Canada'} style={{ display: 'block', maxWidth: '100%', width: '100vw', opacity: (this.state.showImage4 ? 1 : 0.5) }} />
                    <div style={{ display: (this.state.showImage4 ? 'none' : 'flex') }}>
                        <div style={{position: "absolute", top: "50%", left: "50%", fontSize: 28,backgroundColor: '#cccccc', color: '#111111'}}>Canada</div>
                    </div>
                </div>
            </div>
        )
    }
}