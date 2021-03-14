import React from 'react';
import StarIcon from 'components/assets/images/StarIcon';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ListItem = styled.li`
  width: 25px;
  height: 25px;
  margin: 0 2px;
`;

const UnorderList = styled.ul`
  display: flex;
`;

function StarCount({ count = 8, ...rest }) {
  return (
    <div style={{ display: 'flex', margin: '.5rem 0' }}>
      {count > 5
        ? new Array(5).fill('val').map((e, i) => {
            return (
              <UnorderList key={i}>
                <ListItem>
                  <StarIcon />
                </ListItem>
              </UnorderList>
            );
          })
        : new Array(count).fill('val').map((e, i) => {
            return (
              <UnorderList key={i}>
                <ListItem>
                  <StarIcon />
                </ListItem>
              </UnorderList>
            );
          })}
    </div>
  );
}

StarCount.propTypes = {
  count: PropTypes.number.isRequired,
};

export default StarCount;
