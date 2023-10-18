import React from "react";
import { IonItem, IonLabel } from "@ionic/react";
import "./PinListItem.css";

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

const PinListItem: React.FC<PinListItemProps> = ({ pin }) => (
  <IonItem className="pin-list-item">
    <IonLabel>
      <h2>{pin.title}</h2>
      <p>{pin.text}</p>
      <p className="source">Source: {pin.source}</p>
    </IonLabel>
  </IonItem>
);

export default PinListItem;
