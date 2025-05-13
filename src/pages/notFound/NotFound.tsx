import React from "react";
import { Link } from "react-router-dom";

export const NotFound: React.FC = () => {
  return (
    <div className="container">
      <div className="flex justify-center flex-col items-center h-[720px] gap-4">
        <h1 className="text-3xl font-bold">Страница не найдена</h1>
        <p className="text-center max-w-2xl text-lg">
          Извините, страница, которую вы запрашиваете, не найдена. Возможно, она
          была удалена, находится в стадии разработки или перемещена.
          Пожалуйста, проверьте правильность URL или вернитесь на главную
          страницу. Если у вас есть вопросы, свяжитесь с нашей службой
          поддержки.
        </p>
        <Link to="/watches" className="button">
          Посмотреть часы
        </Link>
      </div>
    </div>
  );
};
