import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from "react-redux";
import { createTicket } from "../../../../services";
import { saveUserTicket } from "../../../../redux/features/userTicketSlice";
import "./style.css";

const Form = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  
  const [ticketNumber] = useState(
    `TCKT-${Math.floor(Math.random() * 90000) + 10000}`
  );

  const validateSheme = Yup.object({
    name: Yup.string()
      .min(3, "must be at least 3 characters long")
      .required("Zorunlu Alan"),
    surname: Yup.string().required("Zorunlu Alan"),
    age: Yup.number().required("Zorunlu Alan"),
    tc: Yup.number().required("Zorunlu Alan"),
    problem: Yup.string().required("Zorunlu Alan"),
    adress: Yup.string().required("Zorunlu Alan"),
  });

  return (
    <Formik
      initialValues={{
        name: "",
        surname: "",
        age: "",
        tc: "",
        problem: "",
        address: "",
        status: "Bekliyor",
        code: ticketNumber,
      }}
      validateSheme={validateSheme}
      onSubmit={(values) => {
        createTicket(values);
        dispatch(
          saveUserTicket({
            item: values,
          })
        );
        history.push("/basvuru-basarili");
      }}
    >
      {({ handleSubmit, handleChange, values, errors }) => (
        <div className="form-page">
          <div className="form-area-title">
            <h1>Başvuru Süreci Başlatın</h1>
          </div>
          <form className="form-area" onSubmit={handleSubmit}>
            <div className="form-left">
              {errors.name ? errors.name : null}
              <input
                type="text"
                name="name"
                placeholder="Adınız"
                onChange={handleChange}
                value={values.name}
              />
              {errors.surname ? errors.surname : null}

              <input
                type="text"
                name="surname"
                placeholder="Soyadınız"
                onChange={handleChange}
                value={values.surname}
              />
              {errors.age ? errors.age : null}
              <input
                type="text"
                name="age"
                placeholder="Yaşınız"
                onChange={handleChange}
                value={values.age}
              />
              {errors.tc ? errors.tc : null}
              <input
                type="text"
                name="tc"
                placeholder="TC Kimlik Numaranız"
                onChange={handleChange}
                value={values.tc}
              />
            </div>
            <div className="form-right">
              {errors.problem ? errors.problem : null}
              <input
                type="text"
                name="problem"
                placeholder="Başvuru Nedeni"
                onChange={handleChange}
                value={values.problem}
              />
              {errors.address ? errors.address : null}
              <input
                type="text"
                name="address"
                placeholder="Adres Bilgisi"
                onChange={handleChange}
                value={values.address}
              />
              <input type="hidden" name="status" value={values.status} />
              <input type="hidden" name="code" value={values.code} />
              <div className="form-buton">
                <button className="form-buttons">Dosya/Fotoğraf Ekle</button>
                <div className="form-buton-2">
                  <button className="form-buttons-2" type="submit">
                    Süreç Başlat
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      )}
    </Formik>
  );
};

export default Form;
