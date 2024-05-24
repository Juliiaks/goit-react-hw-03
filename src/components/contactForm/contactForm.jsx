import { Formik, Form, Field } from "formik";

export default function ContactForm() {
    return (
        <Formik initialValues={{}} onSubmit={() => {}}>
            <Form>
                <Field type="text" name="username"/>
                <Field type="number" name="phone"/>
                <button type="submit">Add Contact</button>
</Form>
        </Formik>
    )
}