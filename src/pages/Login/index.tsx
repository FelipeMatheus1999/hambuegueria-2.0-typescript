import { Container } from "./styles";
import { FiShoppingBag } from "react-icons/fi";
import ButtonGreen from "../../components/ButtonGreen";
import ButtonGray from "../../components/ButtonGray";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import api from "../../services/api";
import { useAuth } from "../../providers/Auth";

interface UserData {
  email: string;
  password: string;
}

const Login = () => {
  const { setToken } = useAuth();
  const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().email().required("Email obrigatório"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const LoginFunction = (data: UserData) => {
    api
      .post("signin", data)
      .then((res) => {
        setToken(res.data.accessToken);
        localStorage.setItem(
          "@token:hamburgueria",
          JSON.stringify(res.data.accessToken)
        );
        history.push("/");
      })
      .catch((error) => console.log(error));
  };

  const signInFunction = () => {
    history.push("/signup");
  };

  return (
    <Container>
      <header>
        <div className="title">
          <h1>Burguer</h1> <h2>kenzie</h2>
        </div>
        <div className="title__sub">
          <div className="divIcon">
            <FiShoppingBag color="green" />
          </div>
          <div className="title__sub__text">
            A vida é como um sanduíche, é preciso recheá-la com os{" "}
            <b>melhores</b> ingredientes.
          </div>
        </div>
      </header>
      <form onSubmit={handleSubmit(LoginFunction)}>
        <h2>Login</h2>
        <main>
          <input type="email" placeholder="Email" {...register("email")} />
          {errors.email?.message && <div className="error">{errors}</div>}
          <input
            type="password"
            placeholder="Senha"
            {...register("password")}
          />
          {errors.password?.message && <div className="error">{errors}</div>}
        </main>
        <ButtonGreen type="submit">Entrar</ButtonGreen>
        <span>
          Crie sua conta para saborear muitas delícias e matar sua fome!
        </span>
        <ButtonGray onClick={signInFunction}>Cadastro</ButtonGray>
      </form>
    </Container>
  );
};

export default Login;
