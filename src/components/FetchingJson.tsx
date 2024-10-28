import { useEffect, useState } from "react";
import axios from "axios";

interface User {
  id: number;
  name: string;
}
const FetchingJson = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      //   .then((res) => console.log(res.data))
      .then((res) => setUsers(res.data));
  }, []);
  return (
    <div>
      <h4>------FetchingJson-----</h4>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FetchingJson;
