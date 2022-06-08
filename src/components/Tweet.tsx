import { HeartIcon } from "@heroicons/react/outline";

interface TweetProps {
  name: string;
  username: string;
  avatar: string;
  verified?: string;
  tweetBody: string;
}
const Tweet = (Props: TweetProps) => {
  return (
    <div className="flex space-x-3 p-4 border-b border-silver-500">
      <div>
        <img src={Props.avatar} />
      </div>
      <div className="space-y-1">
        <span className="font-bold text-sm">{Props.name}</span>{" "}
        <span className="text-sm text-silver-500">@{Props.username}</span>
        <p>{Props.tweetBody}</p>
        <div className="flex space-x-1 text-silver-500 items-center">
          <HeartIcon className="w-6 stroke-1" />
          <span>2.4k</span>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
