import avatar from "../assets/avatar.svg";
import Tweet from "../components/Tweet";
import TweetForm from "../components/TweetForm";

const Home = () => {
  return (
    <>
      <TweetForm />
      <Tweet
        name="Elon Musk"
        username="elonmusk"
        avatar={avatar}
        tweetBody="Let's make Twitter maximum fun!"
        verified="/src/assets/verified.svg"
      />
      <Tweet
        name="Mauricio"
        username="maucards"
        avatar={avatar}
        tweetBody="O @elonmusk compra o meu tt po, bem melhor"
      />
    </>
  );
};

export default Home;
