import React from "react"
import styled from "styled-components"

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
    </Container>
  )
}

export default SkillCard

const Container = styled.div`
  background: #424657;
  border-radius: 10px;
`

const Title = styled.h2``

const Description = styled.p``
