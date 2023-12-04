import data, { EmojiMartData, Emoji } from "@emoji-mart/data";

const regex: RegExp =
  /(:D|:\)|=\)|=-\)|C:|c:|:-D|:>|:->|\(:|:-\)|;\)|;-\)|:\*|:-\*|:p|:-p|:P|:-P|:b|:-b|;p|;-p|;b|;-b;P|;-P|:\||:-\||-_-|:\(|8\)|:\\|:-\\|:\/|:-\/|:o|:-o|:O|:-O|D:|:'\(|\):|:-(\||>:\(|>:-\(|<\/3|<3|:o))(?=\s|$)/g;

const emojis: Array<Emoji> =
  Object.values((data as EmojiMartData).emojis!).filter(
    (value) => Array.isArray(value.emoticons) && value.emoticons.length > 0
  ) || [];

const emoticons: Array<string> = emojis.flatMap(
  (emoji) => emoji.emoticons
) as Array<string>;

const emoticonsMap: { [key: string]: string } = {};

emoticons.forEach((emoticon: string) => {
  emoticonsMap[emoticon] =
    emojis.find((e: Emoji) => e.emoticons?.includes(emoticon))?.skins[0]
      .native || "";
});

export default function matchEmoticons(text: string) {
  return text.replace(regex, (match) => emoticonsMap[match]);
}
