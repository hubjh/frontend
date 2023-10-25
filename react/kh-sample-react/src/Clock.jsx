// userState()를 사용해 시간 업데이트 하기
import { useEffect, useState } from "react";

// 컴포넌트 : 화면의 동작과 화면을 그려주는 요소가 모두 포함, 반환은 구성된 화면이 반환 됨
const Clock = () => {
  // date는 실제화면에 나타나는 값, setDate는 값을 변경시켜주는 함수, 값이 변경되면 자동 렌더링
  const [date, setDate] = useState(new Date());

  // 컴포넌트가 렌더링 될 때마다 특정작업을 실행할 수 있도록하는 훅
  useEffect(() => {
    const tick = () => {
      // 화살표 함수로 만들어진 익명의 함수
      setDate(new Date());
    };

    const intervalID = setInterval(tick, 1000);

    // 컴포넌트가 언마운트 되는 시점
    return () => {
      clearInterval(intervalID);
    };
  }, []); // [] 의존성 배열이라고 함, 배열이 비어 있으면 화면이 마운트 되는 시점을 의미 App.js에서 Clock컴포넌트를 호출하는 순간을 의미

  return (
    <>
      <h1>현재 시간을 표시 합니다.</h1>
      <h2>현재 시간은 {date.toLocaleTimeString()}</h2>
    </>
  );
};
export default Clock;
