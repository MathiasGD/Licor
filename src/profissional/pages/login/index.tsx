import { useNavigate } from "react-router-dom";
import {
  TipoUsuario,
  useCadastrarUsuario,
  useLogin,
} from "../../../services/geral";
import { useState } from "react";
import logo from "../../../assets/logo-licor.svg";
import { TextField, Button } from "@mui/material";
import Modal from "../../components/modal";

const Login = () => {
  const navigate = useNavigate();
  const loginMutation = useLogin();
  const cadastrarUsuarioMutation = useCadastrarUsuario();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const [openModalCadastro, setOpenModalCadastro] = useState(false);
  const [nomeCadastro, setNomeCadastro] = useState("");
  const [emailCadastro, setEmailCadastro] = useState("");
  const [senhaCadastro, setSenhaCadastro] = useState("");
  const [tipoUsuario, setTipoUsuario] = useState<TipoUsuario>(
    TipoUsuario.PROFISSIONAL
  );
  const [erroCadastro, setErroCadastro] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro("");

    if (!email || !senha) {
      setErro("Por favor, preencha todos os campos");
      return;
    }

    try {
      const response = await loginMutation.mutateAsync({ email, senha });
      if (response) {
        navigate("/profissional/menu");
      }
    } catch (error) {
      setErro("Email ou senha incorretos");
      console.error(error);
    }
  };

  const handleCadastro = async () => {
    setErroCadastro("");

    if (!nomeCadastro || !emailCadastro || !senhaCadastro) {
      setErroCadastro("Por favor, preencha todos os campos");
      return;
    }

    try {
      await cadastrarUsuarioMutation.mutateAsync({
        nome: nomeCadastro,
        email: emailCadastro,
        senha: senhaCadastro,
        tipoUsuario: tipoUsuario,
      });
      setOpenModalCadastro(false);
      // Limpar campos após cadastro bem-sucedido
      setNomeCadastro("");
      setEmailCadastro("");
      setSenhaCadastro("");
      setTipoUsuario(TipoUsuario.PROFISSIONAL);
    } catch (error) {
      setErroCadastro("Erro ao cadastrar usuário. Tente novamente.");
      console.error(error);
    }
  };

  return (
    <div className="flex items-center justify-center bg-linear-to-b from-branco to-branco-escuro absolute inset-0">
      <div className="flex flex-col items-center gap-9 w-full max-w-md">
        <div className="flex flex-col items-center gap-4">
          <img src={logo} alt="Logo" className="w-16 h-16" />
          <h1 className="text-roxo font-parisienne">Login</h1>
          <div className="w-28 h-px bg-roxo" />
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-4 w-full">
          <TextField
            fullWidth
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <TextField
            fullWidth
            placeholder="Senha"
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          {erro && <p className="text-sm text-red-600 text-center">{erro}</p>}

          <div className="flex flex-col gap-2">
            <Button
              variant="contained"
              type="submit"
              fullWidth
              disableElevation
              disabled={loginMutation.isPending}
            >
              {loginMutation.isPending ? "Entrando..." : "Entrar"}
            </Button>
            <Button
              variant="outlined"
              fullWidth
              disableElevation
              onClick={() => setOpenModalCadastro(true)}
              disabled={loginMutation.isPending}
            >
              Criar conta
            </Button>
          </div>
        </form>
      </div>

      <Modal isOpen={openModalCadastro}>
        <div className="flex flex-col justify-between gap-3 min-h-full">
          <div className="flex flex-col gap-3">
            <p className="text-xl font-medium text-roxo-escuro self-center">
              Cadastrar Usuário
            </p>

            <TextField
              fullWidth
              placeholder="Nome"
              value={nomeCadastro}
              onChange={(e) => setNomeCadastro(e.target.value)}
            />

            <div className="w-full h-px bg-branco-muito-escuro" />

            <TextField
              fullWidth
              placeholder="Email"
              type="email"
              value={emailCadastro}
              onChange={(e) => setEmailCadastro(e.target.value)}
            />

            <div className="w-full h-px bg-branco-muito-escuro" />

            <TextField
              fullWidth
              placeholder="Senha"
              type="password"
              value={senhaCadastro}
              onChange={(e) => setSenhaCadastro(e.target.value)}
            />

            {erroCadastro && (
              <p className="text-sm text-red-600 text-center">{erroCadastro}</p>
            )}
          </div>

          <div className="flex flex-col gap-2 w-full">
            <Button
              variant="outlined"
              disableElevation
              disabled={cadastrarUsuarioMutation.isPending}
              onClick={() => {
                setOpenModalCadastro(false);
                setErroCadastro("");
                setNomeCadastro("");
                setEmailCadastro("");
                setSenhaCadastro("");
              }}
            >
              Cancelar
            </Button>
            <Button
              variant="contained"
              disableElevation
              onClick={handleCadastro}
              disabled={cadastrarUsuarioMutation.isPending}
            >
              {cadastrarUsuarioMutation.isPending
                ? "Cadastrando..."
                : "Cadastrar"}
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Login;
