import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin-top: 42px;

  display: grid;
  grid-gap: 1.6rem;
  grid-template-columns: 1fr;

  @media (min-width: 658px){
    grid-template-columns: repeat(2, 1fr);
  }
`;

const cardStatusVariants = {
  PREPARING: css`
    background: #F6A609;
    color: #fff;

    header small{
      background: #fff;
      color: #0A100D;
    }

    select{
      border-color: #fff;
    }

    p{
    color: #fff;
    }
  `,

  DONE: css`
  background: #2AC769;
  color: #fff;

  header small{
    background: #fff;
    color: #0A100D;
  }

  select{
    border-color: #fff;
  }

  p{
    color: #fff;
  }
  
  `,
}

export const Card = styled.div`
  background: #fff;
  padding: 16px;
  border-radius: 5px;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);

  header{
    display: flex;
    justify-content: space-between;

    h3{
      font-weight: 500;
      font-size: 18px;
    }

    small{
      padding: 4px 8px;
      background-color: #ccc;
      border-radius: 5px;
      color: #fff;
      font-weight: bold;
      font-size: 12px;
    }
  }

  p{
    font-size: 14px;
    font-weight: normal;
    color: black;
    margin-top: 16px;
  }

  select{
    margin-top: 8px;
    width: 100%;
    border-radius: 5px;
    border: 1px solid #ccc;
    background: #fff;
    font-size: 14px;
    height: 45px;
    padding: 0 8px;
  }

  ${({status}) => cardStatusVariants[status] || null }
`;