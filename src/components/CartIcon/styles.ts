import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: 3rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  a {
    text-decoration: none;
    color: #fff;
  }

  .productCount {
    position: absolute;
    top: 0;
    right: 2;
  }
`;
