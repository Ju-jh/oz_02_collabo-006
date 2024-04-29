import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import LoginAndTermsModal from 'components/modal/LoginAndTermsModal';

const LoginContainer = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

const ProfileImage = styled.img``;

const LoginTextWrap = styled.div`
  margin-left: 12px;
`;

const LoginText = styled.div`
  font-size: 16px;
  color: #141217;
`;

const AdditionalText = styled.div`
  font-size: 14px;
  color: #756982;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover {
    ${LoginText}, ${AdditionalText} {
      color: #b98ce0;
    }
  }
`;

const LoginWrap = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  // 모달을 열기
  const openModal = () => {
    setIsModalVisible(true);
  };

  // 모달을 닫기
  const closeModal = () => {
    setIsModalVisible(false);
  };
  return (
    <LoginContainer>
      <ProfileImage src="/profile.png" alt="프로필" />
      <LoginTextWrap>
        <StyledLink to="" className="login" onClick={openModal}>
          <LoginText>로그인하기</LoginText>
          <AdditionalText>로그인하기를 눌러 회원가입 및 로그인</AdditionalText>
        </StyledLink>
      </LoginTextWrap>
      {/* isModalVisible 상태가 true일 때 LoginModal 컴포넌트를 렌더링. */}
      {isModalVisible && <LoginAndTermsModal onClose={closeModal} />}
    </LoginContainer>
  );
};

export default LoginWrap;