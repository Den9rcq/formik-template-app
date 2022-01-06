import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import MyTextInput from "./MyTextInput";
import MyCheckbox from "./MyCheckbox";
import MySelect from "./MySelect";

const donationFormSchema = Yup.object({
    name: Yup.string()
        .required('Обязательное поле для заполнения')
        .min(2, 'Не менее двух символов'),
    email: Yup.string()
        .required('Обязательное поле для заполнения')
        .email('Неправильно введён email'),
    amount: Yup.number()
        .required('Обязательное поле для заполнения')
        .min(5, 'Минимум 5'),
    currency: Yup.string()
        .required('Обязательное выберите валюту'),
    text: Yup.string()
        .min(10, 'Не менее 10 символов'),
    terms: Yup.boolean()
        .required('Нужно ваще подтверждение на соглашение')
        .oneOf([true], 'Нужно ваше подтверждение на соглашение')
})

const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
        console.log(JSON.stringify(values, null, 2))
        setSubmitting(false)
    }, 400)
}

const fields = {
    name: '',
    email: '',
    amount: 0,
    currency: '',
    text: '',
    terms: false
}

const DonationForm = () => {
    return (
        <Formik
            initialValues={fields}
            validationSchema={donationFormSchema}
            onSubmit={handleSubmit}
        >
            {({ isValid, dirty, isSubmitting }) => (
                <Form className="form">
                    <h2>Отправить пожертвование</h2>
                    <MyTextInput label="Ваше имя" id="name" name="name" type="text"/>
                    <MyTextInput label="Ваша почта" id="email" name="email" type="email"/>
                    <MyTextInput label="Количество" id="amount" name="amount" type="number"/>
                    <MySelect label="Валюта" name="currency" id="currency">
                        <option value="">Выберите валюту</option>
                        <option value="USD">USD</option>
                        <option value="UAH">UAH</option>
                        <option value="RUB">RUB</option>
                    </MySelect>
                    <MyTextInput id="text" name="text" as="textarea"/>
                    <MyCheckbox name="terms">
                        Соглашаетесь с политикой конфиденциальности?
                    </MyCheckbox>
                    <button type="submit" disabled={!(isValid && dirty) || isSubmitting}>Отправить</button>
                </Form>
            )}
        </Formik>
    )
}
export default DonationForm;