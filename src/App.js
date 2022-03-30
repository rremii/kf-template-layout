import "./App.scss";
import styled from "styled-components";
import React from "react";
import {AdaptiveValue, Rem} from "./MainStyles/js/mixins";

function App() {


    return (
        <div className="App">
            <StyledWrapper>
                <div className="mian__container">
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consequuntur corporis eaque
                        facere
                        ipsa, iusto laborum soluta vitae voluptatum! Accusamus deleniti ea eaque enim laboriosam
                        molestias
                        possimus, qui rerum sed!
                    </div>
                </div>
            </StyledWrapper>
            <StyledWrapper>
                <div className="mian__container">
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consequuntur corporis eaque
                        facere
                        ipsa, iusto laborum soluta vitae voluptatum! Accusamus deleniti ea eaque enim laboriosam
                        molestias
                        possimus, qui rerum sed!
                    </div>
                </div>
            </StyledWrapper>
        </div>
    );
}

export default App;

const StyledWrapper = styled.div`
  .mian__container {
    color:blue;
    background-color: aquamarine;
    ${AdaptiveValue('font-size', 100, 10)}
  }
`;
