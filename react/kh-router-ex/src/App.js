import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Setting from "./pages/Setting";
import MyPage from "./pages/Mypage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import Layout from "./pages/Layout";

// Mypage와 Setting 페이지 추가 해보기
// Home 에서 About, MyPage, Setting 페이지 링크 보여주고 이동 하도록
// 이동된 각 페이지에서 홈을 이동하는 링크 만들고 Home 이동 되도록 만들기

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}></Route>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/profiles/:username" element={<Profile />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<Article />} />
      </Routes>
    </Router>
  );
}

export default App;
