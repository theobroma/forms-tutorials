// https://stackoverflow.com/questions/71233273/the-object-passed-as-the-value-prop-to-the-context-provider-changes-every-render
// https://reacttraining.com/blog/react-context-with-typescript/
import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

// @ts-ignore
const DataContext = createContext();

export const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState({});

  // const setValues = (values: any) => {
  //   setData((prevData) => ({
  //     ...prevData,
  //     ...values,
  //   }));
  // };

  const setValues = useCallback(
    (values: any) => {
      setData((prevData) => ({
        ...prevData,
        ...values,
      }));
    },
    [setData],
  );

  const providerValue = useMemo(() => ({ data, setValues }), [data, setValues]);

  return (
    <DataContext.Provider value={providerValue}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
