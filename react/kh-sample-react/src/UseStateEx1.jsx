import { useState } from "react";

const UseStateEx1 = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    position: "",
    company: "",
    address: "",
    email: "",
    phoneNumber: "",
  });
  const [render, setRender] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const onClick = () => {
    const combinedText = `
    이름 : ${formValues.name}
    직책 : ${formValues.position}
    회사 : ${formValues.company}
    주소 : ${formValues.address}
    메일 : ${formValues.email}
    전화 : ${formValues.phoneNumber}
    `;
    setRender(combinedText);
  };

  return (
    <>
      <ul>
        <li>
          <input
            name="name"
            placeholder="이름"
            onChange={handleInputChange}
            value={formValues.name}
          />
        </li>
        <li>
          <input
            name="position"
            placeholder="직책"
            onChange={handleInputChange}
            value={formValues.position}
          />
        </li>
        <li>
          <input
            name="company"
            placeholder="회사명"
            onChange={handleInputChange}
            value={formValues.company}
          />
        </li>
        <li>
          <input
            name="address"
            placeholder="회사주소"
            onChange={handleInputChange}
            value={formValues.address}
          />
        </li>
        <li>
          <input
            name="email"
            placeholder="이메일"
            onChange={handleInputChange}
            value={formValues.email}
          />
        </li>
        <li>
          <input
            name="phoneNumber"
            placeholder="전화번호"
            onChange={handleInputChange}
            value={formValues.phoneNumber}
          />
        </li>
      </ul>

      <button onClick={onClick}>제출</button>
      <div>
        <pre>{render}</pre>
      </div>
    </>
  );
};

export default UseStateEx1;
