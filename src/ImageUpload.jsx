import axios from 'axios'
import { Field, Form, Formik } from 'formik'
import React, { useState } from 'react'

const ImageUpload = () => {
    const [preview, setPreview] = useState(null); // To show image preview
    const initialValues = {
        name: '',
        image: null
    }
    const handleSubmit = (values, { resetForm }) => {
        let formData = new FormData();
        formData.append("name", values.name);
        formData.append("image", values.image);

        axios.post('https://generateapi.techsnack.online/api/user', formData, {
            headers: {
                Authorization: 'IpcMaiQUcVTvsato',
                'Content-Type': 'multipart/form-data',
            }
        })
            .then(() => {
                console.log("Success");
                resetForm();         // Clear the form
                setPreview(null);    // Clear preview
            })
            .catch((error) => {
                console.log(error);
            });
    }
    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
            >
                {
                    ({ setFieldValue }) => (
                        <Form encType='multipart/form-data'>
                            <label>Name:</label><br />
                            <Field name="name" /><br /><br />
                            <input
                                type="file"
                                name="image"
                                accept="image/*"
                                onChange={(e) => {
                                    const file = e.target.files[0];
                                    setFieldValue("image", file);
                                    if (file) {
                                        setPreview(URL.createObjectURL(file));
                                    } else {
                                        setPreview(null);
                                    }
                                }}
                            /><br /><br />
                            {preview && (
                                <div>
                                    <img src={preview} alt="Preview" width="200" />
                                    <br /><br />
                                </div>
                            )}

                            <button type="submit">Submit</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}

export default ImageUpload;
