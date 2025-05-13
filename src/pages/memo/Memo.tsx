import React from "react";
import memoData from "./memoData.json";

const list = {
  title: "Общие рекомендации:",
  advices: [
    "Будьте внимательны к деталям — это залог успешной сделки.",
    "Не торопитесь — тщательно проверяйте все аспекты.",
    "Помните о важности доверия между продавцом и покупателем.",
    "Следите за актуальными тенденциями рынка часов — это поможет ориентироваться в ценах и моделях.",
  ],
};

export const Memo: React.FC = () => {
  return (
    <div className="container py-10">
      <div className="flex flex-col justify-center items-center gap-3 text-lg">
        <h1 className="font-bold text-3xl">
          Важные советы для покупателей и продавцов часов
        </h1>
        <div className="max-w-4xl">
          <p>
            Покупка и продажа часов — это не только бизнес, но и увлечение,
            требующее внимательности, знаний и ответственности. Ниже
            представлены ключевые моменты, которые помогут вам сделать
            правильный выбор и избежать возможных ошибок.
          </p>
          <ul>
            {memoData.map((item, i) => (
              <li key={`item-${i}`}>
                <h2 className="font-bold text-2xl my-3">{item.title}</h2>
                <ol>
                  {item.advices.map((advice, i) => (
                    <ul
                      className={`my-2 ${
                        advice.desc.length > 1 ? "list-decimal" : "list-disc"
                      }`}
                      key={`advice-${i}`}
                    >
                      <h3 className="text-xl font-bold">{advice.title}</h3>
                      {advice.desc.map((point, i) => (
                        <li key={`point-${i}`}>{point}</li>
                      ))}
                    </ul>
                  ))}
                </ol>
              </li>
            ))}
            <li>
              <h2 className="font-bold text-2xl my-3">{list.title}</h2>
              <ul className="list-decimal">
                {list.advices.map((advice, i) => (
                  <li key={`general-advices-${i}`}>{advice}</li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
        <h1 className="font-bold text-xl">
          Желаем удачи в покупке и продаже часов! Пусть ваши сделки будут
          выгодными и безопасными!
        </h1>
      </div>
    </div>
  );
};
