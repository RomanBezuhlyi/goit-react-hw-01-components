import { Profile } from 'components/Profile/Profile';
import user from '../../data/user.json';

import { Statistics } from 'components/Statistics/Statistics';
import data from '../../data/data.json';

import { FriendList } from 'components/FriendList/FriendList';
import friends from '../../data/friends.json';

import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import transactions from '../../data/transactions.json';

import { Container } from './App.styled';
import { Section } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Section>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>
      <Section>
        <Statistics title="Upload stats" stats={data} />
      </Section>
      <Section>
        <FriendList friends={friends} />
      </Section>
      <Section>
        <TransactionHistory items={transactions} />
      </Section>
    </Container>
  );
};
