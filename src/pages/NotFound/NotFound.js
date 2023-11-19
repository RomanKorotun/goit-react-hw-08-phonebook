import { LayoutSection } from 'components/Layout/Layout.styled';
import { LinkStyled, SpanStyled } from './NotFound.styled';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const [count, setCount] = useState(10);
  let timerIdRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    if (count === 0) {
      navigate('/');
      return;
    }
    timerIdRef.current = setTimeout(() => {
      setCount(prevState => prevState - 1);
    }, 1000);
    return () => {
      clearTimeout(timerIdRef);
    };
  }, [count]);
  return (
    <LayoutSection>
      <div>
        This route was not found.You will be redirected to the homepage
        after&nbsp;
        <SpanStyled>{count} seconds</SpanStyled>. If you want to go to the
        homepage earlier - please click on the&nbsp;
        <LinkStyled to="/">link!</LinkStyled>
      </div>
    </LayoutSection>
  );
};
export default NotFound;
