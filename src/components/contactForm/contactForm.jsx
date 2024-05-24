import { nanoid } from 'nanoid'
import { Formik, Form, Field } from "formik";
import { useId } from 'react';
import * as Yup from "yup";

const FeedbackSchema = Yup.object().shape({
    username: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    phone: Yup.string().min(3, "Too short!").max(50, "Too Long!").required("Required")
})

export default function ContactForm({onAdd}) {
    const handleSubmit = (values, actions) => {
        onAdd({
            id: nanoid(),
            name: values.username,
            number: values.phone
        });
       actions.resetForm()
    }
    const nameFieldId = useId();
   const phoneFieldId = useId();
    return (
        <Formik initialValues={{
        username: "",
        phone: ""
        }} onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}>
            <Form>
                <label htmlFor={nameFieldId}>Name</label>
                <Field type="text" name="username" id={nameFieldId} />
                <label htmlFor={phoneFieldId}>Phone</label>
                <Field type="number" name="phone" id={phoneFieldId}/>
                <button type="submit">Add Contact</button>
</Form>
        </Formik>
    )
}