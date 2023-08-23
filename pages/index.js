/* eslint-disable import/no-extraneous-dependencies */
import { FaPlusCircle } from 'react-icons/fa';
import Link from 'next/link';
import CharacterCard from '../components/CharacterCard';
import { useAuth } from '../utils/context/authContext';

function Home() {
  const { user } = useAuth();

  return (
    <div>
      <h1>Hello {user.displayName}! </h1>
      <CharacterCard />
      <Link passHref href="/">
        <FaPlusCircle />
      </Link>
    </div>
  );
}

export default Home;
