import { TokenConstant } from "@/types/Token.constant";
import { PayLoadType } from "@/types/payload.type";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const useRouterGuard = (): [typeof UserPayLoad] => {
  const router = useRouter();
  const [UserPayLoad, setUserPayLoad] = useState<null | PayLoadType>(null);

  useEffect(() => {
    const token = localStorage.getItem(TokenConstant) || "";
    fetch(`${process.env.NEXT_PUBLIC_API_Backed}/users/checkLogin`, {
      headers: { authorization: token },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.statusCode === 201) {
          setUserPayLoad({
            userid: res.user.userid,
            username: res.user.username,
            identity: res.user.identity,
          });
        } else {
          toast("登录验证过期");
          router.push("/");
        }
      });
  }, [router]);

  return [UserPayLoad];
};
