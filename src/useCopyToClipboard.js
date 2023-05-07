import { useEffect, useState } from "react";

export const useCopyToClipboard = () => {
  const [value, setValue] = useState(null);

  const copy = async (data) => {
    if (!navigator.clipboard) return;
    try {
      await navigator.clipboard.writeText(data);
      setValue(data);
      return true;
    } catch (e) {
      console.log("failed", JSON.stringify(e));
      setValue(null);
      return false;
    }
  };

  return [value, copy];
};
