// importando components do bootstrap
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBarra = () => {
  const usuarioNome = localStorage.getItem("userName");
  return (
    <div>
      <Navbar
        expand="lg"
        style={{ backgroundColor: "#B57170" }}
        data-bs-theme="dark"
      >
        <Container>
          {/* Icone mercado */}
    
          {/* Texto logo */}
          <Navbar.Brand href="/home" style={{fontFamily: "Monsieur La Doulaise", fontSize: "35px"}} >Doce Mel</Navbar.Brand>

          <Navbar.Toggle aria-controls="minha-nav" />
          <Navbar.Collapse id="minha-nav">
            {/* Paginas */}
            <Nav className="me-auto">
              <Nav.Link href="/home" className="active">
                Produtos
              </Nav.Link>
              <Nav.Link href="/produto/cadastrar">
                Cadastro de Produtos
              </Nav.Link>
              <Nav.Link href="/CadastrarUsuario">
              Cadastro de Usuário
              </Nav.Link>
            </Nav>
            {/* Sair */}
            <Nav className="justify-content-end">
              <Navbar.Text style={{ color: "white" }}>
                Usuário: {usuarioNome} |
              </Navbar.Text>
              <Nav.Link href="/login">Sair</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBarra;
