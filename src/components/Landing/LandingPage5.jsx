import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import LastImg from '../../img/Landing/LastImg.png';
import FirstImg from '../../img/Landing/LastbackgroundImg.svg';
import Theme from '../../styles/Theme';

const LandingPage5 = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/LandingDetail');
  };

  return (
    <Container>
      <FirstImage src={FirstImg} alt='FirstImage page background' />
      <LandingTitle4>
        현재 <Yellow>N명</Yellow>의 인플루언서들이 <br /> melpik을 신청했어요!
      </LandingTitle4>
      <ButtonWrapper>
        <MelpikStartButton>melpik 시작하기</MelpikStartButton>
      </ButtonWrapper>
      <LandingSubtitle4>
        사전예약 마감까지 <BoldText>N일 00:00</BoldText> 시간 남았어요!
      </LandingSubtitle4>
      <LastImage src={LastImg} alt='Last page background' />
      <Footer>
        <FooterContent>
          <Line>
            <FooterItem>
              <FooterLabel>상호</FooterLabel>
              <FooterSpan>멜픽(melpik)</FooterSpan>
            </FooterItem>
            <FooterItem>
              <FooterLabel>대표</FooterLabel>
              <FooterSpan>장용호</FooterSpan>
            </FooterItem>
            <FooterItem>
              <FooterLabel>개인정보책임자</FooterLabel>
              <FooterSpan>황민서</FooterSpan>
            </FooterItem>
          </Line>

          <Line>
            <FooterItem>
              <FooterLabel>소재지</FooterLabel>
              <FooterSpan>
                서울시 금천구 디지털로9길 41, 1008호 (삼성IT해링턴타워)
              </FooterSpan>
            </FooterItem>
          </Line>

          <Line>
            <FooterItem>
              <FooterLabel>이메일</FooterLabel>
              <FooterSpan> liftcomma@gmail.com </FooterSpan>
            </FooterItem>
          </Line>
        </FooterContent>
      </Footer>
    </Container>
  );
};

export default LandingPage5;

// 스타일 컴포넌트 정의
const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 60px 20px;
  background-color: ${(props) => props.bgColor || 'transparent'};
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  min-height: calc(100vh - 100px); /* Footer height adjusted */
  max-width: 600px;
  margin: 0 auto;
  padding-bottom: 100px; /* Adjust padding for footer spacing */
`;

const LandingTitle4 = styled.h1`
  font-family: 'NanumSquare Neo OTF';
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 30px;
  text-align: center;
  margin-top: 50px;
  opacity: 0.9;
  color: ${({ theme }) => theme.colors.black};
`;

const Yellow = styled.span`
  color: ${({ theme }) => theme.colors.yellow};
  font-family: 'NanumSquare Neo OTF', sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
`;

const ButtonWrapper = styled.div`
  margin-top: 33px;
  margin-bottom: 9px;
`;

const MelpikStartButton = styled.button`
  width: 300px;
  height: 45px;
  background-color: ${({ theme }) => theme.colors.yellow};
  color: white;
  border: none;
  border-radius: 30px;
  font-family: 'NanumSquare Neo OTF', sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 17px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkYellow};
  }
`;

const LandingSubtitle4 = styled.h2`
  font-family: 'NanumSquare Neo OTF', sans-serif;
  font-size: 15px;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 40px;
`;

const BoldText = styled.span`
  font-weight: 800;
  color: ${({ theme }) => theme.colors.black};
`;

const FirstImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  object-fit: cover;
  z-index: -1;
`;

const LastImage = styled.img`
  width: 100%;
  margin-top: auto;
  object-fit: cover;
  height: auto;
`;

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #ffffff;
  text-align: left;
  padding: 28px 0;
  font-family: 'NanumSquare Neo OTF', sans-serif;
  font-size: 14px;
  border-top: 1px solid ${({ theme }) => theme.colors.gray4};
  margin-bottom: 10px;
`;

const FooterContent = styled.div`
  width: 100%;
  padding: 0 20px;
`;

const Line = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3px;
  flex-wrap: nowrap;
`;

const FooterItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3px;
  flex: 1;
  min-width: 100px;
`;

const FooterLabel = styled.label`
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 18px;
  color: #000000;
  margin-right: 10px;
`;

const FooterSpan = styled.span`
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 18px;
  color: #000000;
`;
