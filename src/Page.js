import React from "react";
import { animated } from "react-spring";
import styled from "styled-components";
import Container from "./Container";
import CardGrid from "./CardGrid";

const StyledPage = styled(animated.main)`
   position: absolute;
   top: 0;
   right: 0;
   border-radius: 16px 0 0 16px;
   background: #fff;
   height: 100%;
   width: calc(100% - 56px);
   overflow: hidden;
   /* safari overflow fix */
   -webkit-backface-visibility: hidden;
   -moz-backface-visibility: hidden;
   -webkit-transform: translate3d(0, 0, 0);
   -moz-transform: translate3d(0, 0, 0);
 
   .page__scrollable-content {
      position: absolute;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      padding-bottom: 24px;
      overflow: auto;
   }
 
   .page__header {
      position: sticky;
      top: 0;
      left: 0;
      width: 100%;
      height: 80px;
      background-color: #fff;
      box-sizing: border-box;
      padding: 0 32px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      z-index: 1;
      transition: transform 0.3s cubic-bezier(0.2, 0, 0.38, 0.9);
   }
 
   .page__header.hidden {
      transform: translateY(-80px);
   }
 
   .page__body {
      position: relative;
      width: 100%;
      min-height: calc(100% - 80px);
   }
 
   .section__header {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
   }
`;

const Page = () => {
    return (
        <StyledPage className="page">
            <Container className="body__container">
                <CardGrid />
            </Container>
        </StyledPage>
    )
}

export default Page;