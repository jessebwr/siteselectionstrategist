import {
  createContext,
  Dispatch,
  useState,
  SetStateAction,
  useContext,
  FunctionComponent,
} from 'react';
import { ThemeProvider } from '@emotion/react';
import { baseTheme } from './theme.constants';

const SetThemeContext = createContext(
  undefined as Dispatch<SetStateAction<any>> | undefined
);

const SiteSelectionThemeProvider: FunctionComponent = ({ children }) => {
  const [theme, setTheme] = useState(baseTheme);

  return (
    <ThemeProvider theme={theme}>
      <SetThemeContext.Provider value={setTheme}>
        {children}
      </SetThemeContext.Provider>
    </ThemeProvider>
  );
};

export const useSetTheme = () => {
  return useContext(SetThemeContext);
};

export default SiteSelectionThemeProvider;
