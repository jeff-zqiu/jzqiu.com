import React, {Component} from 'react';
import styled from 'styled-components'


const StylProject = styled.div`
    width: ${props => props.projectWidth}px;
    margin-top: ${props => props.projectWidth*0.2}px;
    margin-bottom: 50px;
    position: relative
    left: calc(50% - ${props => props.projectWidth/2}px);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;

const StylProjSVG = styled.div`    
    width: ${props => props.componentWidth}px;
`;

const StylProjText = styled.div`
    width: ${props => props.componentWidth}px;
    padding: ${props => props.componentWidth*0.1}px;
`;

const StyleProjLink = styled.a`
    color: #000000;
    text-decoration: none;
    &:hover {
        color: #444444
        text-decoration: underline;
    }
`;




class ProjectComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            frame: 0,
            playing: "none",
            intervalID: null,

            // width of each project container
            projectWidth : this.props.screenWidth>1000 ? 1000 : this.props.screenWidth*0.9,
            // if large screen, fit both component in one row, else two rows
            componentWidth : this.props.screenWidth>1000 ? 500 : this.props.screenWidth*0.9
        };
    }

    nFrame = 1 / (this.props.fps * this.props.duration);

    // mouse in 1st time / after leaving finishes: setInterval(enter), playing: none -> enter,
    // mouse out before entering finishes: clearInterval(enter), setInterval(leave), playing: enter -> leave
    // mouse in, entering finishes: clearInterval(enter), playing: enter -> none
    // mouse out after entering finishes: setInterval(leave), playing: none -> leave,
    // mouse in before leaving finishes: clearInterval(leave), setInterval(enter), playing: enter -> leave

    playEnterFrame() {
        if (this.state.playing === "leave" && this.state.frame !== 0) {
            clearInterval(this.state.intervalID);
        }
        if (this.state.playing !== "enter" && this.state.frame < 1) {
            // set up interval call
            const enterID = setInterval(() => {
                if (this.state.frame >= 0.99) {
                    this.setState({
                        frame: 1,
                        playing: "none",
                        intervalID: null
                    });
                    window.clearInterval(enterID);
                } else {
                    this.setState({
                        frame: this.state.frame + this.nFrame
                    });
                }
            }, 1000 / this.props.fps);
            //register in state
            this.setState({
                playing: "enter",
                intervalID: enterID,
            });
        }
    }

    playLeaveFrame() {
        if (this.state.playing === "enter" && this.state.frame !== 0) {
            clearInterval(this.state.intervalID);
        }
        if (this.state.playing !== "leave" && this.state.frame > 0) {
            // set up interval call
            const leaveID = setInterval(() => {
                if (this.state.frame < 0.03) {
                    this.setState({
                        frame: 0,
                        playing: "none",
                        intervalID: null
                    });
                    window.clearInterval(leaveID);
                } else {
                    this.setState({
                        frame: this.state.frame - this.nFrame
                    });
                }
            }, 1000 / this.props.fps);
            //register in state
            this.setState({
                playing: "leave",
                intervalID: leaveID,
            });
        }
    }
}


class ProjectSecrets extends ProjectComponent {
    render() {
        const x = this.state.frame;
        return (
            <StylProject onMouseEnter={() => {this.playEnterFrame()}}
                         onMouseLeave={() => {this.playLeaveFrame()}}
                         projectWidth={this.state.projectWidth}>
                <StylProjSVG componentWidth={this.state.componentWidth}>
                    <svg xmlns="http://www.w3.org/2000/svg"
                         viewBox="-5 -5 810 410">
                        <style>{`
        .st0{fill:none;stroke:#000000;stroke-miterlimit:10;stroke-width:2;}
        `}
                        </style>
                        <g>
                            <path className="st0" d="M220,200.5c10.5,0,19,8.5,19,19v160c0,10.5-8.5,19-19,19H20c-10.5,0-19-8.5-19-19v-160c0-10.5,8.5-19,19-19H220 M220,199.5
H20c-11,0-20,9-20,20v160c0,11,9,20,20,20h200c11,0,20-9,20-20v-160C240,208.5,231,199.5,220,199.5L220,199.5z"/>
                            <path className="st0" d="M781,100.5c10.5,0,19,8.5,19,19v260c0,10.5-8.5,19-19,19H581c-10.5,0-19-8.5-19-19v-260c0-10.5,8.5-19,19-19H781 M781,99.5
H581c-11,0-20,9-20,20v260c0,11,9,20,20,20h200c11,0,20-9,20-20v-260C801,108.5,792,99.5,781,99.5L781,99.5z"/>
                            <path className="st0" d="M500,1c10.5,0,19,8.5,19,19v360c0,10.5-8.5,19-19,19H300c-10.5,0-19-8.5-19-19V20c0-10.5,8.5-19,19-19H500 M500,0H300
c-11,0-20,9-20,20v360c0,11,9,20,20,20h200c11,0,20-9,20-20V20C520,9,511,0,500,0L500,0z"/>
                            <polyline className="st0" points="0,350 120,350 240,350 "/>
                            <line className="st0" x1="120" y1="400" x2="120" y2="350"/>
                            <polyline className="st0" points="280,350 400,350 520,350 "/>
                            <line className="st0" x1="400" y1="400" x2="400" y2="350"/>
                            <polyline className="st0" points="561,350 678.5,350 801,350 "/>
                            <line className="st0" x1="681" y1="400" x2="681" y2="350"/>
                            <path className="st0" d="M42.2,228.5c6.3,0,11.5,5.2,11.5,11.5s-5.2,11.5-11.5,11.5s-11.5-5.2-11.5-11.5S35.9,228.5,42.2,228.5 M42.2,227.5
c-6.9,0-12.5,5.6-12.5,12.5s5.6,12.5,12.5,12.5s12.5-5.6,12.5-12.5S49.2,227.5,42.2,227.5L42.2,227.5z"/>
                            <line className="st0" x1="70.2" y1="239.5" x2="170.2" y2="239.5"/>
                            <path className="st0" d="M322.2,28.5c6.3,0,11.5,5.2,11.5,11.5s-5.2,11.5-11.5,11.5s-11.5-5.2-11.5-11.5S315.9,28.5,322.2,28.5 M322.2,27.5
c-6.9,0-12.5,5.6-12.5,12.5s5.6,12.5,12.5,12.5s12.5-5.6,12.5-12.5S329.2,27.5,322.2,27.5L322.2,27.5z"/>
                            <line className="st0" x1="350.2" y1="39.5" x2="450.2" y2="39.5"/>
                            <path className="st0" d="M602.2,128.5c6.3,0,11.5,5.2,11.5,11.5s-5.2,11.5-11.5,11.5s-11.5-5.2-11.5-11.5S595.9,128.5,602.2,128.5 M602.2,127.5
c-6.9,0-12.5,5.6-12.5,12.5s5.6,12.5,12.5,12.5s12.5-5.6,12.5-12.5S609.2,127.5,602.2,127.5L602.2,127.5z"/>
                            <line className="st0" x1="630.2" y1="139.5" x2="730.2" y2="139.5"/>
                            <path className="st0" d="M65,386.6h-6.1c-0.9,0-1.7-0.7-1.7-1.7v-10.4h-6.5c-0.9,0-1.4-1.1-0.7-1.8l11.2-9.9c0.6-0.5,1.4-0.5,2,0
l10.5,9.8c0.7,0.7,0.2,1.8-0.7,1.8h-6.6v10.7C66.4,386,65.8,386.6,65,386.6z"/>
                            <path className="st0" d="M344.9,386.6h-6.1c-0.9,0-1.7-0.7-1.7-1.7v-10.4h-6.5c-0.9,0-1.4-1.1-0.7-1.8l11.2-9.9c0.6-0.5,1.4-0.5,2,0
l10.5,9.8c0.7,0.7,0.2,1.8-0.7,1.8h-6.6v10.7C346.2,386,345.6,386.6,344.9,386.6z"/>
                            <path className="st0" d="M625.9,386.6h-6.1c-0.9,0-1.7-0.7-1.7-1.7v-10.4h-6.5c-0.9,0-1.4-1.1-0.7-1.8l11.2-9.9c0.6-0.5,1.4-0.5,2,0
l10.5,9.8c0.7,0.7,0.2,1.8-0.7,1.8h-6.6v10.7C627.2,386,626.6,386.6,625.9,386.6z"/>
                            <path className="st0" d="M469.6,382.8h-4.5l-12,4.4c-0.5,0.2-1-0.2-1.1-0.8l-0.1-3.6c-2,0-3.7-1.8-3.7-4v-12.5c0-2.2,1.6-4,3.7-4h17.7
c2,0,3.7,1.8,3.7,4v12.5C473.2,381,471.6,382.8,469.6,382.8z"/>
                            <path className="st0" d="M747.6,382.8h-4.5l-12,4.4c-0.5,0.2-1-0.2-1.1-0.8l-0.1-3.6c-2,0-3.7-1.8-3.7-4v-12.5c0-2.2,1.6-4,3.7-4h17.7
c2,0,3.7,1.8,3.7,4v12.5C751.2,381,749.6,382.8,747.6,382.8z"/>
                            <path className="st0" d="M185.6,382.8h-4.5l-12,4.4c-0.5,0.2-1-0.2-1.1-0.8l-0.1-3.6c-2,0-3.7-1.8-3.7-4v-12.5c0-2.2,1.6-4,3.7-4h17.7
c2,0,3.7,1.8,3.7,4v12.5C189.2,381,187.6,382.8,185.6,382.8z"/>
                        </g>
                        <line className="st0" x1="590" y1="190" x2={x * 180 + 590} y2="190"/>
                        <line className="st0" x1="770" y1={330 - x * 140} x2="770" y2="330"/>
                        <line className="st0" x1={770 - x * 180} y1="330" x2="770" y2="330"/>
                        <line className="st0" x1="590" y1="190" x2="590" y2={x * 140 + 190}/>
                        <line className="st0" x1="310" y1="100" x2={x * 180 + 310} y2="100"/>
                        <line className="st0" x1="310" y1="160" x2={x * 180 + 310} y2="160"/>
                        <line className="st0" x1="310" y1="220" x2={x * 180 + 310} y2="220"/>
                        <line className="st0" x1="310" y1="280" x2={x * 140 + 310} y2="280"/>
                        <line className="st0" x1="30" y1="300" x2={x * 180 + 30} y2="300"/>
                    </svg>
                </StylProjSVG>
                <StylProjText componentWidth={this.state.componentWidth*0.8}>
                    <StyleProjLink href={"https://github.com/jeff-zqiu/uocsecrets"}>
                        <h4>UoCSecrets</h4>
                    </StyleProjLink>
                    <p>
                        Anonymous social network webapp. Posts are organized into card-style design.
                        User can upvote posts or view post in popularity or time order. Support
                        image upload and nested comments. Currently offline.
                    </p>
                    <p>Tech: Django, Bootstrap, PostgreSQL</p>
                </StylProjText>
            </StylProject>
        )
    }
}



class ProjectIMEDB extends ProjectComponent {

    render() {
        const x1 = this.state.frame < 0.5 ? this.state.frame * 2 : 1;
        const x2 = this.state.frame < 0.5 ? 0 : this.state.frame * 2 - 1;
        // TODO: recycle svg and text component
        if (this.state.projectWidth<1000) {
            return (
                <StylProject onMouseEnter={() => {this.playEnterFrame()}}
                             onMouseLeave={() => {this.playLeaveFrame()}}
                             projectWidth={this.state.projectWidth}
                >
                    <StylProjSVG componentWidth={this.state.componentWidth}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -5 810 410">
                            <style>
                                {`
                                    .st0{fill:#FFFFFF;stroke:#000000;stroke-width:2;stroke-miterlimit:10;}
                                    .st1{fill:#FFFFFF;stroke:#000000;stroke-width:2;stroke-miterlimit:10;}
                                `}
                            </style>
                            <line className="st1" x1="0" y1="0" x2="800" y2="0"/>
                            <line className="st1" x1="0" y1="0" x2="0" y2="400"/>
                            <line className="st1" x1="800" y1="0" x2="800" y2="400"/>
                            <line className="st1" x1="0" y1="400" x2="800" y2="400"/>

                            <rect x={150} y={175 - x1 * 15} className="st1" width={500 + x1 * 100} height={50 + x1 * 130}/>
                            <rect x={350 - x1 * 165} y={275 - x1 * 90} className="st1" width={100 + x1 * 30}
                                  height={50 + x1 * 80}/>

                            <line className="st1" x1="345" y1="200" x2={345 + x2 * 350} y2="200"/>
                            <line className="st1" x1="345" y1="250" x2={345 + x2 * 350} y2="250"/>
                            <line className="st1" x1="345" y1="300" x2={345 + x2 * 200} y2="300"/>

                            <polyline className="st0" points="0,130.7 108.5,130.7 174.5,68.6 800,68.6 "/>
                            <polygon className="st1"
                                     points="60.1,19.8 47.2,43.4 60.1,66.6 85.4,66.6 98.2,43.2 85.6,19.8 "/>
                            <polygon className="st1"
                                     points="61.7,43.2 74.7,66.6 61.7,89.4 36,89.4 22.9,66.6 35.9,43.2 "/>
                            <polygon className="st1"
                                     points="60.1,66.6 54.3,76.7 67.4,98.5 92.4,98.5 104.9,76.5 92.6,53.5 67.4,53.5 "/>
                        </svg>
                    </StylProjSVG>
                    <StylProjText componentWidth={this.state.componentWidth*0.8}>
                        <StyleProjLink href={"https://github.com/jeff-zqiu/IME-Inventory-Database"}>
                            <h4>IME Inventory Database</h4>
                        </StyleProjLink>
                        <p>
                            A search engine and database interface for IME's equipment inventory.
                            Uses metatags and text index to build intelligent search query. Interface for editing
                            also included. Currently under development.
                        </p>
                        <p>Tech: Flask, jQuery, MongoDB</p>
                    </StylProjText>
                </StylProject>
            )
        } else {
            return (
                <StylProject onMouseEnter={() => {this.playEnterFrame()}}
                             onMouseLeave={() => {this.playLeaveFrame()}}
                             projectWidth={this.state.projectWidth}
                >

                    <StylProjText componentWidth={this.state.componentWidth*0.8}>
                        <StyleProjLink href={"https://github.com/jeff-zqiu/IME-Inventory-Database"}>
                            <h4>IME Inventory Database</h4>
                        </StyleProjLink>
                        <p>
                            A search engine and database interface for IME's equipment inventory.
                            Uses metatags and text index to build intelligent search query. Interface for editing
                            also included. Currently under development.
                        </p>
                        <p>Tech: Flask, jQuery, MongoDB</p>
                    </StylProjText>
                    <StylProjSVG componentWidth={this.state.componentWidth}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-5 -5 810 410">
                            <style>
                                {`
                                    .st0{fill:#FFFFFF;stroke:#000000;stroke-width:2;stroke-miterlimit:10;}
                                    .st1{fill:#FFFFFF;stroke:#000000;stroke-width:2;stroke-miterlimit:10;}
                                `}
                            </style>
                            <line className="st1" x1="0" y1="0" x2="800" y2="0"/>
                            <line className="st1" x1="0" y1="0" x2="0" y2="400"/>
                            <line className="st1" x1="800" y1="0" x2="800" y2="400"/>
                            <line className="st1" x1="0" y1="400" x2="800" y2="400"/>

                            <rect x={150} y={175 - x1 * 15} className="st1" width={500 + x1 * 100} height={50 + x1 * 130}/>
                            <rect x={350 - x1 * 165} y={275 - x1 * 90} className="st1" width={100 + x1 * 30}
                                  height={50 + x1 * 80}/>

                            <line className="st1" x1="345" y1="200" x2={345 + x2 * 350} y2="200"/>
                            <line className="st1" x1="345" y1="250" x2={345 + x2 * 350} y2="250"/>
                            <line className="st1" x1="345" y1="300" x2={345 + x2 * 200} y2="300"/>

                            <polyline className="st0" points="0,130.7 108.5,130.7 174.5,68.6 800,68.6 "/>
                            <polygon className="st1"
                                     points="60.1,19.8 47.2,43.4 60.1,66.6 85.4,66.6 98.2,43.2 85.6,19.8 "/>
                            <polygon className="st1"
                                     points="61.7,43.2 74.7,66.6 61.7,89.4 36,89.4 22.9,66.6 35.9,43.2 "/>
                            <polygon className="st1"
                                     points="60.1,66.6 54.3,76.7 67.4,98.5 92.4,98.5 104.9,76.5 92.6,53.5 67.4,53.5 "/>
                        </svg>
                    </StylProjSVG>
                </StylProject>
            )
        }
    }
}


class ProjectJzqiu extends ProjectComponent {
    render() {
        const x = this.state.frame;
        return (
            <StylProject onMouseEnter={() => {this.playEnterFrame()}}
                         onMouseLeave={() => {this.playLeaveFrame()}}
                         projectWidth={this.state.projectWidth}
            >
                <StylProjSVG componentWidth={this.state.componentWidth}>
                    <svg xmlns="http://www.w3.org/2000/svg"
                         viewBox="-5 -5 810 410">
                        <style>{`
                            .st1{fill:#FFFFFF;stroke:#000000;stroke-width:2;stroke-miterlimit:10;}
                            .st2{fill:#FFFFFF;stroke:#FFFFFF;stroke-miterlimit:10;}
                            .st3{fill:none;stroke:#000000;stroke-width:2;stroke-miterlimit:10;}
                        `}
                        </style>
                        <g>
                            <path transform={'rotate('+ x*60+' 422.5 219.5)'} className="st1" d="M491.2,201.1c-0.5-2-1.2-4-1.9-5.9l8.2-7.9c-2.6-6.1-5.8-11.7-9.7-16.8l-11,3.1c-2.7-3.2-5.6-6.1-8.7-8.7
				l3.2-11c-5.2-3.9-10.8-7.2-16.8-9.7l-8,8.2c-3.9-1.4-7.8-2.5-11.9-3.2L432,138c-6.3-0.8-12.9-0.8-19.4,0l-2.8,11.1
				c-2,0.4-4,0.8-6,1.3c-2,0.5-4,1.2-5.9,1.9l-7.9-8.2c-6.1,2.6-11.7,5.8-16.8,9.7l3.1,11c-3.2,2.7-6.1,5.6-8.7,8.7l-11-3.2
				c-3.9,5.2-7.2,10.8-9.7,16.8l8.2,8c-1.4,3.9-2.5,7.8-3.2,11.9l-11.1,2.8c-0.8,6.3-0.8,12.8,0,19.4l11.1,2.8c0.4,2,0.8,4,1.3,6
				c0.5,2,1.2,4,1.9,5.9l-8.2,7.9c2.6,6.1,5.8,11.7,9.7,16.8l11-3.1c2.7,3.2,5.6,6.1,8.7,8.7l-3.2,11c5.2,3.9,10.8,7.2,16.8,9.7
				l8-8.2c3.9,1.4,7.8,2.5,11.9,3.2l2.8,11.1c6.3,0.8,12.8,0.8,19.4,0l2.8-11.1c2-0.4,4-0.8,6-1.3c2-0.5,4-1.2,5.9-1.9l7.9,8.2
				c6.1-2.6,11.7-5.8,16.8-9.7l-3.1-11c3.2-2.7,6.1-5.6,8.7-8.7l11,3.2c3.9-5.2,7.2-10.8,9.7-16.8l-8.2-8c1.4-3.8,2.5-7.8,3.2-11.9
				l11.1-2.8c0.8-6.3,0.8-12.8,0-19.4l-11.1-2.8C492.2,205.1,491.7,203.1,491.2,201.1z M437,275.2c-30.8,8.2-62.4-10.1-70.6-40.9
				c-8.2-30.8,10.1-62.4,40.9-70.6c30.8-8.2,62.4,10.1,70.6,40.9C486.1,235.4,467.7,267,437,275.2z"/>
                            <path transform={'rotate('+ -x*60+' 283.5 256.5)'} className="st1" d="M331.1,244.1c-0.4-1.4-0.8-2.7-1.3-4l5.7-5.4c-1.8-4.2-4-8-6.6-11.5l-7.5,2.1c-1.8-2.2-3.8-4.2-6-6l2.2-7.5
				c-3.6-2.7-7.4-4.9-11.5-6.7l-5.5,5.6c-2.6-1-5.4-1.7-8.2-2.2l-1.9-7.6c-4.4-0.5-8.8-0.6-13.3,0l-1.9,7.6
				c-1.4,0.2-2.8,0.5-4.1,0.9c-1.4,0.4-2.7,0.8-4,1.3l-5.4-5.7c-4.2,1.8-8,4-11.5,6.6l2.1,7.5c-2.2,1.8-4.2,3.8-6,6l-7.5-2.2
				c-2.7,3.6-4.9,7.4-6.7,11.5l5.6,5.5c-1,2.6-1.7,5.4-2.2,8.2l-7.6,1.9c-0.5,4.4-0.6,8.8,0,13.3l7.6,1.9c0.2,1.4,0.5,2.8,0.9,4.1
				c0.4,1.4,0.8,2.7,1.3,4l-5.7,5.5c1.8,4.2,4,8,6.6,11.5l7.5-2.1c1.8,2.2,3.8,4.2,6,6l-2.2,7.5c3.6,2.7,7.4,4.9,11.5,6.7l5.5-5.6
				c2.6,1,5.4,1.7,8.2,2.2l1.9,7.6c4.4,0.5,8.8,0.6,13.3,0l1.9-7.6c1.4-0.2,2.8-0.5,4.1-0.9c1.4-0.4,2.7-0.8,4-1.3l5.4,5.7
				c4.2-1.8,8-4,11.5-6.6l-2.1-7.5c2.2-1.8,4.2-3.8,6-6l7.5,2.2c2.7-3.6,4.9-7.4,6.7-11.5l-5.6-5.5c1-2.6,1.7-5.4,2.2-8.2l7.6-1.9
				c0.5-4.4,0.6-8.8,0-13.3l-7.6-1.9C331.8,246.8,331.5,245.4,331.1,244.1z M293.9,294.9c-21.1,5.6-42.8-7-48.4-28.1
				c-5.6-21.1,6.9-42.8,28.1-48.4c21.1-5.6,42.8,7,48.4,28.1C327.6,267.6,315,289.3,293.9,294.9z"/>
                        </g>
				        <g>
                            <path className="st2" d="M301.3,162.9c5.5,10.1,11.1,20.3,16.6,30.4c6.1,6.4,15.2,14.7,27.6,22.1c12.7,7.5,24.5,11.6,33.2,13.8
                    c17,29.5,34.1,59,51.1,88.4l-27.6,15.2c-24.3-19.4-50.7-43.1-77.4-71.9c-18.5-20-34.6-39.6-48.4-58
                    C284.7,189.6,293,176.2,301.3,162.9z"/>
                            <path className="st1" d="M378.6,312.1c-23.5-13.7-40.8-28.5-52.5-40.1c-8-7.9-22.3-22.1-35.9-44.2c-2-3.2-10.2-16.7-18-35.9
                    c-1.7-4.2-7.6-19.2-12.4-40.1c-3-13-5.9-29.9-6.9-49.7l-13.8-1.4c-2.1-0.6-5-1.5-8.3-2.8c-2.9-1.2-13.5-5.5-24.9-15.2
                    c-15.9-13.6-24.2-29.9-23.5-30.4c0.4-0.3,2.8,5.3,9.7,9.7c5.6,3.6,9.4,3.3,30.4,8.3c3,0.7,4.5,1.1,5.5,1.4
                    c9.4,2.8,16.3,7.5,20.7,11.1"/>
                            <path className="st1" d="M378.6,312.1c-4.1,8.6-4,11.7-15.2,18c-15.9,8.9-32.5,5.5-33.2,9.7c-0.5,3.5,10.9,8.7,20.7,11.1
                    c17,4,56.7-17.5,64.9-24.9"/>
                            <path className="st1" d="M371.7,348.1c-0.7,0.2-1.4,2.2-2.8,4.1c-1.8,2.5-4.4,4.6-2.8,6.9c1.2,1.7,7,1.4,8.3,1.4
                    c6.9,0,9.7-1,11.1-1.4c15.3-4.4,33.4-7.3,45.6-18c3.2-2.8,6.3-6.3,6.9-11.1c0.2-1.4,0.1-2.5,0-3.2"/>
                            <path className="st1" d="M416,325.9c10.3,0.7,19,0.9,25.4,1c25.9,0.1,38.9,0.2,50.6-5.1c2.4-1.1,4.6-2.3,8.3-2.8
                    c7.1-0.8,10.6,2.4,23.5,6.9c7.1,2.5,11.3,4.3,16.6,2.8c3.8-1.1,9.5-4.3,9.7-8.3c0.2-6.5-14.8-6.3-24.9-19.3
                    c-6.9-8.9-2.6-12.3-11.1-23.5c-6.1-8-13.5-13.1-16.6-15.2c-1.8-1.2-6.3-4.2-12.4-6.9c-25.4-11.3-104.8-30.8-129.9-37.3
                    c-4.3-1.1-9.2-2.4-15.2-5.5c-19.1-10-27.8-27.8-34.5-41.5c-11.7-23.6-23.6-47.2-37.3-74.6l2.5-17.4c0.1-1,0.1-2-0.2-2.9
                    c-0.6-1.7,0.3-3.9-0.9-7.4c-1.4-4.3-3.1-11.4-4.1-22.1c-1.5-15.2,1.3-24.6,0-24.9c-1.3-0.3-4.8,8.9-6.9,18
                    c-1.8,7.6-1.7,11.3-2.8,18c-0.9,6-2.8,14.6-6.9,24.9"/>
                        </g>
                        <line className="st3" x1="130" y1={200-90*x} x2="10" y2="200"/>
                        <line className="st3" x1="130" y1={200+90*x} x2="10" y2="200"/>
                        <line className="st3" x1="670" y1={200+90*x} x2="790" y2="200"/>
                        <line className="st3" x1="670" y1={200-90*x} x2="790" y2="200"/>
                        <line className="st3" x1={610+x*35} y1={200-120*x} x2={610-x*35} y2={200+120*x}/>
                    </svg>
                </StylProjSVG>
                <StylProjText componentWidth={this.state.componentWidth*0.8}>
                    <h4>jzqiu.com</h4>
                    <p>
                        My personal website. Built with vector graphs, svg animation and excessive
                        obsession with dolphin.
                    </p>
                    <p>Tech: React</p>
                </StylProjText>
            </StylProject>
        )
    }
}

export {
    ProjectSecrets,
    ProjectIMEDB,
    ProjectJzqiu,
};
