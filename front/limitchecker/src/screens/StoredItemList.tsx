import { FC, useCallback, useEffect, useState } from "react";
import "../App.css"
import axios from "axios";

const isError = (error: unknown): error is Error => {
  return error instanceof Error;
};

interface StoredItem {
  itemName: string;
  itemType: string;
  expiredDate: string;
}

export const StoredItemList: FC = () => {

  const [item, setItem] = useState<StoredItem[]>([]);
  const [error, setError] = useState<Error | undefined>(undefined);


  if (error) {
    return <div>{error.message}</div>;
  }

  const fetchStoredItem = useCallback(async () => {
    try {
      axios.get("http://localhost:8080/find")
        .then((res) => {
          setItem(res.data);
        });
    } catch (e) {
      if (isError(e)) {
        setError(e);
      }
    }
  }, []);


  useEffect(() => {
    fetchStoredItem();
  }, [fetchStoredItem]);

  return (
    <div className='card'>
      <h1>Hello</h1>
      <div>
        {item.map((storedItem) => (
          <li key={storedItem.itemName}>{storedItem.itemName}</li>
        ))}
      </div>
      <button onClick={fetchStoredItem}>
        検索
      </button>
    </div>
  );
};