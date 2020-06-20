import React, { useState } from "react";

export interface CurrentArticleIdContext {
  currentArticleId: string;
  setCurrentArticleId: React.Dispatch<React.SetStateAction<string>>;
}

export const CurrentArticleIdContext = React.createContext<
  CurrentArticleIdContext
>({} as CurrentArticleIdContext);

interface Props {
  children?: React.ReactNode;
}

export const CurrentArticleIdProvider: React.FC<Props> = ({ children }) => {
  const [currentArticleId, setCurrentArticleId] = useState<string>("");

  return (
    <CurrentArticleIdContext.Provider
      value={{ currentArticleId, setCurrentArticleId }}
    >
      {children}
    </CurrentArticleIdContext.Provider>
  );
};
