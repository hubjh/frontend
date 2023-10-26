// const User = (props) => {
//   return (
//     <div>
//       <b>{props.user.userName}</b> <span>{props.user.email}</span>
//     </div>
//   );
// };

const UserList = () => {
  const users = [
    {
      id: 100,
      userName: "천지훈",
      email: "1000won@gmail.com",
    },
    {
      id: 200,
      userName: "백마리",
      email: "2000won@gmail.com",
    },
    {
      id: 300,
      userName: "서민혁",
      email: "3000won@gmail.com",
    },
  ];

  const seasons = ["새로운 봄", "활기찬 여름", "풍성한 가을", "새하얀 겨울"];

  const newSeasons =
    seasons && seasons.map((season, index) => <li key={index}>{season}</li>);

  const newUsers =
    users &&
    users.map((user) => (
      <div key={user.id}>
        <b>{user.userName}</b> <span>{user.email}</span>
      </div>
    ));
  return (
    <>
      <h1>천원짜리 변호사 직원 리스트</h1>
      {newUsers}
      <h1>계절 표시</h1>
      <ul>{newSeasons}</ul>
    </>
  );
};

export default UserList;
