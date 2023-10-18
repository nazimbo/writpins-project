// src/components/PinListItem.tsx

import React from "react";
import { IonItem, IonLabel } from "@ionic/react";

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
  <IonItem>
    <IonLabel>
      <h2>{pin.title}</h2>
      <p>{pin.text}</p>
      <p>Source: {pin.source}</p>
    </IonLabel>
  </IonItem>
);

export default PinListItem;
