// Add Navbar and Footer

import styled from "styled-components"

import { mobile } from "../responsive"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), 
    url("https://cdn.pixabay.com/photo/2020/12/27/14/37/woman-5864279_960_720.jpg") center;
    background-size: cover;

    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background-color: white;

    ${mobile({width: '70%'})};

`
const Title = styled.h1`
    font-size: 30px;
    font-weight: 400;
    align-items: center;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
`
const LinkContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Link1 = styled.a`
    margin: 5px 0px;
    font-size: 10px;
    text-decoration: underline;
    cursor: pointer;
`

const Link2 = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`

const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                    <Input placeholder="username"/>
                    <Input placeholder="password"/>
                    <ButtonContainer>
                    <Button>LOGIN</Button>
                    </ButtonContainer>
                    <LinkContainer>
                    <Link1>Forgotten Your Password?</Link1>
                    <Link2>CREATE A NEW ACCOUNT</Link2>
                    </LinkContainer>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login
