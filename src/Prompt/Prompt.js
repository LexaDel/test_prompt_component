import { unstable_usePrompt as usePrompt } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export default function Prompt({ when, message }) {
  usePrompt({ when, message });
  return null;
}
