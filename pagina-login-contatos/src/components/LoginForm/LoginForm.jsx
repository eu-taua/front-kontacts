import { Button, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import useData from "../../hooks/useData";
import "./styles.css";

export default function LoginForm() {
  const history = useHistory();
  const {
    handleLogin,
    dadosLogin,
    setDadosLogin,
    userLogin,
    usuarioLogado,
    setUsuarioLogado,
  } = useData();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  useEffect(async () => {
    dadosLogin &&
      dadosLogin.email &&
      setUsuarioLogado(await userLogin(dadosLogin));
  }, [dadosLogin]);

  useEffect(() => {
    usuarioLogado && usuarioLogado.usuario && history.push("/contatos");
  }, [usuarioLogado]);

  return (
    <div className="container-form">
      <div className="login">
        <h5>Bem Vindo</h5>
        <h1>Faça login com sua conta</h1>
        <TextField
          id="filled-basic"
          label="Email"
          variant="outlined"
          required
          type={"email"}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <TextField
          id="filled-basic"
          label="Senha"
          variant="outlined"
          required
          type={"password"}
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <Button
          variant="contained"
          onClick={() => setDadosLogin(handleLogin(email, senha))}
          style={{ backgroundColor: "#04C45C " }}
        >
          Login
        </Button>
      </div>
      <div className="redirect-register">
        <span>Não tem cadastro? </span>
        <a href="" onClick={() => history.push("/cadastrar")}>
          Clique Aqui
        </a>
      </div>
    </div>
  );
}