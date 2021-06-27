import React from "react";
import { Intent, Message } from "src/model";
import { DoughnutChart } from "src/components/charts";
import "./styles.css";

const NOT_ANSWERED_INTENT = "nao-respondido";

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

interface DataChart {
  labels: string[];
  chartData: number[];
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

const getIntentsCounter = (intents: Intent[]): DataChart => {
  const data: DataChart = {
    labels: [],
    chartData: [],
  };

  return intents.reduce((acc, curr) => {
    acc.labels.push(curr.name);
    acc.chartData.push(curr.counter);
    return acc;
  }, data);
};

const getAnsweredRate = (intents: Intent[]): DataChart => {
  const data: DataChart = {
    labels: ["Não Respondidas", "Respondidas"],
    chartData: [],
  };

  let answeredCount = 0;

  for (const intent of intents) {
    if (intent.intent === NOT_ANSWERED_INTENT) {
      data.chartData.push(intent.counter);
      break;
    }

    answeredCount += intent.counter;
  }

  data.chartData.push(answeredCount);
  return data;
};

const DashboardContainer: React.FC<DashboardContainerProps> = ({
  intents,
  messages,
  onSelect,
}) => {
  const intentsCounterData = getIntentsCounter(intents);
  const answeredRate = getAnsweredRate(intents);
  return (
    <div className="dashboard-container">
      <h2>Estatisticas</h2>

      <div className="charts-container">
        <div className="chart-container">
          <DoughnutChart
            label="Intents counter"
            labels={intentsCounterData.labels}
            chartData={intentsCounterData.chartData}
          />
        </div>
        <div className="chart-container">
          <DoughnutChart
            label="Answers counter"
            labels={answeredRate.labels}
            chartData={answeredRate.chartData}
          />
        </div>
      </div>

      <h2>Intenções</h2>
      <SelectIntent items={intents} onSelect={onSelect} />
      <ListMessages messages={messages} />
    </div>
  );
};

export default DashboardContainer;
