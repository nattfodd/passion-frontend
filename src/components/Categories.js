import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getCategories } from './CategoriesHeadless';
import { Courses } from './Courses'
import { Toggler } from './Toggler'
import { useAuth } from "../context/auth";

const RootList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const CategoryContainer = styled.li`
  margin-bottom: 1px;

  &:first-child {
    margin-top: 1px;
  }
`

const CategoryHeader = styled.div`
  background-color: rgba(57, 113, 193, 0.3);
  font-size: 16px;
  font-weight: bold;
  color: #3971c1;
`

function CategoryItem(props) {
  const [ expanded, setExpanded ] = useState(false);

  const onCollapse = () => {
    setExpanded(false)
  };

  const onExpand = () => {
    setExpanded(true)
  };

  return (
    <CategoryContainer>
      <CategoryHeader>
        <Toggler
          title={props.category.name}
          expanded={expanded}
          onCollapse={onCollapse}
          onExpand={onExpand}
        />
      </CategoryHeader>
      { (!!expanded) && (
        <Courses categoryId={props.category.id} />
      ) }
    </CategoryContainer>
  );
}

export function Categories(props) {
  const [categories, setCategories] = useState([])
  const { authToken } = useAuth();

  const fetchCategories = async () => {
    const categories = await getCategories(authToken, props.verticalId)
    setCategories(categories)
  }

  useEffect(() => {
    // console.log("categories.length: ", categories.length)
    if (categories.length === 0) {
      fetchCategories()
    }
  })

  const list = categories.map((category) => {
    return <CategoryItem category={category} key={category.id} />
  })

  return (
    <RootList>
      { list }
    </RootList>
  );
}
