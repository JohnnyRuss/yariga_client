/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useCallback } from "react";
import { EmojiT } from "interface/components/common.types";

export default function useFeedFormText() {
  const [text, setText] = useState("");
  const [cursorPosition, setCursorPosition] = useState(0);

  const onTextChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value),
    []
  );

  const getCursorPosition = (element: HTMLTextAreaElement): number =>
    element.selectionStart !== undefined ? element.selectionStart : 0;

  const handleBlur = useCallback(
    (event: React.FocusEvent<HTMLTextAreaElement>) =>
      setCursorPosition(getCursorPosition(event.target)),
    []
  );

  const onEmojiSelection = useCallback(
    (value: EmojiT): void => {
      setText((prevText) => {
        const beforeCursor = prevText.slice(0, cursorPosition);
        const afterCursor = prevText.slice(cursorPosition);
        return beforeCursor + value.native + afterCursor;
      });
      setCursorPosition((prevPos) => prevPos + value.native.length);
    },
    [cursorPosition]
  );

  return { text, setText, onTextChange, handleBlur, onEmojiSelection };
}
