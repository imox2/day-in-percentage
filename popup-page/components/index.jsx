import React from 'react';
import styled, { css,keyframes } from "styled-components";
import { Timer } from "../../src/utils/time";

const timer = new Timer();

export default class  MediaControlCard extends React.Component{
    state = {
       selectedTimeType: "t" ,
    };

    constructor(props) {
        super(props);
    }

    componentDidMount () {
      this.setState({'percentage':timer.returnPercentageBasedOnType("t")});
    }

    selectTimeType(timeType) {
      console.log("selectTimeType",timeType);
      this.setState({"selectedTimeType":timeType,'percentage':timer.returnPercentageBasedOnType(timeType)});
    }

    render() {
      console.log("rendering",this.state.selectedTimeType);
      // Create the keyframes
      const keyframe = keyframes`
          0% {background-position: 0% 50%; }
          50% {background-position: 100% 50%; }
          100% {background-position: 0% 50%; }
        `;

      const Button = styled.button`
        /* Adapt the colors based on primary prop */
        background-color: ${props => props.truth==1 ? "rgba(0, 0, 0, .4)" : "transparent"};
        font-size: ${props => props.truth==1 ? "0.8em" : "0.6em"};

        :hover {
          background-color: ${props => props.truth==1 ? "rgba(0, 0, 0, .4)" : "rgba(0, 0, 0, .2)"};
        }
        color: white;
        border-radius: 10px;
        border: 0px;
        font-weight: bold;
        margin: 0.19em;
        padding: 0.25em 1em;
      `;


      const Circle = styled.div`
        height: 500px;
        width: 500px;
        border-radius: 50%;
        color: white;
        background-color:rgba(0, 0, 0, .4);
        display: inline-block;
            opacity: 0.2;
      `;

      const H3 = styled.h3`
        position: relative;
        color: white;
        font-weight: bold;
          top: -2em;
          right: -3.9em;
      `;

      const Row = styled.div`
          display: -ms-flexbox;
          display: flex;
          -ms-flex-wrap: wrap;
          flex-wrap: wrap;
          margin-right: 0.25rem;
          margin-left: 1.30rem;
      `; 

      const RowButton = styled.div`
          display: -ms-flexbox;
          display: flex;
          -ms-flex-wrap: wrap;
          flex-wrap: wrap;
          padding-left: 3.3rem;
      `;

      const SpanDiv = styled.div`
        text-align: center;
        font-size: 0.8rem;
        font-weight: bold;
        color:white
      `;

      const Avatar = styled.span`
        background-color: rgba(0, 0, 0, .4);
        width: 12rem !important;
        height: 12rem !important;
        line-height: 11rem !important;
        font-weight: bold !important;
        font-size: 5rem !important;
        margin-top: 1rem;
        margin-right: 2.7rem;
        margin-left: 2rem;
        margin-bottom: -3rem;
        width: 2rem;
        height: 2rem;
        line-height: 2rem;
        border-radius: 50%;
        display: inline-block;

        position: relative;
        text-align: center;
        color: white;
        font-weight: 600;
        vertical-align: bottom;
        font-size: 0.875rem;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    `;


      // Here we create a component that will rotate everything we pass in over two seconds
      const Rotate = styled.div`
        
        background: linear-gradient(-45deg, rgb(238, 119, 82), rgb(231, 60, 126), rgb(35, 166, 213), rgb(35, 213, 171)) 0% 0% / 400% 400%;
        animation: ${keyframe} 15s ease 0s infinite normal none running;
        padding-top: 2rem;
        padding-bottom: 1rem;
        font-size: 1.2rem;
        display: block;
      `;

      const Link = styled.a`
        :hover {
          text-decoration: underline;;
        }
        color:white;
        text-decoration:none;
        position:relative;
        top:-0.5rem;
      `;


      return(
        <Rotate>
          <RowButton>
                <Button onClick={() => this.selectTimeType("y")} truth={(this.state.selectedTimeType=="y")?1:0}> Year </Button>
                <Button onClick={() => this.selectTimeType("t")}  truth={(this.state.selectedTimeType=="t")?1:0}> Today </Button>
                <Button onClick={() => this.selectTimeType("m")}  truth={(this.state.selectedTimeType=="m")?1:0}> Month </Button>
          </RowButton>

          <Row>
              <Avatar>
                {this.state.percentage}
              </Avatar> 
              <H3>percent</H3>
        </Row>
          <SpanDiv>
            <span style={{color: "black","font-size": "2rem"}}>&#9829;</span>
            <Link href="https://nosemantic.com" target="_blank"> Nosemantic</Link> 
          </SpanDiv>
        </Rotate>
      );
    }
}
