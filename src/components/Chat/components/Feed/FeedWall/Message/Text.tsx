import { nanoid } from "@reduxjs/toolkit";
import Linkify from "react-linkify";
import { matchEmoticons } from "utils";

type TextT = {
  text: string;
};

const Text: React.FC<TextT> = ({ text }) => {
  return (
    <Linkify
      componentDecorator={(href) => (
        <a
          href={href}
          rel="noreferrer"
          target="_blank"
          className="underline"
          key={nanoid()}
        >
          {href}
        </a>
      )}
    >
      {matchEmoticons(text)}
    </Linkify>
  );
};

export default Text;
