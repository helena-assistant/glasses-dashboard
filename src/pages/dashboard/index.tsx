import React, { useEffect, useState } from "react";
import { getAvailableIntents } from "src/services/intents";
import { listMessagesByIntent } from "src/services/messages";
import { Intent, Message } from "src/model";
import DashboardContainer from "src/containers/dashboard";

const Dashboard: React.FC = () => {
  const [intents, setIntents] = useState<Intent[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);

  const fetchIntents = async (): Promise<void> => {
    const availableIntents = await getAvailableIntents();
    setIntents(availableIntents);
  };

  const handleOnSelect = async (event: any): Promise<void> => {
    const selectedIntent = event.target.value;
    const messagesByIntent = await listMessagesByIntent(selectedIntent);
    setMessages(messagesByIntent);
  };

  useEffect(() => {
    fetchIntents();
  }, []);

  return (
    <DashboardContainer
      intents={intents}
      messages={messages}
      onSelect={handleOnSelect}
    />
  );
};

export default Dashboard;
