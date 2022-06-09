import React from 'react';
import {
    Link,
} from 'react-router-dom';
import styled from "styled-components";

const ICimg = styled.img`
  height: .75rem;
  margin: 0 .5rem 0 0;

  &.right-ico {
    margin: 0 0 0 .5rem;
  }
`;

const LoginLink = () => {
    return (
        <Link to="/" onClick={() => console.log('Action')} className="btn btn-primary">
            <ICimg src="assets/ic-badge.svg" alt="Internet Computer"/>
            Action
        </Link>
    );
};

export default LoginLink;
