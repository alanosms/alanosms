import logo from "./assets/imgs/logo.png";
function Nav(){

    return(
        <nav>
          <img class="logo" alt="Logo" src={logo} />
          <a href="#sobremim">
            <i data-feather="user"></i>Sobre mim
          </a>
          <a href="#projetos">
            <i data-feather="briefcase"></i>Projetos
          </a>
          <a href="#contato">
            <i data-feather="mail"></i>Contato
          </a>
        </nav>

    )

}

export default Nav;