import { Link } from "react-router-dom";
const Setting = () => {
  return (
    <>
      <h1>설정</h1>
      <p>리액트 라우터를 사용해 보는 설정 페이지 입니다.</p>
      <Link to="/">Home으로 이동</Link>
    </>
  );
};

export default Setting;
