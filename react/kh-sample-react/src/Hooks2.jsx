// useEffect : 생명 주기 메소드를 대체하는 React Hook 중 하나
// 컴포넌트가 렌더링될 때마다 특정 동작을 수행
// useEffect는 컴포넌트가 렌더링된 이 후에 수행되면 기본적으로는 매 렌더링 마다 수행 됨
// 의존성배열에 전달된 상태가 변경될 때마다 수행되게 함.

import { useState, useEffect } from "react";

const MemberInfo = () => {
  const [name, setName] = useState("");
  const [nickName, setNickName] = useState("");

  // [] : 의존성배열이라고 하며, 아무 값을 넣지 않으면 mount시에만 호출 됨
  useEffect(() => {
    console.log("렌더링이 완료되었습니다.");
    console.log(name, nickName);
  }, [nickName]);
  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeNickName = (e) => {
    setNickName(e.target.value);
  };
  return (
    <>
      <input type="text" value={name} onChange={onChangeName} />
      <input type="text" value={nickName} onChange={onChangeNickName} />
      <p>이름 : {name}</p>
      <p>닉네임 : {nickName}</p>
    </>
  );
};

export default MemberInfo;
