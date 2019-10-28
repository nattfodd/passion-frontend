import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getVerticals } from './VerticalsHeadless';
import { Categories } from './Categories'
import { Toggler } from './Toggler'
import { useAuth } from "../context/auth";
import { Link } from "react-router-dom";

const Title = styled.h3`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const RootList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const VerticalContainer = styled.li`
  margin-bottom: 1px;
`

const VerticalHeader = styled.div`
  background-color: #3971c1;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
`

function VerticalItem(props) {
  const [expanded, setExpanded] = useState(false)

  const onCollapse = () => {
    setExpanded(false)
  };

  const onExpand = () => {
    setExpanded(true)
  };

  return (
    <VerticalContainer>
      <VerticalHeader>
        <Toggler
          title={props.vertical.name}
          expanded={expanded}
          onCollapse={onCollapse}
          onExpand={onExpand}
        />
      </VerticalHeader>
      { (!!expanded) && (
        <Categories verticalId={props.vertical.id} />
      ) }
    </VerticalContainer>
  );
}

export function Verticals() {
  const [ verticals, setVerticals ] = useState([]);
  const { authToken } = useAuth()

  const fetchVerticals = async () => {
    const verticals = await getVerticals(authToken)
    setVerticals(verticals)
  }

  useEffect(() => {
    if (verticals.length === 0) {
      fetchVerticals()
    }
  })

  const list = verticals.map((vertical) => {
    return <VerticalItem vertical={vertical} key={vertical.id} />
  })

  return (
    <RootList>
      <Title>
        <span>Verticals, Categories, Courses</span>
        <Link to="/logout">Sign Out</Link>
      </Title>

      { list }
    </RootList>
  )
};
