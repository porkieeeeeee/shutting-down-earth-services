import styled from "@emotion/styled";

interface IMenuButtonProps {
    label: string;
    onClick?: () => void;
}

const MenuButton = ({ label, onClick }: IMenuButtonProps) => {
    return (
        <Container type='button' onClick={onClick}>
            {label}
        </Container>
    );
};

const Container = styled.button`
    width: 350px;
    height: 58px;
    border-radius: 6px;
    background-color: rgba(0, 0, 0, 0.8);
    box-shadow: 0 0 6px 0 #0bacc950;
    color: #fff;
    font-size: 20px;
    font-weight: 500;
    line-height: 50px;

    :hover {
        box-shadow: 0 0 30px 0 #0bacc990;
    }

    :focus {
        outline: none;
        box-shadow: 0 0 30px 0 #0bacc990;
    }
`;

export default MenuButton;
