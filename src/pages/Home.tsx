import React from "react";
import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
} from "@ionic/react";
import "./Home.css";
import PinListItem from "../components/PinListItem";
import pins from "../data/pins";
import { useStoredState } from "../hooks";

const Home: React.FC = () => {
  const [newPin, setNewPin] = useStoredState("newPin", {
    title: "",
    text: "",
    source: "",
    tags: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewPin({ ...newPin, [name]: value });
  };

  const handleCreatePin = () => {
    const id = pins.length + 1;
    const date = new Date().toISOString().slice(0, 10);
    const newPinData = { id, date, ...newPin };
    pins.push(newPinData);
    setNewPin({ title: "", text: "", source: "", tags: "" });
  };

  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Mes épingles</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {pins.map((pin) => (
            <PinListItem key={pin.id} pin={pin} />
          ))}
        </IonList>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Créer une nouvelle épingle</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonItem>
              <IonLabel position="floating">Titre</IonLabel>
              <IonInput
                name="title"
                value={newPin.title}
                onIonChange={handleInputChange}
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Texte</IonLabel>
              <IonInput
                name="text"
                value={newPin.text}
                onIonChange={handleInputChange}
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Source</IonLabel>
              <IonInput
                name="source"
                value={newPin.source}
                onIonChange={handleInputChange}
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Tags</IonLabel>
              <IonInput
                name="tags"
                value={newPin.tags}
                onIonChange={handleInputChange}
              ></IonInput>
            </IonItem>
            <IonButton expand="full" onClick={handleCreatePin}>
              Créer l'épingle
            </IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;
