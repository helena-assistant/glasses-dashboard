interface MessageIntent {
  intent: string;
  confidence: number;
}

export interface Message {
  intents: MessageIntent[];
  main_intent_confidence: number;
  updatedAt: Date;
  session_id: string;
  main_intent: string;
  response_type: string;
  createdAt: Date;
  user_message: string;
  suggestions: Record<string, unknown>[];
  entities: Record<string, unknown>[];
  was_answered: boolean;
}
