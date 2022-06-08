import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";

interface IsignUp {
  SignUpUser: any;
}

const validationSchema = yup.object({
  name: yup.string().required("Digite seu nome"),
  email: yup.string().required("Digite seu email").email("E-mail inválido!"),
  username: yup.string().required("Digite seu nome de usuário"),
  password: yup.string().required("Digite sua senha"),
});

const SignUp = (Props: IsignUp) => {
  const formik = useFormik({
    onSubmit: async (values: any) => {
      const response: any = await axios.post("http://localhost:3003/user", {
        name: values.name,
        email: values.email,
        username: values.username,
        password: values.password,
      });

      Props.SignUpUser(response.data);
    },
    validationSchema,
    validateOnMount: true,
    initialValues: {
      name: "",
      email: "",
      username: "",
      password: "",
    },
  });

  return (
    <div className="h-full flex flex-col p-12 justify-center space-y-6">
      <h1 className="text-center text-lg font-bold">Registre seu usuário</h1>

      <form className="flex flex-col space-y-6" onSubmit={formik.handleSubmit}>
        <div className="space-y-2">
          <input
            name="name"
            type="text"
            className="w-full bg-transparent p-4 rounded-xl border border-onix-500 text-lg outline-none focus:border-platinum-500"
            placeholder="Nome"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={formik.isSubmitting}
          />

          {formik.touched.name && formik.errors.name && (
            <div className="text-red-600 text-sm">{formik.errors.name}</div>
          )}
        </div>

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
            name="username"
            type="text"
            className="w-full bg-transparent p-4 rounded-xl border border-onix-500 text-lg outline-none focus:border-platinum-500"
            placeholder="Nome de usuário"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            disabled={formik.isSubmitting}
          />

          {formik.touched.username && formik.errors.username && (
            <div className="text-red-600 text-sm">{formik.errors.username}</div>
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
          {formik.isSubmitting ? "Enviando dados..." : "Enviar"}
        </button>
      </form>

      <span className="text-sm text-silver-500 text-center">
        Já tem uma conta?{" "}
        <a className="text-tweetblue-500" href="/login">
          Acesse
        </a>
      </span>
    </div>
  );
};

export default SignUp;
