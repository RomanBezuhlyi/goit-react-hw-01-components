import PropTypes from 'prop-types';
import { Card, Description, Avatar, Name, Tag, Location, Stats, StatsList, Label, Quantity } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, followers, views, likes }) => {
    return <Card>
  <Description>
    <Avatar
      src={avatar}
      alt="User avatar"
    />
      <Name>{username}</Name>
      <Tag>@{tag}</Tag>
      <Location>{location}</Location>
  </Description>

  <Stats>
    <StatsList>
      <Label>Followers</Label>
      <Quantity>{followers}</Quantity>
    </StatsList>
    <StatsList>
      <Label>Views</Label>
      <Quantity>{views}</Quantity>
    </StatsList>
    <StatsList>
      <Label>StatsListkes</Label>
      <Quantity>{likes}</Quantity>
    </StatsList>
  </Stats>
</Card>
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: {
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }
}