import React, { useState } from "react";
import { Field, Formik } from "formik";
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
  console.log("Başvuru Sayfası", baseImage);

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "must be at least 3 characters long")
      .required("Zorunlu Alan"),
    surname: Yup.string().required("Zorunlu Alan"),
    age: Yup.number().required("Zorunlu Alan"),
    tc: Yup.number().required("Zorunlu Alan"),
    problem: Yup.string().required("Zorunlu Alan"),
    address: Yup.string().required("Zorunlu Alan"),
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
  console.log(baseImage);

  return (
    <Formik
      initialValues={{
        name: "",
        surname: "",
        age: "",
        tc: "",
        problem: "",
        address: "",
        file: baseImage,
        status: "Bekliyor",
        code: ticketNumber,
        description: "",
      }}
      validationSchema={validationSchema}
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
      {({ handleSubmit, handleChange, values, errors, touched }) => (
        <div className="form-page">
          <div className="form-area-title">
            <img src={baseImage} />
            <h1>Başvuru Süreci Başlatın</h1>
          </div>
          <form className="form-area" onSubmit={handleSubmit}>
            <div className="form-left">
              {errors.name && touched.name ? <div>{errors.name}</div> : null}
              <Field
                type="text"
                name="name"
                placeholder="Adınız"
                onChange={handleChange}
                value={values.name}
              />
              {errors.surname && touched.surname ? (
                <div>{errors.surname}</div>
              ) : null}

              <Field
                type="text"
                name="surname"
                placeholder="Soyadınız"
                onChange={handleChange}
                value={values.surname}
              />
              {errors.age && touched.age ? <div>{errors.age}</div> : null}
              <Field
                type="text"
                name="age"
                placeholder="Yaşınız"
                onChange={handleChange}
                value={values.age}
              />
              {errors.tc && touched.tc ? <div>{errors.tc}</div> : null}
              <Field
                type="text"
                name="tc"
                placeholder="TC Kimlik Numaranız"
                onChange={handleChange}
                value={values.tc}
              />
            </div>
            <div className="form-right">
              {errors.problem && touched.problem ? (
                <div>{errors.problem}</div>
              ) : null}
              <Field
                type="text"
                name="problem"
                placeholder="Başvuru Nedeni"
                onChange={handleChange}
                value={values.problem}
              />
              {errors.address && touched.address ? (
                <div>{errors.address}</div>
              ) : null}
              <Field
                type="text"
                name="address"
                placeholder="Adres Bilgisi"
                onChange={handleChange}
                value={values.address}
              />
              <Field
                type="file"
                name="file"
                value={values.file}
                onChange={handleChange}
              />
              <input type="hidden" name="file" value={values.file} onChange={(e) => {
                  uploadImage(e);
                }} />
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
