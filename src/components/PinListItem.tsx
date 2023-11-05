import React from "react";
import { IonItem, IonLabel, IonButton } from "@ionic/react";
import "./PinListItem.css";
import { useStoredState } from "../hooks";

interface PinListItemProps {
  pin: {
    id: number;
    title: string;
    text: string;
    source: string;
    tags: string[];
    date: string;
  };
}

const PinListItem: React.FC<PinListItemProps> = ({ pin }) => {
  const [isPinned, setIsPinned] = useStoredState(`isPinned-${pin.id}`, false);

  const handlePinToggle = () => {
    setIsPinned(!isPinned);
  };

  return (
    <IonItem className="pin-list-item">
      <IonLabel>
        <h2>{pin.title}</h2>
        <p>{pin.text}</p>
        <p className="source">Source: {pin.source}</p>
      </IonLabel>
      <IonButton fill="clear" onClick={handlePinToggle}>
        {isPinned ? "Unpin" : "Pin"}
      </IonButton>
    </IonItem>
  );
};

export default PinListItem;
