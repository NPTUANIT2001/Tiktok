import { useEffect, useState } from "react";
// Trong hàm useDebounce, mỗi khi value trong mảng deps thay đổi thì cleanup
// function được gọi, nên sẽ clear timeout trước đó đi (huỷ những lần trước đi).
function useDebouce(value, delay) {
  const [debouce, setDebouce] = useState(value);
  useEffect(() => {
    const hander = setTimeout(() => setDebouce(value), delay);
    return () => clearTimeout(hander);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return debouce;
}

export default useDebouce;
