import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    height: 3rem;
    width: 8rem;
    background: green;
    color: #fff;

    border: 1px solid green;
    border-radius: 0.5rem;
    /*  border-radius: 0%.5rem; */
  }
`;

export const ImageBox = styled.div``;

export const Infos = styled.div`
  display: block;
  text-align: center;

  margin-bottom: 1rem;
`;
