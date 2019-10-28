import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

const Button = styled.div`
  padding: 13px 30px 12px 30px;
  cursor: pointer;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Icon = styled.div``
const Title = styled.div``

export class Toggler extends React.Component {
  render() {
    const icon = this.props.expanded ? faChevronUp : faChevronDown;

    const fireEvent = () => {
      if (this.props.expanded) {
        this.props.onCollapse();
      } else {
        this.props.onExpand();
      }
    }

    return (
      <Button onClick={fireEvent}>
        <Title>{ this.props.title }</Title>
        <Icon><FontAwesomeIcon icon={icon} /></Icon>
      </Button>
    );
  }
}
