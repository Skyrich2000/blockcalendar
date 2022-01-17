import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import queryString from 'qs';
import Styled from './Timong.styled';
import { Calendar } from './Calendar';
import Header from './Header';
import Users from './Users';
import { themes } from 'src/theme';

export const ThemeContext = React.createContext(themes.light);

const qs = queryString.parse(location.search, {
  ignoreQueryPrefix: true,
});

const Timong = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [mode, setMode] = useState<string>(qs.mode + '' ?? 'light');
  const toggleMode = () => {
    const _mode = mode === 'dark' ? 'light' : 'dark';

    setMode(`${_mode}`);
    setSearchParams(`?mode=${_mode}`);
  };

  useEffect(() => {
    if (mode === 'dark') document.body.style.background = '#131313';
    else document.body.style.background = '#ffffff';
  }, [mode]);

  return (
    <>
      <ThemeContext.Provider
        value={mode === 'dark' ? themes.dark : themes.light}
      >
        <Header toggleMode={toggleMode} />
        <Styled.Body>
          <Calendar />
        </Styled.Body>
        <Users />
      </ThemeContext.Provider>
    </>
  );
};

export default Timong;
