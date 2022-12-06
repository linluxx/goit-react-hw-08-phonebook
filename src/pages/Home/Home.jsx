import { FiArrowRightCircle } from 'react-icons/fi';
import { GiSpellBook } from 'react-icons/gi';
import { Wrap, Title, Text, LinkTo, Svg } from './Home.styled';

const Home = () => {
  return (
    <Wrap>
      <Title>
        Welcome to your Phone Book!
        <Svg role="img" aria-label="Greeting icon">
          <GiSpellBook size={50} />
        </Svg>
      </Title>
      <Text>
        Create your own contacts list, which will be available only to you
      </Text>
      <LinkTo to="/contacts">
        Try it now
        <Svg>
          <FiArrowRightCircle size={23} />
        </Svg>
      </LinkTo>
    </Wrap>
  );
};
export default Home;
