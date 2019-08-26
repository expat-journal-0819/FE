import React from 'react';
import EntriesData from './EntriesData';
import {
  CardColumn,
  Card,
  CardContainer,
  CardTopRight,
  CardTopLeft,
  CardBottomLeft,
  CardBottomRight,
  TopOfCard,
  BottomOfCard
} from './Styled';

const Entries = () => (
  <>
    <EntriesData />
    <CardContainer>
      <CardColumn>
        <Card>
          <TopOfCard>
            <CardTopLeft>tleft</CardTopLeft>
            <CardTopRight>Top right</CardTopRight>
          </TopOfCard>
          <BottomOfCard>
            <CardBottomLeft>B Left</CardBottomLeft>
            <CardBottomRight>B Right</CardBottomRight>
          </BottomOfCard>
        </Card>
        <Card>
          {' '}
          <TopOfCard>
            <CardTopLeft>tleft</CardTopLeft>
            <CardTopRight>Top right</CardTopRight>
          </TopOfCard>
          <BottomOfCard>
            <CardBottomLeft>B Left</CardBottomLeft>
            <CardBottomRight>B Right</CardBottomRight>
          </BottomOfCard>{' '}
        </Card>
      </CardColumn>
      <CardColumn>
        <Card>
          {' '}
          <TopOfCard>
            <CardTopLeft>tleft</CardTopLeft>
            <CardTopRight>Top right</CardTopRight>
          </TopOfCard>
          <BottomOfCard>
            <CardBottomLeft>B Left</CardBottomLeft>
            <CardBottomRight>B Right</CardBottomRight>
          </BottomOfCard>{' '}
        </Card>
        <Card>
          {' '}
          <TopOfCard>
            <CardTopLeft>tleft</CardTopLeft>
            <CardTopRight>Top right</CardTopRight>
          </TopOfCard>
          <BottomOfCard>
            <CardBottomLeft>B Left</CardBottomLeft>
            <CardBottomRight>B Right</CardBottomRight>
          </BottomOfCard>{' '}
        </Card>
      </CardColumn>
      <CardColumn>
        <Card>
          {' '}
          <TopOfCard>
            <CardTopLeft>tleft</CardTopLeft>
            <CardTopRight>Top right</CardTopRight>
          </TopOfCard>
          <BottomOfCard>
            <CardBottomLeft>B Left</CardBottomLeft>
            <CardBottomRight>B Right</CardBottomRight>
          </BottomOfCard>{' '}
        </Card>
        <Card>
          {' '}
          <TopOfCard>
            <CardTopLeft>tleft</CardTopLeft>
            <CardTopRight>Top right</CardTopRight>
          </TopOfCard>
          <BottomOfCard>
            <CardBottomLeft>B Left</CardBottomLeft>
            <CardBottomRight>B Right</CardBottomRight>
          </BottomOfCard>{' '}
        </Card>
      </CardColumn>
      <CardColumn>
        <Card>
          {' '}
          <TopOfCard>
            <CardTopLeft>tleft</CardTopLeft>
            <CardTopRight>Top right</CardTopRight>
          </TopOfCard>
          <BottomOfCard>
            <CardBottomLeft>B Left</CardBottomLeft>
            <CardBottomRight>B Right</CardBottomRight>
          </BottomOfCard>{' '}
        </Card>
        <Card>
          {' '}
          <TopOfCard>
            <CardTopLeft>tleft</CardTopLeft>
            <CardTopRight>Top right</CardTopRight>
          </TopOfCard>
          <BottomOfCard>
            <CardBottomLeft>B Left</CardBottomLeft>
            <CardBottomRight>B Right</CardBottomRight>
          </BottomOfCard>{' '}
        </Card>
      </CardColumn>
    </CardContainer>
  </>
);

export default Entries;
