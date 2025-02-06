import React from "react";

const Rating = ({ point, expand }: { point: number; expand?: boolean }) => {
  const color =
    point >= 4 ? "bg-green-500" : point >= 3 ? "bg-yellow500" : "bg-red-500";

  const text =
    point >= 4.7
      ? "Çok İyi"
      : point >= 4
      ? "İyi"
      : point >= 3
      ? "Orta"
      : point >= 2
      ? "Kötü"
      : "Çok Kötü";

  return (
    <div>
      <span className={`${color} p-2 rounded-lg text-white font-bold w-fit`}>
        {point}
      </span>

      {expand && <span className="font-semibold text-lg ms-2">{text}</span>}
    </div>
  );
};

export default Rating;
