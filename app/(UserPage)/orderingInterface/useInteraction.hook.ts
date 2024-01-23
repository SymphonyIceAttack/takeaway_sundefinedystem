import { TokenConstant } from "@/types/Token.constant";
import { useDisclosure } from "@nextui-org/react";
import { useState } from "react";
import { toast } from "react-toastify";

export const useInteraction = (): [
  typeof isInteractionModalShow,
  typeof ShowUserInteraction,
  typeof DidUserInteraction,
  typeof RequserInteraction
] => {
  const [isInteractionModalShow, setisInteractionModalShow] = useState(false);
  const [selectInteractionProductId, setSelectInteractionProductId] =
    useState("");

  const ShowUserInteraction = (ProductId: string) => {
    setSelectInteractionProductId(ProductId);
    setisInteractionModalShow(true);
  };
  const DidUserInteraction = () => {
    setSelectInteractionProductId("");
    setisInteractionModalShow(false);
  };

  const RequserInteraction = async (isLike: boolean, comment: string) => {
    const token = localStorage.getItem(TokenConstant) || "";

    await fetch(
      `${process.env.NEXT_PUBLIC_API_Backed}/user-interaction/createInteraction`,
      {
        method: "POST",
        headers: { authorization: token, "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: selectInteractionProductId,
          isLike: isLike,
          comment: comment,
        }),
      }
    );
    toast("反馈成功");
    DidUserInteraction();
  };

  return [
    isInteractionModalShow,
    ShowUserInteraction,
    DidUserInteraction,
    RequserInteraction,
  ];
};
