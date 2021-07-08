import React, { useState } from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

import madnessHook from 'hooks/madness/madness.hook';

import { Effects } from './Path.interface';

const Container = styled.div`
  display: grid;
  grid-template-areas: 
    'title title title'
    'description description description'
    'button button button'
    'effect effect effect';
  padding: 0 3rem;
  grid-gap: 2rem;
  align-items: center;
  justify-items: center;
  letter-spacing: 3px;
`;

const Description = styled.h2`
  font-size: 2rem;
  grid-area: description;
  margin: 0;
`;

const ChoiceButton = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  font-family: "Shadows Into Light", sans-serif;
  letter-spacing: 3px;
  cursor: pointer;
  text-decoration: underline;
`;
const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  grid-area: button;
`;
const Effect = styled.div`
    grid-area: effect;
    text-align: center;
    letter-spacing: 4px;
`;
const EffectTitle = styled.div`
    font-size: 1.75rem;
`;

const MarkdownWrapper = styled.div`
    font-size: 1.5rem;
`;

const EffectSpan = styled.span`
    font-weight: 600;
    font-size: 2rem;
`;

const Paths = (): JSX.Element => {
  const madness = madnessHook().sort((prev, next) => prev.node.order - next.node.order);
  const [effectContent, setEffectContent] = useState(null);

  const getRandomEffect = ((effects: Effects[]) => {
    setEffectContent(effects[Math.floor(Math.random() * effects.length)]);
  });

  return (
    <Container>
      <Description>
        I&apos;ve Travelled so far, and seen such horrors, but how long will this affect me
      </Description>
      <ButtonWrapper>
        {madness.map(({ node }) => (
          <ChoiceButton
            key={node.id}
            onClick={() => getRandomEffect(node.effects)}
          >
            {node.name}
          </ChoiceButton>
        ))}
      </ButtonWrapper>
      {effectContent
      && (
      <Effect>
        <EffectTitle>
          I think I feel like I&apos;m&nbsp;
          <EffectSpan>
            {effectContent.condition}
          </EffectSpan>
        </EffectTitle>
        <MarkdownWrapper>
          <ReactMarkdown>{effectContent.message.internal.content}</ReactMarkdown>
        </MarkdownWrapper>
      </Effect>
      )}
    </Container>
  );
};

export default Paths;
