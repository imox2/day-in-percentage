import React from 'react';
import "tabler-react/dist/Tabler.css";
import styled, { css,keyframes } from "styled-components";
import { Grid, Card, Avatar,Site, Nav, Header, Page,StatsCard } from "tabler-react";
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
          top: -2.4em;
          right: -3.2em;
      `;


      // Here we create a component that will rotate everything we pass in over two seconds
      const Rotate = styled.div`
        
        background: linear-gradient(-45deg, rgb(238, 119, 82), rgb(231, 60, 126), rgb(35, 166, 213), rgb(35, 213, 171)) 0% 0% / 400% 400%;
        animation: ${keyframe} 15s ease 0s infinite normal none running;
        padding: 2rem 1rem;
        font-size: 1.2rem;
      `;

      return(
        <Rotate>
          <Grid.Row cards alignItems="center">
                <Button onClick={() => this.selectTimeType("y")} truth={(this.state.selectedTimeType=="y")?1:0}> Year </Button>
                <Button onClick={() => this.selectTimeType("t")}  truth={(this.state.selectedTimeType=="t")?1:0}> Today </Button>
                <Button onClick={() => this.selectTimeType("m")}  truth={(this.state.selectedTimeType=="m")?1:0}> Month </Button>
          </Grid.Row>

          <Grid.Row cards  alignItems="center">
              <Avatar size="xxl" color="black-transparent">{this.state.percentage}
              </Avatar> 
              <H3>percent</H3>
        </Grid.Row>
          
        </Rotate>
      );
    }
}
