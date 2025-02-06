import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";
import { useMutation } from "@tanstack/react-query";
import { deletePlace } from "../../api";
import { toast } from "react-toastify";

const Buttons = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { isPending, mutate } = useMutation({
    mutationKey: ["deletePlace"],
    mutationFn: () => deletePlace(id as string),

    onSuccess: () => {
      toast.info("Hotel akıştan kaldırıldı");
      navigate("/");
    },
  });

  
  return (
    <div className="flex justify-between mb-5">
      <Link to={".."} className="btn">
        <MdKeyboardArrowLeft />
        Geri
      </Link>

      <button disabled={isPending} onClick={() => mutate()} className="btn">
        <FaRegTrashAlt />
        Sil
      </button>
    </div>
  );
};

export default Buttons;
