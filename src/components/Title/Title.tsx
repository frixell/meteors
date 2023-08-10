import styled from '@emotion/styled';

const PageTitle = styled('div')`
  font-size: 24px;
  color: #fff;
  margin-bottom: 24px;
`;

const Title = ({ title }: { title: string }) => {
  return (
      <PageTitle>{ title }</PageTitle>
  );
}

export default Title;
