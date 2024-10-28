import styled from "styled-components";

export const Card = styled.div<{ feature?: boolean; urgent?: boolean }>`
  position: relative;
  display: block;
  width: 360px;
  margin: 30px auto 0;
  padding: 20px;
  border-radius: 30px;
  border: 1px solid var(--Borders-Fog, rgba(0, 0, 0, 0.1));
  background: rgba(255, 255, 255, 0.7);
  text-decoration: none;

  ${({ feature }) =>
    feature &&
    `
    border: 1px solid rgba(255, 154, 62, 0.80);
    box-shadow: 0px 4px 34px 0px rgba(255, 154, 62, 0.50);
  `}

  ${({ urgent }) =>
    urgent &&
    `
    border: 1px solid #D74758;
    background: radial-gradient(571.42% 209.61% at 33.95% 13.85%, rgba(215, 71, 88, 0.32) 0%, rgba(215, 71, 88, 0.12) 100%);
    box-shadow: initial;
  `}
`;

export const Logo = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  width: 100px;
  height: 100px;
`;

export const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 110px;
  margin-bottom: 30px;
`;

export const Name = styled.p`
  margin: 0;
  font-size: 22px;
  font-weight: 600;
  line-height: 30px;
  color: #000000;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  color: #000000;
`;

export const Label = styled.span`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  color: rgba(19, 18, 23, 0.5);
`;

export const Block = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  & > img {
    width: 36px;
    height: 36px;
  }
`;

export const FlexColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.p`
  margin: 0;
  font-size: 15px;
  font-weight: 400;
  line-height: 27px;
`;
