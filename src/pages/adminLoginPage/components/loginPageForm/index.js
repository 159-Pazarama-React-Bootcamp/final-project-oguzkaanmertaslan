import React, { useState, useCallback, useEffect } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { getUser } from "../../../../services";
import "./style.css";

const LoginPageForm = () => {
  const [login, setLogin] = useState({});

  const history = useHistory();

  const getTickets = useCallback(async () => {
    const data = await getUser();
    setLogin(data);
  }, []);

  useEffect(() => {
    getTickets();
  }, [getTickets]);

  const validateSheme = Yup.object({
    username: Yup.string().required("Zorunlu Alan"),
    password: Yup.string().required("Zorunlu Alan"),
  });

  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      validateSheme={validateSheme}
      onSubmit={(values) => {
        const isLoggedIn = login.find(
          (item) =>
            item.username === values.username &&
            item.password === values.password
        );
        
        if (isLoggedIn) {
          history.push("/basvuru-listesi");
        } else {
          console.log("giriş başarısız");
        }
      }}
    >
      {({ handleSubmit, handleChange, values, errors }) => (
        <div className="admin-page-area">
          <div className="admin-page-title">
            <h1>Sisteme Giriş Yapın</h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              {errors.username ? errors.username : null}
              <input
                type="text"
                name="username"
                placeholder="Kullanıcı Adı"
                onChange={handleChange}
                value={values.username}
              />
              {errors.surname ? errors.password : null}

              <input
                type="password"
                name="password"
                placeholder="Şifre"
                onChange={handleChange}
                value={values.password}
              />
              <div className="buton1">
                <button className="buttons1" type="submit">
                  Giriş Yap
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </Formik>
  );
};

export default LoginPageForm;
