import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import LandingBackground from '../../img/Landing/LandingBackground.svg';
import BoxBackgroundImg from '../../img/Landing/BoxBackgroundImg.png';
import SelectIcon from '../../img/Landing/SelectIcon.svg';
import HeartIcon from '../../img/Landing/HeartIcon.svg';
import HeartClickIcon from '../../img/Landing/Heart_Click.png';
import Theme from '../../styles/Theme';

const LandingPage1 = () => {
  const navigate = useNavigate();
  const [isHeartClicked, setIsHeartClicked] = useState(false);

  const handleHeartClick = () => {
    setIsHeartClicked(!isHeartClicked);
  };

  return (
    <Container>
      <BackgroundImage src={LandingBackground} alt='Landing Background' />

      <MainContent>
        <Title>
          오직 나만의! 나를 위한! <br />
          <HighlightText>패션 브랜드 대여 플랫폼</HighlightText>
        </Title>
        <Box>
          <BoxImage src={BoxBackgroundImg} alt='Landing Background' />
          <ButtonContainer>
            {/* <StartButton onClick={() => navigate('/LandingDetail')}>
              지금 시작하기
            </StartButton> */}
            <StartButton>지금 시작하기</StartButton>
            <IconContainer>
              <StyledIcon src={SelectIcon} alt='Select Icon' />
              <HeartIconWrapper onClick={handleHeartClick}>
                <StyledIcon src={HeartIcon} alt='Heart Icon' />
                {isHeartClicked && (
                  <StyledOverlayIcon
                    src={HeartClickIcon}
                    alt='Heart Click Icon'
                  />
                )}
              </HeartIconWrapper>
            </IconContainer>
          </ButtonContainer>
        </Box>
        <Subtitle>아직도 체험단, 기자단하시나요?</Subtitle>
        <Description>
          melpik과 함께 수익과 팔로워 <br />
          모두 GET하는 인플루언서로 성장하세요
        </Description>
      </MainContent>
    </Container>
  );
};

export default LandingPage1;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 2rem;
  padding-top: 80px;
  background-color: transparent;
  min-height: 857px;
  max-width: 600px;
  margin: 0 auto;
`;

const Logo = styled.img`
  width: 83px;
  height: 35px;
  margin-left: 29px;
`;

const RegisterButton = styled.button`
  padding: 10px 15px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  margin-right: 29px;
  cursor: pointer;
  font-family: 'NanumSquare Neo OTF';
  font-weight: 700;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.black};
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.yellow};
    color: white;
  }
`;

const MainContent = styled.div`
  text-align: center;
  max-width: 50rem;
`;

const Title = styled.h1`
  font-family: 'NanumSquare Neo OTF';
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 50px;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
  margin-top: 28px;
`;

const HighlightText = styled.span`
  font-family: 'NanumSquare Neo OTF';
  font-style: normal;
  font-weight: 800;
  font-size: 30px;
  line-height: 50px;
  text-align: center;
  color: #000000;
`;

const Box = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 405px;
  border-radius: 30px;
  margin-top: 16px;
`;

const BoxImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 30px;
  z-index: -1;
`;

const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  filter: blur(2px);
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 18px;
  width: 100%;
  gap: 20px;
`;

const StartButton = styled.button`
  width: 175px;
  height: 45px;
  background-color: ${({ theme }) => theme.colors.yellow};
  color: white;
  border: none;
  border-radius: 30px;
  font-family: 'NanumSquare Neo OTF';
  font-style: normal;
  font-weight: 800;
  font-size: 15px;
  line-height: 17px;
  text-align: center;
  color: #ffffff;

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkYellow};
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
`;

const HeartIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-left: 8px;
  cursor: pointer;
`;

const StyledIcon = styled.img`
  width: 27px;
  height: 24px;
`;

const StyledOverlayIcon = styled.img`
  position: absolute;
  width: 61px;
  height: 75px;
  pointer-events: none;
  top: -82px;
  right: -15px;
`;

const Subtitle = styled.h2`
  color: ${({ theme }) => theme.colors.black};
  font-family: 'NanumSquare Neo OTF';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  margin-top: 25px;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.black};
  font-family: 'NanumSquare Neo OTF';
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 30px;
  text-align: center;
  margin-top: 11px;
`;
