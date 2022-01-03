import { useRecoilValue } from "recoil";
import { currentUserNameState } from "../../states/user";

export default function User() {
  const user = useRecoilValue(currentUserNameState);
  console.log(user);
  return <div></div>;
}
