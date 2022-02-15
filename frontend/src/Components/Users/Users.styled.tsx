import styled, { keyframes } from 'styled-components';

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }

`;
const Temp = styled.div<{ isShow: boolean }>`
  position: fixed;
  bottom: 72px;
  right: 16px;
  display: flex;
  align-items: end;
  flex-direction: column-reverse;
`;

const DialButton = styled.button<{ isShow: boolean }>`
  z-index: 300;
  position: fixed;
  bottom: 16px;
  right: 16px;
  width: 56px;
  height: 56px;
  background: #f995f0b8;
  border-radius: 50%;
  border: 0px solid black;
  ${(props) => {
    if (!props.isShow)
      return `
        box-shadow: inset 1px -8px 10px -3px #ffb6f8b8,
        inset -1px -4px 2px 0px #5c0e55a8;
        transition: box-shadow 500ms ease-in-out 0ms;
    `;
    else
      return `
        box-shadow: inset 1px 8px 10px -5px #ffb6f8b8,
        inset -1px 4px 2px 0px #5c0e55a8;
        transition: box-shadow 500ms ease-in-out 0ms;
      `;
  }};

  .buttonGuide {
    font-family: 'Nanum Pen Script', cursive;
    font-size: 1.5rem;
    width: 200px;
    right: 64px;
    transform: translateY(10px);
    position: absolute;
    animation: ${fadeOut} 1s ease-out 1s;
    animation-fill-mode: forwards;
  }
  .hide {
    display: none;
  }
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
  max-height: 80vh;

  display: -webkit-flex;
  position: -webkit-relative;
  -webkit-flex-direction: column-reverse;
  -webkit-align-items: flex-end;
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
  .guide {
    background: transparent;
    border: 0px;
    box-shadow: 0px 0px 0px;
    font-family: 'Nanum Pen Script', cursive;
    color: white;
    font-size: 1.3rem;
    padding: 0;
    .rev {
      transform: scaleX(-1) scaleY(1);
    }
  }
  .del {
    animation: ${fadeOut} ease-out 2s 1s;
    animation-fill-mode: forwards;
  }
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

const DialRowProfile = styled.button<{ isShow: boolean; bgcolor: string }>`
  width: 40px;
  height: 40px;
  margin: 4px;
  border-radius: 30px;
  border: 0;
  padding: 0;
  background: ${(props) => `${props.bgcolor || '#000000'}aa`};
  box-shadow: ${(props) => `inset 1px -8px 10px -3px ${
    props.bgcolor || '#000000'
  }d8,
    inset -1px -4px 2px 0px #000000c8`};

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

const SelectedUserSpan = styled.span<{
  bgcolor: string;
  isShowSwitch: boolean;
}>`
  position: fixed;
  height: calc(24px - 0.2rem);
  margin: 16px 0;
  bottom: 56px;
  left: 50%;
  transform: translateX(-50%);
  background: ${(props) => `${props.bgcolor || '#000000'}99`};
  color: white;
  border-radius: 50px;
  font-size: 0.8rem;
  padding: 0.1rem 0.7rem;
  box-shadow: ${(props) => `inset 1px 8px 10px -5px ${
    props.bgcolor || '#000000'
  }b8,
    inset -1px 4px 2px 0px ${props.bgcolor || '#000000'}a8`};
  ${(props) => {
    if (!props.isShowSwitch)
      return `
            opacity: 0;
            transition: opacity 200ms ease-in-out 0ms;
          `;
    else
      return `
            opacity: 1;
            transition: opacity 200ms ease-in-out 0ms;
            `;
  }};
`;

const Styled = {
  Temp,
  SelectedUserSpan,
  DialBox,
  DialRow,
  DialButton,
  DialRowName,
  DialRowDelButton,
  DialRowProfile,
};

export default Styled;
