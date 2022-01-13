import styled from 'styled-components';

const Temp = styled.div<{ isShow: boolean }>`
  position: fixed;
  bottom: 72px;
  right: 16px;
  display: flex;
  align-items: end;
  flex-direction: column-reverse;
`;

const DialButton = styled.button`
  position: fixed;
  bottom: 16px;
  right: 16px;
  width: 56px;
  height: 56px;
  background: #f995f0;
  border-radius: 50%;
  border: 0px solid black;
  box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%),
    0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%);
`;

const DialBox = styled.div<{ isShow: boolean }>`
  position: relative;
  display: flex;
  align-items: end;
  transition: top 0s linear 0.2s;
  flex-direction: column-reverse;
  margin-bottom: 16px;
  overflow: hidden scroll;
  scroll-behavior: smooth;
  max-height: 504px;
  width: calc(100% + 40px);
  ::-webkit-scrollbar {
    display: none;
  }
`;

const DialRowDelButton = styled.div`
  width: 40px;
  height: 40px;
  margin: 4px;
  position: fixed;
  left: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  transform: scale(1.1);
`;

const DialRow = styled.span<{ isSwipe: boolean; willDelete: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  overflow: visible;
  margin-right: 4px;
  ${(props) => {
    if (props.isSwipe)
      return `
      transition: transform 300ms ease-in-out 0ms;
      transform: translateX(-40px);
    `;
    else
      return `
      transition: transform 200ms ease-in-out 0ms;
      `;
  }};
  ${(props) => {
    if (props.willDelete) {
      return `
      transition: transform 300ms ease-in 0ms, opacity 300ms ease-in 0ms;
      transform: translateX(-56px);
      opacity: 0;
      `;
    } else {
      return `
      `;
    }
  }};
`;

const DialRowName = styled.span<{ isShow: boolean }>`
  position: relative;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5;
  letter-spacing: 0.00938em;
  background-color: #dadada;
  border-radius: 9px;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
  color: rgba(0, 0, 0, 0.6);
  padding: 3px 12px;
  word-break: keep-all;
  transform-origin: 100% 50%;
  overflow: visible;
  ${(props) => {
    if (props.isShow)
      return `
      transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      opacity: 1;
      transform-origin: 100% 50%;
      margin-right: 8px;
    `;
    else
      return `
      transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,opacity 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      transform: scale(0.5);
      transform-origin: 100% 50%;
      margin-right: 8px;
      opacity: 0;`;
  }};
`;

const DialRowProfile = styled.button<{ isShow: boolean }>`
  width: 40px;
  height: 40px;
  margin: 4px;
  border-radius: 30px;
  border: 0;
  background: ${(props) => props.color || 'white'};
  box-shadow: 0px 3px 5px -1px rgb(0 0 0 / 20%),
    0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%);
  ${(props) => {
    if (props.isShow)
      return `
      transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,opacity 0.8s;
      opacity: 1;
    `;
    else
      return `
      transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,opacity 0.8s;
      transform: scale(0);
      opacity: 0;`;
  }};
`;

const Styled = {
  Temp,
  DialBox,
  DialRow,
  DialButton,
  DialRowName,
  DialRowDelButton,
  DialRowProfile,
};

export default Styled;
