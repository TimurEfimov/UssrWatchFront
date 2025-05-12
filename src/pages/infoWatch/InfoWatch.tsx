import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

interface WatchById {
  id: number;
  folder: string;
  description: string;
  start_release: number;
  end_release: number;
  gender: string;
  case_material: string;
  brand: string;
  mechanism: string;
  mechanism_type: string;
  code: number;
  width_bracelet: number;
  integrated_bracelet: boolean;
  factory: string;
  aliases: string[];
  functions: string[];
  updated: number;
}

export const InfoWatch: React.FC = () => {
  const [watch, setWatch] = React.useState<WatchById>();
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);
  const { id } = useParams<{ id: string }>();

  const mainInfo = React.useMemo(() => {
    if (!watch) return [];

    return [
      {
        title: "Завод-изготовитель",
        value: watch.factory,
      },
      {
        title: "Функции",
        value:
          watch.functions?.length > 1
            ? watch.functions.join(", ")
            : watch.functions.join(""),
      },
      {
        title: "Пол",
        value: watch.gender,
      },
      {
        title: "Материал корпуса",
        value: watch.case_material,
      },
      {
        title: "Бренд",
        value: watch.brand,
      },
      {
        title: "Механизм",
        value: watch.mechanism,
      },
      {
        title: "Тип механизма",
        value: watch.mechanism_type,
      },
      {
        title: "Ширина браслета",
        value: watch.width_bracelet
          ? `${watch.width_bracelet} мм`
          : "Нет данных",
      },
      {
        title: "Интегрированный браслет",
        value: watch.integrated_bracelet ? "Да" : "Нет",
      },
      {
        title: "Начало выпуска",
        value: watch.start_release,
      },
      {
        title: "Конец выпуска",
        value: watch.end_release,
      },
    ].filter(
      (item) =>
        item.value !== undefined && item.value !== null && item.value !== ""
    );
  }, [watch]);

  const fetchWatchById = React.useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`http://127.0.0.1:8000/api/watch/${id}`);
      setWatch(data);
    } catch (err) {
      console.error(err);
      setError("Не удалось загрузить данные о часах");
    } finally {
      setLoading(false);
    }
  }, [id]);

  React.useEffect(() => {
    fetchWatchById();
  }, [fetchWatchById]);

  if (loading) return <div className="container pt-10">Загрузка...</div>;
  if (error) return <div className="container pt-10 text-red-500">{error}</div>;
  if (!watch) return <div className="container pt-10">Часы не найдены</div>;

  return (
    <div className="mx-4">
      <div className="container pt-10">
        <div className="flex flex-col md:flex-row gap-10">
          <img
            src="/watch.jpg"
            alt="watch photo"
            className="max-w-xl rounded-2xl w-full"
          />
          <div className="flex-1">
            <div className="flex flex-wrap gap-2 py-6">
              {watch.aliases.map((alias, i) => (
                <h1
                  key={`alias-${i}`}
                  className="font-bold text-2xl first-letter:uppercase bg-gray-300 rounded-lg px-2 py-1"
                >
                  {alias}
                </h1>
              ))}
            </div>
            <div>
              <h3 className="font-bold text-2xl mb-4">О товаре</h3>

              {mainInfo.map((info, i) => (
                <React.Fragment key={`info-${i}`}>
                  <div className="flex items-center justify-between gap-30 py-2">
                    <h3 className="opacity-75 first-letter:uppercase">
                      {info.title}
                    </h3>
                    <p className="first-letter:uppercase">{info.value}</p>
                  </div>
                  {i < mainInfo.length - 1 && (
                    <hr className="border-t-[1px] border-solid border-gray-400" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 py-6">
          <h1 className="text-2xl font-bold">Описание</h1>
          <p>{watch.description || "Описание отсутствует."}</p>
        </div>
      </div>
    </div>
  );
};
