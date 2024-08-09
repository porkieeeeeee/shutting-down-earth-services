import styled from "@emotion/styled";
import bg from "@/assets/images/intro-bg.png";
import title from "@/assets/images/title.png";
import MenuButton from "@/components/main/MenuButton";

const MainPage = () => {
    return (
        <Container>
            <Wrapper>
                <Group>
                    <Title className='description-hidden'>지구 서버 서비스 종료의 날</Title>
                    <Box>
                        <MenuButton label='시작하기' />
                        <MenuButton label='설명' />
                        <MenuButton label='정보' />
                    </Box>
                </Group>
            </Wrapper>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    height: 100%;
    background: url(${bg}) bottom right / cover no-repeat;
`;

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 100px;
    background-color: rgba(0, 0, 0, 0.5);
`;

const Title = styled.h1`
    width: 400px;
    height: 140px;
    margin-bottom: 50px;
    background: url(${title}) center / cover no-repeat;
`;

const Group = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
    height: 100%;
    padding: 50px 20px;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.5);
    box-shadow: 0 0 30px 0 #0bacc980;
`;

const Box = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin: 0 auto;
`;

export default MainPage;
