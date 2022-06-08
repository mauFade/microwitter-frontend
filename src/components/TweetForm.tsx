import { useState } from "react";
import avatar from "../assets/avatar.svg";

const MAX_TWEET_LENGHT = 250 as number;

const TweetForm = () => {
  const [text, setText] = useState<string>("");

  const handleText = (event: any) => {
    event.preventDefault();

    setText(event.target.value);
  };

  return (
    <div className="p-4 space-y-4 border-b border-silver-500">
      <div className="flex space-x-3 items-center">
        <img src={avatar} className="w-7" />
        <h2 className="font-bold">Página inicial</h2>
      </div>

      <form className="flex flex-col pl-12 text-lg space-y-2">
        <textarea
          name="text"
          className="bg-transparent focus:outline-none"
          placeholder="O que está acontecendo?"
          value={text}
          onChange={handleText}
        />

        <div className="flex justify-end items-center space-x-4">
          <span className="text-silver-500 text-sm">
            <span>{text.length}</span>
            <span className="text-tweetblue-500"> / {MAX_TWEET_LENGHT}</span>
          </span>
          <button
            className="bg-tweetblue-500 text-platinum-500 p-2 px-5 rounded-full disabled:opacity-50"
            disabled={text.length > MAX_TWEET_LENGHT}
          >
            Tweetar
          </button>
        </div>
      </form>
    </div>
  );
};

export default TweetForm;
