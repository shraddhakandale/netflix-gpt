import OpenAI from 'openai';
import { OPEN_AI_KEY } from './constants';

const openai = new OpenAI({
  apiKey: "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", // defaults to process.env["OPENAI_API_KEY"]
  dangerouslyAllowBrowser: true,
});

export default openai;