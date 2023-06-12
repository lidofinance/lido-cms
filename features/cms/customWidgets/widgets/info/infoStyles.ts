import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: rgb(223, 223, 227);

  & > *:first-child {
    margin-top: 0;
  }
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 30px;

  & > *:first-child {
    margin-top: 0;
  }
`;

export const Text = styled.p`
  width: 100%;
`;

export const Link = styled.a.attrs({
  target: "_blank",
})`
  display: inline-block;
  margin-top: 10px;
`;
