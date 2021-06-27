import React from "react";
import { Intent, Message } from "src/model";
import "./styles.css";

interface DashboardContainerProps {
  intents: Intent[];
  messages: Message[];
  onSelect: (event: any) => void;
}

interface SelectIntentsProps {
  items: Intent[];
  onSelect: (event: any) => void;
}

interface ListMessagesProps {
  messages: Message[];
}

const SelectIntent: React.FC<SelectIntentsProps> = ({ items, onSelect }) => (
  <select onChange={onSelect} className="select-intents">
    {items.map((item) => (
      <option value={item.intent}>{item.name}</option>
    ))}
  </select>
);

const ListMessages: React.FC<ListMessagesProps> = ({ messages }) => {
  return messages ? (
    <div className="messages-container">
      {messages.map((message) => (
        <div className="message-card">
          <div className="message-item">
            <label>mensagem</label>
            <span>{message.user_message}</span>
          </div>
          <div className="message-item">
            <label>confiança</label>
            <span>{message.main_intent_confidence}</span>
          </div>
          <div className="message-item">
            <label>respondido</label>
            <span>{message.was_answered ? "Sim" : "Não"}</span>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div>Chose a intent</div>
  );
};

const DashboardContainer: React.FC<DashboardContainerProps> = ({
  intents,
  messages,
  onSelect,
}) => {
  return (
    <div className="dashboard-container">
      <h2>Intenções</h2>
      <SelectIntent items={intents} onSelect={onSelect} />
      <ListMessages messages={messages} />
    </div>
  );
};

export default DashboardContainer;
