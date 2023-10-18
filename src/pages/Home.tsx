// import MessageListItem from '../components/MessageListItem';
// import { useState } from 'react';
// import { Message, getMessages } from '../data/messages';
// import {
//   IonContent,
//   IonHeader,
//   IonList,
//   IonPage,
//   IonRefresher,
//   IonRefresherContent,
//   IonTitle,
//   IonToolbar,
//   useIonViewWillEnter
// } from '@ionic/react';
// import './Home.css';

// const Home: React.FC = () => {

//   const [messages, setMessages] = useState<Message[]>([]);

//   useIonViewWillEnter(() => {
//     const msgs = getMessages();
//     setMessages(msgs);
//   });

//   const refresh = (e: CustomEvent) => {
//     setTimeout(() => {
//       e.detail.complete();
//     }, 3000);
//   };

//   return (
//     <IonPage id="home-page">
//       <IonHeader>
//         <IonToolbar>
//           <IonTitle>Inbox</IonTitle>
//         </IonToolbar>
//       </IonHeader>
//       <IonContent fullscreen>
//         <IonRefresher slot="fixed" onIonRefresh={refresh}>
//           <IonRefresherContent></IonRefresherContent>
//         </IonRefresher>

//         <IonHeader collapse="condense">
//           <IonToolbar>
//             <IonTitle size="large">
//               Inbox
//             </IonTitle>
//           </IonToolbar>
//         </IonHeader>

//         <IonList>
//           {messages.map(m => <MessageListItem key={m.id} message={m} />)}
//         </IonList>
//       </IonContent>
//     </IonPage>
//   );
// };

// export default Home;

// ---------------------------------------
// import PinListItem from "../components/PinListItem"; // Importez PinListItem
// import {
//   IonContent,
//   IonHeader,
//   IonList,
//   IonPage,
//   IonTitle,
//   IonToolbar,
// } from "@ionic/react";
// import "./Home.css";
// import pins from "../data/pins"; // Importez les épingles depuis le fichier pins.ts

// const Home: React.FC = () => {
//   return (
//     <IonPage id="home-page">
//       <IonHeader>
//         <IonToolbar>
//           <IonTitle>My Pins</IonTitle>
//         </IonToolbar>
//       </IonHeader>
//       <IonContent fullscreen>
//         <IonList>
//           {pins.map((pin) => (
//             <PinListItem key={pin.id} pin={pin} />
//           ))}{" "}
//           {/* Utilisez PinListItem pour afficher les épingles */}
//         </IonList>
//       </IonContent>
//     </IonPage>
//   );
// };

// export default Home;

// ---------------------------------------
import React, { useState } from "react";
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
import PinListItem from "../components/PinListItem"; // Import de PinListItem
import pins from "../data/pins"; // Import des épingles depuis le fichier pins.ts

const Home: React.FC = () => {
  const [newPin, setNewPin] = useState({
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
    // Créez une nouvelle épingle avec l'état du formulaire et ajoutez-la à la liste
    const id = pins.length + 1;
    const date = new Date().toISOString().slice(0, 10);
    const newPinData = { id, date, ...newPin };

    pins.push(newPinData); // Ajoutez la nouvelle épingle aux épingles existantes

    // Réinitialisez le formulaire
    setNewPin({ title: "", text: "", source: "", tags: "" });
  };

  return (
    <IonPage id="home-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Pins</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {pins.map((pin) => (
            <PinListItem key={pin.id} pin={pin} />
          ))}
        </IonList>

        {/* Formulaire pour créer une nouvelle épingle */}
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Create a New Pin</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonItem>
              <IonLabel position="floating">Title</IonLabel>
              <IonInput
                name="title"
                value={newPin.title}
                onIonChange={handleInputChange}
              ></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Text</IonLabel>
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
              Create Pin
            </IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;
