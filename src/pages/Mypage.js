import styled from "styled-components";

const Container = styled.div`
  padding-top: 80px;
  margin: 0 auto;
  background-color: #f2f2f2;
`;
const Section = styled.section`
  max-width: 1200px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0px 15px;
  }
`;
const FormColumn = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    &:last-child {
      align-items: flex-end;
    }
  }
  &:last-child {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
  }
`;
const SectionColumn = styled.div`
  max-width: 500px;
  width: 100%;
  background-color: white;
  border: 1px solid rgb(238, 239, 240);
  padding: 20px;
  border-radius: 5px;
`;
const Title = styled.h1`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;
const Form = styled.form``;
const InputColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 10px;
`;
const Label = styled.label`
  font-weight: bold;
`;
const Input = styled.input`
  all: unset;
  border: 1px solid rgb(209, 213, 218);
  padding: 8px;
  border-radius: 5px;
`;
const Button = styled.button`
  all: unset;
  padding: 10px 20px;
  background-color: #d5c4ff;
  border-radius: 3px;
  cursor: grab;
  font-weight: bold;
  text-align: center;
  max-width: 100px;
`;

const Mypage = () => (
  <Container>
    <Section>
      <Title>유저 정보</Title>
      <SectionColumn>
        <Form>
          <FormColumn>
            <InputColumn>
              <Label htmlFor='nickname'>닉네임</Label>
              <Input id='nickname' />
            </InputColumn>
            <InputColumn>
              <Label htmlFor='birth'>생년월일</Label>
              <Input id='birth' />
            </InputColumn>
            <InputColumn>
              <Label htmlFor='mbti'>MBTI</Label>
              <Input id='mbti' />
            </InputColumn>
            <InputColumn>
              <Label htmlFor='gender'>성별</Label>
              <Input id='gender' />
            </InputColumn>
            <InputColumn>
              <Label htmlFor='location'>지역</Label>
              <Input id='location' />
            </InputColumn>
            <InputColumn>
              <Label htmlFor='location'>나의 한마디</Label>
              <Input id='location' />
            </InputColumn>
          </FormColumn>
          <FormColumn>
            <Button>수정</Button>
          </FormColumn>
        </Form>
      </SectionColumn>
    </Section>
  </Container>
);

export default Mypage;
