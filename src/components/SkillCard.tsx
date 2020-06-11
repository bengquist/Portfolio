import React from "react"
import styled from "styled-components"
import { lighterGray, yellow } from "../style/colors"

type Props = {
  title: string
  description: string
  list: string[]
  listTitle?: string
}

const SkillCard = ({
  title,
  description,
  list,
  listTitle = "Technologies",
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <ListContainer>
        <ListTitle>{listTitle}</ListTitle>
        {list.map(skill => (
          <p>{skill}</p>
        ))}
      </ListContainer>
    </Container>
  )
}

export default SkillCard

const Container = styled.div`
  background: ${lighterGray};
  color: white;
  border-radius: 10px;
  text-align: center;
  padding: 1rem;
  font-size: 0.8rem;
`

const Title = styled.h3``

const Description = styled.p``

const ListContainer = styled.div``

const ListTitle = styled.h5`
  color: ${yellow};
`
