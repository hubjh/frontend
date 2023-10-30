import { Link, useNavigate } from "react-router-dom";
const Home = () => {
  // Link to를 사용하지 않고 다른 페이지로 이동해야할 상황에서 사용하는 Hook
  const navigate = useNavigate();
  return (
    <>
      <h1>여기가 홈 입니다.</h1>
      <p>가장 먼저 보여지는 페이지 입니다.</p>
      <ul>
        <li>
          <Link to="/about">소개 페이지로 이동</Link>
          <br />
          <button onClick={() => navigate("/mypage")}>마이페이지 이동</button>
        </li>
        <li>
          <Link to="/setting">설정 페이지로 이동</Link>
        </li>
        <li>
          <Link to="/mypage">마이 페이지로 이동</Link>
        </li>
        <ul>
          <li>
            <Link to="/profiles/frontend">frontend 프로필</Link>
          </li>
          <li>
            <Link to="/profiles/backend">backend 프로필</Link>
          </li>
          <li>
            <Link to="/profiles/database">database 프로필</Link>
          </li>
          <li>
            <Link to="/articles">게시판 목록</Link>
          </li>
        </ul>
      </ul>
    </>
  );
};
export default Home;
