import { Profile } from 'components/Profile/Profile';
import user from '../../user.json';
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
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
        />
        </Section>
      </Container>
  );
};
