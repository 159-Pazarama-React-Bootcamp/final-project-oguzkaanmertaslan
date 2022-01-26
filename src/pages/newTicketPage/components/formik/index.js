import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from "react-redux";
import { createTicket } from "../../../../services";
import { saveUserTicket } from "../../../../redux/features/userTicketSlice";
import "./style.css";

const Form = () => {
  const [baseImage, setBaseImage] = useState("");
  const [ticketNumber] = useState(
    `TCKT-${Math.floor(Math.random() * 90000) + 10000}`
  );
  const history = useHistory();
  const dispatch = useDispatch();
    console.log("Başvuru Sayfası",baseImage);

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

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBaseImage(base64);
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    <Formik
      initialValues={{
        name: "",
        surname: "",
        age: "",
        tc: "",
        problem: "",
        address: "",
        file:baseImage,
        status: "Bekliyor",
        code: ticketNumber,
        description: "",
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
              <input
                type="file"
                onChange={(e) => {
                  uploadImage(e);
                }}
              />
              <input type="hidden" name="file" value={values.file}/>
              <input type="hidden" name="status" value={values.status} />
              <input type="hidden" name="code" value={values.code} />
              <input
                type="hidden"
                name="description"
                value={values.description}
              />
                <div className="form-buton-2">
                  <button className="form-buttons-2" type="submit">
                    Süreç Başlat
                  </button>
                </div>
            </div>
          </form>
        </div>
      )}
    </Formik>
  );
};

export default Form;
