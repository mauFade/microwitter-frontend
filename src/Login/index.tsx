import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";

interface ISignIn {
  SignInUser: any;
}

const validationSchema = yup.object({
  email: yup.string().required("Digite seu email!").email("E-mail inválido"),
  password: yup.string().required("Digite sua senha!"),
});

const Login = (Props: ISignIn) => {
  const formik = useFormik({
    onSubmit: async (values: any) => {
      const response: any = await axios.post("http://localhost:3003/login", {
        email: values.email,
        password: values.password,
      });

      Props.SignInUser(response.data);
    },
    validationSchema,
    validateOnMount: true,
    initialValues: {
      email: "",
      password: "",
    },
  });

  return (
    <div className="h-full flex justify-center">
      <div className="bg-tweetblue-500 lg:flex-1"></div>
      <div className="flex-1 flex p-12 items-center justify-center">
        <div className="max-w-md flex-1 space-y-6">
          <h1 className="text-3xl font-bold">Acesse sua conta</h1>

          <form className="space-y-6" onSubmit={formik.handleSubmit}>
            <div className="space-y-2">
              <input
                name="email"
                type="email"
                className="w-full bg-transparent p-4 rounded-xl border border-onix-500 text-lg outline-none focus:border-platinum-500"
                placeholder="E-mail"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                disabled={formik.isSubmitting}
              />

              {formik.touched.email && formik.errors.email && (
                <div className="text-red-600 text-sm">{formik.errors.email}</div>
              )}
            </div>

            <div className="space-y-2">
              <input
                name="password"
                type="password"
                className="w-full bg-transparent p-4 rounded-xl border border-onix-500 text-lg outline-none focus:border-platinum-500"
                placeholder="Senha"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                disabled={formik.isSubmitting}
              />

              {formik.touched.password && formik.errors.password && (
                <div className="text-red-600 text-sm">{formik.errors.password}</div>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-tweetblue-500 text-platinum-500 py-4 rounded-full text-lg disabled:opacity-50"
              disabled={!formik.isValid || formik.isSubmitting}
            >
              {formik.isSubmitting ? "Entrando..." : "Entrar"}
            </button>
          </form>

          <span className="text-sm text-silver-500 text-center">
            Não tem conta?{" "}
            <a className="text-tweetblue-500" href="/register">
              Inscreva-se
            </a>
          </span>

          <footer className="text-xs text-silver-500 text-center">
            Feito com 💜 por{" "}
            <a
              className="text-tweetblue-500"
              href="https://www.linkedin.com/in/mauricio-cardoso-2283541a4/"
              target="_blank"
            >
              Mauricio Cardoso
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Login;
