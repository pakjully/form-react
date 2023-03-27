/* eslint-disable react/jsx-no-bind */
import React from 'react';
import styled from 'styled-components';
import Input from './Input';
import Select from './Select';
import Button from './Button';

const FormContainer = styled.form`
display: grid;
grid-template-areas:
"lastName lastName"
"firstName firstName"
"midName midName"
"gender birthday"
"phone email"
"address address"
"empName empName "
"empty button";
grid-template-rows: repeat(8, 55px);
grid-template-columns: 1fr 1fr;
grid-gap: 18px;
`;

export default function Form() {
  const [formData, setFormData] = React.useState(
    {
      lastName: '',
      firstName: '',
      midName: '',
      gender: '',
      birthday: '',
      phone: '',
      email: '',
      address: '',
      empName: '',
      emptyInput: '',
      invalidEmail: '',
    },
  );
  const [errorMessage, setErrorMessage] = React.useState('');
  const [errorEmailMessage, setErrorEmailMessage] = React.useState('');
  const [errorLName, setErrorLName] = React.useState(true);
  const [errorFName, setErrorFName] = React.useState(true);
  const [errorBDay, setErrorBDay] = React.useState(true);
  const [errorPhone, setErrorPhone] = React.useState(true);
  const [errorEmail, setErrorEmail] = React.useState(true);
  const [onceSubmitted, setOnceSubmitted] = React.useState(false);

  function handleChange(e) {
    const { value, name } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  function validateForm() {
    const {
      firstName, lastName, birthday, phone, email,
    } = formData;
    let isReturnedValue = true;

    if (!firstName) {
      setErrorFName(true);
      setErrorMessage('Поле является обязательным');
      isReturnedValue = false;
    } else {
      setErrorFName(false);
    }
    if (!lastName) {
      setErrorLName(true);
      setErrorMessage('Поле является обязательным');
      isReturnedValue = false;
    } else {
      setErrorLName(false);
    }
    if (!birthday) {
      setErrorBDay(true);
      setErrorMessage('Поле является обязательным');
      isReturnedValue = false;
    } else {
      setErrorBDay(false);
    }
    if (!phone) {
      setErrorPhone(true);
      setErrorMessage('Поле является обязательным');
      isReturnedValue = false;
    } else {
      setErrorPhone(false);
    }
    if (!email) {
      setErrorEmail(true);
      setErrorEmailMessage('Поле является обязательным');
      isReturnedValue = false;
    } else {
      setErrorEmail(false);
    }
    if (email) {
      const reg = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
      if (!reg.test(email)) {
        setErrorEmail(true);
        setErrorEmailMessage('Введен некорректный адрес почты');
        isReturnedValue = false;
      } else {
        setErrorEmail(false);
      }
    }
    return isReturnedValue;
  }
  function handleSubmit(e) {
    e.preventDefault();
    setOnceSubmitted(true);
    const isFormValid = validateForm();
    if (isFormValid) {
      // eslint-disable-next-line no-alert
      alert('Форма валидна, отправляется запрос');
    }
  }
  return (
    <FormContainer onSubmit={handleSubmit} noValidate>
      <Input
        grid="lastName"
        type="text"
        placeholder="Фамилия"
        value={formData.lastName}
        name="lastName"
        onChange={handleChange}
        isErrorShown={onceSubmitted && errorLName}
        error={errorMessage}
      />
      <Input
        grid="firstName"
        type="text"
        placeholder="Имя"
        value={formData.firstName}
        name="firstName"
        onChange={handleChange}
        isErrorShown={onceSubmitted && errorFName}
        error={errorMessage}
      />
      <Input
        grid="midName"
        type="text"
        placeholder="Отчество"
        value={formData.midName}
        name="midName"
        onChange={handleChange}
      />
      <Select
        grid="gender"
        value={formData.gender}
        name="gender"
        onChange={handleChange}
      />
      <Input
        grid="birthday"
        type="text"
        onFocus={(e) => { e.target.type = 'date'; }}
        onBlur={(e) => { e.target.type = 'text'; }}
        placeholder="Дата рождения"
        value={formData.birthday}
        name="birthday"
        onChange={handleChange}
        isErrorShown={onceSubmitted && errorBDay}
        error={errorMessage}
      />
      <Input
        grid="phone"
        type="text"
        placeholder="Мобильный телефон"
        value={formData.phone}
        name="phone"
        onChange={handleChange}
        isErrorShown={onceSubmitted && errorPhone}
        error={errorMessage}
      />
      <Input
        grid="email"
        type="email"
        placeholder="Email"
        value={formData.email}
        name="email"
        onChange={handleChange}
        isErrorShown={onceSubmitted && errorEmail}
        error={errorEmailMessage}
      />
      <Input
        grid="address"
        type="text"
        placeholder="Адрес постоянной регистрации"
        value={formData.address}
        name="address"
        onChange={handleChange}
      />
      <Input
        grid="empName"
        type="text"
        placeholder="Название работодателя"
        value={formData.empName}
        name="empName"
        onChange={handleChange}
      />
      <Button
        grid="button"
      />
    </FormContainer>
  );
}
