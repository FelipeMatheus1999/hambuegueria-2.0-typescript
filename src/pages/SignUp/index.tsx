import { Container } from "./styles";
import { FiShoppingBag } from "react-icons/fi";
import ButtonGray from "../../components/ButtonGray";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import api from "../../services/api";
import { Link } from "react-router-dom";

interface UserData {
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

const SignUp = () => {
  const history = useHistory();

  const schema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().email().required("Email obrigatório"),
    password: yup.string().required("Senha obrigatória"),
    confirmPassword: yup.string().required("Confirme sua senha"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({ resolver: yupResolver(schema) });

  const signInFunction = (data: UserData) => {
    const newData = {
      name: data.name,
      email: data.email,
      password: data.password,
    };

    api
      .post("signup", newData)
      .then((res) => {
        history.push("/login");
      })
      .catch((error) => console.log(error));
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
      <form onSubmit={handleSubmit(signInFunction)}>
        <div className="spanHeader">
          <h2>Cadastro</h2>
          <Link to="/login">
            <span>Retornar para o login</span>
          </Link>
        </div>
        <main>
          <input type="text" placeholder="Nome" {...register("name")} />
          {errors.name?.message && <div className="error">{errors}</div>}
          <input type="email" placeholder="Email" {...register("email")} />
          {errors.email?.message && <div className="error">{errors}</div>}
          <input
            type="password"
            placeholder="Senha"
            {...register("password")}
          />
          {errors.password?.message && <div className="error">{errors}</div>}
          <input
            type="password"
            placeholder="Confirmação da senha"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword?.message && (
            <div className="error">{errors}</div>
          )}
        </main>
        <span className="spanForm">
          Crie sua conta para saborear muitas delícias e matar sua fome!
        </span>
        <ButtonGray type="submit">Cadastrar</ButtonGray>
      </form>
    </Container>
  );
};

export default SignUp;
