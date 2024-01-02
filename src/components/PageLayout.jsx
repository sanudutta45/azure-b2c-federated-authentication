import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal,
} from "@azure/msal-react"
import { Button, Container } from "react-bootstrap"

export const PageLayout = (props) => {
  const { instance } = useMsal()
  const handleLogin = async () => {
    const loginResponse = await instance.loginPopup({})
  }
  return (
    <>
      <br />
      <h5>
        <center>
          Welcome to the Microsoft Authentication Library For React Tutorial
        </center>
      </h5>
      <br />
      {props.children}
      <br />
      <UnauthenticatedTemplate>
        <Container>
          <div className='d-flex justify-content-center align-items-center'>
            <Button onClick={handleLogin}>Login</Button>
          </div>
        </Container>
      </UnauthenticatedTemplate>
      <br />
      <AuthenticatedTemplate>
        <footer>
          <center>
            How did we do?
            <a
              href='https://forms.office.com/Pages/ResponsePage.aspx?id=v4j5cvGGr0GRqy180BHbR73pcsbpbxNJuZCMKN0lURpUMlRHSkc5U1NLUkxFNEtVN0dEOTFNQkdTWiQlQCN0PWcu'
              target='_blank'
              rel='noreferrer'
            >
              {" "}
              Share your experience!
            </a>
          </center>
        </footer>
      </AuthenticatedTemplate>
    </>
  )
}
