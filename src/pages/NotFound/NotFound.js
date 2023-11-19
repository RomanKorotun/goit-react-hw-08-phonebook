import { LayoutSection } from 'components/Layout.styled';
import { LinkStyled } from './NotFound.styled';

const NotFound = () => {
  return (
    <LayoutSection>
      <div>
        Route not found. Please follow the link to the&nbsp;
        <LinkStyled to="/">homepage!</LinkStyled>
      </div>
    </LayoutSection>
  );
};
export default NotFound;
