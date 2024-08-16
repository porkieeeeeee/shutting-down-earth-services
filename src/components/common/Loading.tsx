import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const Loading = () => {
    return (
        <SvgContainer>
            <Svg viewBox='0 0 148 148' width='128px' height='128px'>
                <g fill='#000' filter='url(#shadow)' transform='translate(10, 10)'>
                    <Rect rx='8' ry='8' width='64' height='64' transform='translate(64, 0)' />
                    <RectGroup transform='scale(-1,-1)'>
                        <Rect rx='8' ry='8' width='64' height='64' transform='translate(64, 0)' />
                    </RectGroup>
                </g>
                <defs>
                    <filter id='shadow' x='-50%' y='-50%' width='200%' height='200%'>
                        <feDropShadow dx='0' dy='0' stdDeviation='3' floodColor='#0bacc950' />
                    </filter>
                </defs>
            </Svg>
        </SvgContainer>
    );
};

const pl3Animation = keyframes`
  from {
    transform: translate(64px, 0);
    width: 64px;
    height: 64px;
  }
  25% {
    transform: translate(0, 0);
    width: 128px;
    height: 32px;
  }
  50% {
    transform: translate(0, 0);
    width: 64px;
    height: 64px;
  }
  75% {
    transform: translate(0, 0);
    width: 32px;
    height: 128px;
  }
  to {
    transform: translate(0, 64px);
    width: 64px;
    height: 64px;
  }
`;

const SvgContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const Svg = styled.svg`
    display: block;
    width: 200px;
    height: 200px;
`;

const Rect = styled.rect`
    animation: ${pl3Animation} 1.5s cubic-bezier(0.65, 0, 0.35, 1) infinite;
`;

const RectGroup = styled.g`
    transform-origin: 64px 64px;
`;

export default Loading;
